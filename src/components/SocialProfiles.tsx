import { SOCIAL_LINKS } from "../constants";
import SocialProfile from "./SocialProfile";

function SocialProfiles() {
  return (
    <section className="social-profiles">
      <h2 className="social-profiles__title">Socials</h2>
      <div className="social-profiles__links">
        {SOCIAL_LINKS.map((social) => (
          <SocialProfile
            key={social.id}
            href={social.href}
            imgSrc={social.imgSrc}
            label={social.label}
          />
        ))}
      </div>
    </section>
  );
}

export default SocialProfiles;
