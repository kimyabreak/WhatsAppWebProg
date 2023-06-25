import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  MoreVert,
  AttachFile,
  InsertEmoticon,
  Mic,
} from "@mui/icons-material";

function Chat() {
  return (
    <div className="chat">
      <div className="chatheader">
        <Avatar />

        <div className="chatheaderInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>

        <div className="chatheaderRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chatbody">
        <p className="chatmessage">
          {" "}
          {/* Man könnte das auch als COmponent machen  /}{" "}
          {/ Die tatsächliche Nachricht  */}
          <span className="chatname">Lönit </span>
          This is a message
          <span className="chattimestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chatmessage chatreceiver">
          {/* Hinzufügen von Klasse chat_receiver --> ankommende NAchricht */}
          <span className="chatname">Lönit </span>
          This is a message
          <span className="chattimestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chatfooter">
        <InsertEmoticon />
        <form>
          <input
            //value={input}
            //onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          {/* <button onClick={sendMessage} type="submit">
            Send a message
          </button> */}
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;