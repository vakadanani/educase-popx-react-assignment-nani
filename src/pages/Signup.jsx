import { useNavigate } from 'react-router-dom';
import TextInput from '../components/TextInput.jsx';

function Signup() {
  const navigate = useNavigate();

  return (
    <section className="phone signup-screen">
      <h1>Create your<br />PopX account</h1>

      <form className="signup-form" onSubmit={(event) => { event.preventDefault(); navigate('/profile'); }}>
        <TextInput label="Full Name" required value="Marry Doe" />
        <TextInput label="Phone number" required value="Marry Doe" />
        <TextInput label="Email address" required type="email" value="Marry Doe" />
        <TextInput label="Password" required type="password" value="Marry Doe" />
        <TextInput label="Company name" value="Marry Doe" />

        <div className="radio-block">
          <p>Are you an Agency?<b>*</b></p>
          <label><input type="radio" name="agency" defaultChecked /> <span>Yes</span></label>
          <label><input type="radio" name="agency" /> <span>No</span></label>
        </div>

        <button className="btn btn-primary signup-btn" type="submit">Create Account</button>
      </form>
    </section>
  );
}

export default Signup;
