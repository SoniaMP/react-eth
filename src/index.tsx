import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App.tsx";

if (import.meta.env.MODE === "development") {
  const { worker } = await import("../mocks/index.ts");
  await worker.start();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              refetchOnWindowFocus: false,
              refetchOnReconnect: false,
              refetchOnMount: false,
            },
          },
        })
      }
    >
      <App />
    </QueryClientProvider>
  </StrictMode>
);
