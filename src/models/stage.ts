export enum Stage {
	GetStarted = 0, // doesn't count as an official stage you can switch to
	CreateReceipt = 1,
	AddPayees = 2,
	AllocateItems = 3,
	FinalBill = 4,
}

export const getStageName = (stage: Stage): string => {
	switch (stage) {
		case Stage.GetStarted:
			return "Get Started";
		case Stage.CreateReceipt:
			return "Create Receipt";
		case Stage.AddPayees:
			return "Add Payees";
		case Stage.AllocateItems:
			return "Allocate Items";
		case Stage.FinalBill:
			return "Final Bill";
		default:
			// TODO: throw error
			return "";
	}
}

export const getPreviousStage = (currentStage: Stage): Stage | undefined => {
	if (currentStage === Stage.GetStarted || currentStage === Stage.CreateReceipt) {
		return undefined;
	}
	else {
		return currentStage - 1;
	}
}

export const getNextStage = (currentStage: Stage): Stage | undefined => {
	if (currentStage === Stage.FinalBill) {
		return undefined;
	}
	else {
		return currentStage + 1;
	}
}