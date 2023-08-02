import React from 'react'
import { getAlignment } from '../helpers/helpers';

const Table = ({ data }) => {

    const { header, data: reportData } = data

    return (
        Object.keys(data).length === 0 ? (<></>)
            : (
                <table>
                    <thead>
                        <tr>
                            {header.map((column) => (
                                <th key={column.id} style={{ textAlign: "center" }}>
                                    {column.caption}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => {
                                    const column = header[cellIndex]
                                    const cellAlignment = column.align || getAlignment(column.type)

                                    return (
                                        <td key={cellIndex} style={{ textAlign: cellAlignment }}>
                                            {typeof cell === 'object' ? String(cell.d) : String(cell)}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
    )
}

export default Table