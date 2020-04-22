import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Pasha from './Pasha';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '',pasha: <NavLink to="/pasha" className="pasha">Pasha</NavLink>,
    title: "Спортсмен", title1: "Не ври, у него не выйдет",
    title2: "Он сдасться))))", title3: "Даня я в тебя верю",
    title4: "Ну ты и романтик", title5: "Да ты супермен", title6: "Пам-пам-пам Данилко молодец", title7: "Данилко патриот",
    title8: "Это твоя последняя победа", title9: "Это твоя последняя победа"};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value === "Ты меня нашел") {
      alert('Даня')
    } else if (this.state.value === "ты нашел меня") {
        alert('Даня')
    } else if (this.state.value === "ТЫ НАШЕЛ МЕНЯ") {
      alert('Даня')
    } else if (this.state.value === "ВВЕДИ МЕНЯ") {
      alert('Мотиватор')
    } else if (this.state.value === "введи меня") {
      alert('Даня')
    } else if (this.state.value === "Введи меня") {
      alert('Даня')
    } else if (this.state.value === "Даня Мотиватор") {
      this.setState({pasha:<NavLink to="/pasha" className="pashaChange">Think</NavLink>}) 
    } else if (this.state.value === "ДАНЯ МОТИВАТОР") {
      this.setState({pasha:<NavLink to="/pasha" className="pashaChange">Think</NavLink>}) 
    } else if (this.state.value === "даня мотиватор") {
      this.setState({pasha:<NavLink to="/pasha" className="pashaChange">Think</NavLink>}) 
    } else if (this.state.value === "Даня мотиватор") {
      this.setState({pasha:<NavLink to="/pasha" className="pashaChange">Think</NavLink>}) 
    } else if (this.state.value === "Мотиватор Даня") {
      this.setState({pasha:<NavLink to="/pasha" className="pashaChange">Think</NavLink>}) 
    } else if (this.state.value === "мотиватор даня") {
      this.setState({pasha:<NavLink to="/pasha" className="pashaChange">Think</NavLink>}) 
    } else if (this.state.value === "мотиватор Даня") {
      this.setState({pasha:<NavLink to="/pasha" className="pashaChange">Think</NavLink>}) 
    } else {
      alert('Попробуй еще')
    }
    event.preventDefault();
  }
  changeTitle = () => {
    this.setState({ title: "5+5*5=", title1:"6*2/6=", title2:"333*66", title3:"6459/chc", title4:"543/84*82*3",
    title5:"342-4=2", title6:"32/4", title7:"24542*5", title8:"432/3", title9:"214+44" });
 };
  changeAgainTitle = () => {
    this.setState({ title: "Спортсмен", title1:"Не ври, у него не выйдет", title2:"Он сдасться))))",
    title3:"Даня я в тебя верю", title4:"Ну ты и романтик", title5:"Да ты супермен",
    title6:"Пам-пам-пам Данилко молодец", title7:"Серыйй патриот", title8:"Это твоя последняя победа",
    title9:"Это твоя последняя победа"});
 };

  render() {
    return (   
      <div className="App">
        <Switch>
          {/* <Route path='/' render={() => {<Redirect to={"/profile"}/>}}/> */}
          <Route path='/pasha' render={() => <Pasha />} />
          {/* <Route path='*' render={() => {<div>404 NOT FOUND</div>}} /> */}
        </Switch>
        <div className="main">
          <h1 className="h1">Какой-то из паролей подойдет, отвечаю))</h1>
          <h4 className="h4">Введи меня</h4>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input className="textInput" onChange={this.handleChange} placeholder="Enter password" type="text" name="name" value={this.state.value} />
            </label>
            <input className="submitInput" type="submit" value="Отправить" />
          </form>
        </div>

        {this.state.pasha}

        <h6 className="h3">Ты меня нашел</h6>

        <h1 className="w1 a">Даня Дрыщь</h1>
        <h1 className="w1 b">Я знаю он не такой))</h1>
        <h1 className="w1 c">Не здавайся, я в тебя верю</h1>
        <h3 className="w3 a" onClick={this.changeTitle} onDoubleClick={this.changeAgainTitle}>{this.state.title1}</h3>
        <h3 className="w3 b">Ха-ха-ха</h3>
        <h3 className="w3 c">Может последний</h3>
        <h2 className="w2 a">А может первый</h2>
        <h2 className="w2 b">А может никакой</h2>
        <h2 className="w2 c"onClick={this.changeTitle} onDoubleClick={this.changeAgainTitle}>{this.state.title2}</h2>
        <h1 className="v1 a">Даня - краля</h1>
        <h1 className="v1 b">Дай автограф))</h1>
        <h1 className="v1 c"onClick={this.changeTitle} onDoubleClick={this.changeAgainTitle}>{this.state.title3}</h1>
        <h3 className="v3 a">Только данилко, только сила</h3>
        <h3 className="v3 b"onClick={this.changeTitle} onDoubleClick={this.changeAgainTitle}>{this.state.title4}</h3>
        <h3 className="v3 c">Я от тебя такого не ожидал</h3>
        <h2 className="v2 a">Ты просто красавчик</h2>
        <h2 className="v2 b">Кто-ты на самом деле</h2>
        <h2 className="v2 c"onClick={this.changeTitle} onDoubleClick={this.changeAgainTitle}>{this.state.title5}</h2>
        <h1 className="p1 a">Я к вам по отчеству буду</h1>
        <h1 className="p1 b">Дай лапу</h1>
        <h1 className="p1 c"onClick={this.changeTitle} onDoubleClick={this.changeAgainTitle}>{this.state.title6}</h1>
        <h3 className="p3 a">Просто будущий отец</h3>
        <h3 className="p3 b">Настоящий мущина</h3>
        <h3 className="p3 c"onClick={this.changeTitle} onDoubleClick={this.changeAgainTitle}>{this.state.title7}</h3>
        <h2 className="p2 a">Просто певец</h2>
        <h2 className="p2 b">Миллионер</h2>
        <h2 className="p2 c">Любовь</h2>
        <h1 className="o1 a" onClick={this.changeTitle} onDoubleClick={this.changeAgainTitle}>{this.state.title}</h1>
        <h1 className="o1 b">Ты такой добрый</h1>
        <h1 className="o1 c">Что там за ушком</h1>
        <h3 className="o3 a">Данилко ты пример</h3>
        <h3 className="o3 b">Смейся-смейся</h3>
        <h3 className="o3 c" onClick={this.changeTitle} onDoubleClick={this.changeAgainTitle}>{this.state.title8}</h3>
        <h2 className="o2 a">Амур</h2>
        <h2 className="o2 b" onClick={this.changeTitle} onDoubleClick={this.changeAgainTitle}>{this.state.title9}</h2>
        <h2 className="o2 c">Ты</h2>
      </div>
    );
  }
}

export default App;
