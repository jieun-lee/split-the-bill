import StageSelector from '@/components/StageSelector';
import { getNextStage, getPreviousStage, Stage } from '@/models/stage';
import AddPayeesStage from '@/stages/AddPayeesStage';
import AllocateItemsStage from '@/stages/AllocateItemsStage';
import CreateReceiptStage from '@/stages/CreateReceiptStage';
import FinalBillStage from '@/stages/FinalBillStage';
import GetStartedStage from '@/stages/GetStartedStage';
import React, { useCallback, useState } from 'react';
import styles from "./SplitTheBill.module.css";
import { ReceiptContext, useReceiptContext } from '@/models/ReceiptContext';

const SplitTheBill: React.FC = () => {
	const [currentStage, setCurrentStage] = useState<Stage>(Stage.GetStarted);
	const context = useReceiptContext();

	const renderStage = useCallback(() => {
		switch (currentStage) {
			case Stage.GetStarted:
				return <GetStartedStage onGetStartedClick={() => setCurrentStage(Stage.CreateReceipt)} />;
			case Stage.CreateReceipt:
				return <CreateReceiptStage />;
			case Stage.AddPayees:
				return <AddPayeesStage />;
			case Stage.AllocateItems:
				return <AllocateItemsStage />;
			case Stage.FinalBill:
				return <FinalBillStage />;
			default:
				// TODO: handle unknown stage, allow users to restart
				return <GetStartedStage onGetStartedClick={() => setCurrentStage(Stage.CreateReceipt)} />;
		}
	}, [currentStage]);

	return (
		<ReceiptContext.Provider value={context}>
			<div className={styles.pageWrapper}>
				<div className={styles.stageWrapper}>
					{renderStage()}
				</div>
				<div>
					<StageSelector
						currentStage={currentStage}
						previousStage={getPreviousStage(currentStage)}
						nextStage={getNextStage(currentStage)}
						setStage={setCurrentStage}
					/>
				</div>
			</div>
		</ReceiptContext.Provider>
	)
}

export default SplitTheBill;