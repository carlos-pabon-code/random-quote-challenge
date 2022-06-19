import { createContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  // useState to show or hide a loader while a quote is searched.
  const [loader, setLoader] = useState(false);
  const data = { loader, setLoader };
  return (
    <LoaderContext.Provider value={data}>{children}</LoaderContext.Provider>
  );
};

export default LoaderContext;
