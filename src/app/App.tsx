import './styles/_normalize.scss';
import AppRouter from './routes/appRouter';
import Providers from './providers/providers';

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
