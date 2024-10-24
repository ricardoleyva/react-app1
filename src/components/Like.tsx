import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [filled, setFilled] = useState(false);
  const toggle = () => {
    setFilled(!filled);
    onClick();
  };
  if (filled) return <FaHeart onClick={toggle} color="#ff6b81" size={30} />;
  return <FaRegHeart onClick={toggle} color="#ff6b81" size={30} />;
};

export default Like;
