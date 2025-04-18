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
            <div className="container py-5">
                {/*TODO: Move style below to css file*/}
                <div className='card shadow-sm mx-auto border-0'style={{maxWidth: '700px'}}>
                    <div className='card-body p-4'>
                        <form onSubmit={handleFormSubmit}>
                            {/*Name Field*/}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name <span className="text-danger">*</span>
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={handleInputChange}
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            {/*Email Field*/}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email Address <span className="text-danger">*</span>
                                </label>

                                <input 
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                    onBlur={handleOnBlur}
                                    placeholder="Email Address"
                                    required
                                />
                            </div>

                            {/*Message Field*/}
                            <div className="mb-4">
                                <label htmlFor="message" className="form-label">
                                    Message <span className="text-danger">*</span>
                                </label>

                                <textarea 
                                        className="form-control"
                                        id="message" 
                                        value={message}
                                        name="message" 
                                        onChange={handleInputChange}
                                        rows={4} 
                                        placeholder="Type your message here..."
                                        required
                                />
                            </div>

                            {/*Submit Button*/}
                            <div className="d-grid d-md-flex justify-content-md-center">
                                <button type="submit" className="form-btn px-5">Submit</button>
                            </div>               
                        </form>
                    </div>
                </div>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-message text-danger">{errorMessage}</p>
                </div>
            )}
        </>
    );
};

export default Form;