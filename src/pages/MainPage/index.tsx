import { FAQ, Footer, Form, Header, Hero, HowWeWork, Microloan, Reviews, ThirdBlock } from "../../sections";

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
        <Form />
      </main>
      <Footer />
    </>
  );
}
