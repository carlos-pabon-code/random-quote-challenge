import { createContext, useState } from "react";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  // useState to save the random quote generated after the users clicked the random button
  const [quote, setQuote] = useState({ content: "", author: "", genre: "" });
  const data = { quote, setQuote };
  return <QuoteContext.Provider value={data}>{children}</QuoteContext.Provider>;
};

export default QuoteContext;
