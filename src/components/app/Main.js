import React from 'react';
import ContactForm from '../contact/ContactForm';
import Image from '../shared/Image';
import styles from './Main.scss';

export default class Main extends React.Component {

	render() {

		return (
			<div className={`page ${styles.main}`}>
				<section>
					<h1>Modern custom software done right</h1>
					<p>
						We build great stuff
					</p>
				</section>
				<section>
					<h2>Services</h2>
					<p>
						The core of our company is engineering. We provide full service software 
						development solutions built by the technology industry's best software engineers.
					</p>
					<p>
						We create amazing systems and employ engineering best practices in every component 
						of your application: user interface, frontend, API, backend, database, and infrastructure.
					</p>
				</section>
				<section>
					<h2>Platforms</h2>
					<p>
						We build full-stack applications that run on all major clients. Web based 
						software is in high demand right now thanks to models like Software as a 
						Service (SaaS), Internet of Things (IoT), and of course, cloud everything. 
						We have deep expertise in developing complex web based applications, and in 
						doing so using open source technology to help your budget.
					</p>
					<p>
						But what's a modern software system without a mobile client? We make sure 
						you remain on the cutting edge by providing mobile application development 
						services for both the iOS and Android platforms.
					</p>
					<p>
						And by standing on the shoulders of great open source projects like Electron, 
						building high performance and aesthetically pleasing desktop applications is 
						in our wheelhouse as well.
					</p>
				</section>
				<section>
					<h2>Technology</h2>
					<p>
						Technology is our business. We have struck gold with the tech stacks we use 
						day in and day out. We have found the ultimate balance of the two sides of 
						technology—bleeding edge, and tried & true.
					</p>
					<p>
						For web based systems we use the amazing backend environments Python and 
						Node.js. On the frontend we use frameworks such as Angular, Backbone, and 
						React, and libraries such as Bootstrap, Modernizr, and jQuery.
					</p>
					<p>
						On the mobile front, we build native applications for the iOS and Android 
						platforms, and we create hybrid apps that run on all mobile devices.
					</p>
					<p>
						We engineer both relational (SQL) and non-relational (NoSQL) storage to meet 
						your system's needs. Our technologies of choice are PostgreSQL and MongoDB.
					</p>
					<p>
						We scale your applications on Amazon Web Services and DigitalOcean to achieve 
						the maximal levels of performance, reliability, and availability of your software.
					</p>
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
						<li>
							While this holds true to our internal workflows on every 
							project, we also tailor our external processes to meet 
							your needs. For example, if you want daily progress updates 
							emailed to you at close of business, we're more than willing 
							to oblige. If instead you'd rather Skype once a week, we're 
							fine with that as well.
						</li>
					</ul>
				</section>
				<section>
					<h2>Deployment</h2>
					<p>
						Just like our development activities, we follow industry best 
						practices in our deployment processes as well. Continuous Integration 
						(CI) has been a standard for top tech companies for several years. 
						With CI we're constantly creating builds of an entire application's 
						codebase. This allows for catching bugs and other issues as early as possible.
					</p>
					<p>
						A more recent trend in high-tech areas is Continuous Delivery (CD). 
						Using CD methodology, we ensure our test suites are robust and thorough 
						to the point that we can push to production as frequently as we see fit. 
						This means that your application doesn't have to wait for biweekly or monthly 
						updates. Rather, we continually run thousands of automated unit tests, 
						integration tests, and end-to-end tests, allowing us to update your app as 
						early as minutes after encountering production issues.
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
		);
	}

}
