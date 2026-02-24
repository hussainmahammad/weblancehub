import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../../assets/logo.png';

// --- START OF INLINE STYLE DEFINITIONS (The 'Regal & Sepia' Theme) ---
const COLORS = {
    bgLight: '#e8e6df',        
    bgForm: '#ffffff',         
    textCharcoal: '#4e342e',   
    accentGold: '#8d6e3f',     
    borderWarm: '#a1887f',     
    shadowRich: 'rgba(0, 0, 0, 0.3)',
    textSecondary: '#6d6d6d',
    hoverGold: '#6d4c41',      
    bgParchment: '#f7f5f0',    
};

const styles = {
    // Main Section Styles
    section: {
        minHeight: '100vh',
        backgroundColor: COLORS.bgLight,
        color: COLORS.textCharcoal,
        fontFamily: 'Georgia, serif',
    },
    // Contact Info Header (Desktop Font/Size)
    classicHeader: {
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        color: COLORS.textCharcoal,
        borderBottom: `1px solid ${COLORS.borderWarm}`,
        borderTop: `1px solid ${COLORS.borderWarm}`,
        padding: '10px 0',
        marginBottom: '2rem',
        textTransform: 'uppercase',
        letterSpacing: '3px',
        textAlign: 'center',
        fontSize: '2.5rem', 
    },
    // Social Icons
    socialIcon: {
        color: COLORS.accentGold,
        border: `1px solid ${COLORS.accentGold}`,
        padding: '5px',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    },
    // Form Container (The Regal Frame) - Desktop Padding
    formContainerDesktop: {
        backgroundColor: COLORS.bgForm,
        border: `3px double ${COLORS.accentGold}`,
        boxShadow: `10px 10px 30px -10px ${COLORS.shadowRich}`,
        padding: '4rem 3rem', 
        borderRadius: '0',
    },
    // Form Header
    formHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
        marginBottom: '2.5rem',
        borderBottom: `1px dashed ${COLORS.borderWarm}`,
        paddingBottom: '1.5rem',
    },
    formLogo: {
        width: '55px',
        height: '55px',
        border: `2px solid ${COLORS.accentGold}`,
        padding: '5px',
    },
    formBrandName: {
        fontFamily: 'Playfair Display, serif',
        fontSize: '2rem', 
        fontWeight: 700,
        color: COLORS.textCharcoal,
        letterSpacing: '2px',
        textTransform: 'uppercase',
    },
    // Form Intro
    formIntroHeading: {
        fontFamily: 'Playfair Display, serif',
        fontSize: '2.2rem', 
        fontWeight: 700,
        color: COLORS.textCharcoal,
        marginBottom: '0.75rem',
        borderBottom: `1px solid ${COLORS.borderWarm}`,
        paddingBottom: '5px',
        textAlign: 'center',
    },
    formIntroTagline: {
        fontStyle: 'italic',
        color: COLORS.textSecondary,
        fontSize: '1.1rem',
    },
    // Input/Textarea Base
    inputBase: {
        width: '100%',
        padding: '1rem 0.75rem',
        border: 'none',
        borderBottom: `2px solid ${COLORS.borderWarm}`,
        borderRadius: '0',
        backgroundColor: 'transparent',
        color: COLORS.textCharcoal,
        fontFamily: 'Georgia, serif',
        fontSize: '1rem',
        transition: 'border-bottom-color 0.3s ease, background-color 0.3s ease',
    },
    // Select Field Fix 
    selectBase: {
        width: '100%',
        padding: '0.9rem 0.75rem', 
        border: 'none',
        borderBottom: `2px solid ${COLORS.borderWarm}`,
        borderRadius: '0',
        backgroundColor: '#fcfcfc', 
        color: COLORS.textCharcoal,
        fontFamily: 'Georgia, serif',
        fontSize: '1rem',
        transition: 'border-bottom-color 0.3s ease, background-color 0.3s ease',
    },
    // File Upload Area
    fileUploadWrapper: {
        border: `1px solid ${COLORS.borderWarm}`,
        padding: '1.5rem',
        backgroundColor: COLORS.bgParchment,
        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.05)',
    },
    fileUploadLabel: {
        display: 'block',
        cursor: 'pointer',
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: COLORS.accentGold,
        border: `1px solid ${COLORS.hoverGold}`,
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        color: '#ffffff',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    // Submit Button
    submitButton: {
        width: '100%',
        padding: '1.2rem',
        backgroundColor: COLORS.textCharcoal,
        color: '#ffffff',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.1s ease',
        borderRadius: '2px',
        textTransform: 'uppercase',
        letterSpacing: '3px',
        boxShadow: `0 8px 15px -5px rgba(78, 52, 46, 0.6)`,
    },
    // Other utility styles
    link: { color: COLORS.accentGold },
    listHeader: { color: COLORS.accentGold },
    clearButton: { color: '#c90000', textDecoration: 'underline' }
};

