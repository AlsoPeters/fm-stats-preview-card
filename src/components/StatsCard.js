import mobileHero from '../images/image-header-mobile.jpg';

export default function StatsCard() {
  return (
    <div className='app-container'>
      <div className='card-container'>
        <div className='hero-image-container'>
          <div className='hero-image'></div>
        </div>
        <div className='text-container'>
          <h2 className='main-heading'>
            Get <span className='accent-color'>insights</span> that help your
            business grow.
          </h2>
          <div className='main-paragraph'>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>
          <section className='companies-container'>
            <div className='companies-amount stats'>10k+</div>
            <div className='stats-heading'>COMPANIES</div>
          </section>
          <section className='templates-container'>
            <div className='templates-amount stats'>314</div>
            <div className='stats-heading'>TEMPLATES</div>
          </section>
          <section className='queries-container'>
            <div className='queries-amount stats'>12M+</div>
            <div className='stats-heading'>QUERIES</div>
          </section>
        </div>
      </div>
    </div>
  );
}
