
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
export const history = createBrowserHistory();

import App from "./src/main/App";


ReactDOM.render(<Router history={history}><App /></Router>,
document.getElementById('root'));