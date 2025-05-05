
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";
import { productsData, additionalProducts } from "../components/ProductsSection";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the product in our data
    const foundProduct = [...productsData, ...additionalProducts].find(
      (p) => p.id === id
    );
    
    if (foundProduct) {
      setProduct(foundProduct);
      document.title = `${foundProduct.title} | Ruhul Engineering`;
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="glass-card p-8">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10">
        {/* Background gradient elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-red/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-yellow/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-neon-red/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-neon-yellow/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <Navbar />

      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link to="/#products" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to All Products
          </Link>

          <div className="glass-card p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                {product.category && (
                  <span className="text-sm text-neon-red font-medium block mb-2">
                    {product.category}
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-bold mb-4 hero-title">
                  {product.title}
                </h1>
                <div className="text-white/70 space-y-4">
                  <p>{product.detailedDescription}</p>
                  {product.impact && (
                    <div className="pt-4 border-t border-white/10">
                      <h5 className="text-sm font-semibold mb-1 text-white">Why It Matters:</h5>
                      <p>{product.impact}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="md:w-1/2">
                {product.gallery && product.gallery[0] && (
                  <div className="rounded-lg overflow-hidden neon-border">
                    <img 
                      src={product.gallery[0]} 
                      alt={product.title} 
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Specifications</h2>
              <ul className="space-y-3">
                {product.specifications.map((spec: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-neon-yellow">•</span>
                    <span className="text-white/70">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8">
              {product.gallery && product.gallery[1] && (
                <div className="rounded-lg overflow-hidden neon-border mb-6">
                  <img 
                    src={product.gallery[1]} 
                    alt={`${product.title} detail`} 
                    className="w-full h-auto"
                  />
                </div>
              )}
              
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Interested in this product?</h3>
                  <p className="text-white/70">Get in touch with our team</p>
                </div>
                <a 
                  href="#contact" 
                  className="mt-4 md:mt-0 px-6 py-2 bg-neon-gradient hover:opacity-90 transition-opacity rounded-md inline-block"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6">Related Research</h2>
            <p className="text-white/70 mb-6">
              At Ruhul Engineering, we're constantly exploring ways to improve our products and develop new solutions for local challenges. Our R&D team works closely with end-users to ensure our innovations address real needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {productsData
                .filter(p => p.id !== product.id)
                .slice(0, 3)
                .map((relatedProduct, index) => (
                  <Link 
                    key={index} 
                    to={`/product/${relatedProduct.id}`}
                    className="glass-card p-4 hover:-translate-y-1 transition-transform block"
                  >
                    <h4 className="font-bold mb-1">{relatedProduct.title}</h4>
                    <p className="text-white/70 text-sm line-clamp-2">
                      {relatedProduct.description}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
