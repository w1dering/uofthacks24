import Button from "../Button";

import "./OptionsPanel.css";

const OptionsPanel = () => {
	const options: string[] = ["Essay", "Fit"];
	return (
		<div id="options-panel">
			<h1 id="options-panel-title">Options</h1>
			{options.map((item: string) => (
				<Button className="options-button" content={item} fn={() => null} />
			))}
		</div>
	);
};

export default OptionsPanel;
