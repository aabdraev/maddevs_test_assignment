import { useEffect, useState } from 'react';
import './styles/App.css';
import { pathes } from './helpers/pathes';

console.log(pathes[0].path)

function App() {
    const [selectedReport, setSelectedReport] = useState(pathes[0].name)
    const selectedPath = pathes.find(report => report.name === selectedReport).path

    const [data, setData] = useState({})
    const [errMsg, setErrMsg] = useState("")

    const getData = async () => {
        try {
            const response = await fetch(selectedPath)
            const fetchData = await response.json()
            console.log(fetchData)
            setData(fetchData)
        } catch (error) {
            setErrMsg(error.message)
        }
    }
    useEffect(() => { getData() }, [selectedReport])
    return (
        <div className="App">
            nblx
        </div>
    );
}

export default App;
