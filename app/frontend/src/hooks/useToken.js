import React from 'react';
import { Logger } from '../utils/logger';

export const useToken = (token) => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [tokenData, setTokenData] = React.useState(null);

  React.useEffect(() => {
    Logger('useToken is fetching');
    async function fetchTokenDataFromBackend() {
      try {
        // Fetch token data from the backend API
        // @kerdamon
          const response = await fetch(`https://stand-api.best.krakow.pl/api/fetchData/${token}`);
        if (response.ok) {
          const data = await response.json();
          if (data.error) {
            setError(true);
          } else {
            setTokenData(data);
          }
        } else {
          setError(true);
          console.error('Error fetching token data from backend:', response.statusText);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching token data from backend:', err);
        setError(true);
      }
    }
    fetchTokenDataFromBackend();
    return () => {
      // TODO: potential unsubscribe/polling implementation
    };
  }, [token]);

  return {
    error,
    loading,
    tokenData,
  };
};