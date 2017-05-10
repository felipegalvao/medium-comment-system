import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";


// App css
require("./styles/app.scss");

ReactDOM.render(
	<App />,
	document.getElementById("app")
);
