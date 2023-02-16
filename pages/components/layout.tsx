import Link from 'next/link'
import styles from '../../styles/layout.module.css'
import Header from './header'
import { useRouter } from "next/router"

export default function Layout({children}: any){
    const router = useRouter()
    const drops = [
        {
            href: '/beep-beep',
            title: 'beep beep'
        },
        {
            href: '/obs-effect',
            title: 'observer effect'
        },
        {
            href: '/mermaid',
            title: 'mermaid'
        },
        {
            href: '/circulating',
            title: 'circulating'
        },
        {
            href: '/stacks',
            title: 'stacks'
        },
        {
            href: '/bauhaus',
            title: 'bauhaus'
        },
        {
            href: '/halftone',
            title: 'halftone'
        },
    ]

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