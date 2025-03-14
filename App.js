import "./styles/headerStyles.css"
import "./styles/styles.css"
import Header from "./components/Header"
import Article from "./components/Article"
import CarSection from "./components/CarSection"

export default function App() {
  return (
    <body>
      <Header />
      <main>
        <Article />

        <section class = "cars">
          <CarSection />
          <CarSection />
          <CarSection />
          <CarSection />
          <CarSection />
        </section>
      </main>
    </body>
  );
}

