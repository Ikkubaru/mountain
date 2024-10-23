import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  position: fixed; 
  right: 6px; 
  transform: translateY(-50%); 
  width: 3px; 
  height: 100px; 
  background-color: #e0e0e0;
  z-index: 9999;
  @media (max-width: 768px) { 
    width: 2px;  
    height: 60px; 
    right: 3px;
  }

  @media (max-width: 360px) {
    width: 1.5px;  
    height: 50px; 
    right: 2px;
  }
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #FBD784; 
  transition: height 0.2s ease; 
`;

function ProgressBarComponent() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / scrollTotal) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ProgressContainer>
      <ProgressBar style={{ height: `${scrollProgress}px`, maxHeight: '150px' }} />
    </ProgressContainer>
  );
}

export default ProgressBarComponent;
