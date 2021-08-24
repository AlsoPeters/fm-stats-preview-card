import mobileHero from '../images/image-header-mobile.jpg';

export default function StatsCard() {
  return (
    <div className='app-container'>
      <div className='card-container'>
        <div className='hero-image'>
          <img src={mobileHero} alt='image-mobile' />
        </div>
        <h2 className='title'>Get insights that help your business grow.</h2>
        <div className='description'>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>
        <section className='companies-container'>
          <div className='companies-amount'>10k+</div>
          <div className='companies-title'>COMPANIES</div>
        </section>
        <section className='templates-container'>
          <div className='templates-amount'>314</div>
          <div className='templates-title'>TEMPLATES</div>
        </section>
        <section className='queries-container'>
          <div className='queries-amount'>12M+</div>
          <div className='queries-title'>QUERIES</div>
        </section>
      </div>
    </div>
  );
}
