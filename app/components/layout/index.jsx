import Hero from '../section/hero';
import MarketplaceSection from '../section/marketplace';
import Purchase from '../section/purchase';
import Subscription from '../section/subscription';
import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between bg-[#131217]'
      style={{
        backgroundImage: `url('/background.png')`,
        backgroundColor: '#151e39',
      }}
    >
      <Header />
      <Hero />
      <Purchase />
      <Subscription />
      <MarketplaceSection />
      {/* {children} */}
      <Footer />
    </main>
  );
}
