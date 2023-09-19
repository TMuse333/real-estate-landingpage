import React, { useState,useEffect } from 'react';




const Navbar = () => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  const scrollToSection = (sectionId) => {

    const element = document.getElementById(sectionId);
    if (element) {
    
      element.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start',    // Scroll to the top of the element
      });
    }
  }

  useEffect(() => {
    // Function to update sub-menu visibility when the screen width changes
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setSubMenuVisible(screenWidth >= 415); // Set subMenuVisible to true if screen width is at least 415 pixels
    };

    // Add a resize event listener to update the sub-menu visibility
    window.addEventListener('resize', handleResize);

    // Initial call to set sub-menu visibility based on current screen width
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const style = {

    opacity: subMenuVisible ? 1 : 0
    ,
   
  };

  return (
    <div className='header-container'>
      <div className='logo'>rooftight</div>
      <div className='list-container'>
        <button onClick={toggleSubMenu} className='nav-button'>
          press me
        </button>
        <ul style={style} className='nav-list'>
          
          <li onClick={()=>scrollToSection('about')}>Home</li>
      
          <li onClick={()=>scrollToSection('description')}>Description</li>
        
          <li onClick={()=>scrollToSection('price')}>price and features</li>
    

          <li onClick={()=>scrollToSection('skills')}>Amenities</li>

          <li onClick={()=>scrollToSection('skills')}>Photo gallery</li>

          <li onClick={()=>scrollToSection('skills')}>Video</li>

          <li onClick={()=>scrollToSection('skills')}>More info</li>

          <li onClick={()=>scrollToSection('skills')}>Floor plans</li>

          <li onClick={()=>scrollToSection('skills')}>Flyers</li>

          <li onClick={()=>scrollToSection('skills')}>Area info</li>

          <li onClick={()=>scrollToSection('skills')}>Amenities</li>
          

          
          <li onClick={()=>scrollToSection('contact')}> Contact</li>
       
        </ul>
      </div>
    </div>
  );
};

export default Navbar;