import React from "react";

import CharacterCount from "./CharacterCount";
import TextInput from "./TextInput";

const TextCounter: React.FC = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};

export default TextCounter;
