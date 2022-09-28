import { Link } from "react-router-dom"
import styles from "./FooterAllPage.module.css"

const links = [
    {path:"/", title:"Terms of Use"},
    {path:"/", title:"Privacy and Cookies Statement"},
    {path:"/", title:"Cookie consent"},
    {path:"/", title:"Site Map"},
    {path:"/", title:"How the site works"},
    {path:"/", title:"Contact us"}
]

const FooterAllPage = ()=> {
return(
<div className={styles.Footer}>
<div className={styles.Container}>
    <div>
        <div>
            <div>
                <img className={styles.logo} src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt="ing-logo" />
            </div>
            <div>
                <div><p className={styles.copyWrite}>© 2022 Tripadvisor LLC All rights reserved.</p></div>
                <div className={styles.Links}>
                {
                    links.map((link)=> <Link className={styles.link} to={link.path} key={link.path} >{link.title}</Link>)
                }
                </div>
            </div>
        </div>
        <div>
            <p className={styles.para}>This is the version of our website addressed to speakers of English in India. If you are a resident of another country or region, please select the appropriate version of Tripadvisor for your country or region in the drop-down menu. <Link className={styles.more} to="#">more</Link></p>
        </div>
    </div>

    <div>
        <select>
        <option value="">Currency</option>
        </select>
        <select>
        <option value="">Country</option>
        </select>
    </div>
</div>

</div>
)
}
export default FooterAllPage