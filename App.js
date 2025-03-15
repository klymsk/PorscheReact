import "./styles/headerStyles.css"
import "./styles/styles.css"
import Header from "./components/Header"
import Article from "./components/Article"
import CarSection from "./components/CarSection"
import Text from "./components/Text"
import Footer from "./components/Footer"
import preFooter from "./assets/General/PreFooter.jpg"

export default function App() {
  return (
    <body>
      <Header />
      <main>
        <Article />

        <Text />

        <section class = "cars">
          <CarSection />
          <CarSection />
          <CarSection />
          <CarSection />
          <CarSection />
        </section>

        <Text />

        <section class = "preFooter">
            <img src = {preFooter} className = "preFooterImg" />
            <a href = "/" className = "contactsPreFooter">Контакти</a>
        </section>

        <Text />
      </main>

      <Footer />
    </body>
  );
}

