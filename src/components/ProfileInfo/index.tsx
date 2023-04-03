import "./index.css";
import phone from "../../assets/img/phone.svg";

export interface ProfileInfoProps {
  title: string;
  img: string;
}

const ProfileInfo = (props: ProfileInfoProps) => {
  return (
    <div className="profile-info-content">
      <div className="img">
        <img src={props.img}></img>
      </div>
      <div className="title">{props.title}</div>
    </div>
  );
};

export default ProfileInfo;
