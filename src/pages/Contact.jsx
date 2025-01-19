export default function Contact(){
    return(
        <>
            <h2>Contact</h2>
            
            <form>
                <div className="row">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"></input>
                </div>

                <div className="row">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email"></input>
                </div>

                <div className="row">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={4} cols={20}></textarea>
                </div>

                <div className="row">
                    <button className="submitBtn">Submit</button>
                </div>
                
                
            </form>
        </>
    );
}