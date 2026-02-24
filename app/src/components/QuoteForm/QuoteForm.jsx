import React, { useState, useRef } from 'react';
import './QuoteForm.css';
import logo from '../../assets/logo.png';

const QuoteForm = ({ onClose }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const MAX_FILE_SIZE_MB = 5;

  // Use useRef to get direct access to the input elements
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const serviceRef = useRef();
  const detailsRef = useRef();
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    const totalSizeMB = totalSize / (1024 * 1024);

    if (totalSizeMB > MAX_FILE_SIZE_MB) {
      alert(`The total size (${totalSizeMB.toFixed(2)} MB) exceeds the ${MAX_FILE_SIZE_MB} MB limit.`);
      event.target.value = '';
      setSelectedFiles([]);
    } else {
      setSelectedFiles(files);
    }
  };

  const clearFiles = () => {
    setSelectedFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // The function now accepts the event and prevents default submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // CRITICAL FIX: This stops the page from reloading.
    setLoading(true);

    const filesData = await Promise.all(
      selectedFiles.map(
        (file) =>
          new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () =>
              resolve({
                filename: file.name,
                mimeType: file.type,
                file: reader.result.split(',')[1],
              });
            reader.readAsDataURL(file);
          })
      )
    );

    // Get the values directly from the refs
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      service: serviceRef.current.value,
      details: detailsRef.current.value,
      files: JSON.stringify(filesData),
    };

    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbwtfEDOVg6Qpx8-1rvOwFQJdrMGXeNoObSDnSvxx5phSCRsnhiz-VVZRhpwZYp6n8AL2A/exec', {
        method: 'POST',
        body: new URLSearchParams(payload),
      });

      const result = await res.json();
      
      if (result.result === 'success') {
        alert('✅ Submitted successfully!');
        onClose(); 
      } else {
        alert('❌ Error submitting form');
      }

    } catch (err) {
      alert('❌ Submission failed. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        {/* CRITICAL FIX: Wrapped content in <form> with onSubmit handler */}
        <form className="quote-form" onSubmit={handleSubmit}>
          {/* Header */}
          <div className="form-inner-header">
            <img src={logo} alt="WeblanceHub.com Logo" className="form-logo" />
            <span className="form-brand-name">WeblanceHub.com</span>
          </div>
          {/* Intro */}
          <div className="form-intro">
            <h2>Unlock Your Project's Potential</h2>
            <p>Tell us about your digital needs for a tailored estimate.</p>
          </div>
          {/* Row 1 */}
          <div className="form-row">
            <div className="form-field">
              <input type="text" name="name" placeholder="Name" required ref={nameRef} />
            </div>
            <div className="form-field">
              <input type="email" name="email" placeholder="Email Address" required ref={emailRef} />
            </div>
          </div>
          {/* Row 2 */}
          <div className="form-row">
            <div className="form-field">
              <input type="tel" name="phone" placeholder="Contact Number (Optional)" ref={phoneRef} />
            </div>
            <div className="form-field">
              <select name="service" required defaultValue="" ref={serviceRef}>
                <option value="" disabled>Select Service of Interest</option>
                <option value="Business Websites">Business Websites</option>
                <option value="Resume / Portfolio Websites">Resume / Portfolio Websites</option>
                <option value="Invitation Websites">Invitation Websites</option>
                <option value="Blog Websites">Blog Websites</option>
                <option value="Hosting & Domain Setup">Hosting & Domain Setup</option>
                <option value="Professional Email Setup">Professional Email Setup</option>
                <option value="Basic SEO Setup">Basic SEO Setup</option>
                <option value="Logo / Banner Design">Logo / Banner Design</option>
                <option value="Google Business Profile Setup">Google Business Profile Setup</option>
                <option value="Annual Hosting & Maintenance">Annual Hosting & Maintenance</option>
              </select>
            </div>
          </div>
          {/* Details */}
          <div className="form-field full-width">
            <textarea name="details" rows="5" placeholder="Project Details" required ref={detailsRef}></textarea>
          </div>
          {/* File Upload */}
          <div className="form-field file-upload-wrapper">
            <label htmlFor="file-upload" className="file-upload-label">
              <span className="file-upload-text">Upload Files (Max {MAX_FILE_SIZE_MB}MB Total)</span>
              <input
                type="file"
                id="file-upload"
                className="file-input"
                accept="image/*,application/pdf,.doc,.docx"
                multiple
                onChange={handleFileChange}
                ref={fileInputRef}
              />
            </label>
            <div className="file-list">
              {selectedFiles.length > 0 ? (
                <div>
                  <div className="file-list-header">
                    <span>Selected Files:</span>
                    <button type="button" onClick={clearFiles} className="clear-files-button">
                      Clear
                    </button>
                  </div>
                  <ul className="file-list-ul">
                    {selectedFiles.map((file, index) => (
                      <li key={index}>{file.name} ({(file.size / 1024).toFixed(2)} KB)</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <span className="no-files-text">No files selected</span>
              )}
            </div>
          </div>
          {/* Submit */}
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Quote Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
