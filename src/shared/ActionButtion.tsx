import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children:React.ReactNode;
    setSelectedPage:(value:SelectedPage)=>void;
}

const ActionButtion = ({children,setSelectedPage}: Props) => {
  return (
    <AnchorLink className="rounded-md bg-yellow-600 px-10 py-2 hover:bg-purple-500 hover:text-white" onClick={()=>setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>{children}</AnchorLink>
  )
}

export default ActionButtion