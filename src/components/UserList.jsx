import { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';

// Fetches and renders the remote user directory.
const UserList = () => {
  // Collection of users retrieved from the API.
  const [users, setUsers] = useState([]);
  // Loading flag driving the status messages.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    // Request all users while handling cancellation and errors.
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
          signal: controller.signal,
        });
        if (!cancelled) {
          setUsers(response.data);
        }
      } catch (error) {
        if (!cancelled) {
          console.error('Error fetching users:', error);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchUsers();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  // Accessible section toggling between status messages and the user list.
  return (
    <section aria-label="User directory">
      {isLoading ? (
        <p role="status" aria-live="polite">Chargement des utilisateurs…</p>
      ) : users.length === 0 ? (
        <p role="status" aria-live="polite">Aucun utilisateur trouvé.</p>
      ) : (
        <ul className="user-list">
          {users.map((user, index) => (
            <li key={user.id} style={{ '--card-index': index }}>
              <User user={user} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default UserList;