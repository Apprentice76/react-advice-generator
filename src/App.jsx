import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [quote, setQuote] = useState("");
    useEffect(() => {
        axios
            .get("https://api.adviceslip.com/advice")
            .then((quote) => setQuote(quote.data.slip.advice));
    }, []);

    const getAdvice = () => {
        axios
            .get("https://api.adviceslip.com/advice")
            .then((quote) => setQuote(quote.data.slip.advice));
    };

    return (
        <div className="main">
            <div className="quote">{quote}</div>
            <button onClick={getAdvice}>GIVE ME ADVICE!</button>
        </div>
    );
};

export default App;
