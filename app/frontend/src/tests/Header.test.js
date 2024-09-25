import React from 'react';
import {render} from 'enzyme';
import {Header} from "../components/Header";
import {MockDataProvider} from "./__mocks__/MockDataProvider";

describe('Header Component', () => {
    describe('Without TokenData', () => {
        const component = render(<MockDataProvider data={{tokenData: undefined}}>
            <Header/>
        </MockDataProvider>);

        it('should render and match snapshot', () => {
            expect(component).toMatchSnapshot();
        });

        it('should have h1 with Unknown value', () => {
            expect(component.find('h1').first().text()).toEqual("STAND_SELECTION: Unknown / Unknown Type");
        });
    });

    describe('With TokenData', () => {
        const component = render(<MockDataProvider>
            <Header/>
        </MockDataProvider>);

        it('should render and match snapshot', () => {
            expect(component).toMatchSnapshot();
        });

        it('should have h1 with company name', () => {
            expect(component.find('h1').first().text()).toEqual("STAND_SELECTION: Company Name / 4m²");
        });
    });
});