import { useParams } from "react-router-dom";

export default function Profile() {
  const data = {
    kai: {
      name: "KAI",
      message: "rover",
      imgsrc: "/profile_kai.jpg",
    },
    suho: {
      name: "SUHO",
      message: "I'm Made in You",
      imgsrc: "/profile_suho.jpg",
    },
  };

  const { username } = useParams();
  let profile = null;
  if (typeof username !== "undefined") {
    profile = data[username];
  }

  return (
    <div>
      <h1>Profile</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.message}</p>
          <img src={profile.imgsrc} alt="profile image" />
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
}
