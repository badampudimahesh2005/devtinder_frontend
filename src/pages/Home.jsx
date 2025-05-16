

import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";


const Home = () => {
   return (
    <div className="min-h-screen flex flex-col pt-16">
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default Home