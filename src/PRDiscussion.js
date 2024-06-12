import React from 'react';
import './PRDiscussion.css';
import avatar from './img/avatar.jpg';

const PRDiscussion = () => {
    return (
        <div className="pr-discussion">
            <div className="pr-title">
                <h1>Pull Request Title #PR number<span className="status open">Open</span></h1>
                <div className="discussion-container">
                    <div className="discussion-section">
                        <div className="discussion-content-container">
                            <div className="avatar"><img src={avatar} alt="頭像" /></div>
                            <div className="discussion-message">
                                <div className="message-content">(自動生成之PR描述)</div>
                            </div>
                        </div>
                        <div className="discussion-content-container">
                            <div className="discussion-message">
                                <div className="message-content">我覺得...</div>
                            </div>
                            <div className="avatar"><img src={avatar} alt="頭像" /></div>
                        </div>
                        <div className="discussion-content-container">
                            <div className="avatar"><img src={avatar} alt="頭像" /></div>
                            <div className="discussion-message">
                                <div className="message-content">(自動生成之PR描述)</div>
                            </div>
                        </div>
                        <div className="discussion-content-container">
                            <div className="discussion-message">
                                <div className="message-content">我覺得...</div>
                            </div>
                            <div className="avatar"><img src={avatar} alt="頭像" /></div>
                        </div>
                    </div>
                    <div className="input-section">
                        <textarea placeholder="文字輸入區"></textarea>
                        <button className="submit-button-pr">Comment</button>
                    </div>

                </div>

            </div>
            <div className="reviewers-section">
                <h2>Reviewers</h2>
                <ul>
                    <li className="reviewer approved">reviewers1</li>
                    <li className="reviewer approved">reviewers2</li>
                    <li className="reviewer pending">reviewers3</li>
                    <li className="add-reviewer">+</li>
                </ul>
            </div>
            {/* <div className="assistant-section">
                <h2>提示小幫手</h2>
                <p>你的PR已經被所有的reviewer審核通過了！現在你可以將它merge進主分支囉！</p>
                <input type="text" placeholder="輸入你的問題..." />
                <button className="merge-button">Merge</button>
            </div> */}
        </div>
    );
};

export default PRDiscussion;
