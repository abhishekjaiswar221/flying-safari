const DestinationCard = ({ imgSrc, imgText, featured }) => {
  return (
    <div className="relative h-36 w-full overflow-hidden rounded-xl sm:h-44">
      <img src={imgSrc} alt={imgText} className="h-full w-full object-cover" />

      <div className="absolute inset-0 bg-black/20" />

      {featured && (
        <div className="absolute top-0 left-0 rounded-br-3xl bg-[var(--primary-color)] px-2 py-1">
          <p className="text-sm tracking-wide text-white">Featured</p>
        </div>
      )}

      <div className="absolute top-1/2 left-3">
        <h2 className="text-sm leading-tight tracking-wide text-white md:text-base">
          {imgText}
        </h2>
      </div>
    </div>
  );
};

export default DestinationCard;
