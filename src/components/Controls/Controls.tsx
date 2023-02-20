import ThumbUpFillIcon from 'remixicon-react/ThumbUpFillIcon';
import ThumbDownFillIcon from 'remixicon-react/ThumbDownFillIcon';
import "./Controls.css";

function Controls() {
  return (
    <div className="controls">
      <div className="controls__button">
        <ThumbDownFillIcon size={35} />
      </div>

      <div className="controls__button">
        <ThumbUpFillIcon size={35} />
      </div>
    </div>
  );
}

export default Controls;
