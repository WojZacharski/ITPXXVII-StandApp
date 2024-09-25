import React from 'react';
import { Logger } from '../utils/logger';

export const useStands = () => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [stands, setStands] = React.useState([]);
  React.useEffect(() => {
    Logger('useStands is fetching');
    async function fetchStandsFromBackend() {
      try {
        // Fetch stands data from the backend API
        // @kerdamon
          const response = await fetch('https://stand-api.best.krakow.pl/api/fetchReservedStands');
        if (response.ok) {
          const data = await response.json();
          setStands(data);
          setLoading(false);
        } else {
          setError(true);
          console.error('Error fetching stands from backend:', response.statusText);
        }
      } catch (err) {
        console.error('Error fetching stands from backend:', err);
        setError(true);
      }
    }
    fetchStandsFromBackend();
    return () => {
      // TODO: potential unsubscribe/polling implementation
    };
  }, []);

  return {
    error,
    loading,
    stands,
  };
};