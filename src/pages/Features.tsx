import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { StoreButtons } from "../components/StoreButtons";
import { IMAGES, SITE } from "../content/site";
import "./Home.css";
import "./SimplePages.css";

const features = [
  {
    title: "Create Look",
    copy: "Try outfits, hairstyles, makeup, jewelry and complete looks on your own photo with identity-preserving AI styling.",
    img: IMAGES.createLook,
  },
  {
    title: "Beauty Scan",
    copy: "Multi-angle capture and style insights to explore your personal look — not a medical assessment.",
    img: IMAGES.beauty,
  },
  {
    title: "Cinema & Celebrity Inspiration",
    copy: "Browse screen-inspired aesthetics and apply styles made for you. Inspiration — not endorsement unless licensed.",
    img: IMAGES.cinema2,
  },
  {
    title: "Wardrobe",
    copy: "Save pieces, build combinations, and keep look collections in one digital wardrobe.",
    img: IMAGES.wardrobe,
  },
  {
    title: "Social",
    copy: "Share looks and discover community style in Noor’s luxury visual language.",
    img: IMAGES.social,
  },
  {
    title: "Identity Preservation",
    copy: "Face detection, identity reference crops, and quality checks designed to keep you recognizable.",
    img: IMAGES.styled,
  },
];

export function FeaturesPage() {
  return (
    <div className="simple">
      <div className="container simple__hero">
        <p className="eyebrow">Features</p>
        <h1 className="display display-lg">One studio. Endless ways to express yourself.</h1>
        <p className="lede">Everything Noor is built to do — accurately, without exaggerated AI claims.</p>
        <StoreButtons />
      </div>

      <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
        {features.map((f, i) => (
          <Reveal key={f.title}>
            <article
              className="create-look__grid"
              style={{ direction: i % 2 ? "rtl" : "ltr" }}
            >
              <div style={{ direction: "ltr" }}>
                <h2 className="display display-md">{f.title}</h2>
                <p className="lede">{f.copy}</p>
              </div>
              <img
                src={f.img}
                alt={f.title}
                loading="lazy"
                style={{
                  direction: "ltr",
                  borderRadius: "20px",
                  border: "1px solid rgba(201,168,92,0.22)",
                  aspectRatio: "4 / 5",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </article>
          </Reveal>
        ))}
      </div>

      <div className="container simple__actions">
        <Button href="/#download">Download {SITE.name}</Button>
        <Button to="/ai-photo-consent" variant="secondary">
          How photos are used
        </Button>
      </div>
    </div>
  );
}
