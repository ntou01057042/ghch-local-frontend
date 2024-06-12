import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import CreateTeamBlock from './CreateTeamBlock';
import OptionSection from './OptionSection';
import TeamOverview from './TeamOverview';
import PRDiscussion from './PRDiscussion';

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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
