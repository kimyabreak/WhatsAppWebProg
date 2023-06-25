import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SidebarChat from "./SidebarChat";
//import * as Mui from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarheader">
        <Avatar src="https://www.gravatar.com/avatar/HASH" />
        {/* Einfach eine URL mit Foto */}
        <div className="sidebarheaderRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebarsearch">
        <div className="sidebarsearchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;