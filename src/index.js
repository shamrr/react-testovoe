import React from "react";
import reactDom from "react-dom";

import Coins from "./components/coins";

const App = () => {
    return <Coins/>
}
reactDom.render(<App/>, document.getElementById('root'));