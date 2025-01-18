import "./SendButton.css";

interface SendButtonProps {
  onClick: () => void;
}

const SendButton = ({ onClick }: SendButtonProps) => {
  return (
    <button className="send-button" onClick={onClick}>
      Send
    </button>
  );
};

export default SendButton;
