import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import CreateTeamBlock from './CreateTeamBlock';
import OptionSection from './OptionSection';
import BranchChart from './BranchChart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamOverview from './TeamOverview';
import PRDiscussion from './PRDiscussion';
import './input.css';


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
            <Route path="/branchchart" element={<BranchChart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
