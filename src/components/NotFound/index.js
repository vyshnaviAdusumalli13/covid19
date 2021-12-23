import './index.css'

import {Link} from 'react-router-dom'

const NotFound = () => (
  <div className="not-found-component">
    <h1 className="mt-4 not-found">PAGE NOT FOUND</h1>
    <p className="not-found-solution">
      we are sorry, the page you requested could not be found
    </p>
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not-found-pic"
    />
    <button type="button" className="not-found-button">
      <Link to="/">Home</Link>
    </button>
  </div>
)
export default NotFound
