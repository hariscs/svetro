import { Consult, Header, ServiceHeader, Faq } from '../container';
import { images } from '../constants';
import { ServiceDetail } from '../components';
import { motion } from 'framer-motion';

const ebay = {
	title: 'Selling on eBay',
	subtitle:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat impedit exercitationem doloribus, libero voluptate. Quae maxime perferendis earum iure.',
	btntext: 'Get a free Consultation',
	img: images.ebayimg,
};

const serviceData = [
	{
		title: 'eBay creation and management',
		subtitle:
			'We will take care of your account opening and also manage the account as your users grow. We will make sure that your account scales with your growing business needs. With us, your account is not in danger.',
		img: images.amazonimg,
	},

	{
		title: 'Account creation and management',
		subtitle:
			'We will take care of your account opening and also manage the account as your users grow. We will make sure that your account scales with your growing business needs. With us, your account is not in danger.',
		img: images.amazonimg,
		order: true,
	},
	{
		title: 'Account creation and management',
		subtitle:
			'We will take care of your account opening and also manage the account as your users grow. We will make sure that your account scales with your growing business needs. With us, your account is not in danger.',
		img: images.amazonimg,
	},
];

const headerData = {
	title: 'Our Selling on eBay package comes with a lot of features',
	subtitle:
		'Lorem ipsum a lot of text and there is so much that we have to do to get this to look the way we want it to. This is placeholder text describing this visitor to this site.',
};

const Ebay = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Header
				title={ebay.title}
				subtitle={ebay.subtitle}
				btnText={ebay.btntext}
				img={ebay.img}
			/>

			<ServiceHeader title={headerData.title} subtitle={headerData.subtitle} />
			{serviceData.map((data) => (
				<ServiceDetail
					title={data.title}
					subtitle={data.subtitle}
					img={data.img}
					order={data.order}
				/>
			))}

			<Faq />
			<Consult />
		</motion.section>
	);
};

export default Ebay;
