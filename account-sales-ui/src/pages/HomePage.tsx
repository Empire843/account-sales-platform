import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

interface HomePageProps {
  onBuy: (product: any) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onBuy }) => {
  return (
    <>
      <Hero />
      <ProductGrid onBuy={onBuy} />
    </>
  );
};

export default HomePage;
