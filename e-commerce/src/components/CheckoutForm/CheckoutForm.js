import { useState } from "react";
import "bulma/css/bulma.css";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = { name, phone, email };
    onConfirm(userData);
  };
  return (
    <div className="columns is-flex is-align-center is-justify-content-center m-5">
      <form onSubmit={handleConfirm} className="form column is-half ">
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input className="input" type="text" placeholder="Nombre" onChange={({target}) => setName(target.value)}/>
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="ejemplo@mail.com"
              onChange={({target}) => setEmail(target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Telefono</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="221-555-5555"
              onChange={({target}) => setPhone(target.value)}
            />
          </div>
        </div>
        <div className="control">
          <button type="submit" className="button is-link">
            Terminar
          </button>
        </div>
      </form>
    </div>
  );
};
export default CheckoutForm;