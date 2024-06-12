import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ toggleSettings }) => {
    const [openIndexes, setOpenIndexes] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleItem = (index) => {
        setOpenIndexes(prevIndexes =>
            prevIndexes.includes(index)
                ? prevIndexes.filter(i => i !== index)
                : [...prevIndexes, index]
        );
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <button className="menu-icon" onClick={toggleSidebar}>
                ☰
            </button>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="profile-section">
                    <div className="avatar"></div>
                    <div className="profile-text">我的團隊</div>
                </div>
                <Link to="/team-overview" className="menu-item">
                    <div className="menu-title" onClick={() => toggleItem(1)}>
                        專案1
                        {openIndexes.includes(1) ? (
                            <img className="menu-right" src="down-chevron.png" alt="向下" />
                        ) : (
                            <img className="menu-right" src="right-chevron.png" alt="向右" />
                        )}
                    </div>
                    {openIndexes.includes(1) && (
                        <div className="submenu">
                            <div><Link to="/PRDiscussion">Pull request #1 討論區</Link></div>
                            <div><Link to="/PRDiscussion">Pull request #2 討論區</Link></div>

                        </div>
                    )}
                </Link>
                <Link to="#" className="menu-item" onClick={() => toggleItem(2)}>
                    <div className="menu-title">
                        專案2
                        {openIndexes.includes(2) ? (
                            <img className="menu-right" src="down-chevron.png" alt="向下" />
                        ) : (
                            <img className="menu-right" src="right-chevron.png" alt="向右" />
                        )}
                    </div>
                    {openIndexes.includes(2) && (
                        <div className="submenu">
                            <div>Pull request #1 討論區</div>
                            <div>Pull request #2 討論區</div>
                        </div>
                    )}
                </Link>
                <div className="settings">
                    <button className="create-team-button"><Link to="/">建立新團隊</Link></button>
                    <div className="settings-icon" onClick={toggleSettings}></div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
