function MainLogo({ loadingProgress = 0 }: { loadingProgress?: number }) {
  return (
    <div
      className="bg-[url('/assets/bgLogo.svg')] hover:animate-pulse transition-all duration-100 ease-in-out hover:drop-shadow-custom w-[calc(0.092592592vh*160)] h-[calc(0.092592592vh*160)] bg-cover bg-no-repeat bg-center flex justify-center items-center"
      style={{
        backgroundSize: "100% 100%",
      }}
    >
      <img
        src="/assets/logo.png"
        alt="logo"
        className="w-[calc(0.092592592vh*103)] h-[calc(0.092592592vh*85)] object-contain flex-shrink-0 absolute"
      />

      <div
        className={`w-full h-full bg-[url('/assets/logoProgress.svg')] bg-no-repeat bg-center ${loadingProgress === 0 ? "animate-clipPath" : ""}`}
        style={{
          clipPath: `inset(${loadingProgress === 0 ? 100 : 100 - loadingProgress}% 0% 0% 0%)`,
          backgroundSize: "100% 100%",
          filter: "drop-shadow(0px 0px calc(0.092592592vh * 3) #00f8b9)",
        }}
      ></div>
    </div>
  );
}

export default MainLogo;
