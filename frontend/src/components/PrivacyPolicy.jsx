import './PrivacyPolicy.css';

const PrivacyPolicy = ({ isOpen = false, onClose = () => {} }) => {
  if (!isOpen) return null;

  return (
    <div className="privacy-overlay" role="dialog" aria-modal="true" aria-label="Privacy Policy">
      <div className="privacy-panel">
        <div className="privacy-header">
          <h2>Privacy Policy & Accuracy Notice</h2>
          <button className="privacy-close" onClick={onClose} aria-label="Close privacy policy">✕</button>
        </div>

        <div className="privacy-body">
          <p>
            Bharat-Watch aggregates publicly available reports and maps them to geographical coordinates for exploration and analysis. We do our best to normalize and geocode sources accurately, but coordinates and source information may not be 100% precise.
          </p>

          <h3>Accuracy notice</h3>
          <p>
            Location pinpoints are approximations derived from available article metadata and automated geocoding. They may be imprecise, outdated, or incomplete. Do not use ChudWatch as the sole source for decision making, emergency response, legal determinations, or other critical actions. Always verify reports using primary sources.
          </p>

          <h3>Privacy</h3>
          <p>
            We collect and store public article data (title, summary, source, published date, and derived coordinates). We do not collect personal data beyond what is publicly available in the sources. If you believe content should be removed due to privacy or legal concerns, please contact the project maintainer via the repository issues.
          </p>

          <h3>Contact & take-down</h3>
          <p>
            For take-down requests, corrections, or privacy concerns, please open an issue in the repository or contact the maintainer directly. We will review valid requests promptly.
          </p>

          <div className="privacy-footer">
            <button className="theme-toggle" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
