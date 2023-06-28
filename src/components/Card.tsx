import { CardProps } from "./Card.types";

export const Card = ({ children, ...htmlProps }: CardProps) => {
  return (
    <div
      className="card w-96 card-bordered bg-base-100 shadow-xl px-lg cursor-pointer hover:bg-sky-700/25"
      {...htmlProps}
    >
      <div className="card-body">{children}</div>
    </div>
  );
};
