import { ReceiptItem } from "./ReceiptItem";

export type ReceiptItemsList = { [key: string]: ReceiptItem };

export interface IReceipt {
	receiptName: string | undefined;
	taxPercent: number | undefined;
	tipPercent: number | undefined;
	items: ReceiptItemsList;
	payees: string[];
}

export const initialReceipt = {
	receiptName: undefined,
	taxPercent: undefined,
	tipPercent: undefined,
	items: {},
	payees: [],
}