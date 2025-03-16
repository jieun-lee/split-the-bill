import { ReceiptItem } from "./ReceiptItem";

export type ReceiptItemsList = { [key: string]: ReceiptItem };
export type PercentType = number | "";

export interface IReceipt {
	receiptName: string;
	taxPercent: PercentType;
	tipPercent: PercentType;
	items: ReceiptItemsList;
	payees: string[];
}

export const initialReceipt: IReceipt = {
	receiptName: "",
	taxPercent: "",
	tipPercent: "",
	items: {},
	payees: [],
}