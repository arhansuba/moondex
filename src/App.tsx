import { useState } from 'react';
import { Menu, X, Moon } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';


const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: "🔒",
      title: "Security First",
      description: "Enterprise-grade security protocols to protect your assets"
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Instant transactions across multiple chains"
    },
    {
      icon: "🌐",
      title: "Cross-Chain",
      description: "Seamlessly trade across different blockchains"
    },
    {
      icon: "💎",
      title: "Best Rates",
      description: "Competitive rates and minimal fees"
    }
  ];

  const faqs = [
    {
      question: "What is MoonDEX?",
      answer: "MoonDEX is a trusted multi-chain DEX platform that enables secure and efficient cross-chain trading."
    },
    {
      question: "How do I get started?",
      answer: "Simply connect your wallet and start trading across multiple chains instantly."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-raleway">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Moon className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-xl font-bold">MoonDEX</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-yellow-400 transition-colors">Features</a>
              <a href="#comparison" className="hover:text-yellow-400 transition-colors">Compare</a>
              <a href="#faq" className="hover:text-yellow-400 transition-colors">FAQ</a>
              <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold 
                               hover:bg-yellow-300 transition-colors">
                Launch App
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-800">
            <a href="#features" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Features</a>
            <a href="#comparison" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Compare</a>
            <a href="#faq" className="block px-3 py-2 hover:bg-gray-800 rounded-md">FAQ</a>
            <button className="w-full mt-4 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold">
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Trusted Multi-Chain
                <span className="block text-yellow-400">DEX Platform</span>
              </h1>
              <p className="text-gray-400 text-lg">
                Trade seamlessly across multiple blockchains with industry-leading security and speed.
              </p>
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold 
                               hover:bg-yellow-300 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-yellow-400/20 rounded-3xl p-8 transform hover:rotate-3 transition-transform">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="Platform Preview" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why MoonDEX?</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="px-6 py-4 text-left">Features</th>
                  <th className="px-6 py-4 text-center">MoonDEX</th>
                  <th className="px-6 py-4 text-center">Others</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="px-6 py-4">Multi-chain Support</td>
                  <td className="px-6 py-4 text-center text-green-400">✓</td>
                  <td className="px-6 py-4 text-center text-red-400">✕</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="px-6 py-4">Low Fees</td>
                  <td className="px-6 py-4 text-center text-green-400">✓</td>
                  <td className="px-6 py-4 text-center text-red-400">✕</td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="px-6 py-4">24/7 Support</td>
                  <td className="px-6 py-4 text-center text-green-400">✓</td>
                  <td className="px-6 py-4 text-center text-red-400">✕</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Moon className="h-6 w-6 text-yellow-400" />
              <span className="ml-2 font-bold">MoonDEX</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;