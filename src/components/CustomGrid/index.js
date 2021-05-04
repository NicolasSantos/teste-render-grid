import React, { useEffect, useState, useRef } from 'react';
import { Grid, AutoSizer } from 'react-virtualized';
import Cell from './Cell';
import './index.scss';


const CustomGrid = ({list, onClickColumn, sortColumn}) => {
    const [columnsName, setColumnsName] = useState({});
    const [gridList, setGridList] = useState([]);
    const gridContainerElement = useRef(null);

    useEffect(() => {
        if(list && list.length > 0) {
            let columnsNameMapped = mapColumns(list);
            let copyList = [...list];
            
            copyList.unshift(getColumnsNameHeader(columnsNameMapped));
            setColumnsName(columnsNameMapped);
            setGridList(copyList);
        }
    }, [list])

    const getColumnsNameHeader = (columnsNameMapped) => {
        let columns = [];

        Object.keys(columnsNameMapped).forEach((key) => {
            columns[columnsNameMapped[key]] = columnsNameMapped[key];
        })

        return columns;
    }

    const cellRenderer = ({columnIndex, key, rowIndex, style}) => {
        return (
            <Cell   key={key} 
                    style={style} 
                    value={gridList[rowIndex][columnsName[columnIndex]]} 
                    isFirstRow={rowIndex === 0}
                    onClickSort={rowIndex === 0 && onClickColumn}
                    sortColumn={sortColumn}/>
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

    const getColumnWidth = (widthContainer, amountColumns) => {
        let minColumnWidth = 200;

        if(minColumnWidth < (widthContainer / amountColumns)) {
            return widthContainer / amountColumns;
        } else {
            return minColumnWidth;
        }
    }

    return (
        <div className={"customGrid"} ref={gridContainerElement}>
            {
                list && list.length > 0
                ?
                    <>
                        <AutoSizer disableHeight>
                            {({ width }) => (
                                <>
                                    <Grid
                                        cellRenderer={cellRenderer}
                                        columnCount={Object.keys(list[0]).length || 1}
                                        columnWidth={getColumnWidth(width, Object.keys(list[0]).length) - 5}
                                        height={500}
                                        rowCount={gridList.length}
                                        rowHeight={30}
                                        width={width}
                                    />
                                </>
                            )}
                        </AutoSizer>
                        <br></br>
                        <span>{list.length} items found</span>
                    </>
                :
                <>
                    <br></br>
                    <span>No items found</span>
                </>
            }
        </div>
    )
}

export default CustomGrid;