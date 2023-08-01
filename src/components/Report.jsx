import React, { useEffect, useState } from 'react'
import { pathes } from '../helpers/pathes';
import Table from './Table';

const Report = () => {
    const [selectedReport, setSelectedReport] = useState()
    const [data, setData] = useState({})
    const [errMsg, setErrMsg] = useState("")

    const getData = async () => {
        try {
            const response = await fetch(selectedReport)
            const fetchData = await response.json()
            setData(fetchData)
        } catch (error) {
            setErrMsg(error.message)
        }
    }

    useEffect(() => { getData() }, [selectedReport])

    const handleChange = (e) => {
        setSelectedReport(e.target.value)
    }

    return (
        <>
            <div>
                <label>
                    Выберите отчет
                    <select
                        value={selectedReport}
                        onChange={handleChange}
                    >
                        {pathes.map((item) => (
                            <option
                                value={item.path}
                                key={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <Table data={data} />
        </>
    )
}

export default Report