import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, setProductsFiltered } from '../../redux/actions/Products';
import { sortGridColumn } from '../../helpers/Sort';
import { ORDER_TYPE } from '../../types/sort';
import CustomGrid from '../../components/CustomGrid';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import './index.scss';

const Home = () => {
  const dispatch = useDispatch();
  const [sortColumn, setSortColumn] = useState({columnName: "", order: ""});
  const [searchProduct, setSearchProduct] = useState("");
  const products = useSelector(state => state.products.products);
  const filteredProducts = useSelector(state => state.products.filteredProducts);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  useEffect(() => {
    dispatch(setProducts());
  }, [])

  useEffect(() => {
    if(sortColumn.columnName && sortColumn.order) {
      let filteredProductsCopy = [...filteredProducts];
      sortGridColumn(filteredProductsCopy, sortColumn.columnName, sortColumn.order);
      dispatch(setProductsFiltered(filteredProductsCopy));
    }
  }, [sortColumn])

  const onChangeSearch = (value) => {
    setSearchProduct(value);
  }

  const sortListByColumn = (columnName) => {
    if(!sortColumn.columnName || sortColumn.columnName !== columnName) {
      setSortColumn({columnName: columnName, order: ORDER_TYPE.ASC})
    } else {
      let newOrder = sortColumn.order === ORDER_TYPE.ASC ? ORDER_TYPE.DESC : ORDER_TYPE.ASC;
      setSortColumn({...sortColumn, order: newOrder});
    }
  }

  const filterProducts = () => {
    let filteredProductsCopy = products.filter((item) => {
      return  !searchProduct ||
              item.product.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1 ||
              item.origin.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1
    })

    sortGridColumn(filteredProductsCopy, sortColumn.columnName, sortColumn.order);
    dispatch(setProductsFiltered(filteredProductsCopy));
  }

  return (
    <div className="home">
        <h1>List of Products</h1>

        <div className={"searchWrapper"}>
          <Input label={'Search Product'} name={'product'} placeholder={'Search for Product or Origin'} onChange={onChangeSearch}/>
          <Button onClick={filterProducts} icon={<FontAwesomeIcon icon={faSearch}/>}/>
        </div>

        {loading && <Loading/>}
        <br></br>
        <br></br>
        {!loading && <CustomGrid list={filteredProducts} onClickColumn={sortListByColumn} sortColumn={sortColumn}/>}
        {!loading && error && "Error..."}
    </div>
  );
}

export default Home;
