import Button from "../Button";

import "./OptionsPanel.css";

const OptionsPanel = () => {
	const options: string[] = ["Essay", "Fit"];
	return (
		<div id="options-panel">
			<h1>Options</h1>
			{options.map((item: string) => (
				<Button content={item} fn={() => null} />
			))}
		</div>
	);
};

export default OptionsPanel;
