import NavBar from "@/shared/components/NavBar";
import Hero from "@/features/hero/Hero";
import Contact from "@/features/contact/Contact";
import About from "@/features/about/About";
import Gallery from "@/features/gallery/Gallery";
import Products from "@/features/products/Products";
import Snow from "@/features/snow/Snow";

export default function Home() {
  return (
    <>
      <NavBar />
      <Snow />
      <main>
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Contact />
      </main>
    </>
  );
}
