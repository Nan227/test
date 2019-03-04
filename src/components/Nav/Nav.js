import React, { Components} from "react";
import "./Nav.css";

class Nav extends Components {
  componentsWillUnmont(){
    window.clearTimeout(this.timeout)
  }
  renderMessage( winGame, correct, clear = false) {
    let navMessage, className
    if(clear) {
      className =''
    }
    else if (correct === undefined){
      navMessage ='Play again => Click an image'
      className =''
    } else {
      navMessage = winGame ? ' Congratulations! You won the game!':(correct ? ' Wow! correctly guessed': 'Opp. sorry! you had been already clicked that image!')
      className = correct ? ' correct': 'incorrect'

    }
    window.clearTimeout(this.timeout)
    if(!clear & correct !== undefined){
      this.timeout = window.setTimeout
      (this.renderMessage, winGame ? 3000 : 1000, winGame ? undefined : correct, false, true)
    }
    return <li key={Math.random()} className ={className}>{navMessage}</li>
  }
  render(){
    return(
      <nav className='pin'>
        <div>
          <ul className = 'center navList'>
            <li className = 'name'> Clicky Game:A memory game practitioner </li>
            {this.renderMessage
            (this.props.correct,
              this.props.winGame)}
              <li> Srore: {this.props.score} | Hight Score: {this.props.highScore}</li>
            </ul>
        </div>
      
      </nav>
    )
  }
}



export default Nav;
