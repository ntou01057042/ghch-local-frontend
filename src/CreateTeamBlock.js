import React, { useState } from 'react';
import './CreateTeamBlock.css';

const CreateTeamBlock = () => {
    const [inputData, setInputData] = useState({
        teamName: '',
        repoName: '',
        member: ''
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

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="teamName"
                        value={inputData.teamName}
                        onChange={handleInputChange}
                        placeholder="團隊名稱"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="repoName"
                        value={inputData.repoName}
                        onChange={handleInputChange}
                        placeholder="儲存庫名稱"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="member"
                        value={inputData.member}
                        onChange={handleInputChange}
                        placeholder="選擇要邀請的成員"
                    />
                </div>
                <button type="submit" className="submit-button">創建團隊</button>
            </form>
        </div>
    );
};

export default CreateTeamBlock;
