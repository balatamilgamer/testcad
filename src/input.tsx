import * as React from "react";

const Inputs = () => {
  const [name, setName] = React.useState("Naveen");

  const onInputChange = (e: any) => {
    console.log(e.currentTarget.value);
    setName(e.currentTarget.value);
  };
  return (
    <div>
      <form
        onSubmit={e => {
          console.log(e);
        }}
      >
        Your Name <strong>{name}</strong> <br />
        <input name="name" value={name} onChange={onInputChange} />
      </form>
    </div>
  );
};

export default Inputs;
