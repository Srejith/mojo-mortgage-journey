import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Waitlist from "@/components/WaitlistForm";

const HomePage: React.FC = () => {
  return (
      <Hero />
      
      <Container>
    
        <Benefits />
        <Waitlist/>
      </Container>
    </>
  );
};

export default HomePage;
