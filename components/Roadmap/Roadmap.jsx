import IMG from '../../modules/IMG/IMG'
import s from './Roadmap.module.scss'

export default function Roadmap() {
    const roadmap = [
    {
        info : [
            'Translation of the web to other languages','Strategic Marketing','Campaign','NFT Preview'
        ]
    },
    {
        info : [
            'NFT Airdrop to Holders','NFT Public Sale','Team Expansion','CoinMarketCap Listing','Coingecko Listing','Crypto.com Listing'
        ]
    },
    {
        info : [
            'MonsterSwap','Publishing a new roadmap'
        ]
    },
    {
        info : [
            'Smart Contract','Deployment','Website Launch','BETA Release','MONSTER GAME','Establish Mod & Admins Team','Build out Social Medias','Management team','Marketing push to spread awareness'
        ]
    },

]
    return(
        <div id='contact' className={s.container}>
            <div className={s.title}>
                <p>ROADMAP 2022-2023</p>
            </div>
            <div className={s.roadmapCont}>
                    {roadmap.map((i,idx) => (
                        <div key={`RoadN${idx}`} className={s.border}>
                            <div className={s.Card}>
                                <h3>Q{idx + 1}</h3>
                                <ul>
                                    {i.info.map((i,idx) => (
                                        <li key={`infoN${idx}`}>
                                                {i}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
            </div>
            <div className={s.contact}>
                <div className={s.social}>
                                        <div className={s.network}>
                                            <IMG src={'/img/WhiteTwitter.svg'}/>
                                            <IMG src={'/img/twitter.svg'}/>
                                            <IMG src={'/img/bunny_mono.svg'}/>
                                        </div>
                                        <div className={s.contract}>
                                            <h5>CONTRACT:</h5>
                                            <p>0x5D66e2a05F72e8dB9D30604116E85EAe4f1BEcD0</p>
                                            <button>BUY</button>
                                        </div>
                </div>
                <div className={s.image} >
                    <IMG src={'/img/ogre.svg'}/>
                    <div className={s.block}>
                        <p>SOCIAL NETWORKS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}