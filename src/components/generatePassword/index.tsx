type propsType = {
  handleGenerate: () => void;
};

export default function GeneratePasswordButton({ handleGenerate }: propsType) {
  return (
    <div
      onClick={handleGenerate}
      className='flex py-4 md:py-[1.3125rem] gap-3 items-center justify-center bg-neonGreen group outline outline-neonGreen hover:bg-darkGrey '
    >
      <p className='text-base text-darkGrey bodyM group-hover: group-hover:text-neonGreen'>
        GENERATE
      </p>
      <svg
        width='12'
        height='12'
        xmlns='http://www.w3.org/2000/svg'
        className='fill-darkGrey group-hover:fill-neonGreen'
      >
        <path d='m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z' />
      </svg>
    </div>
  );
}
