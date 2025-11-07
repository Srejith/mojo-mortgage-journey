import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Waitlist from "@/components/WaitlistForm";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />
        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
        </Section>
        <Waitlist/>
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
