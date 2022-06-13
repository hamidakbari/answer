import Alert from 'react-bootstrap/Alert';

const MessageBox = (props) => {
  <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
};
export default MessageBox;
