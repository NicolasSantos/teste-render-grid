const Header = ({columns, onClickColumn}) => {
    return (
        <div style={{display: "flex"}}>
            {
                Object.keys(columns).map((columnIndex) => {
                    return (
                        <div key={`header-column-${columnIndex}`} style={{marginRight: "15px"}} onClick={() => onClickColumn(columns[columnIndex])}>
                            {columns[columnIndex]}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Header;