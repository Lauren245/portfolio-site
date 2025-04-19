import resumePdf from '../assets/Lauren_Moore_Resume_2025.pdf'
export default function Resume(){
    return(
        <div className="container mx-auto">
            <h1 className="my-5">My Resume</h1>
            
            {/* Button group with max-width and spacing */}
            <div className="resume-btn-group d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4 gap-sm-5 my-5 mx-auto">
                <a href={resumePdf} download>
                    <button className="download-resume-btn">
                        Download Resume PDF
                    </button>
                </a>

                <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                    <button className="view-resume-btn">
                        View Resume PDF
                    </button>
                </a>
            </div>

            {/* PDF preview */}
            <div className="shadow rounded overflow-hidden">
                <iframe
                src={resumePdf}
                width="100%"
                height="600px"
                className="border rounded w-100"
                title="Resume Preview"
                />
            </div>
        </div>
    );
}