import { Provider } from 'react-redux';
import { store } from '../store';
import ThemeProvider from '../../entities/theme/ui/themeProvider';

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
