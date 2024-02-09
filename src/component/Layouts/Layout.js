import Footer from "./Footer"
import Header from "./Header"

function Layout({ children }) {



    return (
        <>
            <Header />
            <div> {children} </div>
            <Footer />
            <div> </div>

        </>
    )

}
export default Layout