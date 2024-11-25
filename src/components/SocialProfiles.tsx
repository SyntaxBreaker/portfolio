import SocialProfile from "./SocialProfile";

const socialProfilesData = [
  {
    id: 0,
    href: "https://github.com/SyntaxBreaker",
    imgSrc: "../github.svg",
    label: "Github",
  },
  {
    id: 1,
    href: "https://codepen.io/SyntaxBreaker",
    imgSrc: "../codepen.svg",
    label: "Codepen",
  },
  {
    id: 2,
    href: "https://dev.to/SyntaxBreaker",
    imgSrc: "../dev.svg",
    label: "Dev.to",
  },
];

function SocialProfiles() {
  return (
    <section className="social-profiles">
      <h2 className="social-profiles__title">Socials</h2>
      <div className="social-profiles__links">
        {socialProfilesData.map((socialProfile) => (
          <SocialProfile
            key={socialProfile.id}
            href={socialProfile.href}
            imgSrc={socialProfile.imgSrc}
            label={socialProfile.label}
          />
        ))}
      </div>
    </section>
  );
}

export default SocialProfiles;
