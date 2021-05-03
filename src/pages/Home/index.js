import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, setProductsFiltered } from '../../redux/actions/Products';
import { sortGridColumn } from '../../helpers/Sort';
import { ORDER_TYPE } from '../../types/sort';
import CustomGrid from '../../components/CustomGrid';
import Input from '../../components/Input';

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
    <div className="App">
      <Input label={'Search Product'} name={'product'} placeholder={'Search for Product or Origin'} onChange={onChangeSearch}/>

      <button onClick={() => filterProducts()}>Search</button>

      {loading && "Loading..."}
      {!loading && <CustomGrid list={filteredProducts} onClickColumn={sortListByColumn}/>}
      {!loading && error && "Error..."}
    </div>
  );
}

export default Home;
