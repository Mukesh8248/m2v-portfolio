"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check, Code2, ExternalLink, Globe2, Layers3, Mail, Menu, MessageCircle, ShoppingBag, Sparkles, X, Zap } from "lucide-react";

const whatsapp = "https://wa.me/918637440243?text=Hi%20M2V%20Technology%2C%20I%27d%20like%20to%20discuss%20a%20website%20project.";
const projects = [
  { id: "store", category: "E-Commerce", title: "Luma Shop", eyebrow: "E-commerce experience", desc: "A fast product discovery and cart flow designed to turn casual browsing into confident purchases.", tech: ["React", "Cart logic", "Responsive UI"] },
  { id: "studio", category: "Business Websites", title: "Northstar Studio", eyebrow: "Business website", desc: "A polished lead-generation site that communicates expertise and makes enquiries effortless.", tech: ["Next.js", "SEO", "Lead capture"] },
  { id: "launch", category: "Landing Pages", title: "Pulse Launch", eyebrow: "Product landing page", desc: "A focused, conversion-ready launch page with clear benefits, social proof and crisp calls to action.", tech: ["JavaScript", "Animations", "Performance"] },
  { id: "folio", category: "Portfolio", title: "Aria Creative", eyebrow: "Creative portfolio", desc: "An editorial showcase that lets visual work lead while keeping navigation simple and memorable.", tech: ["React", "CSS Grid", "Accessibility"] },
];
const filters = ["All", "Business Websites", "E-Commerce", "Landing Pages", "Portfolio"];

function Nav() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><a className="brand" href="#top"><span>M2V</span><small>TECHNOLOGY</small></a><nav className={open ? "nav open" : "nav"} aria-label="Main navigation">{["About","Work","Services"].map(x=><a key={x} href={`#${x.toLowerCase()}`} onClick={()=>setOpen(false)}>{x}</a>)}<Link href="/contact" className="nav-cta">Let's talk <ArrowRight size={16}/></Link></nav><button className="menu" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>
}
function Demo({ id }: { id: string }) {
  const [cart, setCart] = useState(0); const [sent, setSent] = useState(false); const [yearly, setYearly] = useState(false); const [slide, setSlide] = useState(0);
  if(id==="store") return <div className="demo store-demo"><div className="demo-bar"><b>LUMA</b><span>New &nbsp; Shop &nbsp; Stories</span><button aria-label="Shopping cart"><ShoppingBag size={16}/> {cart}</button></div><div className="store-body"><div><small>NEW SEASON / 2026</small><h4>Objects for a<br/>quieter home.</h4><button onClick={()=>setCart(cart+1)}>Add linen lamp · ₹2,499</button></div><div className="product-orb"><span>L</span></div></div></div>;
  if(id==="studio") return <div className="demo studio-demo"><div className="demo-bar"><b>NORTHSTAR.</b><span>Strategy &nbsp; Work</span></div><div className="studio-body"><p>Clarity for ambitious businesses.</p><button onClick={()=>setSent(true)}>{sent ? "Brief received ✓" : "Start a project"}</button><div className="metric"><strong>42%</strong><small>average lift in qualified enquiries</small></div></div></div>;
  if(id==="launch") return <div className="demo launch-demo"><div className="demo-bar"><b>pulse/</b><button onClick={()=>setYearly(!yearly)}>{yearly?"Yearly":"Monthly"}</button></div><div className="launch-body"><span>SHIP FASTER</span><h4>Turn ideas into<br/>momentum.</h4><div><strong>{yearly ? "₹7,990" : "₹799"}</strong><small> / {yearly ? "year" : "month"}</small></div></div></div>;
  const works=["BRAND","SPACE","FORM"];
  return <div className="demo folio-demo"><div className="demo-bar"><b>ARIA®</b><span>{String(slide+1).padStart(2,"0")} / 03</span></div><button className="folio-body" onClick={()=>setSlide((slide+1)%3)}><span>{works[slide]}</span><small>Click to explore →</small></button></div>;
}

