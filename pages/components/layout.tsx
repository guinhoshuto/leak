import Link from 'next/link'
import styles from '../../styles/layout.module.css'
import Header from './header'
import { useRouter } from "next/router"
import { drops } from '../../drops'

export default function Layout({children}: any){
    const router = useRouter()

    return(
        <div>
            <Header />
            <div className={styles.container}>
                <aside className={styles.menu}>
                    <ul>
                        {drops.map((d: any) => (
                            <li key={d.title}>
                                <Link href={`/drops/${d.href}`}>
                                    {d.title}
                                </Link>
                            </li>
                        ))}
                    </ul> 
                </aside>
                <main className={styles.main}>
                    {children}
                </main>
            </div>

        </div>
    )
}