const HeroSection = () => {
    return(
        <section>
            <div className="hero-content">
            <img id="right" src="/Images/SVG.svg" alt="" />
            <img id="left" src="/Images/SVG (1).svg" alt="" />
                <h1>Create an online form <span>in minutes.</span></h1>
                <p>Forms are <span id="p-1">complex and time-consuming</span> to create and
                 integrate. <br />We make it <span id="p-2">easy</span> to create them and <span id="p-3">embed it </span> 
                into your website in minutes.</p>
                
                <div className="hero-cta">
                <p>Get notified when we launch and get a free early access. 🐥</p>
                    <div className="cta-inputs">
                        <input type="email" id="input-email" placeholder="Enter your email..." />
                        <button className="cta-button">Join the waitlist <img src="/Images/btn-svg.svg" alt="" /></button>
                    </div>
                </div>
            </div>

            <div className="hero-img">
                <img src="/Images/heroimg.svg" alt="" />
            </div>
        </section>
    );
}

export default HeroSection;