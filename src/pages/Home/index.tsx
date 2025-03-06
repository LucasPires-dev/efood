import Footer from "../../Containers/Footer"
import Header from "../../Containers/Header"
import GlobalStyle from "../../styles"
import Restaurantes from "../Restaurantes"

const Home = () => {
    return(
    <>
        <GlobalStyle />
        <Header hero={true}/>
        <Restaurantes />
        <Footer />
    </>)
}

export default Home