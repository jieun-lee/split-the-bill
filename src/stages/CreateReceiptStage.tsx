import { useContext, useMemo } from "react"
import { ReceiptContext } from "@/models/ReceiptContext"
import styles from './CreateReceiptStage.module.css';

interface ICreateReceiptStageProps {}

const CreateReceiptStage: React.FC = () => {
	const { values: receipt, subTotal, setReceiptName, setTax, setTip, addItem, removeItem } = useContext(ReceiptContext);

	const taxValue = useMemo(() => {
		if (receipt.taxPercent !== undefined && receipt.taxPercent > 0 && receipt.taxPercent <= 100) {
			return subTotal * receipt.taxPercent * 0.01;
		}
		// TODO: handle invalid taxPercent values
		return 0;
	}, [subTotal, receipt.taxPercent]);
	const priceWithTax = useMemo(() => subTotal + taxValue, [subTotal, taxValue]);

	const tipValue = useMemo(() => {
		if (receipt.tipPercent !== undefined && receipt.tipPercent > 0 && receipt.tipPercent <= 500) {
			return priceWithTax * receipt.tipPercent * 0.01;
		}
		// TODO: handle invalid tipPercent values
		return 0;
	}, [priceWithTax, receipt.tipPercent]);
	const priceWithTip = useMemo(() => priceWithTax + tipValue, [priceWithTax, tipValue]);

	// TODO: add input error handling (invalid numbers for percentages)
	return (
		<div className={styles.receiptWrapper}>
			<div>
				<input
					className={`${styles.input} ${styles.receiptNameInput}`}
					value={receipt.receiptName}
					onChange={(e) => setReceiptName(e.target.value)}
					placeholder="Receipt Name"
				/>
			</div>
			<div className={styles.totalsWrapper}>
				{`Sub-Total: ${subTotal}`}
			</div>
			<div className={styles.percentageWrapper}>
				<div>
					{"Tax: "}
					<input
						className={`${styles.input} ${styles.percentageInput}`}
						value={receipt.taxPercent}
						type="number"
						onChange={(e) => setTax(parseInt(e.target.value))}
						placeholder="Tax"
					/>
					<span>%</span>
				</div>
				<div className={styles.percentageValue}>{taxValue}</div>
			</div>
			<div className={styles.totalsWrapper}>
				{`After Tax: ${priceWithTax}`}
			</div>
			<div className={styles.percentageWrapper}>
				<div>
					{"Tip: "}
					<input
						className={`${styles.input} ${styles.percentageInput}`}
						value={receipt.tipPercent}
						type="number"
						onChange={(e) => setTip(parseInt(e.target.value))}
						placeholder="Tip"
					/>
					<span>%</span>
				</div>
				<div className={styles.percentageValue}>{tipValue}</div>
			</div>
			<div className={styles.totalsWrapper}>
				{`After Tip: ${priceWithTip}`}
			</div>
		</div>
	)
}

export default CreateReceiptStage;