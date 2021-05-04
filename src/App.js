import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Home from './pages/Home';
import Toast from './components/Toast';
import { setHideToast } from './redux/actions/Toast';
import './index.scss';

function App() {
  const dispatch = useDispatch();
  const toast = useSelector(state => state.toast);

  return (
    <div className="container">
      <Toast show={toast.show} theme={toast.theme} message={toast.message} onHide={() => dispatch(setHideToast())}/>
      <Home/>
    </div>
  );
}

export default App;
