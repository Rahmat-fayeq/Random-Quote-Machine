import { useState } from "react";
import { quotes } from "./quotes";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "./features/store/colorSlice";

function App() {
  const [index, setIndex] = useState(0);
  const color = useSelector((state) => state.color.color);
  const dispatch = useDispatch();

  const handleGenerate = () => {
    const randomIndex = Math.floor(Math.random() * 25 + 1);
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    setIndex(randomIndex);
    dispatch(changeColor(color));
  };
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card" style={{ width: "500px" }}>
        <div className="card-body">
          <p
            className="card-text fw-bold fs-4 "
            style={{
              color,
            }}
          >
            <i className="fa fa-quote-left"></i>
            &nbsp;{quotes[index][0]}
          </p>
          <span className="d-flex justify-content-end" style={{ color }}>
            - {quotes[index][1]}
          </span>

          <div className="d-flex justify-content-between mt-4">
            <div className="d-flex gap-2">
              <a
                href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22When%20I%20stand%20before%20God%20at%20the%20end%20of%20my%20life%2C%20I%20would%20hope%20that%20I%20would%20not%20have%20a%20single%20bit%20of%20talent%20left%20and%20could%20say%2C%20I%20used%20everything%20you%20gave%20me.%22%20Erma%20Bombeck"
                target="_blank"
                className="btn btn-sm"
                style={{ backgroundColor: color }}
              >
                <i class="fa-brands fa-twitter" style={{ color: "white" }}></i>
              </a>
              <a
                href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=%E2%80%93Audrey%20Hepburn&content=Nothing%20is%20impossible%2C%20the%20word%20itself%20says%2C%20%E2%80%9CI%E2%80%99m%20possible!%E2%80%9D&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
                target="_blank"
                className="btn btn-sm"
                style={{ backgroundColor: color }}
              >
                <i class="fa-brands fa-tumblr" style={{ color: "white" }}></i>
              </a>
            </div>
            <button
              className="btn btn-sm text-white "
              style={{ backgroundColor: color }}
              onClick={handleGenerate}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
