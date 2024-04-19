import React, { useState } from 'react';
import './OptionSection.css';

const OptionSection = ({ isVisible, onClose }) => {
    const [activeSection, setActiveSection] = useState('account');

    const toggleSection = (section) => {
        setActiveSection(section);
    };
    const [inputData, setInputData] = useState({
        Name: '',
        Email: '',
        dfBranch: ''
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputData);
    };

    if (!isVisible) return null;

    return (
        <div className="overlay" onClick={onClose}>
            <div className="info-section" onClick={(e) => e.stopPropagation()}>
                <div className="info-header">
                    <h2>Options</h2>
                    {/* close*/}
                </div>
                <div className="info-content">
                    <div className="info-hamburgar">
                        <div className={`info-option ${activeSection === 'account' ? 'active' : ''}`} onClick={() => toggleSection('account')}>
                            Account
                        </div>
                        <div className={`info-option ${activeSection === 'git' ? 'active' : ''}`} onClick={() => toggleSection('git')}>
                            Git
                        </div>
                    </div>
                    <div className="info-item">{/*右邊區塊 */}
                        {activeSection === 'account' && (
                            <div className='info-account-content'>
                                GitHub.com
                                <div className='NotLoggedIn'>
                                    <div>Sing in to your GitHub account to access your repositories.</div>
                                    <button className='button-class'>Sign into GitHub.com</button>
                                </div>
                                <div className='HadLoggedIn'>
                                    <div className='avatar'></div>
                                    <div className='user-info'>
                                        <div className='username'>username</div>
                                        <div>email:github@gmail.com</div>
                                    </div>
                                    <div><button className='button-class'>Sign out of GitHub.com</button></div>

                                </div>
                            </div>
                        )}
                        {activeSection === 'git' && (
                            <div className='info-git-content'>
                                <div className='formContainer'>
                                    <form onSubmit={handleSubmit}>
                                        <div>Name</div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="Name"
                                                value={inputData.Name}
                                                onChange={handleInputChange}
                                                placeholder=""
                                            />
                                        </div>
                                        <div>email</div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="Email"
                                                value={inputData.Email}
                                                onChange={handleInputChange}
                                                placeholder=""
                                            />
                                        </div>
                                        <div>default branch name for new repositories</div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="dfBranch"
                                                value={inputData.dfBranch}
                                                onChange={handleInputChange}
                                                placeholder=""
                                            />
                                        </div>
                                    </form>
                                </div>


                            </div>
                        )}
                    </div>
                </div>
                <div className="info-footer">
                    <button className="button-class2" onClick={onClose}>save</button>
                    <button className="button-class2" onClick={onClose}>cancel</button>
                </div>
            </div >
        </div >
    );
};

export default OptionSection;
