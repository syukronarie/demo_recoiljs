import React from "react";
import { useRecoilValue } from "recoil";

import { charCountState } from "../Recoil/Selector";

const CharacterCount: React.FC = () => {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
};

export default CharacterCount;
