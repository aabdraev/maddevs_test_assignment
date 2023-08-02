import React, { useEffect, useState } from 'react'
import { pathes } from '../helpers/pathes';
import Table from './Table';
import Loader from './Loader';

const Report = () => {
    const [selectedReport, setSelectedReport] = useState()
    const [data, setData] = useState({})
    const [errMsg, setErrMsg] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        if (!selectedReport) {
            setErrMsg(null)
            setData({})
            return
        }
        try {
            setIsLoading(true)
            const response = await fetch(selectedReport)
            const fetchData = await response.json()
            setData(fetchData)
            setIsLoading(false)
        } catch (error) {
            setErrMsg(error.message)
            setIsLoading(false)
        }
    }

    useEffect(() => { getData() }, [selectedReport])

    const handleChange = (e) => {
        setSelectedReport(e.target.value)
    }

    return (
        <>
            <section>
                <label htmlFor="report-select">
                    Выберите отчет
                </label>
                <select
                    id="report-select"
                    value={selectedReport}
                    onChange={handleChange}
                >
                    <option value=""></option>
                    {pathes.map((item) => (
                        <option
                            value={item.path}
                            key={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </section>
            {isLoading
                ? <Loader />
                : <Table data={data} />
            }
            {errMsg && <h2>{errMsg}</h2>}
        </>
    )
}

export default Report