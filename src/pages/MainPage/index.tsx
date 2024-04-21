import { Footer, Header, Hero, HowWeWork, Reviews, ThirdBlock } from "../../sections";

export function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowWeWork />
        <ThirdBlock />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
