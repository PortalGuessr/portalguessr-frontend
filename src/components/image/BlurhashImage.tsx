import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import { BlurhasImageProps } from "../../../types/proptypes/BlurhasImageProps";
import "../../styles/css/difficulty-modifiers.css";

const BlurhashImage = ({
  bhSrc,
  bhAlt,
  bhHash,
  bhHeight = 128,
  bhWidth = 128,
  className = "",
  keepBlur = false,
}: BlurhasImageProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();

    // When the image is still loading,
    // this will ensure the state will remain false every time we change the "src".
    setIsImageLoaded(false);

    // When the image has been loaded.
    img.onload = () => {
      setIsImageLoaded(true);
    };

    img.src = bhSrc;
  }, [bhSrc]);

  if (keepBlur) {
    return (
      <Blurhash
        hash={bhHash}
        width={bhWidth}
        height={bhHeight}
        className={className}
      />
    );
  }

  return isImageLoaded ? (
    <img
      src={bhSrc}
      alt={bhAlt}
      width={bhWidth}
      height={bhHeight}
      className={className}
    />
  ) : (
    <Blurhash
      hash={bhHash}
      width={bhWidth}
      height={bhHeight}
      className={className}
    />
  );
};

export default BlurhashImage;
