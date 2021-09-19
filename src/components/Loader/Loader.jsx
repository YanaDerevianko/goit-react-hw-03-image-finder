import Loader from "react-loader-spinner";
import { Spinner } from "./Loader.styled";

export const MyLoader = () => {
  return (
    <Spinner>
      <Loader
        type="ThreeDots"
        color="Orange"
        height={100}
        width={100}
        timeout={7000}
      />
    </Spinner>
  );
};
