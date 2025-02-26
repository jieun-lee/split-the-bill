import { ReceiptItemsList } from "@/models/Receipt";
import ReceiptItem from "./ReceiptItem";
import { useCallback, useState } from "react";

interface IReceiptItemsProps {
	receiptItems: ReceiptItemsList;
	addItem: (itemName: string, price: number) => void;
	removeItem: (itemId: string) => void;
}

const ReceiptItems: React.FC<IReceiptItemsProps> = (props) => {
	const { receiptItems, addItem, removeItem } = props;
	const [isAddMode, setIsAddMode] = useState<boolean>(false);
	const [newItemName, setNewItemName] = useState<string | undefined>(undefined);
	const [newItemPrice, setNewItemPrice] = useState<number | undefined>(undefined);

	const addNewItem = useCallback(() => {
		// TODO: validate inputs
		if (newItemName !== undefined && newItemPrice !== undefined) {
			addItem(newItemName, newItemPrice);
		}
		setNewItemName(undefined);
		setNewItemPrice(undefined);
	}, [newItemName, newItemPrice, addItem]);

	return (
		<div>
			{Object.values(receiptItems).map(item => (
				<ReceiptItem key={item.id} item={item} />
			))}
			<div>
				{isAddMode ? (
					<button>Add Item to Receipt</button>
				) : (
					<div>
						<input
							value={newItemName}
							placeholder="Item Name"
							onChange={(e) => setNewItemName(e.target.value)}
						/>
						<input
							value={newItemPrice}
							type="number"
							placeholder="Price"
							onChange={(e) => setNewItemPrice(parseInt(e.target.value))}
						/>
						<button onClick={addNewItem}>Add</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default ReceiptItems;