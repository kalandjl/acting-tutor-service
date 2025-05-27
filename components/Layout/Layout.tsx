import { FC } from "react"
import Nav from "../Nav"
import Footer from "../Footer"

interface Props {
    navColor?: string
    children: React.ReactElement
}

const Layout: FC<Props> = (props) => {

    return (
        <>
            {props.navColor ? 
            <>
                <Nav color={props.navColor} />
                    <main id="layout" className="h-max">
                        {props.children} 
                    <Footer />    
                </main>
            </>
            :
            <>
                <main id="layout" className="relative h-max">
                    <div id="nav-wrap" className="absolute top-0 right-0 left-0 z-10">
                        <Nav />
                    </div>
                    <div id="children-wrap" className="absolute top-0 left-0 right-0 z-0">
                        {props.children}   
                        <Footer />    
                    </div>
                </main>
            </>
            }
        </>
    )
}

export default Layout