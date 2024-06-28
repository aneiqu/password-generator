import StrengthBar from "./strengthBar";

type propsType = {
  passwordStrength: number;
};

export default function PasswordStrength({ passwordStrength }: propsType) {
  console.log(passwordStrength);
  const strength = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];
  const strengthBars = new Array(4)
    .fill("")
    .map((_, i) => (
      <StrengthBar key={i} achieved={i >= passwordStrength} strength={passwordStrength} />
    ));
  return (
    <div className='flex px-4 md:px-8 py-[0.875rem] md:py-5 md:pt-[1.3125rem] justify-between items-center bg-vDarkGrey'>
      <p className='text-base text-grey bodyM'>STRENGTH</p>
      <div className='flex items-center gap-4'>
        <p className='bodyM md:text-[1.5rem] md:leading-[1.9375rem]'>
          {strength[passwordStrength - 1]}
        </p>
        <div className='flex gap-2'>{strengthBars}</div>
      </div>
    </div>
  );
}
