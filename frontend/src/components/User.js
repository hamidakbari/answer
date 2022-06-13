import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const User = (props) => {
  const { user } = props;
  return (
    <div className="zoom my-5">
      <Container>
        <Card>
          <Card.Header>Personal User information</Card.Header>
          <Card.Body>
            <Card.Title className="d-flex justify-content-around">
              <h4>Username:{user.username}</h4>
            </Card.Title>
            <Card.Text>
              <Row>
                <Col>
                  Adress: {user.address.street} {user.address.suite}{' '}
                  {user.address.city} {user.address.zipcode}
                </Col>
                <Col>
                  User Geo Location : Lattitude: {user.address.geo.lat}{' '}
                  Longitude: {user.address.geo.lng}
                </Col>
                <Col>user Phone: {user.phone}</Col>
              </Row>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href={user.website}>User WebSite </Card.Link>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};
export default User;
