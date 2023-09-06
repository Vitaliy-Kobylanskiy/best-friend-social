import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import cl from './App.module.scss';




function App() {

    return (
        <div className={cl.app}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
