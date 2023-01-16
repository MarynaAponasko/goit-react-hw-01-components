import PropTypes from 'prop-types';
import css from './profile.module.css';

const Profile = ({userName, avatar, tag, location, followersStats, viewsStats, likesStats }) => {
    return (
      <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{userName}</p>
          <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.item}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{followersStats}</span>
    </li>
          <li className={css.item}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{viewsStats}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{likesStats}</span>
    </li>
  </ul>
</div>
    )
}


Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  followersStats: PropTypes.number.isRequired,
  viewsStats: PropTypes.number.isRequired,
  likesStats: PropTypes.number.isRequired,
}


export default Profile