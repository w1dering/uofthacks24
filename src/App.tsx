import CharacterPanel from "./components/CharacterPanel/CharacterPanel";
import ChatPanel from "./components/ChatPanel/ChatPanel";
import Header from "./components/Header/Header";
import OptionsPanel from "./components/OptionsPanel/OptionsPanel";

import "/src/index.css";
import "/src/utils/colours.css";

const App = () => {
	return (
		<>
			<Header />
			<div id="content">
				<OptionsPanel />
				<ChatPanel />
				<CharacterPanel />
			</div>
		</>
	);
};

export default App;
