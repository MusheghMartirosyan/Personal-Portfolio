import { Outlet } from "react-router-dom"
import ChristmasTree from "../components/ChristmasTree/ChristmasTree"
import Nav from "../components/Nav/Nav"
import Socials from "../components/Socials/Socials"

const HomeWrapper = () => {
    return (
        <>  
            <Socials />
            <ChristmasTree />
            <Outlet />
            <Nav />

        </>
    )
}

export default HomeWrapper
