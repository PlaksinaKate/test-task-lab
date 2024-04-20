import { IChildren, IRest } from "../../../models";

export function Wr({ children, ...rest }: IChildren & IRest) {
  return (
    <div className={'wr'} {...rest}>
      {children}
    </div>
  );
}
