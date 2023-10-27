import Button from "react-bootstrap/Button";

interface ShareStatsProps {
  onScreenshotClick: () => void;
}

const Share = ({ onScreenshotClick }: ShareStatsProps) => {
  return (
    <div className="mb-4">
      <h5 className="text-center">😎 Share</h5>
      <div className="d-flex justify-content-center align-items-center">
        <Button variant="pg-primary" onClick={onScreenshotClick}>
          <i className="bi bi-image fill"></i> <span>Take Screenshot</span>
        </Button>
      </div>
    </div>
  );
};

export default Share;
