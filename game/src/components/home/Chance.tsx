import React from 'react';

export interface Ichance {
  value: boolean
  chanceChange: Function
};

export class Chance extends React.Component<Ichance> {
  constructor(props: Ichance) {
    super(props)
  }

  render() {
    return(
      <div className='col s6 container'>
              <h5>Select chance:</h5>
              <form action="#" >
                <p>
                  <label>
                    <input name="group2" value='10' type="radio" defaultChecked={true}
                      onChange={() => this.props.chanceChange(true)}  />
                    <span className='select_time'>normal</span>
                  </label>
                  <label>
                    <input name="group2" type="radio" 
                      onChange={() => this.props.chanceChange(false)} />
                    <span className='select_time'>50/50</span>
                  </label>
                </p>
              </form>
            </div>
    )
  }
}
