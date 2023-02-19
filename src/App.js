import "./App.css";

import { useEffect } from "react";

import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vmes from "./components/Vmes";
import Pravi from "./components/Pravi";
import Root from "./components/Root";

const ForceDarkMode = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark") return;
    toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return children;
};

function App() {
  return (
    <Router>
      <ChakraProvider>
        <ForceDarkMode>
          <Routes>
            <Route path='/' element={<Root />} />
            <Route path='/vmes' element={<Vmes />} />
            <Route path='/pravi' element={<Pravi />} />
          </Routes>
        </ForceDarkMode>
      </ChakraProvider>
    </Router>
  );
}
export default App;
