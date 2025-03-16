import { useContext } from "react";
import { ReceiptContext } from "@/models/ReceiptContext"
import styles from './CreateReceiptStage.module.css';
import ReceiptItems from "@/components/ReceiptItems";
import ReceiptTotals from "@/components/ReceiptTotals";

const CreateReceiptStage: React.FC = () => {
	const { values: receipt, subTotal, setReceiptName, setTax, setTip, addItem, removeItem } = useContext(ReceiptContext);

	return (
		<div className={styles.receiptWrapper}>
			<div className={styles.receiptNameWrapper}>
				<input
					className={styles.receiptNameInput}
					value={receipt.receiptName}
					onChange={(e) => setReceiptName(e.target.value)}
					placeholder="Receipt Name"
				/>
			</div>
			<ReceiptItems receiptItems={receipt.items} addItem={addItem} removeItem={removeItem} />
			<hr className={styles.divider} />
			<ReceiptTotals receipt={receipt} subTotal={subTotal} setTax={setTax} setTip={setTip} />
		</div>
	)
}

export default CreateReceiptStage;