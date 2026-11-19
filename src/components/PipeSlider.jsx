import React, { useState } from 'react';

export default function PipeSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="ba-slider-container" aria-label="Interactive before and after comparison slider">
      <div className="ba-image-wrapper">
        {/* Before Image (Choked Pipe) */}
        <div className="ba-image before">
          <span className="ba-label before-label">Untreated (Hard Water)</span>
          <img
            src="/assets/images/pipe-scale-comparison.svg"
            alt="Untreated Hard Water Pipe Scale build-up"
            width="800"
            height="450"
          />
        </div>

        {/* After Image (Clean Conditioned Pipe) */}
        <div className="ba-image after" style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}>
          <span className="ba-label after-label">Conditioned (MOLLISAQUA)</span>
          <img
            src="/assets/images/pipe-scale-comparison.svg"
            alt="Conditioned Pipe with clean laminar flow"
            width="800"
            height="450"
          />
        </div>
      </div>

      {/* Divider Handle */}
      <div className="ba-handle" style={{ left: `${sliderPos}%` }}>
        <div className="ba-handle-btn">↔</div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        className="ba-slider-input"
        aria-label="Slide to compare untreated and conditioned pipes"
        onChange={(e) => setSliderPos(Number(e.target.value))}
      />
    </div>
  );
}
