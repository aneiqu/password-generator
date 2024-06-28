type propsType = {
  achieved: boolean;
  strength: number;
};

export default function StrengthBar({ achieved, strength }: propsType) {
  return (
    <div
      className={`w-[0.625rem] h-7  ${
        achieved
          ? "border-2 border-aWhite"
          : strength === 4
          ? "bg-neonGreen"
          : strength === 3
          ? "bg-yellow"
          : strength === 2
          ? "bg-orange"
          : strength === 1
          ? "bg-red"
          : ""
      }`}
    ></div>
  );
}
