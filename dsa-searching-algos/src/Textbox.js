import React from 'react';

export default class Textbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 'none',
            count: 'none'
        }
      }
      

  
      render(){
          let string = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
          let arr = string.split(' ').sort((a,b) => {return a-b}).map((value) => value);
          const bindThis = this;
          function linearSearch(string, value){
            for(let i=0; i<string.length; i++){
                if(arr[i] === value){
                    bindThis.setState({
                    input: value,
                    count: i
                    })
                }
            }
            console.log(value);
        }
        function binarySearch(arr, value, start=0, end= arr.length-1, count=0) {
            count++;
            
        
            if (start > end) {
                bindThis.setState({
                    input: 'Not found',
                    count: 'none'
                })
                return;
            }
        
            const index = Math.floor((start + end) / 2);
            const item = arr[index];
        
            console.log(start, end);
            if (item === value) {
                bindThis.setState({
                    input: value,
                    count: count
                })
                return;
            }
            else if (item < value) {
                return binarySearch(arr, value, index + 1, end, count);
            }
            else if (item > value) {
                return binarySearch(arr, value, start, index - 1, count);
            }
        };
          return (
        
            <form onSubmit={event => {
                event.preventDefault();
                const input = event.target.number;
                console.log(input);
                
        
              }}>
                <div className="textarea">
                    <h1>Enter Number</h1>
                    <label>Linear Search</label>
                    <input onChange={(event)=> (linearSearch(arr, event.target.value))}/>
                    <label>Binary Search</label>
                    <input onChange={(event)=> (binarySearch(arr, event.target.value))}/>
                    <p>Number: {this.state.input},</p>
                    <p>Iterations: {this.state.count}</p>
                </div>
            </form>
          );
      }
}