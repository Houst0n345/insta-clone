import React from "react";
import {useLayoutStyles} from "../../styles";
import SEO from "./Seo";
import Navbar from "./Navbar";

function Layout({children, title, marginTop= 60, minimalNavbar= false}) {
    const s = useLayoutStyles();

    return (
        <section className={s.section}>
            <SEO title={title}/>
            <Navbar minimalNavbar={minimalNavbar}/>
            <main className={s.main} style={{marginTop}}>
                <section className={s.childrenWrapper}>
                    <div className={s.children}>
                        {children}
                    </div>
                </section>
            </main>
        </section>
    )
}

export default Layout;
