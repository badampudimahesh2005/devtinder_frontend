

import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";


const Home = () => {
   return (
    <div className="min-h-screen flex flex-col mt-12">
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default Home