import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     retry: 3, 
  //     cacheTime: 300_000, //5m
  //     staleTime: 10 * 1000, //10s
      
  //     refetchOnWindowFocus: false,
  //     refetchOnReconnect: false,
  //     refetchOnMount: false,
  //   }
  // }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <App3 /> */}
      <App5 />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
