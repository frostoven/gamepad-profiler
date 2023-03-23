import React from 'react';
import GamepadLog from './components/GamepadLog';
import GamepadManager from '../GamepadManager';

export default class RootNode extends React.Component {
  constructor(props) {
    super(props);
    this.gamepadManager = new GamepadManager();
  }

  componentDidMount() {
    // this.gamepadManager.onInputChange.getEveryChange((data) => {
    //   console.log('-> Gamepad data:', data);
    // });
  }

  render() {
    return (
      <div>
        <GamepadLog gamepadManager={this.gamepadManager}/>
      </div>
    );
  }
}
