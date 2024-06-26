import { Dispatch, SetStateAction } from "react";
import checkIcon from "../../assets/images/icon-check.svg";

type propsType = {
  id: string;
  text: string;
  toggled: object;
  value: boolean;
  toggleOption: Dispatch<SetStateAction<object>>;
};
export default function Option({ id, text, toggled, value, toggleOption }: propsType) {
  return (
    <div className='flex relative items-center gap-5'>
      <input
        id={id}
        type='checkbox'
        className='absolute peer opacity-0'
        onChange={() =>
          toggleOption({
            ...toggled,
            [id]: !value,
          })
        }
      />
      <span className='top-0 left-0 h-5 w-5 bg-transparent border-2 peer-checked:bg-neonGreen peer-checked:border-0 flex items-center justify-center'>
        <img src={checkIcon} className={`${value ? "block" : "hidden"}`}></img>
      </span>
      <label htmlFor={id} className='text-base bodyM'>
        {text}
      </label>
    </div>
  );
}
