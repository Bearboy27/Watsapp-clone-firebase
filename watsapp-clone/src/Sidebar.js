import React from "react";
import SidebarChat from "./SidebarChat";
import "./Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          {/* IconButton is used for the click feel animation */}
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          {/* IconButton is used for the click feel animation */}
          <IconButton>
            <ChatIcon />
          </IconButton>

          {/* IconButton is used for the click feel animation */}
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      {/* sidebar searchIcon with search input */}
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchIcon />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <h1></h1>
      </div>
    </div>
  );
}

export default Sidebar;
