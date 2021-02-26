import React from "react";

interface IPropsDTO {
  title: string;
}

const Option = ({ title }: IPropsDTO) => {
  return <>{title}</>;
};

export default Option;
