import { ArrowUpRight, ArrowDown, Heart, Timer, ChartNoAxesCombined, ShieldCheck, Mail, Watch, Cloud, Droplet, Check, Plus } from "lucide-react";

const privacyItems = [
  { n: "01", title: "The information you record", text: "Little Drops stores the details you choose to enter: pumping and breastfeeding sessions, dates, duration, milk amounts, breast side, optional notes, goals, schedules, and preferences. This information makes your history and trends possible." },
  { n: "02", title: "Your devices. Your iCloud.", text: "Your history is saved on your device and syncs through your private iCloud database when available. The app can work offline, with a local fallback if iCloud is unavailable. No custom Little Drops server receives your session data. Apple’s services are governed by Apple’s privacy policy." },
  { n: "03", title: "No ads. No extra account.", text: "Little Drops does not require a separate account, contains no advertising, and enables no analytics by default. Your session history is not sent to an advertising service." },
  { n: "04", title: "Features you control", text: "Reminders use local notifications with your permission. The Apple Watch companion exchanges session information and preferences with your iPhone. Widgets and Live Activities can display session information on your Home Screen or Lock Screen; you control their visibility through your device settings." },
  { n: "05", title: "Backups, sharing & deletion", text: "Backup files containing sessions and preferences are created locally. They are shared only when you choose a destination using the system share sheet. You can edit or delete sessions in History. Copies you export remain wherever you save or share them, so manage those copies separately." },
  { n: "06", title: "Contact & policy updates", text: "If you email Ian Dorosh, your email address and anything you include will be received to respond to your message. Please share only what is needed for your request. Changes to this policy will be reflected here with an updated date. For privacy questions, use the contact details above." },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="brand" href="#marketing" aria-label="Little Drops home"><span className="brand-mark"><Droplet fill="currentColor" strokeWidth={0} /></span>Little Drops<span className="brand-period">.</span></a>
        <nav aria-label="Main navigation"><a href="#marketing">The app</a><a href="#contact">Contact</a><a href="#privacy">Privacy <ArrowUpRight size={14} /></a></nav>
      </header>
      <main id="main">
        <section id="marketing" className="marketing wrap" aria-labelledby="hero-title">
          <div className="hero">
            <div className="hero-copy">
              <p className="eyebrow"><span className="tiny-dot" /> A LITTLE CALM IN YOUR EVERYDAY</p>
              <h1 id="hero-title">Little moments.<br />Little drops.<br /><span>A lot of love.</span></h1>
              <p className="hero-description">A gentle companion for your pumping and breastfeeding journey. Less to keep in your head. More room for what matters.</p>
              <div className="hero-actions"><a className="button primary" href="#features">Meet Little Drops <ArrowDown size={18} /></a><span className="platform"><Watch size={18} /> Made for iPhone & Apple Watch</span></div>
              <div className="quiet-promises"><span><Check size={15} /> No ads</span><span><Check size={15} /> No extra account</span><span><Check size={15} /> Yours, privately</span></div>
            </div>
            <div className="hero-art">
              <div className="halo halo-one" /><div className="halo halo-two" />
              <span className="little-spark spark-one" aria-hidden="true">✳</span>
              <div className="floating-note note-top"><span className="note-icon"><Heart size={19} fill="currentColor" /></span><div>One session at a time.<small>You’re doing something beautiful.</small></div></div>
              <figure className="phone"><img src="/images/today.png" alt="Little Drops Today screen showing a daily goal, session timer, manual logging, and upcoming feeding time. Example data." width="1242" height="2688" fetchPriority="high" /></figure>
              <div className="floating-note note-bottom"><ShieldCheck size={23} /><div>A little peace of mind.<small>Private iCloud sync.</small></div></div>
              <span className="little-spark spark-two" aria-hidden="true">✦</span>
              <span className="image-caption">A peek inside the app · example data</span>
            </div>
          </div>
          <div className="features" id="features">
            <div className="features-heading"><p className="eyebrow">THOUGHTFULLY SIMPLE</p><h2>For your rhythm.<br /><span>At your pace.</span></h2></div>
            <div className="feature"><span className="feature-icon peach"><Timer size={24} /></span><h3>Be here. We’ll keep time.</h3><p>Time pumping or breastfeeding, take a break, or add a session later. The little details have a place.</p></div>
            <div className="feature"><span className="feature-icon mint"><ChartNoAxesCombined size={24} /></span><h3>See the bigger picture.</h3><p>Your history, gentle trends, and personal goals—all together, without the mental arithmetic.</p></div>
            <div className="feature"><span className="feature-icon yellow"><Watch size={24} /></span><h3>A little closer to hand.</h3><p>Log from your Apple Watch, glance at a widget, and make space for your day with optional reminders.</p></div>
          </div>
          <div className="care-note"><Heart size={18} /><p>Created with the NICU journey in mind. Here for the small steps, wherever your feeding journey takes you.</p></div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-inner wrap"><div><p className="eyebrow">02 / SAY HELLO</p><h2 id="contact-title">A real person.<br /><span>A little help.</span></h2><p>Have a question, an idea, or something that could be better?<br className="desktop-break" /> Ian would love to hear from you.</p></div><div className="contact-card"><span className="contact-avatar">ID<span className="avatar-dot" /></span><div className="contact-person"><h3>Ian Dorosh</h3><p>Creator of Little Drops</p></div><a className="email-link" href="mailto:ian.dorosh@outlook.com"><span><small>LET’S TALK</small>ian.dorosh@outlook.com</span><ArrowUpRight size={25} /></a><p className="contact-footnote"><Mail size={14} /> Questions, feedback & privacy enquiries</p></div></div>
        </section>

        <section id="privacy" className="privacy-section wrap" aria-labelledby="privacy-title">
          <div className="privacy-heading"><div><p className="eyebrow">03 / YOUR PRIVACY</p><h2 id="privacy-title">Personal by nature.<br /><span>Private by design.</span></h2></div><div className="privacy-intro"><span className="privacy-icon"><ShieldCheck size={28} /></span><p>Your feeding journey is personal. Here’s how Little Drops handles the information you entrust to it.</p><p className="updated">Privacy policy · Updated November 8, 2026</p></div></div>
          <div className="privacy-summary"><span><ShieldCheck size={18} /> No custom server for your history</span><span><Cloud size={18} /> Private iCloud sync</span><span><Heart size={18} /> Sharing is your choice</span></div>
          <div className="privacy-grid">{privacyItems.map(item => <article className="privacy-item" key={item.n}><span className="privacy-number">{item.n}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
          <div className="website-note"><strong>About this website</strong><p>This page does not ask for feeding records and includes no advertising or analytics scripts added by Little Drops. The hosting provider may process technical request data to serve and secure the page. Email opens in your chosen email app.</p></div>
          <p className="care-disclaimer">Little Drops is a tracking companion. It does not replace guidance from your care team.</p>
        </section>
      </main>
      <footer className="site-footer wrap"><a className="brand footer-brand" href="#marketing"><span className="brand-mark"><Droplet fill="currentColor" strokeWidth={0} /></span>Little Drops.</a><p>Every little drop matters.</p><span>© 2026 Ian Dorosh</span><a href="#marketing" className="back-top">Back to top ↑</a></footer>
    </>
  );
}
