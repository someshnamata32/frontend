function About() {
  return (
    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-5xl font-bold text-center mb-10">
        About Us
      </h1>

      <p className="text-lg text-center text-gray-600">
        Welcome to ShopEasy. We provide quality products
        at affordable prices with fast delivery and
        secure payments.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-10">

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">
            Quality
          </h2>
          <p>Best quality products available.</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">
            Delivery
          </h2>
          <p>Fast and secure shipping worldwide.</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">
            Support
          </h2>
          <p>24/7 customer support available.</p>
        </div>

      </div>
    </div>
  );
}

export default About;