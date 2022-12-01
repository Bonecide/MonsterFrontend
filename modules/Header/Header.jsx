import s from './Header.module.scss'
import IMG from './../IMG/IMG';
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Header() {
    const links = [
        {
            title : "HOME",
            link: '#main'
        },
        {
            title : "ECOSYSTEM",
            link: '#ecosystem'
        },
        {
            title : "ISSUE",
            link: '#issue'
        },
        {
            title : "ROADMAP",
            link: '#road'
        },
        {
            title : "CONTRACT",
            link: '#contract'
        },
    ]
    
    const router = useRouter();
    return(
        <header className={s.container}>
                <IMG src={'/img/logo.svg'} className={s.logo} />
                <div className={s.links}>
                    {links.map((info,idx) => (
                        <Link className={info.link === router.pathname && s.active} key={`linkN${idx}`} href={info.link}>
                                {info.title}
                        </Link>
                    ))}
                </div>
        </header>
    )
}