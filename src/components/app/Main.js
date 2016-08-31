import React from 'react';
import ContactForm from '../contact/ContactForm';
import Image from '../shared/Image';
import styles from './Main.scss';

export default class Main extends React.Component {

  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
  }

  componentWillMount() {
    this.props.updateHasScrolled(false);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {

    const budgeterLogo = (
      <div className={styles.budgeterLogo}>
        <span className={styles.dollar}>$</span>
        <span className={styles.b}>B</span>
      </div>
    );

    const podsyLogo = (<img className={styles.podsyLogo} src="/images/podsy-logo.png" />);

    return (
      <div>
        <div ref="fold" className={styles.backgroundImg}>
          <div className={`page ${styles.main}`}>
            <section className={styles.top}>
              <div className={styles.opaque}>
                <h1>JAH Software Engineering</h1>
                <h3>Modern custom software done right</h3>
              </div>
            </section>
          </div>
        </div>
        <div className={styles.cardWrapper}>
          <div className="page">
            <div className={styles.card}>
              <h2>Engineering</h2>
              <p>
                We build stunning applications using the latest technologies and engineering best practices
              </p>
            </div>
            <div className={styles.card}>
              <h2>Project Management</h2>
              <p>
                From requirements to deployment, you have accountability 
                and visibility at all times
              </p>
            </div>
            <div className={styles.card}>
              <h2>Process</h2>
              <p>
                Following the Agile model, you see new features rapidly and consistently 
              </p>
            </div>
          </div>
        </div>
        <div className={`page ${styles.main}`}>
          <section>
            <h2>About Us</h2>
            <p>
              We build world-class software tailored to your needs. With an honest, transparent approach, 
              we work with you every step of the way to ensure we build exactly what you want.
            </p>
            <p>
              We are here for one reason: to help you improve your business. Whether you need automation for
              your unique processes, features added to existing apps, or the creation of an entirely new platform,
              we can help.      
            </p>
          </section>
          <section>
            <h2>Services</h2>
            <ul>
              <li>Custom software development</li>
              <li>Renovation of existing applications</li>
              <li>Full-stack engineering, from user interface to infrastructure</li>
              <li>Tailored deployment options</li>
              <li>Cloud hosting and maintenance</li>
            </ul>
          </section>
          <section>
            <h2>Platforms</h2>
            <ul>
              <li>Web/cloud</li>
              <li>Mobile</li>
              <li>Desktop</li>
            </ul>
          </section>
          <section>
            <h2>Technologies</h2>
            <ul>
              <li>React</li>
              <li>React Native</li>
              <li>.NET Core</li>
              <li>Python</li>
              <li>Node.js</li>
              <li>Electron</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Amazon Web Services</li>
              <li>DigitalOcean</li>
            </ul>
          </section>
        </div>
        <div className={styles.showcaseWrapper}>
          <div className="page">
            <h2>Showcase</h2>
            <div className={styles.showcase}>
              <Image src="/images/budgeter.png" link="https://getbudgeter.com" logo={budgeterLogo} />
              <Image src="/images/podsy.png" link="http://podsylisten.com" logo={podsyLogo} />
              <Image logo={<div>Yours!</div>} />
            </div>
          </div>
        </div>
        <div className={`page ${styles.main}`}>
          <section>
            <ContactForm />
          </section>
        </div>
      </div>
    );
  }

  onScroll() {
    clearTimeout(this.timer);
    const y = this.refs.fold.getBoundingClientRect().height;

    this.timer = setTimeout(() => {
      this.props.updateHasScrolled(
        document.body.scrollTop > y ||
        document.documentElement.scrollTop > y
      );
    }, 200);
  }

}
