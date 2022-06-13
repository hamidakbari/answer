import { useReducer, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import User from '../components/User';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, users: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const UserScreen = () => {
  const [{ loading, error, users }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    users: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const data = await fetch('http://localhost:5000/users').then((res) =>
          res.json()
        );
        console.log(data);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);
  return loading ? (
    <div>
      <LoadingBox />
    </div>
  ) : error ? (
    <div>
      <MessageBox variant="danger">{error}</MessageBox>
    </div>
  ) : (
    <div>
      <ListGroup>
        {users.map((user) => (
          <ListGroup.Item>
            <User key={user.id} user={user} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
export default UserScreen;
