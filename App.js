import "./styles/headerStyles.css"
import "./styles/styles.css"
import "./styles/stylesContactsPage.css"
import Header from "./components/Header"
import Article from "./components/Article"
import CarSection from "./components/CarSection"
import Text from "./components/Text"
import Footer from "./components/Footer"
import preFooter from "./assets/General/PreFooter.jpg"
import { texts } from "./text"
import ContactsArcticle from "./components/ContactsArcticle"
import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo"

export default function App() {
  const [tab, setTab] = useState("contacts")

  return (
    <body>
      <Header active = {tab} onChange = {setTab} />
      {tab === "main" && (
      <>
        <main>
          <Article />

          <Text title = {texts[0].title} description = {texts[0].description} />

          <section class = "cars">
            <CarSection />
            <CarSection />
            <CarSection />
            <CarSection />
            <CarSection />
          </section>

          <Text {...texts[1]} />

          <section class = "preFooter">
              <img src = {preFooter} className = "preFooterImg" />
              <a href = "/" className = "contactsPreFooter">Контакти</a>
          </section>

          <Text {...texts[3]} />
        </main>
      </>
      )}
      
      {tab === "contacts" && (
        <>
          <main>
            <ContactsArcticle />
            <GeneralInfo />
          </main>
        </>
      )}
      <Footer />
    </body>
  );
}

