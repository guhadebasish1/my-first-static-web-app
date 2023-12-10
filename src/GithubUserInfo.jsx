import React, { useEffect, useState } from 'react';

const GitHubUserList = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const fetchGitHubUsers = async () => {
            try {
                const response = await fetch('https://api.github.com/users');
                const data = await response.json();
                setUserList(data);
            } catch (error) {
                console.error('Error fetching GitHub users:', error);
            }
        };

        fetchGitHubUsers();
    }, []);

    return (
        <div>
            <h1>GitHub User List</h1>
            <ul>
                {userList.map(user => (
                    <li key={user.id}>
                        <img src={user.avatar_url} alt={user.login} width="40" height="40" />
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                            {user.login}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitHubUserList;
