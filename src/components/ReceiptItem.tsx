import { ReceiptItem as ReceiptItemModel } from "@/models/ReceiptItem";

interface IReceiptItemProps {
	item: ReceiptItemModel;
}

const ReceiptItem: React.FC<IReceiptItemProps> = (props) => {
	const { item } = props;

	return (
		// TODO: move styling to css file
		<div style={{ display: 'flex' }}>
			<div>{item.name}</div>
			<div>{item.price}</div>
		</div>
	)
}

export default ReceiptItem;