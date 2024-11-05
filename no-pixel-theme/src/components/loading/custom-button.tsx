function CustomButton({
  name,
  image,
  width,
  height,
}: {
  name: string;
  image: string;
  width: number;
  height: number;
}) {
  return (
    <button
      className="w-[calc(0.092592592vh*74)] h-[calc(0.092592592vh*73)] hover:drop-shadow-custom flex-shrink-0 bg-[url('/assets/socialBg.svg')] bg-cover bg-no-repeat bg-center flex flex-col justify-between items-center transition-all duration-200 ease-in-out"
      style={{
        backgroundSize: "100% 100%",
      }}
    >
      <img
        className="object-contain object-center"
        src={image}
        alt={name}
        style={{
          width: `${width}%`,
          height: `${height}%`,
        }}
      />
    </button>
  );
}

export default CustomButton;
