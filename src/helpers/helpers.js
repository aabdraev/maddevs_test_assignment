import { cellTypes } from "./cell_types";

export const getCellAlignment = (column, cell) => {
    if (column.align) {
        return column.align;
    }

    const cellType = typeof cell;
    const dType = cellType === 'object' && cell.d !== undefined ? typeof cell.d : null;
    const alignment =
        dType !== null ? cellTypes.find((type) => type[dType]) : cellTypes.find((type) => type[cellType]);
    return alignment ? alignment[dType || cellType] : 'left';
};