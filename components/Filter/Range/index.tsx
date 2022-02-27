/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const numFormatter = (num: number) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(0) + "K";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + "M";
  } else if (num <= 999) {
    return num;
  }

  return num;
};

const AmountSlider = () => {
  const [values, setValues] = useState([0, 100000000]);
  const STEP = 1000;
  const MIN = 0;
  const MAX = 100000000;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => {
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "10px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "140%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#548BF4", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "22px",
              width: "22px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            />
          </div>
        )}
      />
      <div id="output" className="flex justify-between mt-5 w-full ">
        <p>{`د.إ ${numFormatter(values[0])} `}</p>

        <p>{`د.إ  ${numFormatter(values[1])} `}</p>
      </div>

      <dd></dd>
    </div>
  );
};

export default AmountSlider;
