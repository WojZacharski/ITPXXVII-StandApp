import React, { Component } from 'react';
import { Status } from '../constants/status';
import { Logger } from '../utils/logger';

export const DataContext = React.createContext(null);
export const useDataContext = () => React.useContext(DataContext);

const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
    console.error('API_URL is undefined. Please check your .env file.');
}
// Component to handle stand backend data
class DataProvider extends Component {
    state = {
        status: Status.LOADING,
        tokenData: {},
        id: null,
        reservedStands: [],
    };

    async componentDidMount() {
        this.token = this.props.match && this.props.match.params.token;
        if (!this.token) {
            this.setState({ status: Status.WRONG_TOKEN });
            return;
        }

        try {
            // Initial data fetch
            await this.fetchData();
            // Start polling
            // Timer set to 5 seconds
            this.dataPollingInterval = setInterval(this.fetchData, 5000);
        } catch (error) {
            console.error('Error connecting to MongoDB: ', error);
            this.setState({ status: Status.ERROR });
        }
    }
    // Refresh
    componentWillUnmount() {
        clearInterval(this.dataPollingInterval);
    }

    fetchData = async () => {

        try {

            Logger('Fetching token data from ' + API_URL);
            // @kerdamon
            const tokenDataResponse = await fetch(`${API_URL}/api/fetchData/${this.token}`);
            if (tokenDataResponse.ok) {
                const tokenData = await tokenDataResponse.json();
                this.setState({ tokenData });
            } else {
                this.setState({ wrongToken: true });
            }
            Logger('Fetching reserved stands data from ' + API_URL);
            // @kerdamon
            const reservedStandsResponse = await fetch(`${API_URL}/api/fetchReservedStands`);
            if (reservedStandsResponse.ok) {
                const reservedStands = await reservedStandsResponse.json();
                this.setState({ reservedStands, isLoading: false });
                this.resolveStatus();
            } else {
                console.error('Error fetching reserved stands data:', reservedStandsResponse.statusText);
            }
        } catch (error) {
            console.error('Error fetching data from ' + API_URL, error);
        }
    };

    resolveStatus = () => {
        const status = this.state.wrongToken
            ? Status.WRONG_TOKEN
            : this.state.isLoading
                ? Status.LOADING
                : Status.COMPLETE;
        this.setState({ status });
    };

    setId = (id) => {
        const { tokenData = {} } = this.state;
        const { selectedStand } = tokenData;
        if (selectedStand) return;
        this.setState(() => ({ id }));
    };

    saveChoice = async () => {
        const { id } = this.state;
        const API_URL = process.env.REACT_APP_API_URL;
        try {
            Logger('Saving stand choice to ' + API_URL);
            // @kerdamon
            const response = await fetch(`${API_URL}/api/saveData`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    token: this.token,
                    companyName: this.state.tokenData.companyName,
                }),
            });

            if (response.ok) {
                // Choice saved successfully
                console.log('Data has been saved. Reserved Stands and Tokens updated.')
            } else {
                console.error('Error posting message to ' + API_URL + '/saveData:', response.statusText);
            }
        } catch (error) {
            console.error('Error saving choice to ' + API_URL, error);
        }
    };

    // Get data values to the component render
    getValue = () => {
        const { tokenData = {}, id, reservedStands, status } = this.state;
        const { selectedStand, type } = tokenData;
        return {
            id,
            setId: this.setId,
            saveChoice: this.saveChoice,
            reservedStands,
            selectedStand,
            tokenData,
            type,
            token: this.token,
            status,
        };
    };

    render() {
        return (
            <DataContext.Provider value={this.getValue()}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export { DataProvider };