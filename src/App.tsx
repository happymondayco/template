import React, { useState } from 'react';

interface IUserProps {
  firstName: string;
  lastName: string;
  address: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<IUserProps>({firstName: "", lastName: "", address: ""});
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [formSubmitted, setFormSubmited] = useState<boolean>(false);

  const handleSubmit = () => {
    setFormSubmited(true);
  }

  const isActive = displayModal ? "is-active" : "";

  return (
    <div className="container">
      <button className="button is-primary" onClick={() => setDisplayModal(true)}>Open User Form</button>

      <div className={`modal ${isActive}`}>
        <div className="modal-background" onClick={() => setDisplayModal(false)}></div>
        <form>
          <div className="modal-card">
            <div className="modal-card-body">
              <div className="field">
                <label htmlFor="first-name" className="label">First Name</label>
                <div className="control">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    id="first-name"
                    className="input"
                    value={user.firstName} 
                    onChange={e => setUser({...user, firstName: e.target.value})}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="last-name" className="label">Last Name</label>
                <div className="control">
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    id="last-name"
                    className="input"
                    value={user.lastName} 
                    onChange={e => setUser({...user, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="address" className="label">Address</label>
                <div className="control">
                  <input 
                    type="text" 
                    placeholder="Address" 
                    id="address" 
                    className="input"
                    value={user.address} 
                    onChange={e => setUser({...user, address: e.target.value})}
                  />
                </div>
              </div>

              <button className="button is-primary" onClick={(e) => {e.preventDefault(); handleSubmit(); setDisplayModal(false);}} type="button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    
      {formSubmitted ? (
        <div>
          <h1>User Details</h1>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Address: {user.address}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
