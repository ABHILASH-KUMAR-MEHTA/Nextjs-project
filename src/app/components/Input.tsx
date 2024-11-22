import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  name:string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="text-lg leading-7 text-gray-800 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
  );
};

export default InputField;
