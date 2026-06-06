function Card({ image, title, Category, price }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-5">

      <img
        src={image}
        alt={title}
        className="h-52 w-full object-contain"
      />

      <h2 className="font-bold text-lg mt-4 line-clamp-2">
        {title}
      </h2>

      <p className="text-gray-600 mt-3">
        Category: {Category}
      </p>

      <h3 className="text-green-600 text-3xl font-bold mt-3">
        ${price}
      </h3>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700">
        Add To Cart
      </button>

    </div>
  );
}

export default Card;