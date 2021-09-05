import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children, ...rest }: Props) => {
  return (
    <button className="px-5 py-2 bg-green-700 text-green-50 rounded-md hover:bg-green-600" {...rest}>
      {children}
    </button>
  );
};
