import { useState } from 'react';


function Form(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

    const handleFormSubmit = (e) => {
       e.preventDefault(); 
       //TODO: add call to validation code if desired
       //This will eventually redirect to a page with contact information on it, but that is for a later version
       setName('');
       setEmail('');
       setMessage('');   
    };
    
    return(
        <>
            
            <form onSubmit={handleFormSubmit}>
                <div className="row">
                    <label htmlFor="name">
                        Name <span className="text-danger">*</span>
                    </label>
                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="name"
                        required
                    />
                </div>

                <div className="row">
                    <label htmlFor="email">
                        Email Address <span className="text-danger">*</span>
                    </label>
                    <input 
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email Address"
                        required
                    />
                </div>

                <div className="row">
                    <label htmlFor="message">
                        Message <span className="text-danger">*</span>
                    </label>
                    <textarea 
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

                <div className="row">
                    <button type="submit">Submit</button>
                </div>                
            </form>
            {errorMessage && (
                <div>
                    <p className="error-message">{errorMessage}</p>
                </div>
            )}
        </>
    );
};

export default Form;