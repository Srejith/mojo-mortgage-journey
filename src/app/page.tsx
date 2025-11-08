import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Waitlist from "@/components/WaitlistForm";
import LangFlowChat from '@/components/LangFlowChat';
import Section from '@/components/Section';

const HomePage: React.FC = () => {
  return (

      <>
      
      <Hero />

       <Section id="chat"
          title="Talk to us now"
          description="Find out if you are eligible for mortgage instantly">

        </Section>

        <LangFlowChat />
      
      <Container>
    
        <Benefits />
        <Waitlist/>
      </Container>
    </>
  );
};

export default HomePage;
