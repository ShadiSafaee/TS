import React, { FC } from "react";

interface IProps {
  person: string;
  age: boolean;
}
const Greeter: FC<IProps> = ({ person }: IProps) => {
  return <div>Hello, I'm {person}</div>;
};

export default Greeter;
