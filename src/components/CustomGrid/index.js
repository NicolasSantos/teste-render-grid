import React, { useEffect, useState } from 'react';
import { Grid } from 'react-virtualized';
import Row from './Row';


const CustomGrid = ({list}) => {
    const [columnsName, setColumnsName] = useState({});

    useEffect(() => {
        setColumnsName(mapColumns(list));
    }, [list])

    const cellRenderer = ({columnIndex, key, rowIndex, style}) => {
        return (
            <Row key={key} style={style} text={list[rowIndex][columnsName[columnIndex]]}/>
        );
    }

    const mapColumns = (listItems) => {
        if(listItems && listItems.length > 0) {
            let keys = Object.keys(listItems[0]);
            let mappedColumns = {};
    
            keys.forEach((item, index) => {
                mappedColumns[index] = item;
            })
    
            return mappedColumns;
        }

        return {};
    }

    return (
        <>
            {
                list 
                ?
                <Grid
                    cellRenderer={cellRenderer}
                    columnCount={Object.keys(list[0]).length || 1}
                    columnWidth={100}
                    height={300}
                    rowCount={list.length}
                    rowHeight={30}
                    width={300}
                />
                :
                <span>Nenhum dado encontrado</span>
            }
        </>
    )
}

export default CustomGrid;