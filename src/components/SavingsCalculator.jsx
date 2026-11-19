import React, { useState } from 'react';

export default function SavingsCalculator({ onOpenDemo }) {
  const [propertyType, setPropertyType] = useState('residential');
  const [hardness, setHardness] = useState(650);
  const [usage, setUsage] = useState(1200);

  // Calculation Model
  let saltCost = Math.round((usage * 365 / 1000) * (hardness / 400) * 12);
  let powerMultiplier = propertyType === 'society' ? 3.5 : (propertyType === 'industry' ? 6 : (propertyType === 'agriculture' ? 2 : 1));
  let powerCost = Math.round(4500 * powerMultiplier * (hardness / 500));
  let repairMultiplier = propertyType === 'society' ? 4 : (propertyType === 'industry' ? 8 : (propertyType === 'agriculture' ? 2.5 : 1));
  let repairCost = Math.round(3000 * repairMultiplier * (hardness / 600));

  if (propertyType === 'residential') {
    saltCost = Math.min(Math.max(saltCost, 4800), 18000);
    powerCost = Math.min(Math.max(powerCost, 3500), 12000);
    repairCost = Math.min(Math.max(repairCost, 2500), 10000);
  } else if (propertyType === 'society') {
    saltCost = Math.min(Math.max(saltCost, 25000), 95000);
    powerCost = Math.min(Math.max(powerCost, 18000), 65000);
    repairCost = Math.min(Math.max(repairCost, 15000), 55000);
  } else if (propertyType === 'industry') {
    saltCost = Math.min(Math.max(saltCost, 40000), 180000);
    powerCost = Math.min(Math.max(powerCost, 35000), 150000);
    repairCost = Math.min(Math.max(repairCost, 30000), 120000);
  } else if (propertyType === 'agriculture') {
    saltCost = Math.min(Math.max(saltCost, 12000), 45000);
    powerCost = Math.min(Math.max(powerCost, 15000), 50000);
    repairCost = Math.min(Math.max(repairCost, 12000), 45000);
  }

  const total = saltCost + powerCost + repairCost;

  return (
    <div className="calculator-card">
      <div className="calculator-grid">
        <div className="calc-inputs">
          <div className="calc-control">
            <div className="calc-label-row">
              <label htmlFor="calcType">Property / Sector Type:</label>
            </div>
            <select
              id="calcType"
              className="calc-select"
              aria-label="Select property type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="residential">Residential (Flat / Bungalow)</option>
              <option value="society">Housing Society (High-rise / Tenements)</option>
              <option value="industry">Factory / Boiler / Cooling Tower</option>
              <option value="agriculture">Agriculture Farm &amp; Borewell</option>
            </select>
          </div>

          <div className="calc-control">
            <div className="calc-label-row">
              <label htmlFor="calcHardness">Water Hardness Level (TDS / Hardness PPM):</label>
              <span className="calc-badge">{hardness} PPM</span>
            </div>
            <input
              type="range"
              id="calcHardness"
              className="calc-range"
              min="150"
              max="2500"
              step="50"
              value={hardness}
              aria-label="Water Hardness level in PPM"
              onChange={(e) => setHardness(Number(e.target.value))}
            />
            <span className="form-help">Average Gujarat groundwater ranges between 450 - 1800 PPM.</span>
          </div>

          <div className="calc-control">
            <div className="calc-label-row">
              <label htmlFor="calcUsage">Daily Water Consumption (Litres/Day):</label>
              <span className="calc-badge">{usage.toLocaleString('en-IN')} L</span>
            </div>
            <input
              type="range"
              id="calcUsage"
              className="calc-range"
              min="300"
              max="50000"
              step="100"
              value={usage}
              aria-label="Daily water consumption in litres"
              onChange={(e) => setUsage(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="calc-result-box">
          <h4>Estimated Annual Savings</h4>
          <div className="calc-big-number">₹{total.toLocaleString('en-IN')}</div>
          <p className="calc-subtext">Saved every year by switching to MOLLISAQUA Water Conditioner</p>

          <div className="calc-breakdown">
            <div className="breakdown-item">
              <p>Salt Cost Avoided</p>
              <span>₹{saltCost.toLocaleString('en-IN')}</span>
            </div>
            <div className="breakdown-item">
              <p>Power Conserved</p>
              <span>₹{powerCost.toLocaleString('en-IN')}</span>
            </div>
            <div className="breakdown-item">
              <p>Repairs Saved</p>
              <span>₹{repairCost.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <button type="button" className="btn btn-accent btn-sm" style={{ width: '100%' }} onClick={onOpenDemo}>
            Get Exact Custom Quotation
          </button>
        </div>
      </div>
    </div>
  );
}