export default function Home() {
  const [filter, setFilter] = useState("All");
  const visible = projects.filter(p=>filter==="All"||p.category===filter);
  return <main id="top"><Nav/>
    <section className="hero"><div className="hero-copy"><p className="kicker"><Sparkles size={15}/> Independent web development studio</p><h1>Websites that make your business <em>impossible to ignore.</em></h1><p className="hero-lede">M2V Technology designs and develops fast, polished websites that earn trust, explain your value and turn visitors into enquiries.</p><div className="hero-actions"><a className="button gold" href="#work">Explore our work <ArrowRight size={18}/></a><a className="button ghost" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Chat on WhatsApp</a></div><div className="trust-row"><span><Check/>Responsive by default</span><span><Check/>Built for speed</span><span><Check/>SEO-ready</span></div></div><div className="hero-visual"><div className="logo-frame"><Image src="/m2v-logo.jpeg" alt="M2V Technology gold and silver logo" fill priority sizes="(max-width: 900px) 90vw, 44vw"/></div><div className="code-chip"><Code2/><span><b>Clean code.</b><small>Confident results.</small></span></div></div></section>
    <section className="marquee" aria-label="Capabilities"><div>DESIGN <span>✦</span> DEVELOPMENT <span>✦</span> E-COMMERCE <span>✦</span> PERFORMANCE <span>✦</span> SEO <span>✦</span> RESPONSIVE</div></section>
    <section id="about" className="section about"><div><p className="section-label">01 / ABOUT</p><h2>Small studio attention.<br/><em>Serious digital craft.</em></h2></div><div className="about-copy"><p>M2V Technology is an independent web development business helping startups, local businesses and growing brands build a stronger presence online.</p><p>From the first wireframe to the final launch, every project is shaped around one goal: making your business easier to understand, trust and choose.</p><div className="stats"><span><strong>100%</strong><small>Responsive</small></span><span><strong>3×</strong><small>Device tested</small></span><span><strong>1:1</strong><small>Direct support</small></span></div></div></section>
    <section id="work" className="section work"><div className="section-head"><div><p className="section-label">02 / SELECTED DEMOS</p><h2>Don't take our word for it.<br/><em>Try the work.</em></h2></div><p>Each concept below is an interactive mini experience—click, toggle and explore.</p></div><div className="filters" role="group" aria-label="Filter projects">{filters.map(f=><button key={f} className={filter===f?"active":""} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="project-grid">{visible.map(p=><article className="project-card" key={p.id}><Demo id={p.id}/><div className="project-info"><div><p>{p.eyebrow}</p><h3>{p.title}</h3></div><span className="launch-icon"><ExternalLink/></span><p className="project-desc">{p.desc}</p><div className="tech">{p.tech.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></section>
    <section id="services" className="section services"><div className="section-head"><div><p className="section-label">03 / SERVICES</p><h2>Everything your website<br/><em>needs to work harder.</em></h2></div><p>Clear scope, practical solutions and no unnecessary complexity.</p></div><div className="service-list">{[
      ["01","Business websites","A credible, conversion-focused home for your business—from content structure and UI design to development and launch.","Starting from ₹24,999",<Globe2 key="i"/>],
      ["02","E-commerce stores","Product discovery, cart, checkout and mobile-first shopping experiences built to make buying feel simple.","Starting from ₹39,999",<ShoppingBag key="i"/>],
      ["03","Landing pages","High-impact campaign and product pages with focused messaging, polished motion and a clear conversion path.","Starting from ₹12,999",<Zap key="i"/>],
      ["04","Custom web solutions","Portfolios, booking flows, dashboards and API integrations tailored to the way your business actually operates.","Custom quote",<Layers3 key="i"/>]
    ].map(s=><article key={s[0] as string}><span className="service-num">{s[0]}</span><div className="service-icon">{s[4]}</div><div><h3>{s[1]}</h3><p>{s[2]}</p></div><strong>{s[3]}</strong></article>)}</div></section>
    <section className="process section"><p className="section-label">04 / HOW IT WORKS</p><div className="process-grid"><h2>A clear path from<br/><em>idea to launch.</em></h2><ol><li><span>01</span><div><b>Discover</b><p>We align on your audience, goals and must-have features.</p></div></li><li><span>02</span><div><b>Design & build</b><p>You see progress early while the responsive site takes shape.</p></div></li><li><span>03</span><div><b>Refine & launch</b><p>We test, polish and help you go live with confidence.</p></div></li></ol></div></section>
    <section className="cta"><p>HAVE A PROJECT IN MIND?</p><h2>Let's build something<br/><em>worth remembering.</em></h2><div><Link className="button gold" href="/contact">Start your project <ArrowRight/></Link><a href="mailto:varun.v7575.8@gmail.com">varun.v7575.8@gmail.com <Mail size={17}/></a></div></section>
    <footer><a className="brand" href="#top"><span>M2V</span><small>TECHNOLOGY</small></a><p>Thoughtful websites for ambitious businesses.</p><div><a href="mailto:varun.v7575.8@gmail.com">Email</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><Link href="/contact">Contact</Link></div><small>© 2026 M2V Technology. All rights reserved.</small></footer>
    <a className="float-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with M2V Technology on WhatsApp"><MessageCircle/><span>Let's chat</span></a>
  </main>;
}
