'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
  
  const isOpen = useSelector((state) => state.counterReducer.onToggleHeaderSidebarClose)


  return (
    <>
    <div className={isOpen ? `page-wrapper` : `page-wrapper1`}>Dashboard</div>
      
    </>
  );
}
