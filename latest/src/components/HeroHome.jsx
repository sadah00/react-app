import React from "react";

const HeroHome = () => {
  return (
    <div>
      <section className="bg-purple-700 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Soko</h1>

        <p className="text-lg mb-6">
          Manage your products, sales, purchases and stock easily in one place.
        </p>

        <button className="bg-white text-purple-700 px-6 py-3 rounded font-semibold hover:bg-gray-200">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center pt-0">
        <h2 className="text-3xl font-bold mb-6 text-purple-700">About Soko</h2>

        <p className="text-gray-600">
          Soko is a simple inventory and sales management system designed to
          help businesses track products, manage stock, and monitor sales in
          real time.
        </p>

        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-2xl font-bold text-gray-900">Check Out</h2>

              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
                {/* Vegetables */}
                <div className="group relative">
                  <img
                    src="https://images.unsplash.com/photo-1540420773420-3366772f4999"
                    alt="Fresh vegetables"
                    className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                  />
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Vegetables
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Fresh farm vegetables
                  </p>
                </div>

                {/* Home Supplies & Groceries */}
                <div className="group relative">
                  <img
                    src="https://images.unsplash.com/photo-1606787366850-de6330128bfc"
                    alt="Groceries and home supplies"
                    className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                  />
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Home Supplies
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Groceries and household essentials
                  </p>
                </div>

                {/* Baking Ingredients */}
                <div className="group relative">
                  <img
                    src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec"
                    alt="Baking ingredients"
                    className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                  />
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Baking Ingredients
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Flour, sugar, butter and baking essentials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">
            Contact Us
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HeroHome;
