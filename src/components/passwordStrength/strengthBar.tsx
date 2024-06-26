type propsType = {
  achieved: boolean;
};

export default function StrengthBar({ achieved }: propsType) {
  return (
    <div className={`w-[0.625rem] h-7  ${achieved ? "border-2 border-aWhite" : "bg-yellow"}`}></div>
  );
}
