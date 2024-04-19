import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import CreateTeamBlock from './CreateTeamBlock';
import OptionSection from './OptionSection';

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <>
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
          <div className="createTeamBlock">
            <CreateTeamBlock />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
