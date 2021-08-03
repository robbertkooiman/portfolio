import { useEffect, useState } from 'react';
import axios from 'axios';

const urlBase = 'http://localhost:8080/';

export const useApi = url => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            axios
                .get(urlBase + url)
                .then(response => {
                    setIsLoaded(true);
                    setData(response.data.data);
                })
                .catch(error => {
                    setError(error);
                });
        };
        fetchData();
    }, [url]);

    return { error, isLoaded, data };
};

export const getImageUrl = id => {
    return urlBase + 'assets/' + id;
}