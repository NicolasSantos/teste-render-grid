import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ORDER_TYPE } from '../../../types/sort';
import './index.scss';

const Cell = ({value, style, isFirstRow, onClickSort, sortColumn}) => {
    return (
        <div className={`cell ${isFirstRow && "cell--isFirstRow"}`} style={style}>
            <span className={"cell__value"} title={value}>{value}</span>
            {isFirstRow && 
                <div className="cell__sort" onClick={onClickSort ? () => onClickSort(value) : null}>
                    {   !sortColumn.columnName || sortColumn.columnName !== value || (sortColumn.columnName === value && sortColumn.order === ORDER_TYPE.DESC)
                        ? <FontAwesomeIcon icon={faChevronUp} size="xs"/> : ''
                    }

                    {   !sortColumn.columnName || sortColumn.columnName !== value || (sortColumn.columnName === value && sortColumn.order === ORDER_TYPE.ASC)
                        ? <FontAwesomeIcon icon={faChevronDown} size="xs"   /> : ''
                    }
                </div>
            }
        </div>
    )
}

export default Cell;