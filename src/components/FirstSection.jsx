const FirstSection = () =>{
    return(
        <div className="section-wrapper">
            <div className="section-content">
                <p className="title">Say goodbye to painful forms</p>
                <h3>Your first form in minutes</h3>
                <p className="sub-text">Useform makes it easy for you to create professional forms
                    in minutes with an intuitive drag-and-drop editor. No more
                    wasting time on tedious form creation.
                </p>
               <div className="list">
               
                <div className="list-items"><img src="/Images/tick.svg" alt="" />Your first form in 5 minutes</div>
               <div className="list-items"><img src="/Images/tick.svg" alt="" />Easy and intuitive to use</div>
               <div className="list-items"><img src="/Images/tick.svg" alt="" />Generous free-tier</div>
                
               </div>
            </div>

            <div className="section-img">
                <img src="/Images/image (1).svg" alt="" />
            </div>
        </div>
    );
}

export default FirstSection;