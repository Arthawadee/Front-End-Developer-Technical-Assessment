import { MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import theme from "../constants/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </Provider>
  );
}

export default MyApp;
