import { useState } from "react";
import "./App.css";
import arrowRightIcon from "./assets/images/icon-arrow-right.svg";
import copyIcon from "./assets/images/icon-copy.svg";
import Option from "./components/generationOption";
import PasswordStrength from "./components/passwordStrength";

function App() {
  const [sliderValue, setSliderValue] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [options, setOptions] = useState<any>({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  return (
    <div className='font-JetBrains text-aWhite'>
      <div className='flex flex-col gap-4 md:gap-6 px-4 md:px-[7.125rem] py-16 md:pt-[8.3125rem]'>
        <div className='flex justify-center text-grey md:mb-[0.4375rem]'>
          <p className='text-base md:text-2xl'>Password Generator</p>
        </div>
        <div className='flex justify-between items-center px-4 md:px-8 py-4 md md:py-[1.1875rem] bg-darkGrey'>
          <p className='headingM headingL'>PTx1f5DaFX</p>
          <img src={copyIcon} className='h-5 md:h-6' alt='Copy password' />
        </div>
        <div className='bg-darkGrey p-4 md:px-8 md:pt-6 md:pb-8'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2 md:gap-4'>
              <div className='flex items-center justify-between'>
                <p className='text-base bodyM'>Character Length</p>
                <p className='headingM text-neonGreen headingL'>{sliderValue}</p>
              </div>
              <div className='relative w-full h-7'>
                <input
                  step={1}
                  min={0}
                  max={20}
                  value={sliderValue}
                  onChange={(e) => setSliderValue(+e.target.value)}
                  type='range'
                  style={{
                    background: `linear-gradient(to right, #A4FFAF ${
                      sliderValue * 4.99
                    }%, #18171F ${sliderValue * 4.99}%)`,
                  }}
                  className='w-full h-2 appearance-none [&::-webkit-slider-thumb]:duration-100 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:bg-aWhite [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:active:bg-vDarkGrey [&::-webkit-slider-thumb]:active:outline [&::-webkit-slider-thumb]:active:outline-neonGreen'
                />
              </div>
            </div>
            <div className='flex flex-col gap-4 md:gap-5'>
              <Option
                id={"uppercase"}
                text={"Include Uppercase Letters"}
                toggled={options}
                value={options.uppercase}
                toggleOption={setOptions}
              />
              <Option
                id={"lowercase"}
                text={"Include Lowercase Letters"}
                toggled={options}
                value={options.lowercase}
                toggleOption={setOptions}
              />
              <Option
                id={"numbers"}
                text={"Include Numbers"}
                toggled={options}
                value={options.numbers}
                toggleOption={setOptions}
              />
              <Option
                id={"symbols"}
                text={"Include Symbols"}
                toggled={options}
                value={options.symbols}
                toggleOption={setOptions}
              />
            </div>
            <PasswordStrength passwordStrength={0} />
            <div className='flex py-4 md:py-[1.3125rem] gap-3 items-center justify-center bg-neonGreen'>
              <p className='text-base text-darkGrey bodyM'>GENERATE</p>
              <img src={arrowRightIcon} className='h-3' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
