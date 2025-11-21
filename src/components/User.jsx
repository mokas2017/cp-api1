import Card from 'react-bootstrap/Card';
import './user.css';

// Render a single user entry inside a Bootstrap card.
const User = ({ user }) => {
  return (
    <div className="carte">
      <Card as="article" aria-labelledby={`user-${user.id}-name`} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title as="h3" id={`user-${user.id}-name`}>
            {user.username}
          </Card.Title>
          <Card.Text>
            <a href={`mailto:${user.email}`} className="user-email">
              {user.email}
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;