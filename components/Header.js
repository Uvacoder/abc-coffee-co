import styles from '../styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function Header() {

    const {dimmerStyle, isNavOpen, handleHamburgerClick} = useContext(Context)

    return (
        <div className={styles.container} style={dimmerStyle}>
            <div className={styles.leftFlexContainer}>
                <Image src="/../public/assets/shared/desktop/logo.svg" alt="coffee roasters logo" width="236" height="26"/>
            </div>
                <nav className={styles.nav}>
                <Link href="/">
                    <a className={styles.a} >HOME</a>
                </Link>
                <Link href="/about">
                    <a className={styles.a} >ABOUT US</a>
                </Link>     
                <Link href="/subscribe">
                    <a className={styles.a} >CREATE YOUR PLAN</a>
                </Link> 
                </nav>
            <div className={styles.rightFlexContainer}>
                <div style={{display: isNavOpen ? "none" : 'block'}}>
                    <Image src="/../public/assets/shared/mobile/icon-hamburger.svg" alt="menu open" width="14" height="14"  onClick={handleHamburgerClick}/>
                </div>
                <div style={{display: isNavOpen ? "block" : "none"}}>
                    <Image src="/../public/assets/shared/mobile/icon-close.svg" alt="menu close" width="14" height="14"  onClick={handleHamburgerClick}/>
                </div>   
            </div> 
            <nav className={styles.mobileNav} style={{display: isNavOpen ? '' : "none"}}>
                <Link href="/">
                    <a className={styles.a} >Home</a>
                </Link>
                <Link href="/about">
                    <a className={styles.a} >About Us</a>
                </Link>     
                <Link href="/subscribe">
                    <a className={styles.a} >Create Your Plan</a>
                </Link> 
                </nav>
        </div>
    )
}