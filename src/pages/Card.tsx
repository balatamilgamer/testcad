import * as React from "react";
import "../card.css";
interface CardProps {
  title: string;
}
const Card: React.FunctionComponent<CardProps> = props => {
  const [count, setCount] = React.useState(0);

  const clicked = () => {
    setCount(count + 1);
  };
  return (
    <div className="card">
      <div className="head">
        {props.title}- {count}
      </div>
      <div className="body">{props.children}</div>
      <button onClick={clicked}>Click</button>
    </div>
  );
};

export default Card;

/**
 * <Card  title="sdfsdf">
 * sdfdf ksdjhfs
 * </Card>]
 * const [stateName,stateSetter] = React.UseState(defultValue);
 */
