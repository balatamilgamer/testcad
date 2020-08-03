import * as React from "react";

interface HelloTypes {
  name: string;
  age: number;
}

const Hello: React.FunctionComponent<HelloTypes> = props => {
  return (
    <div>
      {" "}
      Hello {props.name} !! is {props.age}
    </div>
  );
};

export default Hello;
