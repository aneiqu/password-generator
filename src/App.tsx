import { useState } from "react";
import "./App.css";
import copyIcon from "./assets/images/icon-copy.svg";
import Option from "./components/generationOption";

function App() {
  const [sliderValue, setSliderValue] = useState<number>(0);

  return (
    <div className='font-JetBrains text-aWhite'>
      <div className='flex flex-col gap-4 px-4 py-16'>
        <div className='flex justify-center text-grey'>
          <p className='text-base'>Password Generator</p>
        </div>
        <div className='flex justify-between items-center px-4 bg-darkGrey h-16'>
          <p className='headingM'>PTx1f5DaFX</p>
          <img src={copyIcon} className='h-5' alt='Copy password' />
        </div>
        <div className='bg-darkGrey p-4'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <p className='text-base'>Character Length</p>
                <p className='headingM text-neonGreen'>{sliderValue}</p>
              </div>
              <div className='relative w-full'>
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
            <div>
              <Option id={"uppercase"} text={"Include Uppercase Letters"} />
              <Option id={"lowercase"} text={"Include Lowercase Letters"} />
              <Option id={"numbers"} text={"Include Numbers"} />
              <Option id={"symbols"} text={"Include Symbols"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
