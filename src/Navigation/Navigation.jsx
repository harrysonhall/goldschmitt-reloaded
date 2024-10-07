import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import logo from './logo.webp'

// import './Navigation.css';

const Navigation = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const toggleMenu = () => {
        const root = document.querySelector('#html')
        root.hasAttribute("mobile-menu-opened") ? root.removeAttribute("mobile-menu-opened") : root.setAttribute("mobile-menu-opened", "")
    }

    const navigateTo = (path) => {
        document.querySelector('#html').removeAttribute("mobile-menu-opened");

        if (location.pathname === path) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate(path);
            window.scrollTo(0, 0);
        }
    }

   // Scroll and Resize listeners
    useEffect(() => {

        // onStart animation
		// document.querySelector('#download-page-main').childNodes.forEach((child, index) => {

		// 	child.style.filter = 'blur(10px)';
		// 	child.style.opacity = '0';
			
		// 	child.style.animation = `onStartBlur 0.5s ease-in-out forwards`;
		// 	child.style.animationDelay = `${index * 0.075}s`;
		// });



        const handleScroll = () => {
            const html = document.querySelector('#html');
            
            if (window.scrollY > 0) {
                html.setAttribute('data-scrolling', '');
            } else {
                html.removeAttribute('data-scrolling');
            }
        };

        const handleResize = () => {
            const root = document.querySelector('#html');
            if (window.innerWidth > 750) {
                root.removeAttribute("mobile-menu-opened");
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Cleanup event listeners when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
   
    return (
        <div id="navigation-wrapper">

                <div id='navigation'>
                    
                    <div id="logo" onClick={() => navigateTo('/')}>
                        {/* <Logo /> */}
                        {/* Castr */}
						<img src={logo} />
                        
                    </div>
        
                    {/* <a data-navigation style={{ gridArea: 'home' }} onClick={() => navigateTo('/')}>Home</a> */}
                    <a data-navigation style={{ gridArea: 'about' }} onClick={() => navigateTo('/about')}>About</a>
                    <a data-navigation style={{ gridArea: 'contracts' }} onClick={() => navigateTo('/contracts')}>Contracts</a>
                    <a data-navigation style={{ gridArea: 'services' }} onClick={() => navigateTo('/services')}>Services</a>
                    <a data-navigation style={{ gridArea: 'solutions' }} onClick={() => navigateTo('/solutions')}>Solutions</a>
                    <a data-navigation style={{ gridArea: 'news' }} onClick={() => navigateTo('/news')}>News</a>
                    <a data-navigation style={{ gridArea: 'careers' }} onClick={() => navigateTo('/careers')}>Careers</a>
                    <a data-navigation style={{ gridArea: 'contact' }} onClick={() => navigateTo('/contact')}>Contact</a>

        
                    <button id="hamburger-menu" onClick={() => toggleMenu()}>
                        <div />
                        <div />
                        <div />
                    </button>

                </div>

                <div id="mobile-menu">
                    {/* <div onClick={() => navigateTo('/')}>Home</div> */}
                    <div onClick={() => navigateTo('/about')}>About</div>
                    <div onClick={() => navigateTo('/contracts')}>Contracts</div>
                    <div onClick={() => navigateTo('/services')}>Services</div>
                    <div onClick={() => navigateTo('/solutions')}>Solutions</div>
                    <div onClick={() => navigateTo('/news')}>News</div>
                    <div onClick={() => navigateTo('/careers')}>Careers</div>
                    <div onClick={() => navigateTo('/contact')}>Contact</div>
                </div>

                <div id='navigation-blur-mobile'></div>

                <div id="navigation-blur"></div>
        </div>
    );
}

export { Navigation };




const navigateTo = (path) => {
    const baseUrl = window.location.origin;
    window.location.href = `${baseUrl}${path}`;
}




const Logo = () => {

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30" 
            height="30" 
            viewBox="0 0 31.876 31.876"
        >
            {/* <path d="M7.324,0H24.552a7.324,7.324,0,0,1,7.324,7.324V24.552a7.324,7.324,0,0,1-7.324,7.324H7.324A7.324,7.324,0,0,1,0,24.552V7.324A7.324,7.324,0,0,1,7.324,0Z"/> */}
            <g transform="translate(7.266 6.672)">
                <path d="M16.374,14.462c.687.4.958.712.958,1.17s-.271.78-.958,1.179L9.743,20.66a2.1,2.1,0,0,1-1.077.348,2.08,2.08,0,0,1-1.077-.348L.95,16.811C.263,16.412,0,16.1,0,15.632s.263-.772.95-1.17l1.344-.779,1.394.81L1.832,15.556a.091.091,0,0,0-.059.076.092.092,0,0,0,.059.085l6.453,3.7a.821.821,0,0,0,.382.119.765.765,0,0,0,.373-.119l6.453-3.7a.089.089,0,0,0,.068-.085c0-.034-.025-.059-.068-.076l-1.854-1.062,1.394-.811Z" transform="translate(0 -2.184)" fill="#fff"/>
                <path d="M16.374,9.845c.687.407.958.712.958,1.179s-.271.772-.958,1.17L9.743,16.052a2.1,2.1,0,0,1-1.077.348,2.08,2.08,0,0,1-1.077-.348L.95,12.194c-.687-.4-.95-.7-.95-1.17s.263-.772.95-1.179l1.572-.912,1.4.811L1.832,10.939a.092.092,0,0,0-.059.085c0,.042.025.059.059.085L8.284,14.8a.821.821,0,0,0,.382.119.765.765,0,0,0,.373-.119l6.453-3.688c.042-.025.068-.042.068-.085a.089.089,0,0,0-.068-.085L13.4,9.746l1.4-.812ZM5.336,8.936h0L4.244,8.311Zm6.652,0h0l.655-.375Z" transform="translate(0 -1.476)" fill="#fff"/>
                <path d="M8.666,11.183a2.1,2.1,0,0,0,1.077-.348l6.631-3.85c.687-.4.958-.712.958-1.179s-.271-.772-.958-1.17L9.743.787A2.1,2.1,0,0,0,8.666.439,2.079,2.079,0,0,0,7.589.787L.95,4.637c-.687.4-.95.712-.95,1.17s.263.78.95,1.179l6.639,3.85A2.08,2.08,0,0,0,8.666,11.183Zm0-1.475a.821.821,0,0,1-.382-.119l-6.453-3.7a.092.092,0,0,1-.059-.085.091.091,0,0,1,.059-.076l6.453-3.7a.821.821,0,0,1,.382-.119.765.765,0,0,1,.373.119l6.453,3.7c.042.017.068.042.068.076a.089.089,0,0,1-.068.085l-6.453,3.7A.765.765,0,0,1,8.666,9.707Z" transform="translate(0 -0.439)" fill="#fff"/>
            </g>
        </svg>
    )
}