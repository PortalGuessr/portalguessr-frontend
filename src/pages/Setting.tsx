import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Setting = () => {
  const [modifiersChecked, setModifiersChecked] = useState(
    JSON.parse(
      localStorage.getItem("MODIFIERS") ||
        "{ blur: false, rotate: false, grayscale: false }"
    )
  );

  const { blur, grayscale, rotate } = modifiersChecked;

  function handleClearClick() {
    const doStatsExist = localStorage.getItem("USER_STATS");

    if (!doStatsExist) {
      alert(
        "Stats not detected. You might have cleared them already or they don't exist!"
      );
      return;
    }

    const isConfirmed = confirm(
      "Are you sure to delete user stats? This is irreversible!"
    );

    if (isConfirmed) {
      localStorage.removeItem("USER_STATS");
    }
  }

  useEffect(() => {
    localStorage.setItem("MODIFIERS", JSON.stringify(modifiersChecked));
  }, [modifiersChecked]);

  return (
    <>
      <Link to="/" className="text-decoration-none">
        <i className="bi bi-arrow-left"></i> Back
      </Link>
      <section className="my-4 mx-2">
        <h4 className="text-center">⚙ Settings</h4>
        <div className="mb-4">
          <hr />
          <h6>📳 Difficulty Modifiers</h6>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Grayscale image"
              onChange={(e) =>
                setModifiersChecked({
                  ...modifiersChecked,
                  grayscale: e.target.checked,
                })
              }
              checked={grayscale}
            />
            <Form.Check
              type="switch"
              label="Keep image blur"
              onChange={(e) =>
                setModifiersChecked({
                  ...modifiersChecked,
                  blur: e.target.checked,
                })
              }
              checked={blur}
            />
            <Form.Check
              type="switch"
              label="Rotate image 180 degree"
              onChange={(e) =>
                setModifiersChecked({
                  ...modifiersChecked,
                  rotate: e.target.checked,
                })
              }
              checked={rotate}
            />
          </Form>
          <hr />
        </div>
        <div className="mb-4">
          <hr />

          <h6 className="text-pg-danger">⛔ Danger Section!</h6>
          <Button
            variant="pg-danger"
            className="text-white"
            onClick={handleClearClick}
          >
            Clear current statistics
          </Button>
          <hr />
        </div>
      </section>
    </>
  );
};

export default Setting;
