import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    display: ''
  }

  handleOnClick = (input) => {
    // console.log(input)
    this.setState({
      display: input
    })
  }

  render() {
    console.log(this.state.display)
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = () => {
      // if (this.state.display === 'profile'){
      //   return <Profile/>
      // }
      // else if (this.state.display === 'photo'){
      //   return <Photos/>
      // }
      // else if (this.state.display === 'cocktail'){
      //   return <Cocktails/>
      // }
      // else if (this.state.display === 'pokemon'){
      //   return <Pokemon/>
      // }
      switch(this.state.display){
        case 'profile':
        return <Profile/>
        break;
        case 'photo':
        return <Photos/>
        case 'cocktail':
        return <Cocktails/>
        break;
        case 'pokemon':
        return <Pokemon/>
        break;
      }
    }
    return (
      <div>
        <MenuBar handleOnClick ={this.handleOnClick} />
        {detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
