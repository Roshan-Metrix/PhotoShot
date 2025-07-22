type ButtonsProps = {
  Name : string
}

export const Buttons =(props: ButtonsProps) => {
  return (
    <button className="mx-4 my-2 py-1 px-4 bg-neutral-800 text-white rounded hover:bg-blue-600 transition duration-300 cursor-pointer">
      {props.Name}</button>
  );
};