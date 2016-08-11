import React from 'react';
import ContactForm from '../contact/ContactForm';
import Image from '../shared/Image';
import styles from './Main.scss';

export default class Main extends React.Component {

	render() {

		return (
      <div>
        <div className={`page ${styles.main}`}>
          <section className={styles.top}>
            <h1>JAH Software Engineering</h1>
            <h3>Modern custom software done right</h3>
          </section>
        </div>
        <div className={styles.cardWrapper}>
          <div className="page">
            <div className={styles.card}>
              <h2>Engineering</h2>
              <p>
                Stunning applications built using the latest technologies and engineering best practices
              </p>
            </div>
            <div className={styles.card}>
              <h2>Project Management</h2>
              <p>
                From requirements to deployment, we maintain accountability 
                and visibility at all times
              </p>
            </div>
            <div className={styles.card}>
              <h2>Process</h2>
              <p>
                Using the Agile model we communicate efficiently, build quickly, and ship constantly
              </p>
            </div>
          </div>
        </div>
        <div className={`page ${styles.main}`}>
          <section>
            <h2>Services</h2>
            <ul>
              <li>Custom software development</li>
              <li>Renovation of existing applications</li>
              <li>Full-stack engineering, from user interface to database and infrastructure</li>
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
            <h2>Technology</h2>
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
          <section>
            <h2>Process</h2>
            <p>
              We follow the agile process model in our engineering efforts. This means, among other things, that we:
            </p>
            <ul>
              <li>move quickly</li>
              <li>are open to change</li>
              <li>deliver features in continuous increments</li>
              <li>want to make sure you're happy every step of the way</li>
            </ul>
            <p>
              While this holds true to our internal workflows on every 
              project, we also tailor our external processes to meet 
              your needs. For example, if you want daily progress updates 
              emailed to you at close of business, we're more than willing 
              to oblige. If instead you'd rather Skype once a week, we're 
              fine with that as well.
            </p>
          </section>
          <section>
            <h2>Project Management</h2>
            <p>
              We value accountability and transparency throughout every stage of the project. To accomplish this, we:
            </p>
            <ul>
              <li>provide status updates at intervals that match your needs</li>
              <li>build, test, and ship code continuously so that you see our progress and receive tangible deliverables</li>
              <li>use organizational tools that keep historical records of all aspects of the project</li>
            </ul>
          </section>
          <section>
            <ContactForm />
          </section>
        </div>
      </div>
		);
	}

}
