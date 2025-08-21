// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Project filtering functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
                // Add fade-in animation
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Initialize project cards with animation
projectCards.forEach((card, index) => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
    card.style.transition = 'all 0.3s ease';
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple form validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '600',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease',
        maxWidth: '400px',
        wordWrap: 'break-word'
    });
    
    // Set background color based on type
    const colors = {
        success: '#4CAF50',
        error: '#F44336',
        info: '#2196F3',
        warning: '#FF9800'
    };
    
    notification.style.background = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .about-text, .profile-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu functionality
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    // Create hamburger menu button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    hamburger.setAttribute('aria-label', 'Toggle navigation menu');
    
    // Add hamburger styles
    Object.assign(hamburger.style, {
        display: 'none',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '30px',
        height: '30px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '0'
    });
    
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(span => {
        Object.assign(span.style, {
            width: '100%',
            height: '3px',
            background: '#333',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
        });
    });
    
    // Insert hamburger before nav menu
    navbar.insertBefore(hamburger, navMenu);
    
    // Toggle functionality
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Animate hamburger to X
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
    
    // Handle responsive behavior
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'flex';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = 'rgba(255, 255, 255, 0.98)';
            navMenu.style.flexDirection = 'column';
            navMenu.style.padding = '1rem';
            navMenu.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            navMenu.style.transform = 'translateY(-10px)';
            navMenu.style.opacity = '0';
            navMenu.style.visibility = 'hidden';
            navMenu.style.transition = 'all 0.3s ease';
            
            // Show/hide menu based on active class
            if (navMenu.classList.contains('active')) {
                navMenu.style.transform = 'translateY(0)';
                navMenu.style.opacity = '1';
                navMenu.style.visibility = 'visible';
            }
        } else {
            hamburger.style.display = 'none';
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Reset styles for desktop
            navMenu.style.position = 'static';
            navMenu.style.top = 'auto';
            navMenu.style.left = 'auto';
            navMenu.style.width = 'auto';
            navMenu.style.background = 'none';
            navMenu.style.flexDirection = 'row';
            navMenu.style.padding = '0';
            navMenu.style.boxShadow = 'none';
            navMenu.style.transform = 'none';
            navMenu.style.opacity = '1';
            navMenu.style.visibility = 'visible';
            navMenu.style.transition = 'none';
        }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
};

// Initialize mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', createMobileMenu);

