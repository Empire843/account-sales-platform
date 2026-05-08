import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

interface HomePageProps {
  onBuy: (product: any) => void;
  onAddToCart?: (product: any) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onBuy, onAddToCart }) => {
  return (
    <>
      <Hero />
      <ProductGrid onBuy={onBuy} onAddToCart={onAddToCart} />
    </>
  );
};

export default HomePage;
