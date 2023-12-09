import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayoutPublic = () =>{

    const navigation = useNavigation()

    return (
        <div className="layout" >
        <Navbar/>
        <main className="container nav justify-content-center ">
          {navigation.state === "loading" && (
            <div className="alert alert-info my-5">Loading...</div>
          )}   
            <Outlet/>
        </main>
        <footer className="footer mt-auto py-3 bg-body-tertiary"></footer>
        </div>
    )
}

export default LayoutPublic