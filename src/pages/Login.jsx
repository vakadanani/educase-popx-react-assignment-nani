import { useNavigate } from 'react-router-dom';
import TextInput from '../components/TextInput.jsx';

function Login() {
  const navigate = useNavigate();

  return (
    <section className="phone form-screen">
      <h1>Signin to your<br />PopX account</h1>
      <p className="subtitle">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

      <form className="form" onSubmit={(event) => { event.preventDefault(); navigate('/profile'); }}>
        <TextInput label="Email Address" type="email" placeholder="Enter email address" />
        <TextInput label="Password" type="password" placeholder="Enter password" />
        <button className="btn btn-disabled" type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;
