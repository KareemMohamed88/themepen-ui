import axios from "axios";
import { useState, useEffect } from "react";

const useFetchApi = (URL: string) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const handleGetData = async () => {
        const response = await axios.get(URL)
        if(response){
            setData(response.data)
            setLoading(false)
        }
    }
    useEffect(() => {
        handleGetData()
    })
    return [data, loading]
}

export default useFetchApi