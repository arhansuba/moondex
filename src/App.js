import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "min-h-screen bg-gray-900 text-white font-raleway", children: [_jsxs("nav", { className: "fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800", children: [_jsx("div", { className: "max-w-7xl mx-auto px-4", children: _jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Moon, { className: "h-8 w-8 text-yellow-400" }), _jsx("span", { className: "ml-2 text-xl font-bold", children: "MoonDEX" })] }), _jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [_jsx("a", { href: "#features", className: "hover:text-yellow-400 transition-colors", children: "Features" }), _jsx("a", { href: "#comparison", className: "hover:text-yellow-400 transition-colors", children: "Compare" }), _jsx("a", { href: "#faq", className: "hover:text-yellow-400 transition-colors", children: "FAQ" }), _jsx("button", { className: "bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold \n                               hover:bg-yellow-300 transition-colors", children: "Launch App" })] }), _jsx("button", { className: "md:hidden", onClick: () => setIsMenuOpen(!isMenuOpen), children: isMenuOpen ? _jsx(X, {}) : _jsx(Menu, {}) })] }) }), _jsx("div", { className: `md:hidden ${isMenuOpen ? 'block' : 'hidden'}`, children: _jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1 border-t border-gray-800", children: [_jsx("a", { href: "#features", className: "block px-3 py-2 hover:bg-gray-800 rounded-md", children: "Features" }), _jsx("a", { href: "#comparison", className: "block px-3 py-2 hover:bg-gray-800 rounded-md", children: "Compare" }), _jsx("a", { href: "#faq", className: "block px-3 py-2 hover:bg-gray-800 rounded-md", children: "FAQ" }), _jsx("button", { className: "w-full mt-4 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold", children: "Launch App" })] }) })] }), _jsx("section", { className: "pt-32 pb-20 px-4", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [_jsxs("div", { className: "space-y-6", children: [_jsxs("h1", { className: "text-4xl md:text-6xl font-bold leading-tight", children: ["Trusted Multi-Chain", _jsx("span", { className: "block text-yellow-400", children: "DEX Platform" })] }), _jsx("p", { className: "text-gray-400 text-lg", children: "Trade seamlessly across multiple blockchains with industry-leading security and speed." }), _jsx("button", { className: "bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold \n                               hover:bg-yellow-300 transition-all transform hover:scale-105", children: "Get Started" })] }), _jsx("div", { className: "relative", children: _jsx("div", { className: "aspect-square bg-yellow-400/20 rounded-3xl p-8 transform hover:rotate-3 transition-transform", children: _jsx("img", { src: "/api/placeholder/400/400", alt: "Platform Preview", className: "w-full h-full object-cover rounded-2xl" }) }) })] }) }) }), _jsx("section", { id: "features", className: "py-20 px-4 bg-gray-800/50", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-12", children: "Our Features" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: features.map((feature, index) => (_jsxs("div", { className: "p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors", children: [_jsx("div", { className: "text-3xl mb-4", children: feature.icon }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: feature.title }), _jsx("p", { className: "text-gray-400", children: feature.description })] }, index))) })] }) }), _jsx("section", { id: "comparison", className: "py-20 px-4", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-12", children: "Why MoonDEX?" }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b border-gray-800", children: [_jsx("th", { className: "px-6 py-4 text-left", children: "Features" }), _jsx("th", { className: "px-6 py-4 text-center", children: "MoonDEX" }), _jsx("th", { className: "px-6 py-4 text-center", children: "Others" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { className: "border-b border-gray-800 hover:bg-gray-800/50", children: [_jsx("td", { className: "px-6 py-4", children: "Multi-chain Support" }), _jsx("td", { className: "px-6 py-4 text-center text-green-400", children: "\u2713" }), _jsx("td", { className: "px-6 py-4 text-center text-red-400", children: "\u2715" })] }), _jsxs("tr", { className: "border-b border-gray-800 hover:bg-gray-800/50", children: [_jsx("td", { className: "px-6 py-4", children: "Low Fees" }), _jsx("td", { className: "px-6 py-4 text-center text-green-400", children: "\u2713" }), _jsx("td", { className: "px-6 py-4 text-center text-red-400", children: "\u2715" })] }), _jsxs("tr", { className: "hover:bg-gray-800/50", children: [_jsx("td", { className: "px-6 py-4", children: "24/7 Support" }), _jsx("td", { className: "px-6 py-4 text-center text-green-400", children: "\u2713" }), _jsx("td", { className: "px-6 py-4 text-center text-red-400", children: "\u2715" })] })] })] }) })] }) }), _jsx("section", { id: "faq", className: "py-20 px-4 bg-gray-800/50", children: _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-12", children: "FAQ" }), _jsx(Accordion, { type: "single", collapsible: true, children: faqs.map((faq, index) => (_jsxs(AccordionItem, { value: `item-${index}`, children: [_jsx(AccordionTrigger, { children: faq.question }), _jsx(AccordionContent, { children: faq.answer })] }, index))) })] }) }), _jsx("footer", { className: "bg-gray-900 border-t border-gray-800 py-8 px-4", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center", children: [_jsxs("div", { className: "flex items-center mb-4 md:mb-0", children: [_jsx(Moon, { className: "h-6 w-6 text-yellow-400" }), _jsx("span", { className: "ml-2 font-bold", children: "MoonDEX" })] }), _jsxs("div", { className: "flex space-x-6", children: [_jsx("a", { href: "#", className: "hover:text-yellow-400 transition-colors", children: "Terms" }), _jsx("a", { href: "#", className: "hover:text-yellow-400 transition-colors", children: "Privacy" }), _jsx("a", { href: "#", className: "hover:text-yellow-400 transition-colors", children: "Contact" })] })] }) }) })] }));
};
export default Website;
