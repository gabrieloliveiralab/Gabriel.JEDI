import AboutMe from "./AboutMe"
import Hobbie from "./Hobbie"
import Hobbie2 from "./Hobbie2"
import Info from "./Info"

function Background(){
    return(
        <div className="background">
            <div className="left">
                <AboutMe />               
            </div>
            <div className="right">
                <Info />
            </div>
            <div className="down">
                <Hobbie />
            </div>
            <div className="center">
                <Hobbie2 />
            </div>
                        
            <img id="minha-imagem" src="https://media.licdn.com/dms/image/D4D03AQHc5LtuGbR_mw/profile-displayphoto-shrink_800_800/0/1694394345885?e=1717027200&v=beta&t=MUJsa1Ecc3KeywgqlXCGLQGhoES6PGnGTVfYb90dFjk" alt="Descrição da Imagem"></img>
            
            <div className="interno1"></div>
            
        </div>
    )
}

export default Background