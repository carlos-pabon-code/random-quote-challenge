import { createContext, useState } from "react";

const RandomQuoteContext = createContext();

export const RandomQuoteProvider = ({ children }) => {
  // useState to control when the users clicks the random button
  const [randomQuote, setRandomQuote] = useState(null);
  const data = { randomQuote, setRandomQuote };

  return (
    <RandomQuoteContext.Provider value={data}>
      {children}
    </RandomQuoteContext.Provider>
  );
};

export default RandomQuoteContext;
