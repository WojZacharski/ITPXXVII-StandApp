import React from 'react';
import { Logger } from '../utils/logger';

export const useTokens = () => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [tokens, setTokens] = React.useState([]);

  React.useEffect(() => {
    Logger('useTokens is fetching');
    async function fetchTokensFromAPI() {
      try {
        // Fetch *all* tokens data from the backend API
        // @kerdamon
          const response = await fetch('https://stand-api.best.krakow.pl/api/fetchTokens');
        if (response.ok) {
          const tokensData = await response.json();
          setTokens(tokensData);
          setLoading(false);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching tokens from API:', err);
        setError(true);
      }
    }

    fetchTokensFromAPI();

    return () => {
      // TODO: potential unsubscribe/polling implementation
    };
  }, []);

  return {
    error,
    loading,
    tokens,
  };
};