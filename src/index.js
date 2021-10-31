import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store/index";


//import { Provider } from 'react-redux';


ReactDOM.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Provider>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

