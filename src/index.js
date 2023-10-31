import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />,
  </BrowserRouter>
);



// import React from 'react';
// import ReactDOM from 'react-dom';
// // import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// // import {
// //   createBrowserRouter,
// //   RouterProvider,
// // } from "react-router-dom";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <div>Hello world!</div>,
// //   },
// // ]);

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <RouterProvider router={router} />
// //   </React.StrictMode>
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// import {createRoot} from 'react-dom/client';
// import App from './App';
// import {BrowserRouter as Router} from 'react-router-dom';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// // 👇️ wrap App in Router
// root.render(
//   <Router>
//     <App />
//   </Router>
// );
