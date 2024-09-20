import { Link } from 'react-router-dom';
import './not-found-page.scss';

const NotFoundPage = () => {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to='/'>Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
