import { ReceiptItem } from "./ReceiptItem";

export interface IReceipt {
	receiptName: string | undefined;
	taxPercent: number | undefined;
	tipPercent: number | undefined;
	items: ReceiptItem[];
	payees: string[];
}

export const initialReceipt = {
	receiptName: undefined,
	taxPercent: undefined,
	tipPercent: undefined,
	items: [],
	payees: [],
}