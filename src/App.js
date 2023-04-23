
import './App.css';

function App() {

  class Car {
    constructor(name){
      this.brand = name
    }
    present(){
      return 'I have a ' +this.brand
    }
   
  }
  class Model extends Car{
    constructor(name , mod){
      super(name)
      this.model = mod
    }
    show(){
      return this.present() + ' ,  it is a ' + this.model
    }
      
  }
  const myCar = new Model('ford' , 'mustag')
  const mySblings = ['steve' ,'arsen' , 'ngabire' , 'jeph' , 'babe' , 'janvier' , 'jamali' ]
  let myFamily = mySblings.map((item)=> <p>{item}</p>)

  //destructurung array
  const vehicles = ['benz' , 'bmw' , 'toyota']
  const [mercdex , car , suv ] = vehicles
  let cars = vehicles.map((items) => <p>{items}</p>)
  function calcualte (a,b) {
    let sum = a+b
    let difference = a-b
    let product = a*b
    let division = a/b
    return [sum , difference , product , division] 
  }

 const [sum , difference , product , division] = calcualte(2,4)
//  let myCalculations = calcualte.map((itemss)=><p>{itemss}</p>)
  return (
    <div className="App">
     <h1>
      {/* {myCar.brand}  */}
        {/* { myCar.present()} */}
        { myCar.show()}
      <h1>{myFamily}</h1>
      <h2>{mercdex}</h2>
      <h3>{vehicles}</h3>
      <h4>{cars}</h4>
      <h1>{sum}</h1>
      <h1> the difference is : {difference}</h1>
      <h1>{division}</h1>
      <h1>{product}</h1>

     </h1>
    </div>
  );
}

export default App;
