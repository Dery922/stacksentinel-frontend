import { ThreeDots } from 'react-loader-spinner';
import './loader.css'; // Same CSS as above

 const customLoader = ({ loading }) => {
  return (
    loading && (
      <div className="loader-overlay">
        <ThreeDots 
          color="#36d7b7" 
          height={100} 
          width={100} 
        />
      </div>
    )
  );
};

export default customLoader;