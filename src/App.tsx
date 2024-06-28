/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./App.css";
import copyIcon from "./assets/images/icon-copy.svg";
import GeneratePasswordButton from "./components/generatePasswordBttn";
import Option from "./components/generationOption";
import LengthSlider from "./components/passwordLengthSlider";
import PasswordStrength from "./components/passwordStrength";
import GeneratePassword from "./services/passwordGenerator";

function App() {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [passwordStrength, setPasswordStrength] = useState<number>(0);
  const [password, setPassword] = useState<any>("");
  const [copiedOpacity, setCopiedOpacity] = useState<number>(0);
  const [options, setOptions] = useState<any>({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  useEffect(() => {
    setPasswordStrength(
      sliderValue === 0
        ? 0
        : sliderValue <= 6
        ? 1
        : sliderValue > 6 && sliderValue < 9
        ? 2
        : sliderValue > 8 && sliderValue <= 11
        ? 3
        : 4
    );
  }, [sliderValue]);

  const handleCopy = () => {
    if (password.length <= 0) return;
    setCopiedOpacity(100);
    navigator.clipboard.writeText(password);
    setTimeout(() => {
      setCopiedOpacity(0);
    }, 500);
  };
  const handleGenerate = () => {
    if (sliderValue < 1 || !Object.values(options).some((el) => el)) return;
    setPassword(
      GeneratePassword({
        length: sliderValue,
        includeUpper: options.uppercase,
        includeLower: options.lowercase,
        includeNumbers: options.numbers,
        includeSymbols: options.symbols,
      })
    );
  };

  return (
    <div className='font-JetBrains text-aWhite'>
      <div className='flex flex-col gap-4 md:gap-6 px-4 md:px-0 py-16 md:pt-[8.3125rem]  mx-auto md:max-w-[33.75rem]'>
        <div className='flex justify-center text-grey md:mb-[0.4375rem]'>
          <p className='text-base md:text-2xl'>Password Generator</p>
        </div>
        <div className='flex justify-between items-center px-4 md:px-8 py-4 md md:py-[1.1875rem] bg-darkGrey'>
          <input
            disabled
            className='headingM headingL bg-transparent placeholder-aWhite placeholder-opacity-25'
            placeholder='P4$5W0rD!'
            value={password}
          ></input>
          <div className='relative'>
            <p
              className={`absolute right-0 mr-8 text-neonGreen duration-300 opacity-${copiedOpacity}`}
            >
              COPIED
            </p>
            <img onClick={handleCopy} src={copyIcon} className='h-5 md:h-6 ' alt='Copy password' />
          </div>
        </div>
        <div className='bg-darkGrey p-4 md:px-8 md:pt-6 md:pb-8'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2 md:gap-4'>
              <div className='flex items-center justify-between'>
                <p className='text-base bodyM'>Character Length</p>
                <p className='headingM text-neonGreen headingL'>{sliderValue}</p>
              </div>
              <LengthSlider sliderValue={sliderValue} setSliderValue={setSliderValue} />
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
            <PasswordStrength passwordStrength={passwordStrength} />
            <GeneratePasswordButton handleGenerate={handleGenerate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
