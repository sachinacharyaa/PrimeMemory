interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
export function Input({ onChange, placeholder }: InputProps) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2 w-64 text-center border rounded m-2"
        onChange={onChange}
      ></input>
    </div>
  );
}
