import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import Waitlist from "@/components/WaitlistForm";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Benefits />
        <Waitlist/>
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
