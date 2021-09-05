import React from "react";
import { useRecoilState } from "recoil";

import { textState } from "../Recoil/Atom";

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Text: {text}
    </div>
  );
}

export default TextInput;
