import { useState, useEffect } from 'react';

interface UserData {
    name: string;
    surname: string;
}

interface UseFetchReturn {
    data: UserData | null
}

export function useFetch(url: string): UseFetchReturn {
    const [data, setData] = useState<UserData | null>(null);

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
