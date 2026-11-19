import React from 'react';

export default function FaqAccordion() {
  return (
    <div className="faq-list">
      <details className="faq-item" open>
        <summary className="faq-summary">How is a Water Conditioner different from a traditional Water Softener?</summary>
        <div className="faq-answer">
          Traditional water softeners use chemical ion-exchange resins that swap healthy calcium and magnesium minerals for sodium (salt). They require constant 25kg salt bag replenishment, continuous electrical supply, and dump hundreds of litres of salty backwash down the drain. The MOLLISAQUA® Water Conditioner is a 100% physical catalytic device: it alters the crystal structure of calcium from sticky Calcite to non-stick Aragonite without removing essential minerals, without using salt, and with zero water waste.
        </div>
      </details>

      <details className="faq-item">
        <summary className="faq-summary">Will it reduce the TDS of my borewell water?</summary>
        <div className="faq-answer">
          No. A water conditioner does not reduce TDS because it does not remove minerals from the water. Instead, it conditions the hard minerals so they cannot crystallize and stick to your pipes, geysers, taps, or skin. Only reverse osmosis (RO) systems reduce TDS (which is necessary for drinking water, but wasteful and corrosive for whole-house utility lines).
        </div>
      </details>

      <details className="faq-item">
        <summary className="faq-summary">Where is the product installed?</summary>
        <div className="faq-answer">
          It is installed inline on your main water inlet pipe: either directly after the borewell pump discharge, after the municipal meter, or on the outlet line from the overhead storage tank to your bathrooms. Standard plumbing unions and threads make installation fast and clean for any local plumber.
        </div>
      </details>

      <details className="faq-item">
        <summary className="faq-summary">Does it require regular maintenance, cartridge changes, or power?</summary>
        <div className="faq-answer">
          None whatsoever! The catalytic alloy core operates passively via hydrodynamic water turbulence and redox reaction. There are no consumable cartridges, no salt to add, no resin beads to wash, and no electrical connection needed. The solid stainless steel housing is built for durable long-term performance.
        </div>
      </details>

      <details className="faq-item">
        <summary className="faq-summary">Can I see the product in action before purchasing?</summary>
        <div className="faq-answer">
          Yes, absolutely! We encourage all prospective buyers to visit our live working demonstration unit located at <strong>A/1501, Riviera Springs, Skycity, Club O7 Road, Shela, Ahmedabad – 58</strong>. Contact Mukeshbhai Thakkar on +91 79845 15685 to arrange a convenient time.
        </div>
      </details>
    </div>
  );
}
