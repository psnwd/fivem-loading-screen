import { cn } from "~/utils";

function ProcessBar({
  box_count = 13,
  progress = 0,
}: {
  box_count?: number;
  progress?: number;
}) {
  // Calculate how much of each box should be filled
  const filledBoxes = Math.floor((progress / 100) * box_count);
  const remainingProgress = (progress / 100) * box_count - filledBoxes;

  return (
    <div
      className="w-[calc(0.092592592vh*272.5)] h-[calc(0.092592592vh*40)] flex-shrink-0 bg-[url('/assets/progressBg.svg')] bg-cover bg-no-repeat bg-center flex flex-row justify-between items-center pl-[calc(0.092592592vh*25)] pr-[calc(0.092592592vh*20)]"
      style={{
        backgroundSize: "100% 100%",
      }}
    >
      {Array(box_count)
        .fill(null)
        .map((_, index) => {
          let clipPath = "inset(0% 100% 0% 0%)"; // Default to empty

          // Fully filled boxes
          if (index < filledBoxes) {
            clipPath = "inset(0% 0% 0% 0%)";
          }
          // Partially filled box
          else if (index === filledBoxes) {
            const fillPercentage = 100 - remainingProgress * 100;
            clipPath = `inset(0% ${fillPercentage}% 0% 0%)`;
          }

          return (
            <div
              key={index}
              className="w-[calc(0.092592592vh*13)] h-[calc(0.092592592vh*20)] flex-shrink-0 bg-[#FFFFFF2B]"
            >
              <div
                className={cn(
                  "bg-custom-button-radial w-[calc(0.092592592vh*13)] h-[calc(0.092592592vh*20)]",
                )}
                style={{
                  clipPath: clipPath,
                }}
              ></div>
            </div>
          );
        })}
    </div>
  );
}

export default ProcessBar;
