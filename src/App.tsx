import Home from './screens/home';

import Logo from './assets/icons/logo';

export default function App() {
  return (
    <div className="flex flex-1 flex-col h-screen bg-purple">
      <header className="p-6">
        <Logo />
      </header>
      <Home />
    </div>
  );
}
