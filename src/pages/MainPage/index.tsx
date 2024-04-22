import { FAQ, Footer, Header, Hero, HowWeWork, Microloan, Reviews, ThirdBlock } from "../../sections";

export function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowWeWork />
        <ThirdBlock />
        <Reviews />
        <FAQ />
        <Microloan />
      </main>
      <Footer />
    </>
  );
}
