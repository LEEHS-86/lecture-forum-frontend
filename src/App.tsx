import GlobalStyle from "./styles/GlobalStyle.tsx";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "./styles/theme.ts";
import GetRouter from "./router/GetRouter.tsx";
import {RouterProvider} from "react-router";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <RouterProvider router={GetRouter} />
        </ThemeProvider>
    );
}

export default App;
