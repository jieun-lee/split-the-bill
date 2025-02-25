import { getStageName, Stage } from "@/models/stage";
import styles from './StageSelector.module.css';

interface IStageSelectorProps {
	currentStage: Stage;
	previousStage: Stage | undefined;
	nextStage: Stage | undefined;
	setStage: (stage: Stage) => void;
}

const StageSelector: React.FC<IStageSelectorProps> = (props) => {
	const { currentStage, previousStage, nextStage, setStage } = props;

	// Get Started shows a button on the Stage itself, don't need to render the stage selector
	if (currentStage === Stage.GetStarted) {
		return null;
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.buttonWrapper}>
				{previousStage !== undefined && (
					<button className={styles.button} onClick={() => setStage(previousStage)}>
						{getStageName(previousStage)}
					</button>
				)}
			</div>
			<div className={styles.currentWrapper}>
				{getStageName(currentStage)}
			</div>
			<div className={styles.buttonWrapper}>
				{nextStage !== undefined && (
					<button className={styles.button} onClick={() => setStage(nextStage)}>{
						getStageName(nextStage)}
					</button>
				)}
			</div>
		</div>
	)
}

export default StageSelector;