// Smooth reveal animations for sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-revealed');
            }
        });
    }, {
        threshold: 0.15
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s ease';
        sectionObserver.observe(section);
    });
    
    // Add CSS for revealed sections
    const style = document.createElement('style');
    style.textContent = `
        .section-revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
};

// Initialize section reveals
document.addEventListener('DOMContentLoaded', revealSections);

// Add loading animation
const addLoadingAnimation = () => {
    const body = document.body;
    body.style.opacity = '0';
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            body.style.transition = 'opacity 0.5s ease';
            body.style.opacity = '1';
        }, 100);
    });
};

// Initialize loading animation
addLoadingAnimation();

// Skill categorization for color coding
const skillCategories = {
    robotics: [
        'ROS', 'Motion Control', 'Robot Control', 'Sensors', 'CAD', 'System Integration',
        'Embedded Systems', 'ESP-IDF', 'Webots', 'Gazebo', 'Simulink', 'Simscape',
        'VR Headsets', 'VR Integration', 'Motion Planning', 'Arduino', 'CAD Design',
        'Teleoperation', 'Kinematics', 'Research & Development'
    ],
    software: [
        'Python', 'C++', 'C', 'Matlab', 'SQL', 'Git & GitHub', 'Unity3D',
        'Algorithm Design', 'Computer Vision', 'Path Planning', 'System Simulation',
        'Cost Engineering', 'GitHub', 'Flutter', 'Excel', 'Miro', 'System Design',
        'Remote Collaboration', 'Competition Strategy', 'Data Analysis'
    ],
    product: [
        'Product Design', 'User Research', 'Product Strategy', 'UI/UX Design', 'Figma',
        'Competitive Analysis', 'MVP Scoping', 'JTBD Framework', 'AARRR', 'AARRR Funnel',
        'Agile Methodologies', 'Team Leadership', 'Project Management', 'Gamification',
        'Client Solutions', 'Research', 'UX Research', 'Product Thinking Frameworks',
        'Wireframing', 'Road-mapping', 'Feature Prioritization', 'Retention Strategies',
        'Customer Journey Mapping', 'Product Storytelling', 'Agile Methods'
    ]
};

// Function to get skill category
function getSkillCategory(skill) {
    const normalizedSkill = skill.trim();
    
    if (skillCategories.robotics.includes(normalizedSkill)) return 'robotics';
    if (skillCategories.software.includes(normalizedSkill)) return 'software';  
    if (skillCategories.product.includes(normalizedSkill)) return 'product';
    
    return 'default';
}

// Function to apply skill colors on page load
function applySkillColors() {
    // Color experience tags
    document.querySelectorAll('.exp-tag').forEach(tag => {
        const category = getSkillCategory(tag.textContent);
        tag.classList.add(`skill-${category}`);
    });
    
    // Color project tags
    document.querySelectorAll('.tag').forEach(tag => {
        const category = getSkillCategory(tag.textContent);
        tag.classList.add(`skill-${category}`);
    });
    
    // Color main skills section tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        const category = getSkillCategory(tag.textContent);
        tag.classList.add(`skill-${category}`);
    });
}

// Apply colors when page loads
document.addEventListener('DOMContentLoaded', applySkillColors);

// Project Modal Functionality
const projectData = {
    exoskeleton: {
        title: "Robotic Exoskeleton",
        subtitle: "DRDO Sponsored - Assistive Wearable for Mobility",
        badges: ["Robotics", "Featured", "DRDO Sponsored"],
        description: "A comprehensive wearable assistive device designed to support the lower limbs of people with spinal injuries, enabling enhanced mobility and rehabilitation. This project represents the intersection of advanced robotics, human-centered design, and medical technology.",
        contributions: [
            "Drove project completion from 10% to 85% in just 6 months through strategic planning and execution",
            "Led cross-functional coordination across electronics, UI/UX, and software development teams",
            "Secured ₹10+ lakh DRDO funding through compelling project proposals and milestone deliveries",
            "Established junior recruitment and training programs ensuring sustainable knowledge transfer",
            "Received ₹15k recognition award for exceptional project management and technical contributions"
        ],
        skills: ["ROS", "Simulink", "Arduino", "ESP-IDF", "CAD Design", "Motion Control", "Embedded Systems", "System Integration", "UI/UX Design", "Project Management", "Team Leadership"],
        impacts: [
            "Advanced project completion rate by 75% within 6-month timeline",
            "Secured substantial government funding for continued research and development",
            "Established sustainable team structure for long-term project success",
            "Created comprehensive documentation and training materials for future teams",
            "Demonstrated feasibility of low-cost assistive robotics solutions for healthcare applications"
        ],
        media: [
            {
                type: "image",
                title: "Complete Assembled Exoskeleton System",
                description: "Final assembled lower-limb exoskeleton ready for testing and deployment",
                url: "resources/project-images/exoskeleton/assembled_exoskeleton.jpg"
            },
            {
                type: "image", 
                title: "Custom Touch Interface GUI",
                description: "Handheld control interface designed for intuitive user interaction",
                url: "resources/project-images/exoskeleton/handheld_touch_gui.jpg"
            },
            {
                type: "image",
                title: "Real-World Testing & Validation",
                description: "User wearing the exoskeleton during mobility testing and validation phase",
                url: "resources/project-images/exoskeleton/exoskeleton_worn.jpg"
            },
            {
                type: "video",
                title: "Gazebo Simulation Demo",
                description: "Complete simulation testing of motion planning and control algorithms",
                url: "https://www.youtube.com/embed/Bf7scwYO3I8"
            },
            {
                type: "video",
                title: "Hardware Testing Session",
                description: "Real-world testing of partially assembled exoskeleton components",
                url: "https://www.youtube.com/embed/WopZB1Y2_4U"
            }
        ]
    },
    warehouse: {
        title: "Warehouse Automation Robot",
        subtitle: "Flipkart Grid 3.0 Challenge - Top 46/9549 Teams",
        badges: ["Robotics", "Featured", "Competition Winner"],
        description: "An innovative autonomous mobile robot (AMR) system designed for efficient warehouse logistics operations. This project focused on creating a cost-effective, scalable solution for modern warehouse automation challenges while maintaining high performance standards.",
        contributions: [
            "Led a diverse 10-member cross-disciplinary team across EC, ME, EE, and CS domains",
            "Achieved Top 46 ranking out of 9,549 teams in India's premier automation challenge",
            "Engineered cost-effective robot solution at ₹1.5k/unit, significantly below market standards",
            "Reduced robot dimensions by 50% while maintaining full functionality and performance",
            "Successfully managed remote collaboration during pandemic constraints"
        ],
        skills: ["ROS", "Gazebo", "Python", "C++", "Computer Vision", "Path Planning", "Algorithm Design", "CAD Design", "Team Leadership", "Cost Engineering", "System Simulation"],
        impacts: [
            "Demonstrated exceptional leadership in national-level competition with thousands of participants",
            "Proved feasibility of ultra-low-cost warehouse automation solutions",
            "Created deployment-ready robotics system with real-world applications",
            "Established effective remote collaboration frameworks for distributed engineering teams",
            "Generated scalable robot design suitable for mass production and deployment"
        ],
        media: [
            {
                type: "video",
                title: "Algorithm Validation in Gazebo",
                description: "Comprehensive simulation testing to validate navigation and path planning algorithms",
                url: "https://www.youtube.com/embed/rNKWYwnxnPM"
            },
            {
                type: "video",
                title: "Live Robot Camera Feed",
                description: "Real-time camera view showing robot navigation and object detection in warehouse environment",
                url: "https://www.youtube.com/embed/mN9d7y8wYKw"
            },
            {
                type: "video",
                title: "Complete System Integration Demo",
                description: "Full ROS package demonstration showing all components working together seamlessly",
                url: "https://www.youtube.com/embed/CXt-miu23wM"
            }
        ]
    },
    "vr-robot": {
        title: "VR-Controlled Kinova Robot",
        subtitle: "TCS Research Labs - Human-Robot Interaction Research",
        badges: ["Robotics", "Research", "VR Integration"],
        description: "A cutting-edge research initiative exploring the integration of Virtual Reality technology with robotic manipulator control systems. This project aimed to create intuitive, immersive interfaces for remote robot operation, pushing the boundaries of human-computer interaction in robotics.",
        contributions: [
            "Designed and validated multiple proof-of-concepts for VR-robotics integration",
            "Conducted comprehensive industry analysis to identify motion planning opportunities in manipulator systems",
            "Collaborated across multiple disciplines including robotics, VR development, and human factors engineering",
            "Developed novel interaction paradigms for intuitive robot teleoperation",
            "Created detailed research documentation and technical specifications"
        ],
        skills: ["Unity3D", "VR Headsets", "ROS", "Python", "C++", "Kinematics", "Motion Planning", "Teleoperation", "VR Interface Design", "Research Methodology"],
        impacts: [
            "Established foundation for next-generation human-robot interaction systems",
            "Demonstrated feasibility of VR-based robot control for industrial applications",
            "Created reusable frameworks for VR-robotics integration research",
            "Identified key technical challenges and solutions for immersive robot operation",
            "Contributed to advancing the state of art in teleoperation technology"
        ],
        media: [
            {
                type: "video",
                title: "Physical Robot Teleoperation",
                description: "Real-world demonstration of VR-controlled Kinova robot performing precise manipulation tasks",
                url: "https://www.youtube.com/embed/esM6quBwEWM"
            },
            {
                type: "video",
                title: "VR Interface & Control System",
                description: "Unity3D virtual environment showing the immersive control interface and user interaction",
                url: "https://www.youtube.com/embed/8pNhq5KUX2Q"
            }
        ]
    },
    commute: {
        title: "Commute Together App",
        subtitle: "Social Commuting Product Design Initiative",
        badges: ["Product Management", "Featured", "User Research"],
        description: "A comprehensive mobile application concept designed to transform daily commuting into meaningful social experiences. Through extensive user research and strategic product design, this initiative addresses the latent need for social connection among urban commuters while maintaining safety and user comfort.",
        contributions: [
            "Conducted extensive user research including 20+ in-depth interviews and 100+ comprehensive surveys",
            "Identified and validated latent user needs through observational research and Reddit community insights",
            "Designed complete feature ecosystem including route-based matching, neighbor feeds, and gamified engagement",
            "Performed competitive analysis against Yubo and Meetup to ensure market differentiation",
            "Developed comprehensive product vision with monetization strategy through brand partnerships and location-based rewards"
        ],
        skills: ["Product Design", "User Research", "Figma", "Flutter", "SQL", "UX Research", "Competitive Analysis", "MVP Scoping", "Product Strategy", "Gamification Design"],
        impacts: [
            "Validated significant market opportunity in social commuting space through data-driven research",
            "Created safety-first UX design framework to avoid dating app misconceptions",
            "Established clear product-market fit through extensive user validation",
            "Developed scalable monetization model with multiple revenue streams",
            "Generated comprehensive product roadmap suitable for investor presentations"
        ],
        media: [
            {
                type: "video",
                title: "Product Concept Presentation",
                url: "" // Add your presentation video URL here
            }
        ]
    },
    spotify: {
        title: "Spotify Recommendations Case Study",
        subtitle: "Product Strategy & User Experience Analysis",
        badges: ["Product Management", "Case Study", "Strategy"],
        description: "A comprehensive product strategy case study focused on solving user dissatisfaction with Spotify's recommendation algorithms. This project applied advanced product frameworks to identify root causes and propose innovative solutions that enhance user engagement and satisfaction.",
        contributions: [
            "Conducted systematic root cause analysis of recommendation algorithm dissatisfaction patterns",
            "Applied Jobs-to-be-Done (JTBD) framework to uncover user motivations and pain points",
            "Developed innovative feature concepts including 'Moments made by music' and post-listening reflection systems",
            "Utilized AARRR funnel analysis to identify optimization opportunities across user journey",
            "Created emotional and functional value mapping to guide strategic product decisions"
        ],
        skills: ["Product Strategy", "JTBD Framework", "AARRR Funnel", "Figma", "Excel", "Miro", "Customer Journey Mapping", "Product Storytelling", "Data Analysis"],
        impacts: [
            "Identified key improvement opportunities in music recommendation systems",
            "Demonstrated practical application of advanced product management frameworks",
            "Created actionable product recommendations supported by user research insights",
            "Established framework for systematic product problem-solving approach",
            "Generated compelling product narrative suitable for stakeholder presentations"
        ],
        media: [
            {
                type: "video",
                title: "Case Study Presentation",
                url: "" // Add your case study presentation video URL here
            }
        ]
    }
};

// Modal functionality
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close-btn');

// Add click event listeners to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
            populateModal(project);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    });
});

// Close modal functionality
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Re-enable background scrolling
}

function populateModal(project) {
    // Populate header
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalSubtitle').textContent = project.subtitle;
    
    // Populate badges
    const badgesContainer = document.getElementById('modalBadges');
    badgesContainer.innerHTML = '';
    project.badges.forEach(badge => {
        const badgeElement = document.createElement('span');
        badgeElement.className = 'tag';
        badgeElement.textContent = badge;
        badgesContainer.appendChild(badgeElement);
    });
    
    // Populate description
    document.getElementById('modalDescription').textContent = project.description;
    
    // Populate contributions
    const contributionsList = document.getElementById('modalContributions');
    contributionsList.innerHTML = '';
    project.contributions.forEach(contribution => {
        const li = document.createElement('li');
        li.textContent = contribution;
        contributionsList.appendChild(li);
    });
    
    // Populate skills
    const skillsContainer = document.getElementById('modalSkills');
    skillsContainer.innerHTML = '';
    project.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        const category = getSkillCategory(skill);
        skillTag.className = `tag skill-${category}`;
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });
    
    // Populate impacts
    const impactsList = document.getElementById('modalImpacts');
    impactsList.innerHTML = '';
    project.impacts.forEach(impact => {
        const li = document.createElement('li');
        li.textContent = impact;
        impactsList.appendChild(li);
    });
    
    // Populate media
    const mediaContainer = document.getElementById('modalMedia');
    mediaContainer.innerHTML = '';
    
    if (project.media && project.media.length > 0) {
        const images = project.media.filter(item => item.type === 'image' && item.url);
        const videos = project.media.filter(item => item.type === 'video' && item.url);
        
        // Create Images section
        if (images.length > 0) {
            const imagesSection = document.createElement('div');
            imagesSection.className = 'media-section';
            
            const imagesTitle = document.createElement('h4');
            imagesTitle.textContent = 'Project Images';
            imagesTitle.className = 'media-section-title';
            imagesSection.appendChild(imagesTitle);
            
            const imagesGrid = document.createElement('div');
            imagesGrid.className = 'images-grid';
            
            images.forEach(item => {
                const imageWrapper = document.createElement('div');
                imageWrapper.className = 'image-item';
                
                const img = document.createElement('img');
                img.src = item.url;
                img.alt = item.title;
                
                const caption = document.createElement('div');
                caption.className = 'media-caption';
                caption.innerHTML = `
                    <h5>${item.title}</h5>
                    <p>${item.description || ''}</p>
                `;
                
                imageWrapper.appendChild(img);
                imageWrapper.appendChild(caption);
                imagesGrid.appendChild(imageWrapper);
            });
            
            imagesSection.appendChild(imagesGrid);
            mediaContainer.appendChild(imagesSection);
        }
        
        // Create Videos section
        if (videos.length > 0) {
            const videosSection = document.createElement('div');
            videosSection.className = 'media-section';
            
            const videosTitle = document.createElement('h4');
            videosTitle.textContent = 'Project Videos';
            videosTitle.className = 'media-section-title';
            videosSection.appendChild(videosTitle);
            
            const videosGrid = document.createElement('div');
            videosGrid.className = 'videos-grid';
            
            videos.forEach(item => {
                const videoWrapper = document.createElement('div');
                videoWrapper.className = 'video-item';
                
                const videoEmbed = document.createElement('div');
                videoEmbed.className = 'video-embed';
                videoEmbed.innerHTML = `<iframe src="${item.url}" title="${item.title}" allowfullscreen></iframe>`;
                
                const caption = document.createElement('div');
                caption.className = 'media-caption';
                caption.innerHTML = `
                    <h5>${item.title}</h5>
                    <p>${item.description || ''}</p>
                `;
                
                videoWrapper.appendChild(videoEmbed);
                videoWrapper.appendChild(caption);
                videosGrid.appendChild(videoWrapper);
            });
            
            videosSection.appendChild(videosGrid);
            mediaContainer.appendChild(videosSection);
        }
    }
}