import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import { QueryClientProvider } from "react-query";
import queryClient from "./services/queryClient";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
