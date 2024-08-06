import useTheme from '../../entities/theme/lib/useTheme';
import '../styles/_app.scss';

interface LayoutProps {
  readonly children: JSX.Element;
}

function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme || 'light'}`}>
      <div className="layout">
        {children}
      </div>
    </div>
  );
}

export default Layout;
