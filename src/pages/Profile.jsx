function Profile() {
  return (
    <section className="phone profile-screen">
      <header className="profile-header">Account Settings</header>
      <div className="profile-card">
        <div className="avatar-wrap">
          <img className="avatar" src="/assets/profile.png" alt="Marry Doe" />
          <img className="camera" src="/assets/camera.svg" alt="camera" />
        </div>
        <div className="profile-info">
          <h2>Marry Doe</h2>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>
      <p className="profile-text">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </section>
  );
}

export default Profile;
