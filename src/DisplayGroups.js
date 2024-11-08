// DisplayGroups.js
import React, { useState, useEffect } from 'react';
import { db, ref, get } from './firebaseConfig'; // Import Firebase functions
import './DisplayGroups.css'; 

const DisplayGroups = () => {
  const [groups, setGroups] = useState([]); // State to store groups

  // Function to fetch all groups from Firebase Realtime Database
  const fetchGroups = () => {
    const groupRef = ref(db, 'groups');
    get(groupRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const groupList = [];
          for (let id in data) {
            groupList.push({ id, ...data[id] });
          }
          setGroups(groupList);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching groups: ", error);
      });
  };

  // Call fetchGroups when the component mounts
  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <div>
      <h2>All Social Media Groups</h2>
      <center>
      <ul>
        {groups.length === 0 ? (
          <p>No groups available</p>
        ) : (
          groups.map((group) => (
            <li key={group.id}>
              {group.name} - {group.type}
            </li>
          ))
        )}
      </ul>
      </center>
    </div>
  );
};

export default DisplayGroups;
