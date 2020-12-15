import {useState, useEffect} from'react';

function useJsonFetch (url, opts) {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
        try {
            setLoading(true)
            const response = await fetch(url, opts);
            let reader = await response.body.getReader();
            let decoder = new TextDecoder();
            let data = '';
            while(true) {
                let { done, value } = await reader.read();
                data += decoder.decode(value);
                if (done) break;
            }
            setData(data);
    
        } catch(e) {
            setHasError(e);
        } finally {
            setLoading(false)
        }
    } 
    fetchData();
        
    }, []);


    return[{data, isLoading, hasError}];
}

export default useJsonFetch;

