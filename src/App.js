import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
