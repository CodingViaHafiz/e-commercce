import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "You can browse our products, add items to your cart, and proceed to checkout using your preferred payment method.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit/debit cards, PayPal, and other secure online payment gateways.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Standard shipping usually takes 3-7 business days. Express shipping options are also available at checkout.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes! We offer a 14-day return policy on most items. Please read our return policy for details.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us through the Contact page or email us directly at support@myshop.com.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div
        id="/faq"
        className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-xl shadow-sm bg-white transition hover:shadow-md"
            >
              <button
                className="w-full text-left p-4 flex justify-between items-center"
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-lg font-medium text-blue-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600" />
                ) : (
                  <ChevronDown className="text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

      </div>
      <div className="relative text-blue-950">
        <svg
          className="w-full h-24 md:h-32 lg:h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,117.3C840,96,960,96,1080,106.7C1200,117,1320,139,1380,149.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FAQ;
