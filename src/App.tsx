import NavigationMenu from './NavigationMenu'

function App() {

  return (
    <>
      <NavigationMenu darkMode={false}>
        <NavigationMenu.Links>
          <NavigationMenu.Link linkName="Home"><h3>Home</h3></NavigationMenu.Link>
          <NavigationMenu.Link linkName="Products"><h3>Products</h3></NavigationMenu.Link>
          <NavigationMenu.Link linkName="About Us"><h3>About Us</h3></NavigationMenu.Link>
          <NavigationMenu.Link linkName="Solutions"><h3>Solutions</h3></NavigationMenu.Link>
          <NavigationMenu.Link linkName="Pricing"><h3>Pricing</h3></NavigationMenu.Link>
          <NavigationMenu.Link linkName="Blog"><h3>Blog</h3></NavigationMenu.Link>
          <NavigationMenu.Link linkName="FAQ"><h3>FAQ</h3></NavigationMenu.Link>
          <NavigationMenu.Link linkName="Testimonials"><h3>Testimonials</h3></NavigationMenu.Link>
          <NavigationMenu.Link linkName="Support"><h3>Support</h3></NavigationMenu.Link>
          <NavigationMenu.Link linkName="Gallery"><h3>Gallery</h3></NavigationMenu.Link>
          <NavigationMenu.Link linkName="Developers"><h3>Developers</h3></NavigationMenu.Link>
          <NavigationMenu.Link linkName="Services"><h3>Services</h3></NavigationMenu.Link>
          <NavigationMenu.Link linkName="Contact"><h3>Contact</h3></NavigationMenu.Link>
        </NavigationMenu.Links>
        <NavigationMenu.MovingWindow>

          <NavigationMenu.Dropdown linkName="Solutions">
            <div style={{ width: '1000px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '24px', gap: '24px' }}>
              <div className='column'>
                <h4>Software Solutions</h4>
                <p>Explore our latest software offerings designed to streamline your tasks.</p>
              </div>
              <div className='column'>
                <h4>Hardware Selection</h4>
                <p>Discover a range of high-quality hardware products built to meet your needs.</p>
              </div>
              <div className='column'>
                <h4>Accessories Collection</h4>
                <p>Enhance your setup with our thoughtfully curated accessories.</p>
              </div>
              <div className='column'>
                <h4>Exclusive Deals</h4>
                <p>Take advantage of limited-time special offers that we have for you.</p>
              </div>
              <div className='column'>
                <h4>Mobile Apps</h4>
                <p>Download our mobile apps for on-the-go productivity and entertainment.</p>
              </div>
              <div className='column'>
                <h4>Training Resources</h4>
                <p>Access training materials to make the most of our products and services.</p>
              </div>
              <div className='column'>
                <h4>Customer Support</h4>
                <p>Get assistance from our dedicated support team whenever you need it.</p>
              </div>
              <div className='column'>
                <h4>Community Forums</h4>
                <p>Join discussions and share insights with our community of users.</p>
              </div>
              <div className='column'>
                <h4>Software Solutions</h4>
                <p>Explore our latest software offerings designed to streamline your tasks.</p>
              </div>
              <div className='column'>
                <h4>Hardware Selection</h4>
                <p>Discover a range of high-quality hardware products built to meet your needs.</p>
              </div>
              <div className='column'>
                <h4>Accessories Collection</h4>
                <p>Enhance your setup with our thoughtfully curated accessories.</p>
              </div>
              <div className='column'>
                <h4>Exclusive Deals</h4>
                <p>Take advantage of limited-time special offers that we have for you.</p>
              </div>
              <div className='column'>
                <h4>Mobile Apps</h4>
                <p>Download our mobile apps for on-the-go productivity and entertainment.</p>
              </div>
              <div className='column'>
                <h4>Training Resources</h4>
                <p>Access training materials to make the most of our products and services.</p>
              </div>
              <div className='column'>
                <h4>Customer Support</h4>
                <p>Get assistance from our dedicated support team whenever you need it.</p>
              </div>
              <div className='column'>
                <h4>Community Forums</h4>
                <p>Join discussions and share insights with our community of users.</p>
              </div>
            </div>
          </NavigationMenu.Dropdown>

          <NavigationMenu.Dropdown linkName="Products">
            <div style={{ width: '500px', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '32px', gap: '32px' }}>
              <div className='column'>
                <h4>Software</h4>
                <p>Explore our cutting-edge software solutions</p>
              </div>
              <div className='column'>
                <h4>Hardware</h4>
                <p>Discover our high-quality hardware products</p>
              </div>
              <div className='column'>
                <h4>Accessories</h4>
                <p>Enhance your experience with our accessories</p>
              </div>
              <div className='column'>
                <h4>Special Offers</h4>
                <p>Check out our limited-time special offers</p>
              </div>
            </div>
          </NavigationMenu.Dropdown>
          <NavigationMenu.Dropdown linkName="About Us">
            <div style={{ width: '600px', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '32px', gap: '32px' }}>
              <div className='column'>
                <h4>Innovative Solutions</h4>
                <p>Explore our latest groundbreaking software solutions</p>
              </div>
              <div className='column'>
                <h4>Premium Hardware</h4>
                <p>Discover our collection of top-tier hardware products</p>
              </div>
              <div className='column'>
                <h4>Complementary Accessories</h4>
                <p>Elevate your experience with our range of accessories</p>
              </div>
              <div className='column'>
                <h4>Exclusive Deals</h4>
                <p>Take advantage of limited-time special offers</p>
              </div>
            </div>
          </NavigationMenu.Dropdown>
          <NavigationMenu.Dropdown linkName="Pricing">
            <div style={{ width: '800px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '24px', gap: '24px' }}>
              <div className='column'>
                <h4>Software Solutions</h4>
                <p>Discover our innovative software solutions tailored to your needs</p>
              </div>
              <div className='column'>
                <h4>Hardware Selection</h4>
                <p>Explore our premium hardware products for your technological requirements</p>
              </div>
              <div className='column'>
                <h4>Accessories Collection</h4>
                <p>Enhance your setup with our range of high-quality accessories</p>
              </div>
              <div className='column'>
                <h4>Exclusive Deals</h4>
                <p>Take advantage of our limited-time special offers and promotions</p>
              </div>
              <div className='column'>
                <h4>Service Packages</h4>
                <p>Customized service bundles to provide you with comprehensive solutions</p>
              </div>
              <div className='column'>
                <h4>Support & Maintenance</h4>
                <p>Learn about our dedicated support and maintenance options for your products</p>
              </div>
            </div>
          </NavigationMenu.Dropdown>
          <NavigationMenu.Dropdown linkName="Services">
            <div style={{ width: '700px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '32px', gap: '32px' }}>
              <div className='column'>
                <h4>Consulting</h4>
                <p>Get expert advice for your business</p>
              </div>
              <div className='column'>
                <h4>Support</h4>
                <p>24/7 technical support for our products</p>
              </div>
              <div className='column'>
                <h4>Training</h4>
                <p>Enhance your skills with our training programs</p>
              </div>
              <div className='column'>
                <h4>Customization</h4>
                <p>Tailor our solutions to meet your needs</p>
              </div>
            </div>
          </NavigationMenu.Dropdown>
        </NavigationMenu.MovingWindow>
      </NavigationMenu>
    </>
  )
}

export default App
