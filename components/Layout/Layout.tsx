import { FC } from "react"
import Nav from "../Nav"

interface Props {
    navColor?: string
    children: React.ReactElement
}

const Layout: FC<Props> = (props) => {

    return (
        <>
            {props.navColor ? 
            <main id="layout" className="h-max">
                <Nav color={props.navColor} />
                {props.children}     
            </main>
            :
            <main id="layout" className="relative h-max">
                <div id="nav-wrap" className="absolute top-0 right-0 left-0 z-10">
                    <Nav />
                </div>
                <div id="children-wrap" className="absolute top-0 left-0 right-0 z-0">
                    {props.children}     
                </div>
            </main>
            }
        </>
    )
}

export default Layout