import ThumbUpFillIcon from "remixicon-react/ThumbUpFillIcon";
import ThumbDownFillIcon from "remixicon-react/ThumbDownFillIcon";
import "./Controls.css";

type ControlsProps = {
  swipeLeft: () => void;
  swipeRight: () => void;
};

function Controls({ swipeLeft, swipeRight }: ControlsProps) {
  return (
    <div className="controls">
      <div className="controls__button" onClick={swipeLeft}>
        <ThumbDownFillIcon size={35} />
      </div>

      <div className="controls__button" onClick={swipeRight}>
        <ThumbUpFillIcon size={35} />
      </div>
    </div>
  );
}

export default Controls;
