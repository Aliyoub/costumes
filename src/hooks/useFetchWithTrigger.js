import { useState, useEffect } from "react"
import axios from "axios"

export default function useFetch(config) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        let source = null
        if (trigger) {
            ;(async () => {
                source = axios.CancelToken.source()
                console.log("je passe")
                setLoading(true)
                setError(false)
                setData(null)
                try {
                    const response = await axios({
                        ...config,
                        // cancelToken: source.token
                    })
                    setLoading(false)
                    setData(response.data)
                } catch(error) {
                    if (axios.isCancel(error)) return null
                    setLoading(false)
                    setError(true)
                }
            })()
        }
        setTrigger(false)
        return () => {
            if (source)
                source.cancel()
        }
    }, [JSON.stringify(config), trigger])

    return [data, loading, error, setTrigger]
}