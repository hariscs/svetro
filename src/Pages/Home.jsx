import React from 'react';
import { Client } from '../components';
import {
	Consult,
	Header,
	LatestBlogs,
	ServiceSection,
	Stats,
	TrackRecord,
} from '../container';
import Faq from '../container/Faq/Faq';
import { images } from '../constants';
import { motion } from 'framer-motion';
const home = {
	title: 'First-class, cutting-edge solutions for your business',
	subtitle:
		'We discover undiscovered markets and give our clients a competitive edge.',
	btntext: 'Get a free Consultation',
	img: images.heroImg,
};

const Home = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Header
				title={home.title}
				subtitle={home.subtitle}
				btnText={home.btntext}
				img={home.img}
			/>
			<TrackRecord />
			<ServiceSection />
			<Stats />
			<Client />
			<Consult />
			<Faq />
			<LatestBlogs />
		</motion.section>
	);
};

export default Home;
