import Navbar from './Navbar'
import '../styles/styles/baselayout.css'

function BaseLayout(props) {
    return (
        <div id="layout">
            <Navbar />
           {props.children}
           <br></br>
           
            <br></br>
            
            <footer>
                <div id="">Photo by <a href="https://unsplash.com/@jayphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Justin W</a> on <a href="https://unsplash.com/s/photos/houston?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        
            
                </div>
            </footer>
        </div>
    )
}

export default BaseLayout