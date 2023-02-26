import { useState } from "react";
import { Drawer } from "antd";

export { Drawer };

export default function useDrawer() {
	const [open, setOpen] = useState(false);
	const [lodding, setLodding] = useState(false);
	const onOpen = () => {
		setOpen(true);
	};

	const close = () => {
		setOpen(false);
	};

	return {
		open,
		onOpen,
		close,
		lodding,
		setLodding,
	};
}
