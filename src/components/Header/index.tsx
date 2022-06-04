import Image from 'next/image'
import { SignInButton } from '../SignInButton'
import style from './styles.module.scss'

export function Header (){
    return (
        <header className={style.headerContainer}>
            <div className={style.headerContent} >
                <Image src="/images/logo.svg" alt="ig.news" width='108.45px' height="30.27px"/>
                <nav>
                    <a className={style.active}>Home</a>
                    <a>Posts</a>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}