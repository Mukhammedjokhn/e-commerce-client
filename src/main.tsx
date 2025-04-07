import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext.tsx";
import { Provider } from "react-redux";
import { store } from "./features/store/store.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ProductProvider>
                    <App />
                </ProductProvider>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
