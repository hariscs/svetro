import styles from './ServiceDetail.module.css';
import Button from '../Button/Button';
import { images } from '../../constants';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const ServiceDetail = ({ title, subtitle, img }) => {
	return (
		<section className={styles.service}>
			<div className='container'>
				<div className={styles.service__flex}>
					<div className={styles.service__info}>
						<h2 className={styles.service__title}>{title}</h2>
						<p className={styles.service__subtitle}>{subtitle}</p>
						<div className={styles.service__list}>
							<div className={styles.service__checkbox}>
								<div className={styles.icon__container}>
									<IconContext.Provider
										value={{ color: '#72b39c', className: 'icon' }}
									>
										<BsFillCheckCircleFill />
									</IconContext.Provider>
									<span>Account Opening</span>
								</div>
							</div>
							<div className={styles.service__checkbox}>
								<div className={styles.icon__container}>
									<IconContext.Provider
										value={{ color: '#72b39c', className: 'icon' }}
									>
										<BsFillCheckCircleFill />
									</IconContext.Provider>
									<span>Account Managment</span>
								</div>
							</div>
						</div>

						<Button>Book this Service</Button>
					</div>
					<div className={styles.service__img}>
						<img src={img} alt='amazon' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceDetail;
