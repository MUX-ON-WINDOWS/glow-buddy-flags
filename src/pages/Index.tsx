import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ProductShowcase from "@/components/ProductShowcase";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <ProductShowcase />
      <CTASection />
    </div>
  );
};

export default Index;
