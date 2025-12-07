import logoMob from "../../assets/images/logo-mob.png";
import logoTab from "../../assets/images/logo-tab.png";
import logoMob2x from "../../assets/images/logo-mob@2x.png";
import logoTab2x from "../../assets/images/logo-tab@2x.png";

const imageMap = {
  logoMob,
  logoTab,
  logoMob2x,
  logoTab2x,
};

const Picture = ({ name, alt = "", fallback = null }) => {
  const srcMob = imageMap[`${name}Mob`];
  const srcMob2x = imageMap[`${name}Mob2x`];
  const srcTab = imageMap[`${name}Tab`];
  const srcTab2x = imageMap[`${name}Tab2x`];
  const srcDesc = imageMap[`${name}Desc`];
  const srcDesc2x = imageMap[`${name}Desc2x`];

  if (!srcMob) {
    console.warn(`Image "${name}" not found`);
    return fallback;
  }

  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        srcset={`${srcDesc || srcTab} 1x, ${srcDesc2x || srcTab2x} 2x`}
      />
      <source
        media="(min-width: 768px)"
        srcset={`${srcTab} 1x, ${srcTab2x} 2x`}
      />
      <source
        media="(max-width: 767px)"
        srcset={`${srcMob} 1x, ${srcMob2x} 2x`}
      />

      <img src={srcMob} alt={alt} />
    </picture>
  );
};

export default Picture;