// Functions to handle interactive styles
const handleFocus = (e) => {
    e.currentTarget.style.borderBottomColor = COLORS.accentGold;
    e.currentTarget.style.backgroundColor = '#fcfcfc';
};
const handleBlur = (e) => {
    e.currentTarget.style.borderBottomColor = COLORS.borderWarm;
    e.currentTarget.style.backgroundColor = 'transparent';
};
const handleSelectFocus = (e) => {
    e.currentTarget.style.borderBottomColor = COLORS.accentGold;
};
const handleSelectBlur = (e) => {
    e.currentTarget.style.borderBottomColor = COLORS.borderWarm;
};
const handleButtonHover = (e, isHovering) => {
    e.currentTarget.style.backgroundColor = isHovering ? COLORS.hoverGold : COLORS.textCharcoal;
    e.currentTarget.style.transform = isHovering ? 'translateY(-2px)' : 'translateY(0)';
    e.currentTarget.style.boxShadow = isHovering 
        ? `0 10px 20px -5px rgba(78, 52, 46, 0.8)` 
        : `0 8px 15px -5px rgba(78, 52, 46, 0.6)`;
};

// Custom Hook for dynamic styles (simulating media queries for mobile)
const useResponsiveStyles = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const formRowStyle = isMobile 
        ? { display: 'flex', flexDirection: 'column', gap: '1.8rem' } 
        : { display: 'flex', flexDirection: 'row', gap: '2rem' };
    
    // Mobile Padding Adjustment
    const formPaddingStyle = isMobile ? { 
        ...styles.formContainerDesktop, 
        padding: '2rem 1rem' 
    } : styles.formContainerDesktop;

    // Mobile Specific Font/Element Scaling and Logo Shift
    const mobileStyles = {
        classicHeader: isMobile ? { fontSize: '1.75rem' } : { fontSize: '2.5rem' },
        formHeaderBrand: isMobile ? { fontSize: '1.4rem' } : { fontSize: '2rem' },
        formHeaderLogo: isMobile ? { 
            width: '40px', 
            height: '40px', 
            marginRight: '5px' // Mobile space: 5px (Less space)
        } : { 
            width: '55px', 
            height: '55px', 
            marginRight: '10px' // Desktop space: 10px
        },
        formIntroHeading: isMobile ? { fontSize: '1.5rem' } : { fontSize: '2.2rem' },
        inputWidth: isMobile ? '100%' : '50%',
        formHeaderShift: isMobile ? { 
            paddingLeft: '15px' 
        } : {}
    };

    return { formRowStyle, formPaddingStyle, isMobile, mobileStyles };
};

// --- END OF INLINE STYLE DEFINITIONS ---

