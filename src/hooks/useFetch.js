import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        // fetch server using url
        // error handler
        // then
        setData({
            name: 'John', 
            surname: 'Doe'
        });
    }, [url]);

    return { data };
}
