

import React from 'react';
import './App.css';
import firstData from './data/firstData.json';

class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.textComponent = this.textComponent.bind(this);
  }

  textComponent(id: string, value: string, type: string) {
    return (
      <div>
          <label>
            {id}
            <input type={type} value={value}/>
          </label>
      </div>
    )
  }

  render() {
    return (
      firstData.Properties.map((data) => {
        if(data.Type === "text"){
          return (this.textComponent(data.ID, data.Value, data.Type))
        }
      })
    )
  }
}

export default App;
