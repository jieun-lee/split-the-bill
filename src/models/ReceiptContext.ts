import { createContext, useMemo, useState } from 'react';
import { ReceiptItem } from './ReceiptItem';
import { initialReceipt, IReceipt } from './Receipt';

interface IReceiptContext {
	values: IReceipt,
	subTotal: number,
	setReceiptName: (name: string) => void;
	setTax: (tax: number) => void;
	setTip: (tip: number) => void;
	addItem: (item: ReceiptItem) => void;
	removeItem: (itemId: string) => void;
	addPayee: (name: string) => void;
	removePayee: (name: string) => void;
	setPayee: (itemId: string, name: string) => void;
	unsetPayee: (itemId: string, name: string) => void;
}

const initialContext: IReceiptContext = {
	values: initialReceipt,
	subTotal: 0,
	setReceiptName: () => {},
	setTax: () => {},
	setTip: () => {},
	addItem: () => {},
	removeItem: () => {},
	addPayee: () => {},
	removePayee: () => {},
	setPayee: () => {},
	unsetPayee: () => {},
}

export const ReceiptContext = createContext(initialContext);

export const useReceiptContext = () => {
	const [receiptName, setReceiptName] = useState<string | undefined>(initialReceipt.receiptName);
	const [tax, setTax] = useState<number | undefined>(initialReceipt.taxPercent);
	const [tip, setTip] = useState<number | undefined>(initialReceipt.tipPercent);
	const [items, setItems] = useState<ReceiptItem[]>(initialReceipt.items);
	const [payees, setPayees] = useState<string[]>(initialReceipt.payees);

	const subTotal = useMemo(() => {
		return items.reduce((acc, item) => acc + item.price, 0);
	}, [items]);

	const addItem = (item: ReceiptItem) => {
		// TODO	
	};

	const removeItem = (itemId: string) => {
		// TODO
	};

	const addPayee = (name: string) => {
		// TODO
	};

	const removePayee = (name: string) => {
		// TODO
	};

	const setPayee = (itemId: string, name: string) => {
		// TODO
	};

	const unsetPayee = (itemId: string, name: string) => {
		// TODO
	};

	const getContextValues = (): IReceipt => {
		return {
			receiptName,
			taxPercent: tax,
			tipPercent: tip,
			items,
			payees,
		};
	}

	return {
		values: getContextValues(),
		subTotal,
		setReceiptName,
		setTax,
		setTip,
		addItem,
		removeItem,
		addPayee,
		removePayee,
		setPayee,
		unsetPayee
	}
}