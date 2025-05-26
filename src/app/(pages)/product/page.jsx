"use client";
import React, { useState } from "react";
import {
  Heart,
  Share2,
  ShoppingBag,
  ChevronRight,
  Star,
  Truck,
  Shield,
  RefreshCw,
} from "lucide-react";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    name: "Oversized Cotton Blend Sweater",
    price: 129.99,
    rating: 4.8,
    reviews: 156,
    description:
      "Elevate your casual wardrobe with this premium oversized sweater. Crafted from a luxurious cotton blend, it offers both comfort and style for everyday wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Navy"],
    images: [
      "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6626967/pexels-photo-6626967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.meesho.com/images/products/209205126/fbgah_400.webp",
      "https://images.meesho.com/images/products/346539180/jq78p_400.webp",
    ],
    features: [
      "Premium cotton blend fabric",
      "Relaxed, oversized fit",
      "Ribbed cuffs and hem",
      "Drop shoulder design",
    ],
  };

  const updateQuantity = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center text-sm mb-8">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Home
          </a>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Women
          </a>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <span className="text-gray-900">Sweaters</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden ${
                    selectedImage === index
                      ? "ring-2 ring-black"
                      : "hover:opacity-75"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-medium text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            <p className="text-2xl font-medium text-gray-900">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-gray-600">{product.description}</p>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`group relative h-12 w-12 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-black"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute inset-0 rounded-full bg-${color.toLowerCase()}-900`}
                    ></span>
                    <span className="sr-only">{color}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <button className="text-sm text-gray-500 hover:text-gray-900 underline">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 text-sm font-medium rounded-md ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                Quantity
              </h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(quantity - 1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      updateQuantity(parseInt(e.target.value) || 1)
                    }
                    className="w-16 h-10 border-t border-b border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button
                    onClick={() => updateQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-black text-white py-4 px-6 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center space-x-2">
                <ShoppingBag size={20} />
                <span>Add to Cart</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart size={20} className="text-gray-600" />
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                Features
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Truck size={24} className="text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Free Shipping
                    </p>
                    <p className="text-sm text-gray-500">On orders over $100</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield size={24} className="text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Secure Payment
                    </p>
                    <p className="text-sm text-gray-500">100% protected</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RefreshCw size={24} className="text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Easy Returns
                    </p>
                    <p className="text-sm text-gray-500">30-day returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
