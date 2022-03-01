/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { numFormatter } from "../../../utils/numFormatter";


type interfaceProps = {
    minValue: number;
  maxValue: number;
}

const AmountSlider = ({minValue , maxValue}: interfaceProps)  => {
  const [values, setValues] = useState([0, 1000000]);
  const STEP = 1000;
  const MIN = 0;
  const MAX = maxValue;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={minValue}
        max={maxValue}
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
            //   background: '#A3B1E1',
            
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
                  colors: ["#ccc", "#A3B1E1", "#ccc"],
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
              borderRadius: "50px",
              backgroundColor: "#1C3988",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
              border:'none'
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                // backgroundColor: isDragged ? "red" : "#CCC",
              }}
            />
          </div>
        )}
      />
      <div id="output" className="flex justify-between mt-5 w-full ">
        <p>{`د.إaed  ${numFormatter(values[0])} `}</p>

        <p>{`د.إaed   ${numFormatter(values[1])} `}</p>
      </div>

      <dd></dd>
    </div>
  );
};

export default AmountSlider;
