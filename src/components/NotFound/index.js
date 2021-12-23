import './index.css'

import {Link} from 'react-router-dom'

const NotFound = () => (
  <div className="not-found-component">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="Not Found"
    />
    <h1 className="mt-4 not-found">PAGE NOT FOUND</h1>
    <p className="not-found-solution">
      we’re sorry, the page you requested could not be found, Please go back to
      the homepage
    </p>
    <button type="button" className="not-found-button">
      <Link to="/">Home</Link>
    </button>
  </div>
)
export default NotFound
