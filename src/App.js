import { Container, CssBaseline, ThemeProvider, Typography, createTheme } from "@mui/material";
import ProductList from "./components/ProductList";
import OrderList from "./components/OrderList";
import ProductDetail from "./components/ProductDetail";
import { useWindowSize } from "@uidotdev/usehooks";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const { width, height } = useWindowSize()

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Typography variant="h1">{ `width: ${width} and height:${height}` }</Typography>
        <ProductDetail />
        <OrderList title="Orderan Saya"/>
        <ProductList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
