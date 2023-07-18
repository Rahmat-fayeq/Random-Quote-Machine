import { useSelector } from "react-redux";

const Wrapper = ({ children }) => {
  const color = useSelector((state) => state.color.color);

  return (
    <div class="container-fluid" style={{ backgroundColor: color }}>
      <div className="d-flex justify-content-center">{children}</div>
    </div>
  );
};

export default Wrapper;
