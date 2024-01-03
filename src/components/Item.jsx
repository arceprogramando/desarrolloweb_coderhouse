const Item = ({ shoe }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-4">
      <img
        src={shoe.url}
        alt={shoe.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{shoe.name}</h2>
        <p className="text-gray-600">{shoe.description}</p>
        <div className="mt-4">
          <span className="text-gray-500">Price: ${shoe.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;