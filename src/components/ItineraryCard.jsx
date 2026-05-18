const ItineraryCard = ({ className }) => {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-white shadow-lg ${className}`}
    >
      <div className="relative overflow-hidden">
        <img
          src="/images/lions.jpg"
          alt="Safari"
          className="aspect-[4/3] w-full object-cover transition duration-300 hover:scale-105"
        />

        <div className="absolute top-5 left-5 rounded-md bg-white p-0.5 px-1">
          Arusha National Park
        </div>
      </div>

      <div className="w-full space-y-4 p-5 text-center">
        <div className="flex w-full items-center justify-center gap-1 text-center text-sm text-gray-600">
          <p>3 Nights</p>
          <p>•</p>
          <p>4 Locations</p>
        </div>

        <div>
          <p className="text-xl font-semibold text-gray-600">
            Arusha, Ngorongoro Crater & Serengeti: Migration Safari
          </p>
        </div>

        <div>
          <button className="rounded-md border border-gray-300 px-5 py-2 font-semibold text-gray-500">
            VIEW ITINERARY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;
