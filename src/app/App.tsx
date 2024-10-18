import "./styles/_normalize.scss";
import Providers from "./providers/providers";
import AppRouter from "./routes/appRouter";

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
