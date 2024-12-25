import {useState} from 'react'
import castle from './assets/castle.png'
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const emailLabelClass = () =>{
    return email || emailFocus ? 'field-label-email-value' : 'field-label-email'
  };

  const passwordLabelClass = () =>{
    return password || passwordFocus ? 'field-label-password-value' : 'field-label-password'
  };



  return (
    <div className="App">
      <form className="form-text">
        <div className="form-header">
          <h2 className="form-title">Login teste</h2>
          <img className="image"  src={castle}/>
        </div>
        <div className="field-email">
          <div className={emailLabelClass()}>
            <label >E-mail</label>
          </div>
          <input className="input-email" 
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          />
        </div>
        <div className="field-password">
          <div className={passwordLabelClass()}>
            <label >Password</label>
          </div>
          <input className="input-password"
           type="password"
           value={password} 
           onChange={e => setPassword(e.target.value)}
           onFocus={() => setPasswordFocus(true)}
           onBlur={() => setPasswordFocus(false)}
           />
           
        </div>
        <div className="field-button">
          <button className="btn-submit">Enviar</button>
        </div>
        <div className="field-register">
          <p className="interrogation">Não possui conta ?</p>
          <a className="make-registration">Cadastre-se.</a>
        </div>
      </form>
    </div>
  );
}

export default App;
