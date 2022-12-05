import Issue from "../components/Issue/Issue";
import Main from "../components/Main/Main";
import Roadmap from "../components/Roadmap/Roadmap";
import Ecosystem from "../modules/Ecosystem/Ecosystem";
import Header from "../modules/Header/Header";
import s from '../styles/main.module.scss'
export default function MainPage() {

    return(
        <>
        <div className={s.container}>
            <Header/>
            <Main/>
        </div>
        <div className={s.ecosystem}>
            <Ecosystem/>
        </div>
        <div className={s.issue}>
            <Issue/>
        </div>
        <div className={s.roadmap}>
            <Roadmap/>
        </div>
        </>
    )
}