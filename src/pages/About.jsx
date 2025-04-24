export default function About() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">About Me</h1>
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="profile-pic col-md-5 text-center mb-4 mb-md-0">
          <img
            src="/images/headshot.jpg"
            alt="Lauren Moore's headshot"
            className="img-fluid rounded shadow"
            style={{ maxWidth: '300px' }}
          />
        </div>
  
        {/* Text Column */}
        <div className="col-md-7">
          <p className="text-md-start text-center lh-lg">
                I&#39;m a web developer with 5 years of experience and a strong eye for detail, passionate about creating user-centered software solutions 
                that improve productivity and solve real-world problems. I thrive on learning new technologies and programming languages, 
                and I&#39;m always looking for opportunities to grow as a developer.

                I recently completed an intensive Full Stack Development Bootcamp through the University of Oregon and edX, building upon my 
                Associate&#39;s degree in Computer Programming from Lane Community College. I also bring past experience as a QA tester for an 
                independent game development studio, where I sharpened my problem-solving and debugging skills.

                In addition to web development, I have a background in C# and C++ and pursue game development as a creative outlet and ongoing passion.

                I&#39;m eager to contribute my skills, curiosity, and drive for continuous improvement to a forward-thinking team. 
                Let&#39;s build something great together.
          </p>
        </div>
      </div>
    </div>
  );
}
  