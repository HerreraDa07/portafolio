import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Portafolio() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <header className="top-0">
        <Header />
      </header>
      <main className="flex-1">
        <Main />
      </main>
      <footer className="bottom-0">
        <Footer />
      </footer>
    </div>
  );
}

export default Portafolio;
