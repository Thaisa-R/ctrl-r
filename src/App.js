import Header from "./components/Header/header";
import SectioBeginning from "./components/SectioBeginning/index";
import SectionAboutUs from "./components/SectionAboutUs";
import SectionSolutions from "./components/SectionSolutions";
import SectionClients from "./components/SectionClients";
import SectionPortfolio from "./components/SectionPortfolio";
import SectionContact from "./components/SectionContact";
import SectionFooter from "./components/SectionFooter";


function App() {
    return (
    <>
    <Header/>
    <SectioBeginning/>
    <SectionAboutUs/>
    <SectionSolutions/>
    <SectionClients/>
    <SectionPortfolio/>
    <SectionContact/>
    <SectionFooter/>
    </>
    );
}

export default App;