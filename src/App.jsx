import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import CreateTeamBlock from './CreateTeamBlock';
import OptionSection from './OptionSection';
import BranchChart from './BranchChart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamOverview from './TeamOverview';

const primaryData = [
  ['main', 'main', , new Date(2024, 2, 30), new Date(Date.now())],
  ['Sung', 'feat:new-interface', , new Date(2024, 2, 31), new Date(2024, 3, 2)],
  ['Wu', 'feat:update-api', , new Date(2024, 3, 1), new Date(2024, 3, 2)],
  ['Chen', 'fix:api-problem', , new Date(2024, 3, 3), new Date(2024, 3, 5)],
  ['Sung, Chen', 'fix:interface-problem', , new Date(2024, 3, 4), new Date(2024, 3, 6)]
];

const tooltipData = [
  ['date', 'main', 'Sung', 'Wu', 'Chen', 'Sung, Chen'],
  [new Date(Date.now() - 9 * 86400000), , 3, 1.2, 2.4, 4],
  [new Date(Date.now() - 6 * 86400000), , 1, 1.2, 3.4, 2],
  [new Date(Date.now() - 3 * 86400000), , 3.6, 1.25, 2.4, 3],
  [new Date(Date.now()), , 2, 5.2, 5.2, 4.4]
];
function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <Router>
      {isSettingsOpen && (
        <div className="overlay" onClick={toggleSettings}>
          <div className='info-section'>
            <OptionSection
              isVisible={isSettingsOpen}
              onClose={() => setIsSettingsOpen(false)}
            />
          </div>
        </div>
      )}
      <div className="app">
        <Sidebar toggleSettings={toggleSettings} />
        <main className="content">
          <Routes>
            <Route path="/" element={<CreateTeamBlock />} />
            <Route path="/team-overview" element={<TeamOverview />} />
            <Route path="/PRDiscussion" element={<PRDiscussion />} />
            <Route path="/branchchart" element={<BranchChart primaryData={primaryData} tooltipData={tooltipData} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
