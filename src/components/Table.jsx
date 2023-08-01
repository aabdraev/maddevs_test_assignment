import React from 'react'

const Table = ({ data }) => {

    const { header, data: reportData } = data

    return (
        Object.keys(data).length === 0 ? (<p>no</p>)
            : (
                <table>
                    <thead>
                        <tr>
                            {header.map((column) => (
                                <th key={column.id} style={{ textAlign: column.align }}>
                                    {column.caption}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} style={{ textAlign: header[cellIndex].align }}>
                                        {typeof cell === 'object' ? cell.d : cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
    )
}

export default Table