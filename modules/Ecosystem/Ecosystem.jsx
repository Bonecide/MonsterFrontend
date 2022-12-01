import IMG from '../IMG/IMG'
import s from './Ecosystem.module.scss'

export default function Ecosystem() {

    return(
        <div id='ecosystem' className={s.container}>
            <div className={s.wrapper}>
                <div className={s.image}>
                    <IMG src={'/img/Lion.svg'}/>
                    <div className={s.contract}>
                        <p>NEW HISTORY IN THE WORLD OF <br />  <span>CRYPTOCURRENCIES</span> </p>
                    </div>
                </div>
                <div className={s.description}>
                    <h1>MONSTER IS A WHOLE ECOSYSTEM WHICH WILL INTRODUCE YOU VERY SOON:</h1>
                    <div>
                        <p>- MONSTER NFT MARKETPLACE</p>
                        <p>- MONSTER SWAP</p>
                        <p>- MONSTER P2E GAME</p>
                        <p>- MONSTER STARTUP SPONSORSHIP</p>
                    </div>
                </div>
            </div>
            <div className={s.bottom}>
                    <IMG className={s.bottomIMG} src="/img/RedbottomBar.svg" alt="" />
                    <div className={s.join}>
                        <div >
                            <IMG src={'/img/bsc_scan.svg'}/>
                        </div>
                        <div className={s.left}>
                            <IMG src={'/img/coingecko.svg'}/>
                        </div>
                        <div className={s.center}>
                            <IMG src={'/img/dextools.svg'}/>
                        </div>
                        <div >
                            <IMG src={'/img/logo_pancake_white.svg'}/>
                        </div>
                        <div className={s.right}>
                            <IMG src={'/img/poocoin.svg'}/>
                        </div>
                    </div>
            </div>
        </div>
    )
}