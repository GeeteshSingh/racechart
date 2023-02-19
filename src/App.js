import './App.css';
import {createContext, useState} from "react";
import ReactSwitch from "react-switch";
//custom components
import Chart from '../src/Components/Iframes.js'
import Introduction from "./Components/introduction";
import Summary from "./Components/explanation";
import Footer from "./Components/Aboutus";
export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="App" id={theme}>
                <header>
                    <p style={{fontFamily: 'Roboto', fontSize: 35, fontWeight: 600}}>Indian cuisine king</p>
                </header>
                <div className="switch">
                    <label style={{marginTop:10}}> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
                </div>
                <Introduction/>
                <div style={{justifyContent:'center'}}>
                    <Chart/>
                </div>
                <Summary/>
                <Footer />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
