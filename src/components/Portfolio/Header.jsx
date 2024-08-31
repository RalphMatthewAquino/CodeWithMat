import React from 'react';
import '/src/styles/Portfolio.css';
import AboutMe from './AboutMe';

const MapNavItems = (prop) => {    
    const mapItems = prop.type === 'nav' ? (
        <ul className={prop.list_class_name}>
            {prop.items.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
    ) : (
        <ul className={prop.list_class_name}>
            {    
                prop.items.map((item, index) => (
                    <li key={index} className={`${item.platform.toLowerCase()}`}>
                        <a href={item.url} target='_blank'>
                            {item.icon}
                        </a>
                    </li>
                ))
            }
        </ul>
    );
  
    return mapItems;
};

const PortfolioHeader = () => {
    return (
        <header className='portfolio-header'>
            <nav className='portfolio-nav'>
                <div className='brand-container'>
                    <img src={AboutMe.profile_photos[0]} alt='Portfolio Logo' className='portfolio-logo'/>
                    <h1 className='portfolio-title'>{AboutMe.website}</h1>
                </div>
                
                <div className='portfolio-nav-links-container'>
                    <MapNavItems 
                        type = 'nav'
                        items = { AboutMe.header_items }
                        list_class_name = 'nav-items'
                    />
                </div>

                <div className='portfolio-social-links-container'>
                    <MapNavItems 
                        type = 'social'
                        items = { AboutMe.social_links }
                        list_class_name = 'social-links'
                    />
                </div>
            </nav>
        </header>
    );
}

export default PortfolioHeader;