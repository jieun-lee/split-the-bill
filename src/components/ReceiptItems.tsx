import { ReceiptItemsList } from "@/models/Receipt";
import { useCallback, useState } from "react";
import styles from './ReceiptItems.module.css';

interface IReceiptItemsProps {
	receiptItems: ReceiptItemsList;
	addItem: (itemName: string, price: number) => void;
	removeItem: (itemId: string) => void;
}

// TODO: certain items might have different tip values
const ReceiptItems: React.FC<IReceiptItemsProps> = (props) => {
	const { receiptItems, addItem, removeItem } = props;
	const [newItemName, setNewItemName] = useState<string>("");
	const [newItemPrice, setNewItemPrice] = useState<number | "">("");

	const addNewItem = useCallback(() => {
		// TODO: validate inputs
		if (newItemName !== "" && newItemPrice !== "") {
			addItem(newItemName, newItemPrice);
		}
		setNewItemName("");
		setNewItemPrice("");
	}, [newItemName, newItemPrice, addItem]);

	return (
		<div>
			{Object.values(receiptItems).map(item => (
				<div key={item.id} className={styles.receiptItem}>
					<div>{item.name}</div>
					<div>${item.price.toFixed(2)}</div>
				</div>
			))}
			<div>
				<div className={styles.newItem}>
					<input
						className={styles.newItemName}
						value={newItemName}
						placeholder="Item Name"
						onChange={(e) => setNewItemName(e.target.value)}
					/>
					<input
						className={styles.newItemPrice}
						value={newItemPrice}
						type="number"
						placeholder="Price"
						// TODO: limit to 2 decimal places
						onChange={(e) => setNewItemPrice(e.target.value === "" ? "" : parseFloat(e.target.value))}
					/>
					<button className={styles.addButton} onClick={addNewItem}>
						Add
					</button>
				</div>
			</div>
		</div>
	)
}

export default ReceiptItems;