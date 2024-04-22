import ScrollToHashElement from "../../components/ScrollToHashElement";
import {
  FAQ,
  Footer,
  Form,
  Header,
  Hero,
  HowWeWork,
  Microloan,
  Reviews,
  ThirdBlock,
} from "../../sections";

export function MainPage() {
  return (
    <>
      <ScrollToHashElement />
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
