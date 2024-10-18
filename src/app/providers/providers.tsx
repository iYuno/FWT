import { Provider } from "react-redux";
import { ThemeProvider } from "@/entities/theme";
import { store } from "../store";

interface ProvidersProps {
  readonly children: JSX.Element;
}

function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}

export default Providers;
