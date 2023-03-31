import styles from '@/styles/Nav.module.css'
import Link from 'next/link'

export default function Nav(){
    return(
        <>
            <div className={styles.nav}>
                <div>
                    <ul>
                        <li>
                            <Link href='/'>Homepage</Link>
                        </li>
                        <li>
                            <Link href='/thoughts'>Thoughtspage</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}