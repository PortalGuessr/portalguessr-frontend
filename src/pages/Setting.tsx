import { useState, useEffect, useContext } from "react";
import { AlertContext } from "../../types/utiltypes/AlertContextType";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Setting = () => {
  const { showAlert } = useContext(AlertContext);

  const [modifiersChecked, setModifiersChecked] = useState(
    JSON.parse(
      localStorage.getItem("MODIFIERS") ||
        '{ "blur": false, "rotate": false, "grayscale": false }'
    )
  );

  const { blur, grayscale, rotate } = modifiersChecked;

  function handleClearClick() {
    const doStatsExist = localStorage.getItem("USER_STATS") ? true : false;

    if (!doStatsExist) {
      showAlert(
        "User stats not detected! Either you have cleared them previously or they don't exist yet.",
        "danger",
        2000
      );
      return;
    }

    localStorage.removeItem("USER_STATS");
    showAlert("User stats have been cleared!", "success", 2000);
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
          <p>These modifiers change how the image would appear in your game.</p>
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
              label="Keep image blurred"
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
              label="Invert image upside down"
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
          <p>WARNING: This action is irreversible!</p>

          <Button
            variant="pg-danger"
            className="text-white"
            onClick={handleClearClick}
          >
            Clear Statistics
          </Button>
          <hr />
        </div>
      </section>
    </>
  );
};

export default Setting;
