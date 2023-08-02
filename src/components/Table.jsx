import React from 'react'
import { getCellAlignment } from '../helpers/helpers';

const Table = ({ data }) => {

    const { header, data: reportData } = data

    return (
        Object.keys(data).length === 0 ? (<></>)
            : (
                <table>
                    <thead>
                        <tr>
                            {header.map((column) => (
                                <th key={column.id} style={{ textAlign: column.align || "left" }}>
                                    {column.caption}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => {

                                    return (
                                        <td key={cellIndex} style={{ textAlign: getCellAlignment(header[cellIndex], cell) }}>
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