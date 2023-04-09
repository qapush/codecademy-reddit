import { TbUfo, TbFaceIdError } from "react-icons/tb";
import "./ErrorMessage.css";

export const ErrorMessage = ({type = 'loading'}) => {

    const messages = {
        loading: {
            message: 'Failed to load...',
            icon: TbFaceIdError
        },
        comments: {
            message: 'No comments found...',
            icon: TbUfo
        },
    }

  return (
    <div className="error-message">
      {messages[type].icon()}
      <span>{messages[type].message}</span>
    </div>
  );
};
