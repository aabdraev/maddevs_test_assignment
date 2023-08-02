import { cellTypes } from "./cell_types";

export const getAlignment = (column) => {
    if (column.align) {
        return column.align;
    }

    const alignment = cellTypes.find((type) => type[column]);
    return alignment ? alignment[column] : 'left';
};