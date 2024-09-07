import React from 'react';

const ResumeButton = () => {
  const resumeUrl = 'https://github.com/avinashpanchal123/my-portfolio/blob/main/Avinash_Panchal_Resume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Avinash_Panchal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    <button
            onClick={handleDownload}
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button> 
    </>
  );
};

export default ResumeButton;
