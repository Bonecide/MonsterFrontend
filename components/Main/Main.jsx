import IMG from '../../modules/IMG/IMG'
import s from './Main.module.scss'

export default function Main() {


    return(
        <div id='main ' className={s.container}>
            
            <div className={s.logo}>
                <h5>WELCOME TO THE UNIVERCE</h5>
                <IMG src={'/img/logo.svg'}/>

            </div>
            <IMG className={s.cat} src={'/img/neonicCat.gif'}/>
            <div className={s.contract}>
                 <IMG src="/img/contract.svg" alt="" />
                 <div>
                    <h3>CONTRACT:</h3>
                    <p>0x5D66e2a05F72e8dB9D30604116E85EAe4f1BEcD0</p>
                    <p className={s.buy}>BUY</p>
                 </div>
            </div>
            <div className={s.bottom}>
                    <IMG src="/img/bottomBar.svg" alt="" />
                    <div className={s.join}>
                        <div>
                            <p>JOIN US</p>
                        </div>
                        <div>
                            <p>JOIN US</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}