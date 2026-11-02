import React, { useState } from 'react';

const DRIVE_MODES = ['SPORT', 'SAND DUNE', 'BAJA', 'ECO'];

export default function Dashboard({ is4WD, setIs4WD }) {
  const [modeIdx, setModeIdx] = useState(0);

  return (
    <>
      {/* Interactive Hotspot directly over the Dashboard Screen */}
      <div 
        className="cockpit-dash-hotspot"
        onClick={() => setModeIdx((prev) => (prev + 1) % DRIVE_MODES.length)}
        title="Digital Dashboard: Click to cycle Ride Mode"
      >
        {modeIdx > 0 && (
          <div className="active-mode-tooltip">
            MODE: {DRIVE_MODES[modeIdx]}
          </div>
        )}
      </div>

      {/* Interactive 4WD Lock Hotspot (Positioned on lower right handlebar) */}
      <div
        className={`cockpit-4wd-indicator ${is4WD ? 'lock-diff' : ''}`}
        title="Toggle 4WD Lock Mode"
        onClick={() => setIs4WD(!is4WD)}
      >
        <span className="badge-4wd">{is4WD ? '4WD LOCK' : '4WD'}</span>
        <span className="badge-lock-dot"></span>
      </div>
    </>
  );
}
