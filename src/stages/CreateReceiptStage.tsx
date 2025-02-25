import { useContext } from "react"
import { ReceiptContext } from "@/models/ReceiptContext"
import styles from './CreateReceiptStage.module.css';

interface ICreateReceiptStageProps {}

const CreateReceiptStage: React.FC = () => {
	const { values: receipt, setReceiptName, setTax, setTip, addItem, removeItem } = useContext(ReceiptContext);

	// TODO: add input error handling (invalid numbers for percentages)
	return (
		<div className={styles.receiptWrapper}>
			<input
				value={receipt.receiptName}
				onChange={(e) => setReceiptName(e.target.value)}
				placeholder="Receipt Name"
			/>
			<input
				value={receipt.taxPercent}
				type="number"
				onChange={(e) => setTax(parseInt(e.target.value))}
				placeholder="Tax Percentage"
			/>
			<input
				value={receipt.tipPercent}
				type="number"
				onChange={(e) => setTip(parseInt(e.target.value))}
				placeholder="Tip Percentage"
			/>
		</div>
	)
}

export default CreateReceiptStage;