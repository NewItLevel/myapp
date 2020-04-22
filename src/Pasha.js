import React from 'react';
import './Pasha.css'


class Pasha extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick() {
    alert('aaa')
  }

  render() {
    return (   
      <div className="Pasha" className="call">
        send a telegrama from number <br /> 
        (1: David in English)<br />
        (2: How many sheep Jesuse left - 2)<br />
        (3: 7*6)<br />
        (4: David in English)<br />
        (5: 144*2/3+100/10-100+3)<br/>
        (6: How many sheep Jesuse left, turn on 180) <br />
        (7: How many animal every kind, was on Kovcheg?) <br />
        {/* <div className="button">
          <button onClick={this.onClick}>&times;</button>
        </div> */}
      </div>
    );
  }
}

export default Pasha;
