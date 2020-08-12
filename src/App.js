import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import AccountCreated from './components/AccountCreated';

function App() {

  /* Account Type
    0: Student
    1: Youtuber
  */
  const [showAccountForm, setShowAccountForm] = useState(true);
  const [accountType, setAccountType] = useState(null);
  
  const handleCreatedAccount = (accountType) => {
    setShowAccountForm(false);
    setAccountType(accountType);
  }

  return (
    <div style={{height:'100%'}}>
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
      <Header/>
      {showAccountForm ? <Form handleCreatedAccount = {handleCreatedAccount}/> 
        : <AccountCreated accountType= {accountType}/>}
    </div>
  );
}

export default App;
