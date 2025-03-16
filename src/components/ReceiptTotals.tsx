import { useMemo } from "react"
import styles from './ReceiptTotals.module.css';
import { IReceipt, PercentType } from "@/models/Receipt";

interface IReceiptTotalsProps {
	receipt: IReceipt;
	subTotal: number;
	setTax: (tax: PercentType) => void;
	setTip: (tip: PercentType) => void;
}

const ReceiptTotals: React.FC<IReceiptTotalsProps> = (props) => {
	const { receipt, subTotal, setTax, setTip } = props;

	// TODO: add input error handling (invalid numbers for percentages)
	const taxValue = useMemo(() => {
		if (receipt.taxPercent !== "" && receipt.taxPercent > 0 && receipt.taxPercent <= 100) {
			return subTotal * receipt.taxPercent * 0.01;
		}
		// TODO: handle invalid taxPercent values
		return 0;
	}, [subTotal, receipt.taxPercent]);
	const priceWithTax = useMemo(() => subTotal + taxValue, [subTotal, taxValue]);

	const tipValue = useMemo(() => {
		if (receipt.tipPercent !== "" && receipt.tipPercent > 0 && receipt.tipPercent <= 500) {
			return priceWithTax * receipt.tipPercent * 0.01;
		}
		// TODO: handle invalid tipPercent values
		return 0;
	}, [priceWithTax, receipt.tipPercent]);
	const priceWithTip = useMemo(() => priceWithTax + tipValue, [priceWithTax, tipValue]);

	const subTotalElement = (
		<div className={`${styles.lineWrapper} ${styles.subTotalWrapper}`}>
			<span>Sub-total:</span>
			<span>${subTotal.toFixed(2)}</span>
		</div>
	);

	const taxElement = (
		<div className={styles.lineWrapper}>
			<div>
				{"Tax: "}
				<input
					className={`${styles.input} ${styles.percentageInput}`}
					value={receipt.taxPercent}
					type="number"
					onChange={(e) => setTax(e.target.value === "" ? "" : parseInt(e.target.value))}
					placeholder="Tax"
				/>
				<span>%</span>
			</div>
			<div className={styles.percentageValue}>${taxValue.toFixed(2)}</div>
		</div>
	);

	const afterTaxElement = (
		<div className={`${styles.lineWrapper} ${styles.subTotalWrapper}`}>
			<span>After Tax:</span>
			<span>${priceWithTax.toFixed(2)}</span>
		</div>
	);

	const tipElement = (
		<div className={styles.lineWrapper}>
			<div>
				{"Tip: "}
				<input
					className={`${styles.input} ${styles.percentageInput}`}
					value={receipt.tipPercent}
					type="number"
					onChange={(e) => setTip(e.target.value === "" ? "" : parseInt(e.target.value))}
					placeholder="Tip"
				/>
				<span>%</span>
			</div>
			<div className={styles.percentageValue}>${tipValue.toFixed(2)}</div>
		</div>
	);

	const afterTipElement = (
		<div className={`${styles.lineWrapper} ${styles.subTotalWrapper}`}>
			<span className={styles.bold}>After Tip:</span>
			<span className={styles.bold}>${priceWithTip.toFixed(2)}</span>
		</div>
	);

	return (
		<div className={styles.totalsWrapper}>
			{subTotalElement}
			{taxElement}
			{afterTaxElement}
			{tipElement}
			{afterTipElement}
		</div>
	)
}

export default ReceiptTotals;