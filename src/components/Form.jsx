import { useState } from 'react';
import { validateEmail  } from '../utils/validation';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/Form.css';

function Form(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        switch(inputType){
            case 'name':
                setName(inputValue);
                break;
            case 'email': 
                setEmail(inputValue);
                break;
            case 'message':
                setMessage(inputValue);
                break;
            default:
                setErrorMessage("an unknown error occured. Please try again.");
        };
    };

    const handleOnBlur = () => {
        if(!validateEmail(email) && email !== ""){
            setErrorMessage("invalid email");
        }
        else{
            setErrorMessage("");
        }
    }

    const handleFormSubmit = (e) => {
       e.preventDefault(); 
       //TODO: add call to validation code if desired
       if(!validateEmail(email) || !name){
            setErrorMessage("invalid name or email");
       }
       //This will eventually redirect to a page with contact information on it, but that is for a later version
       setName('');
       setEmail('');
       setMessage('');   
       setShowToast(true);

       //set a timeout for the toast message so it doesn't stick around forever
       setTimeout(() => { setShowToast(false); }, 3000);
    };
    
    return(
        <>
            <div className="toast-container">
                <div
                    className={`toast align-items-center text-white bg-success border-0 ${
                        showToast ? "show" : "hide"
                    }`}
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className='d-flex'>
                        <div className="toast-body">
                            Message submitted Successfully!
                        </div>
                        <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            aria-label="Close"
                            onClick={() => setShowToast(false)}
                        ></button>
                    </div>
                </div>
            </div>

            <form onSubmit={handleFormSubmit} className="pt-4">
                <div className="row g-3 align-items-center pb-3">
                    <div className="col-2">
                        <label htmlFor="name" className="col-form-auto">
                            Name <span className="text-danger">*</span>
                        </label>
                    </div>
                    <div className="col-6">
                        <input
                            className="form-control"
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="name"
                            required
                        />
                    </div>
                </div>

                <div className="row g-3 align-items-center pb-3">
                    <div className="col-2">
                        <label htmlFor="email" className="col-form-auto">
                            Email Address <span className="text-danger">*</span>
                        </label>
                    </div>
                    <div className="col-6">
                        <input 
                            className="form-control"
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            onBlur={handleOnBlur}
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                    </div>
                </div>

                <div className="row g-3 pb-3">
                    <div className="col-2">
                        <label htmlFor="message" className="col-form-label">
                            Message <span className="text-danger">*</span>
                        </label>
                    </div>
                    <div className="col-6">
                        <textarea 
                                className="form-control"
                                id="message" 
                                value={message}
                                name="message" 
                                onChange={handleInputChange}
                                rows={4} 
                                cols={20} 
                                placeholder="Type your message here..."
                                required
                            />
                    </div>
                </div>

                <div className="row">
                    <span className="align-items-center"><button type="submit" className='btn btn-primary col-6'>Submit</button></span>
                </div>                
            </form>
            {errorMessage && (
                <div>
                    <p className="error-message text-danger">{errorMessage}</p>
                </div>
            )}
        </>
    );
};

export default Form;