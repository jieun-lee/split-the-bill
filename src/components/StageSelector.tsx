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
	// TODO: uncomment after setting stage from Get Started step
	// if (currentStage === Stage.GetStarted) {
	// 	return null;
	// }

	// TODO: hide the back button for the Create Receipt stage
	return (
		<div className={styles.wrapper}>
			{previousStage !== undefined && (
				<button onClick={() => setStage(previousStage)}>
					{getStageName(previousStage)}
				</button>
			)}
			<div>
				{getStageName(currentStage)}
			</div>
			{nextStage !== undefined && (
				<button onClick={() => setStage(nextStage)}>{
					getStageName(nextStage)}
				</button>
			)}
		</div>
	)
}

export default StageSelector;