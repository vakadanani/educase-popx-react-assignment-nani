import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <section className="phone landing-screen">
      <div className="landing-content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
        <button className="btn btn-primary" onClick={() => navigate('/signup')}>Create Account</button>
        <button className="btn btn-secondary" onClick={() => navigate('/login')}>Already Registered? Login</button>
      </div>
    </section>
  );
}

export default Landing;
