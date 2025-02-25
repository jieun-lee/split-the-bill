import styles from './GetStartedStage.module.css';

interface IGetStartedStage {
	onGetStartedClick: () => void;
}

const GetStartedStage: React.FC<IGetStartedStage> = (props) => {
	const { onGetStartedClick } = props;
	return (
		<div>
			<div className={styles.textWrapper}>
				<h2>Split the Bill</h2>
				<div>Enter your receipt and select who pays for a perfect bill split!</div>
			</div>
			<button className={styles.getStartedButton} onClick={onGetStartedClick}>
				Get Started
			</button>
		</div>
	)
}

export default GetStartedStage;