const SecondSection = () => {
  return (
    <div className="section-wrapper">
      <div className="section-img">
        <img src="/Images/image (2).svg" alt="" />
      </div>
      <div className="section-content">
        <p className="title">Integrations for all your needs</p>
        <h3>Integrate & connect with your favorite tools</h3>
        <p className="sub-text">
          Useform make it easy to connect your forms submissions to your
          favorite tools. We support integrations with Zapier, Airtable, Google
          Sheets, Slack, and more.
        </p>
        <div className="list">
          <div className="list-items">
            <img src="/Images/tick.svg" alt="" />
            Connect with Zapier & webhooks
          </div>
          <div className="list-items">
            <img src="/Images/tick.svg" alt="" />
            More than 5,000 Zapier integrations available
          </div>
          <div className="list-items">
            <img src="/Images/tick.svg" alt="" />
            Need a custom integration? Let us know!
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
