import React from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className="sidebar">
    <Navbar />
    <Search/>
    <Chats/>
  </div>
  )
}

export default Sidebar