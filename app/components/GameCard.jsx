export default function GameCard({ title, description, image, jarLink }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center">
      <img src={image} alt={title} className="rounded-lg mb-4 w-64 h-40 object-cover"/>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={jarLink}
        download
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Download JAR
      </a>
    </div>
  );
}

