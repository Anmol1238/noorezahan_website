import { CinematicHero } from "@/components/ui/cinematic-hero";
import { NoorButton } from "@/components/ui/noor-button";
import { AppStoreButtons } from "@/components/ui/app-store-buttons";
import { TiltCard } from "@/components/motion/TiltCard";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Button } from "../components/Button";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { Reveal } from "../components/Reveal";
import { IMAGES, SITE } from "../content/site";
import "./Home.css";

const cinema = [
  { src: IMAGES.cinema1, label: "Red-carpet inspiration" },
  { src: IMAGES.cinema2, label: "Editorial fashion" },
  { src: IMAGES.cinema3, label: "Bridal aesthetics" },
  { src: IMAGES.cinema4, label: "Celebrity-inspired" },
  { src: IMAGES.cinema5, label: "Cinema styling" },
];

const steps = [
  { n: "01", title: "Upload", copy: "Start with your photo." },
  { n: "02", title: "Choose", copy: "Pick an outfit, hairstyle, beauty direction or inspiration." },
  { n: "03", title: "Create", copy: `Let ${SITE.name} create your personalized look.` },
  { n: "04", title: "Discover", copy: "Save it, refine it, share it or try something new." },
];

export function HomePage() {
  return (
    <>
      <CinematicHero />

      <section className="section-tight brand-statement">
        <div className="container brand-statement__inner">
          <Reveal>
            <h2 className="display display-xl">{SITE.philosophy}.</h2>
            <hr className="gold-rule" />
            <p>
              Beauty isn&apos;t about becoming someone else. It&apos;s about discovering new ways to express who you
              already are.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" id="studio">
        <div className="container">
          <Reveal>
            <p className="eyebrow">The Studio</p>
            <h2 className="display display-lg">One studio. Endless ways to express yourself.</h2>
          </Reveal>
          <div className="studio-grid">
            <Reveal delay={0.05}>
              <TiltCard className="studio-feature studio-feature--large">
                <img src={IMAGES.createLook} alt="Create Look fashion portrait" loading="lazy" />
                <div>
                  <h3>Create Look</h3>
                  <p>Try outfits, hair, makeup and jewelry on your photo.</p>
                </div>
              </TiltCard>
            </Reveal>
            <Reveal delay={0.12}>
              <TiltCard className="studio-feature">
                <img src={IMAGES.beauty} alt="Beauty scan portrait" loading="lazy" />
                <div>
                  <h3>Beauty Scan</h3>
                  <p>Explore personal style insights — not a medical assessment.</p>
                </div>
              </TiltCard>
            </Reveal>
            <Reveal delay={0.18}>
              <TiltCard className="studio-feature">
                <img src={IMAGES.cinema3} alt="Cinema-inspired styling" loading="lazy" />
                <div>
                  <h3>Cinema Looks</h3>
                  <p>Screen-inspired aesthetics made for you.</p>
                </div>
              </TiltCard>
            </Reveal>
            <Reveal delay={0.24}>
              <TiltCard className="studio-feature">
                <img src={IMAGES.wardrobe} alt="Wardrobe styling" loading="lazy" />
                <div>
                  <h3>Wardrobe</h3>
                  <p>Save pieces and build look collections.</p>
                </div>
              </TiltCard>
            </Reveal>
            <Reveal delay={0.3}>
              <TiltCard className="studio-feature">
                <img src={IMAGES.social} alt="Social beauty community" loading="lazy" />
                <div>
                  <h3>Social</h3>
                  <p>Share looks and discover community style.</p>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section create-look">
        <div className="container create-look__grid">
          <Reveal>
            <p className="eyebrow">Create Look</p>
            <h2 className="display display-lg">See yourself in a new light.</h2>
            <p className="lede">
              Try outfits, hairstyles, makeup, jewelry and complete looks on your own photo.
            </p>
            <ol className="flow">
              <li>Your Photo</li>
              <li>Choose Your Style</li>
              <li>AI Creates Your Look</li>
              <li>Discover a New Expression</li>
            </ol>
            <p className="micro">Identity-preserving AI styling.</p>
            <Button href="#download">Create Your Look</Button>
          </Reveal>
          <Reveal direction="left">
            <figure className="create-look__visual">
              <ParallaxImage
                src={IMAGES.createLook}
                alt="Portrait with fashion styling references"
                className="create-look__visual rounded-[var(--radius-xl)] border border-gold/25"
                imgClassName="aspect-[4/5]"
              />
              <figcaption>Designed around your real face.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section identity">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Identity Preservation</p>
            <h2 className="display display-lg">Style changes. Your identity stays at the center.</h2>
            <p className="lede">
              Noor uses face detection, identity-reference processing and quality checks so styling stays centered on
              you. Results can vary — we don&apos;t claim perfect likeness.
            </p>
          </Reveal>
          <div className="identity__steps">
            {["Face detection", "Identity anchor", "Styling", "Your look"].map((label, i) => (
              <Reveal key={label} delay={i * 0.08} className="identity__step">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{label}</strong>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal-your-noor" id="your-noor">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Your Noor</p>
            <h2 className="display display-md">Style changes. You stay you.</h2>
            <p className="lede">
              Drag to compare an authentic portrait with a styled expression — identity-preserving AI styling, not a new
              face.
            </p>
          </Reveal>
          <Reveal>
            <div className="reveal-your-noor__slider">
              <BeforeAfterSlider
                beforeSrc={IMAGES.hero}
                afterSrc={IMAGES.styled}
                beforeAlt={IMAGES.heroAlt}
                afterAlt={IMAGES.styledAlt}
                beforeLabel="ORIGINAL PHOTO"
                afterLabel="YOUR LOOK"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section beauty">
        <div className="container beauty__grid">
          <Reveal direction="scale">
            <ParallaxImage
              src={IMAGES.beauty}
              alt="Multi-angle beauty portrait"
              className="rounded-[var(--radius-xl)] border border-gold/20"
              imgClassName="aspect-[4/5]"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Beauty Scan</p>
            <h2 className="display display-md">Discover your look. Understand your style.</h2>
            <p className="lede">
              Beauty and style insights designed to help you explore your personal look — never framed as a medical or
              diagnostic assessment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section cinema">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Cinema & Celebrity Inspiration</p>
            <h2 className="display display-md">Inspired by the screen. Made for you.</h2>
            <p className="lede muted">
              Editorial galleries of movie-inspired, red-carpet and bridal aesthetics. Inspiration — not celebrity
              endorsement unless officially licensed.
            </p>
          </Reveal>
        </div>
        <div className="cinema__rail" tabIndex={0} aria-label="Cinematic look gallery">
          {cinema.map((item) => (
            <TiltCard key={item.label} className="cinema__card" intensity={5} lift={4}>
              <img src={item.src} alt={item.label} loading="lazy" />
              <span>{item.label}</span>
            </TiltCard>
          ))}
        </div>
        <div className="container" style={{ marginTop: "1.5rem" }}>
          <Button to="/features" variant="secondary">
            Explore Looks
          </Button>
        </div>
      </section>

      <section className="section wardrobe">
        <div className="container wardrobe__grid">
          <Reveal>
            <p className="eyebrow">Wardrobe</p>
            <h2 className="display display-md">Your wardrobe. Reimagined.</h2>
            <p className="lede">Save clothing, outfit combinations, styling ideas and look collections in one place.</p>
            <Button href="#download">Build Your Wardrobe</Button>
          </Reveal>
          <Reveal>
            <TiltCard className="wardrobe__panel" intensity={4} lift={3}>
              <ParallaxImage
                src={IMAGES.wardrobe}
                alt="Digital wardrobe inspiration"
                className="h-full min-h-[360px]"
                imgClassName="min-h-[360px]"
                speed={0.08}
              />
            </TiltCard>
          </Reveal>
        </div>
      </section>

      <section className="section social">
        <div className="container social__grid">
          <Reveal direction="scale">
            <ParallaxImage
              src={IMAGES.social}
              alt="Shared beauty looks community"
              className="rounded-[var(--radius-xl)] border border-gold/20"
              imgClassName="aspect-[4/5]"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Social</p>
            <h2 className="display display-md">Beauty looks better when it&apos;s shared.</h2>
            <p className="lede">Feed, profiles and look posts — in {SITE.name}&apos;s luxury visual language, not a generic social clone.</p>
            <Button to="/community" variant="secondary">
              Community Guidelines
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="container">
          <Reveal>
            <p className="eyebrow">How It Works</p>
            <h2 className="display display-md">Four steps to a new expression.</h2>
          </Reveal>
          <div className="steps">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1} className="steps__item">
                <span className="steps__n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section showcase" id="download">
        <div className="container showcase__grid">
          <Reveal>
            <p className="eyebrow">The App</p>
            <h2 className="display display-lg">A beauty studio in your pocket.</h2>
            <p className="lede">iOS and Android — Create Look, Beauty Scan, Wardrobe, Cinema looks and more.</p>
            <NoorButton href="/#download">Download {SITE.name}</NoorButton>
            <AppStoreButtons />
          </Reveal>
          <Reveal>
            <div className="phones" aria-hidden>
              <div className="phone phone--a">
                <img src={IMAGES.createLook} alt="" />
              </div>
              <div className="phone phone--b">
                <img src={IMAGES.beauty} alt="" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section trust">
        <div className="container trust__panel">
          <Reveal>
            <p className="eyebrow">Trust</p>
            <h2 className="display display-md">Your identity matters.</h2>
            <ul>
              <li>Photos are processed for AI styling.</li>
              <li>A face region may be created as an identity reference.</li>
              <li>Third-party AI providers may process images to generate looks.</li>
              <li>You control your account and can request deletion.</li>
              <li>You must have permission to upload another person&apos;s photo.</li>
            </ul>
            <div className="trust__actions">
              <Button to="/ai-photo-consent">How We Handle Your Photos</Button>
              <Button to="/privacy" variant="secondary">
                Privacy Policy
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight monetization">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Create more</p>
            <h2 className="display display-md">Create more. Explore more.</h2>
            <p className="lede">
              Free generations and quotas, rewarded ads, coins and subscriptions may be available depending on your
              region and plan. Purchase terms appear in-app and in our Terms.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container trust__panel">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="display display-md">Questions? We&apos;re here.</h2>
            <p className="lede">
              Visit our Help Center, contact us directly, or report a problem — {SITE.email}
            </p>
            <div className="trust__actions">
              <NoorButton to="/contact">Contact Us</NoorButton>
              <NoorButton to="/support" variant="secondary">
                Help / FAQ
              </NoorButton>
              <NoorButton to="/report" variant="ghost">
                Report a Problem
              </NoorButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="final-cta">
        <img src={IMAGES.finalCta} alt="" aria-hidden />
        <div className="final-cta__veil" />
        <div className="container final-cta__content">
          <Reveal>
            <h2 className="display display-xl">{SITE.philosophy}.</h2>
            <p>Your style. Your identity. Your light.</p>
            <div className="hero__actions">
              <NoorButton href="/#download">Download {SITE.name}</NoorButton>
              <NoorButton to="/features" variant="secondary">
                Explore Features
              </NoorButton>
            </div>
            <AppStoreButtons />
          </Reveal>
        </div>
      </section>
    </>
  );
}
