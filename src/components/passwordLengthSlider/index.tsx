import { Dispatch, SetStateAction } from "react";

type propsType = {
  sliderValue: number;
  setSliderValue: Dispatch<SetStateAction<number>>;
};

export default function LengthSlider({ sliderValue, setSliderValue }: propsType) {
  return (
    <div className='relative w-full h-7'>
      <input
        step={1}
        min={0}
        max={20}
        value={sliderValue}
        onChange={(e) => setSliderValue(+e.target.value)}
        type='range'
        style={{
          background: `linear-gradient(to right, #A4FFAF ${sliderValue * 4.99}%, #18171F ${
            sliderValue * 4.99
          }%)`,
        }}
        className='w-full h-2 appearance-none [&::-webkit-slider-thumb]:duration-100 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:bg-aWhite [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:active:bg-vDarkGrey [&::-webkit-slider-thumb]:active:outline [&::-webkit-slider-thumb]:active:outline-neonGreen'
      />
    </div>
  );
}