const ContactUs = () => {
    const { formRowStyle, formPaddingStyle, isMobile, mobileStyles } = useResponsiveStyles();

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const MAX_FILE_SIZE_MB = 5;

    // Refs for input elements
    const fileInputRef = useRef(null); 
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const serviceRef = useRef();
    const detailsRef = useRef();

    // Stable file change handler
    const handleFileChange = useCallback((event) => {
        const files = event.target.files ? Array.from(event.target.files) : [];
        const totalSize = files.reduce((sum, file) => sum + file.size, 0);
        const totalSizeMB = totalSize / (1024 * 1024);

        if (totalSizeMB > MAX_FILE_SIZE_MB) {
            alert(`The total size (${totalSizeMB.toFixed(2)} MB) exceeds the ${MAX_FILE_SIZE_MB} MB limit.`);
            
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            setSelectedFiles([]);
        } else {
            setSelectedFiles(files);
        }
    }, [MAX_FILE_SIZE_MB]);

    const clearFiles = () => {
        setSelectedFiles([]);
        if (fileInputRef.current) {
             fileInputRef.current.value = '';
        }
    };

    // UPDATED: Function now accepts event (e) and prevents default refresh
    const handleSubmit = async (e) => {
        // --- CRITICAL FIX: Stops the page from refreshing ---
        e.preventDefault(); 
        // ---------------------------------------------------
        
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
                // Clear inputs on success
                setSelectedFiles([]);
                nameRef.current.value = '';
                emailRef.current.value = '';
                phoneRef.current.value = '';
                serviceRef.current.value = '';
                detailsRef.current.value = '';
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
        <section className="relative min-h-screen overflow-hidden" style={styles.section}>
            <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
                {/* Contact Info and Social Media */}
                <div className="mb-12 flex flex-col md:flex-row justify-between items-start">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{...styles.classicHeader, ...mobileStyles.classicHeader}}>Contact Us</h2>
                        <p className="text-lg font-light mb-4 text-justify">We’d love to hear from you! Reach out to discuss your project.</p>
                        <p className="text-lg font-medium mb-4">Email: <a href="mailto:contact@weblancehub.com" style={styles.link} className="hover:underline">contact@weblancehub.com</a></p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/weblancehubcom" target="_blank" rel="noopener noreferrer" 
                                style={styles.socialIcon} 
                                onMouseEnter={(e) => e.currentTarget.style.cssText += `color: #ffffff; background-color: ${COLORS.accentGold}; transform: scale(1.1);`}
                                onMouseLeave={(e) => e.currentTarget.style.cssText += `color: ${COLORS.accentGold}; background-color: transparent; transform: scale(1.0);`}
                            >
                                <FaFacebookF size={24} />
                            </a>
                            <a href="https://www.instagram.com/weblancehub?igsh=MWFlempoOTBsZDM1YQ==" target="_blank" rel="noopener noreferrer" 
                                style={styles.socialIcon}
                                onMouseEnter={(e) => e.currentTarget.style.cssText += `color: #ffffff; background-color: ${COLORS.accentGold}; transform: scale(1.1);`}
                                onMouseLeave={(e) => e.currentTarget.style.cssText += `color: ${COLORS.accentGold}; background-color: transparent; transform: scale(1.0);`}
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://x.com/weblancehub" target="_blank" rel="noopener noreferrer" 
                                style={styles.socialIcon}
                                onMouseEnter={(e) => e.currentTarget.style.cssText += `color: #ffffff; background-color: ${COLORS.accentGold}; transform: scale(1.1);`}
                                onMouseLeave={(e) => e.currentTarget.style.cssText += `color: ${COLORS.accentGold}; background-color: transparent; transform: scale(1.0);`}
                            >
                                <FaXTwitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Quote Form */}
                <div className="max-w-2xl mx-auto"> 
                    <div className="relative" style={formPaddingStyle}>
                        <form className="quote-form" onSubmit={handleSubmit}>
                            {/* Header */}
                            <div style={{...styles.formHeader, ...mobileStyles.formHeaderShift}}>
                                <img src={logo} alt="WeblanceHub.com Logo" style={{...styles.formLogo, ...mobileStyles.formHeaderLogo}} />
                                <span style={{...styles.formBrandName, ...mobileStyles.formHeaderBrand}}>WeblanceHub.com</span>
                            </div>
                            {/* Intro */}
                            <div className="text-center mb-12">
                                <h2 style={{...styles.formIntroHeading, ...mobileStyles.formIntroHeading}}>Unlock Your Project's Potential</h2>
                                <p style={styles.formIntroTagline}>Tell us about your digital needs for a tailored estimate.</p>
                            </div>
                            {/* Row 1 */}
                            <div className="flex mb-6" style={formRowStyle}>
                                <div className="flex-1" style={{width: mobileStyles.inputWidth}}>
                                    <input type="text" name="name" placeholder="Name" required ref={nameRef} 
                                        style={styles.inputBase} onFocus={handleFocus} onBlur={handleBlur} />
                                </div>
                                <div className="flex-1" style={{width: mobileStyles.inputWidth}}>
                                    <input type="email" name="email" placeholder="Email Address" required ref={emailRef} 
                                        style={styles.inputBase} onFocus={handleFocus} onBlur={handleBlur} />
                                </div>
                            </div>
                            {/* Row 2 */}
                            <div className="flex mb-6" style={formRowStyle}>
                                <div className="flex-1" style={{width: mobileStyles.inputWidth}}>
                                    <input type="tel" name="phone" placeholder="Contact Number (Optional)" ref={phoneRef} 
                                        style={styles.inputBase} onFocus={handleFocus} onBlur={handleBlur} />
                                </div>
                                <div className="flex-1" style={{width: mobileStyles.inputWidth}}>
                                    <select name="service" required defaultValue="" ref={serviceRef} 
                                        style={{ ...styles.selectBase }} 
                                        onFocus={handleSelectFocus} onBlur={handleSelectBlur}>
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
                            <div className="mb-6 w-full">
                                <textarea name="details" rows="5" placeholder="Project Details" required ref={detailsRef} 
                                    style={{ ...styles.inputBase, resize: 'vertical' }} onFocus={handleFocus} onBlur={handleBlur}></textarea>
                            </div>
                            {/* File Upload */}
                            <div style={styles.fileUploadWrapper}>
                                <label htmlFor="file-upload" style={styles.fileUploadLabel}>
                                    <span style={{ fontFamily: 'sans-serif' }}>Upload Files (Max {MAX_FILE_SIZE_MB}MB Total)</span>
                                    <input
                                        type="file"
                                        id="file-upload"
                                        className="file-input"
                                        accept="image/*,application/pdf,.doc,.docx"
                                        multiple
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                        ref={fileInputRef} 
                                    />
                                </label>
                                <div className="mt-4 p-4 border" style={{ borderColor: COLORS.borderWarm, backgroundColor: '#ffffff' }}>
                                    {selectedFiles.length > 0 ? (
                                        <div>
                                            <div className="flex justify-between items-center font-bold mb-2" style={styles.listHeader}>
                                                <span>Selected Files:</span>
                                                <button type="button" onClick={clearFiles} style={{ ...styles.clearButton, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                                                    Clear
                                                </button>
                                            </div>
                                            <ul className="list-disc pl-4 text-sm" style={{ color: COLORS.textSecondary }}>
                                                {selectedFiles.map((file, index) => (
                                                    <li key={index}>{file.name} ({(file.size / 1024).toFixed(2)} KB)</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <span className="text-gray-500 italic block text-center" style={{ color: COLORS.textSecondary }}>No files selected</span>
                                    )}
                                </div>
                            </div>
                            {/* Submit */}
                            <button type="submit" 
                                style={loading ? { ...styles.submitButton, backgroundColor: '#cccccc', cursor: 'not-allowed', boxShadow: 'none', transform: 'none' } : styles.submitButton} 
                                disabled={loading}
                                onMouseEnter={(e) => !loading && handleButtonHover(e, true)}
                                onMouseLeave={(e) => !loading && handleButtonHover(e, false)}
                            >
                                {loading ? 'Submitting...' : 'Submit Quote Request'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;