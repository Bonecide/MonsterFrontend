import IMG from '../../modules/IMG/IMG'
import s from './Issue.module.scss'

export default function Issue() {

    return(
        <div id='issue' className={s.container}>
            <div className={s.issue} >
                <div className={s.img}>
                    <IMG src={'/img/GreenMan.svg'}/>
                    <div className={s.greenBlock}>
                        <p>TOKENOMIC</p>
                    </div>
                </div>
                <div className={s.info}>
                        <h3>ISSUE 100.000.000 MONSTER</h3>
                        <ul>
                            <li>
                                 RESERVE: 25% farming and user engagement incentives 
                            </li>
                            <li>
                                 ECOSYSTEM: 20% quarterly unlocks for partnerships <br /> and market expansion
                            </li>
                            <li>
                                 TEAM: 10% blocking with quarterly accrual 
                            </li>
                            <li>
                                AWARDS: 5% early holder awards, AirDrop   
                            </li>
                            <li>
                                MARKETING: 10% marketing PR
                            </li>
                            <li>
                                LIQUIDITY: 30%
                            </li>
                        </ul>
                </div>
            </div>
            <div className={s.diagrammBorder}>
                <div className={s.diagramm}>
                    <div className={s.Tokenomic}>
                        <div>
                            <p>RESERVE -</p>
                            <IMG src={'/img/orange.svg'}/>
                        </div>
                        <div>
                            <p>ECOSYSTEM -</p>
                            <IMG src={'/img/blue.svg'}/>
                        </div>
                        <div>
                            <p>TEAM -</p>
                            <IMG src={'/img/green.svg'}/>
                        </div>
                        <div>
                            <p>AWARDS -</p>
                            <IMG src={'/img/red.svg'}/>
                        </div>
                        <div>
                            <p>MARKETING -</p>
                            <IMG src={'/img/purple.svg'}/>
                        </div>
                        <div>
                            <p>LIQUIDITU -</p>
                            <IMG src={'/img/pink.svg'}/>
                        </div>
                    </div>
                    <IMG className={s.circle} src={'/img/circle.svg'}/>
                </div>
            </div>      
            <div>

            </div>
            <IMG className={s.bootom} src={'/img/GreenbottomBar.svg'}/>
        </div>
    )
}