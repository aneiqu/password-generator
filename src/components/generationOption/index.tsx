import checkIcon from "../../assets/images/icon-check.svg";

type propsType = {
  id: string;
  text: string;
};
export default function Option({ id, text }: propsType) {
  return (
    <div className='flex relative items-center gap-5'>
      <input id={id} type='checkbox' className='absolute peer opacity-0' />
      <span className='top-0 left-0 h-5 w-5 bg-transparent border-2 peer-checked:bg-neonGreen peer-checked:border-0 flex items-center justify-center'>
        <img src={checkIcon}></img>
      </span>
      <label htmlFor={id} className='text-base'>
        {text}
      </label>
    </div>
  );
}
