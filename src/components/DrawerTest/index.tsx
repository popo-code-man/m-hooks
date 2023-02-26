import React from "react";
import { Button, Spin } from "antd";
import useDrawer, { Drawer } from "../../hooks/useDrawer";

const DrawerTest: React.FC = () => {
	const { open, onOpen, close, lodding, setLodding } = useDrawer();

	const onClose = () => {
		close();
	};

	return (
		<>
			<Button
				type="primary"
				onClick={() => {
					setLodding(true);
					onOpen();
					setTimeout(() => {
						setLodding(false);
					}, 2000);
				}}
			>
				Open
			</Button>
			<Drawer title="标题" placement="right" onClose={onClose} open={open}>
				<Spin spinning={lodding}>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Spin>
			</Drawer>
		</>
	);
};
export default DrawerTest;
