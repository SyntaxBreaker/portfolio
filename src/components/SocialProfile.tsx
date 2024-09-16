interface SocialProfileProps {
  href: string;
  imgSrc: string;
  label: string;
}

function SocialProfile({ href, imgSrc, label }: SocialProfileProps) {
  return (
    <a href={href} target="_blank" className="social-profiles__link">
      <img src={imgSrc} className="social-profiles__image" alt="" /> {label}
    </a>
  );
}

export default SocialProfile;
