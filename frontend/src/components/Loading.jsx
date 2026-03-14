import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <h1 className="loading-title"><span className='font-extrabold '>भारत</span>-WATCH</h1>
        <p className="loading-subtitle">Initializing System...</p>
        <div className="loading-progress">
          <div className="loading-bar"></div>
        </div>
        <p className="loading-status">Loading Components...</p>
        <p className="loading-subtitle">Refresh again if the incident dosen't appears</p>
      </div>
    </div>
  );
};

export default Loading;
