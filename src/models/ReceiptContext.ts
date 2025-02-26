import { createContext, useCallback, useMemo, useState } from 'react';
import { ReceiptItem } from './ReceiptItem';
import { initialReceipt, IReceipt, ReceiptItemsList } from './Receipt';

interface IReceiptContext {
	values: IReceipt,
	subTotal: number,
	setReceiptName: (name: string) => void;
	setTax: (tax: number) => void;
	setTip: (tip: number) => void;
	addItem: (itemName: string, price: number) => void;
	removeItem: (itemId: string) => void;
	addPayee: (name: string) => void;
	removePayee: (name: string) => void;
	allocatePayee: (itemId: string, name: string) => void;
	deallocatePayee: (itemId: string, name: string) => void;
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
	allocatePayee: () => {},
	deallocatePayee: () => {},
}

export const ReceiptContext = createContext(initialContext);

export const useReceiptContext = () => {
	const [receiptName, setReceiptName] = useState<string | undefined>(initialReceipt.receiptName);
	const [tax, setTax] = useState<number | undefined>(initialReceipt.taxPercent);
	const [tip, setTip] = useState<number | undefined>(initialReceipt.tipPercent);
	const [items, setItems] = useState<ReceiptItemsList>(initialReceipt.items);
	const [payees, setPayees] = useState<string[]>(initialReceipt.payees);
	const [nextId, setNextId] = useState<number>(0);

	const subTotal = useMemo(() => {
		return Object.values(items).reduce((acc, item) => acc + item.price, 0);
	}, [items]);

	const addItem = useCallback((itemName: string, price: number) => {
		const newItem: ReceiptItem = {
			id: `${nextId}`,
			name: itemName,
			price: price,
			payees: [],
		}
		setItems(items => ({ ...items, [nextId]: newItem }));
		setNextId(id => id + 1);
	}, [nextId, setNextId, setItems]);

	const removeItem = useCallback((itemId: string) => {
		setItems(items => {
			const newItems = Object.assign({}, items);
			delete newItems[itemId];
			return newItems;
		});
	}, [setItems]);

	const addPayee = useCallback((name: string) => {
		setPayees(payees => [...payees, name]);
	}, [setPayees]);

	const removePayee = useCallback((name: string) => {
		setPayees(payees => {
			const newPayees = [...payees];
			const index = newPayees.findIndex(payee => payee === name);
			newPayees.splice(index, 1);
			return newPayees;
		});
	}, [setPayees]);

	const allocatePayee = (itemId: string, name: string) => {
		// TODO
	};

	const deallocatePayee = (itemId: string, name: string) => {
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
		allocatePayee,
		deallocatePayee
	}
}