const UserCard = () => {
  // Dummy static data
  const profilePhoto = "https://www.w3schools.com/w3images/avatar3.png";
  const name = "Karan";
  const email = "karan@gmail.com";
  const phoneNumber = "1234567890";
  const address = "1865, Basant Vihar, Kalka";

  return (
    <div className="card-container">
      <div className="user-card">
        <div className="profile-pic">
          <img src={profilePhoto} alt="Profile" />
        </div>
        <div className="user-details">
          <h1>{name}</h1>
          <h2>
            <strong>Email:</strong> {email}
          </h2>
          <h2>
            <strong>Phone:</strong> {phoneNumber}
          </h2>
          <h2>
            <strong>Address:</strong> {address}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
