import React from "react";

interface GreeterProps {
  person: string;
  age: number;
}
const Greeter = ({ person, age }: GreeterProps): JSX.Element => {
  return (
    <div>
      Hello, I'm {person} and {age} years old,
    </div>
  );
};

export default Greeter;
