# Portfolio Website Structure Guide

## **Table of Contents**
1. [Architecture Overview](#architecture-overview)
2. [File Structure](#file-structure)
3. [HTML Structure](#html-structure)
4. [JavaScript System](#javascript-system)
5. [CSS Styling System](#css-styling-system)
6. [Adding New Projects](#adding-new-projects)
7. [Adding New Skills](#adding-new-skills)
8. [Content Management](#content-management)
9. [Media Asset Guidelines](#media-asset-guidelines)
10. [Deployment & Maintenance](#deployment--maintenance)

---

## **Architecture Overview**

### **Technology Stack**
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with responsive design
- **Fonts**: Google Fonts (Poppins), Font Awesome icons
- **Build System**: None (static files, no compilation required)
- **Deployment**: Static hosting (can run directly in browser)

### **Key Features**
- **Single Page Application** with smooth scroll navigation
- **Modal-based project system** with rich media galleries
- **Dynamic skill categorization** with color coding
- **Responsive design** optimized for mobile and desktop
- **SEO optimized** with proper meta tags and semantic HTML

---

## **File Structure**

```
Portfolio_website_with_ai/
├── index.html                 # Main HTML file (single page)
├── styles.css                # Complete CSS styling system
├── script.js                 # All JavaScript functionality
├── CLAUDE.md                 # Project documentation
├── WEBSITE_STRUCTURE_GUIDE.md # This documentation
├── projects/                 # External project documentation
│   └── comprehensive_prd.md  # CommuteWell PRD
├── resources/               # All media assets
│   ├── project-images/      # Project screenshots and media
│   │   ├── exoskeleton/     # Robotics project images
│   │   ├── commute_well/    # Mobile app screenshots
│   │   ├── spotify_figma_images/ # Figma designs
│   │   └── other-projects/  # Additional project assets
│   ├── books images/        # Reading section book covers
│   ├── documents/          # Resume and documents
│   └── other_images/       # General website assets
└── txt_guides/             # Content specifications
    ├── website_design_guidelines.md
    ├── experience_section_contents.txt
    ├── project_data.txt
    ├── projects_summary_detailed.txt
    ├── my_context.txt
    ├── hobbies_interests_guidelines.md
    ├── documenting_my_learnings.md
    └── my_data.txt
```

---

## **HTML Structure**

### **Document Architecture**
The website is a single HTML file (`index.html`) with the following sections:

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Meta tags, fonts, external libraries -->
</head>
<body>
    <!-- 1. Header/Navigation -->
    <header class="header">
        <nav class="navbar">
            <!-- Logo, navigation menu, contact button -->
        </nav>
    </header>

    <!-- 2. Hero Section -->
    <section class="hero">
        <!-- Profile introduction, CTA buttons, social links -->
    </section>

    <!-- 3. About Section -->
    <section id="about" class="about">
        <!-- Personal description, approach, profile card -->
    </section>

    <!-- 4. Education Section -->
    <section id="education" class="education">
        <!-- Academic background with image -->
    </section>

    <!-- 5. Experience Section -->
    <section id="experience" class="experience">
        <!-- Timeline-based work history -->
    </section>

    <!-- 6. Projects Section -->
    <section id="projects" class="projects">
        <!-- Project cards with filtering -->
    </section>

    <!-- 7. Skills Section -->
    <section id="skills" class="skills">
        <!-- Categorized skill grid -->
    </section>

    <!-- 8. Learning Hub Section -->
    <section id="learning" class="learning">
        <!-- Miro board integrations -->
    </section>

    <!-- 9. Hobbies Section -->
    <section id="hobbies" class="hobbies">
        <!-- Reading and writing sections -->
    </section>

    <!-- 10. Contact Section -->
    <section id="contact" class="contact">
        <!-- Contact form and information -->
    </section>

    <!-- 11. Footer -->
    <footer class="footer">
        <!-- Copyright and social links -->
    </footer>

    <!-- 12. Project Modal -->
    <div id="projectModal" class="modal">
        <!-- Dynamic project details -->
    </div>
</body>
</html>
```

### **Section Breakdown**

#### **Header Structure**
```html
<header class="header">
    <nav class="navbar">
        <div class="nav-logo">
            <div class="logo-circle">PS</div>
        </div>
        <ul class="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#learning">Learning</a></li>
            <li><a href="#hobbies">Hobbies</a></li>
        </ul>
        <a href="#contact" class="contact-btn">Contact Me</a>
    </nav>
</header>
```

#### **Projects Section Structure**
```html
<section id="projects" class="projects">
    <div class="container">
        <h2 class="section-title">Projects & <span class="highlight">Case Studies</span></h2>
        <p class="section-subtitle">Description</p>
        
        <!-- Filter Buttons -->
        <div class="project-filters">
            <button class="filter-btn active" data-filter="all">All Projects</button>
            <button class="filter-btn" data-filter="robotics">Robotics</button>
            <button class="filter-btn" data-filter="product">Product Management</button>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
            <!-- Individual Project Cards -->
            <div class="project-card featured" data-category="robotics" data-project="exoskeleton">
                <div class="project-image">
                    <img src="..." class="project-thumbnail">
                    <div class="category-badge robotics-badge">Robotics</div>
                    <div class="featured-badge">Featured</div>
                </div>
                <div class="project-content">
                    <h3>Project Title</h3>
                    <h4 class="project-subtitle">Subtitle</h4>
                    <p>Description</p>
                    <div class="project-tags">
                        <span class="tag">Skill 1</span>
                        <span class="tag">Skill 2</span>
                    </div>
                    <div class="project-overlay">
                        <button class="view-project-btn">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

#### **Modal Structure**
```html
<div id="projectModal" class="modal">
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <div class="modal-header">
            <h2 id="modalTitle"></h2>
            <h3 id="modalSubtitle"></h3>
            <div id="modalBadges" class="modal-badges"></div>
        </div>
        <div class="modal-body">
            <div class="modal-media" id="modalMedia">
                <!-- Dynamically populated media -->
            </div>
            <div class="modal-overview">
                <h4>Project Overview</h4>
                <p id="modalDescription"></p>
            </div>
            <div class="modal-details">
                <div class="modal-section">
                    <h4>My Contributions</h4>
                    <ul id="modalContributions"></ul>
                </div>
                <div class="modal-section">
                    <h4>Skills & Technologies</h4>
                    <div id="modalSkills" class="modal-skill-tags"></div>
                </div>
                <div class="modal-section">
                    <h4>Impact & Results</h4>
                    <ul id="modalImpacts"></ul>
                </div>
            </div>
        </div>
    </div>
</div>
```

---

## **JavaScript System**

### **Core Architecture**
The JavaScript system (`script.js`) handles:

1. **Navigation & Smooth Scrolling**
2. **Project Modal System**
3. **Skill Categorization & Color Coding**
4. **Project Filtering**
5. **Contact Form Handling**
6. **Mobile Menu Management**
7. **Section Reveal Animations**

### **Key Data Structures**

#### **Skill Categorization System**
```javascript
const skillCategories = {
    robotics: [
        'ROS', 'Motion Control', 'Robot Control', 'Sensors', 'CAD', 
        'System Integration', 'Embedded Systems', 'ESP-IDF', 'Webots', 
        'Gazebo', 'Simulink', 'Simscape', 'VR Integration', 'Motion Planning'
    ],
    software: [
        'Python', 'C++', 'C', 'Matlab', 'SQL', 'Git & GitHub', 'Unity3D',
        'React Native', 'JavaScript', 'Mobile Development', 'Flutter'
    ],
    product: [
        'Product Design', 'User Research', 'Product Strategy', 'UI/UX Design', 
        'Figma', 'Competitive Analysis', 'MVP Scoping', 'JTBD Framework', 
        'AARRR', 'Agile Methodologies', 'Team Leadership', 'Project Management'
    ]
};
```

#### **Project Data Structure**
```javascript
const projectData = {
    projectId: {
        title: "Project Title",
        subtitle: "Project Subtitle",
        badges: ["Category", "Featured", "Technology"],
        description: "Detailed project description...",
        contributions: [
            "Contribution 1",
            "Contribution 2",
            "Contribution 3"
        ],
        skills: ["Skill 1", "Skill 2", "Skill 3"],
        impacts: [
            "Impact 1",
            "Impact 2",
            "Impact 3"
        ],
        media: [
            {
                type: "image", // or "video" or "miro"
                title: "Media Title",
                description: "Media description",
                url: "path/to/media/file"
            }
        ]
    }
};
```

### **Core Functions**

#### **Modal Population Function**
```javascript
function populateModal(project) {
    // Populates header information
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalSubtitle').textContent = project.subtitle;
    
    // Creates badges
    const badgesContainer = document.getElementById('modalBadges');
    badgesContainer.innerHTML = '';
    project.badges.forEach(badge => {
        const badgeElement = document.createElement('span');
        badgeElement.className = 'tag';
        badgeElement.textContent = badge;
        badgesContainer.appendChild(badgeElement);
    });
    
    // Handles media content (images, videos, Miro boards)
    // Populates project details
    // Applies skill categorization colors
}
```

#### **Skill Color Application**
```javascript
function getSkillCategory(skill) {
    const normalizedSkill = skill.trim();
    if (skillCategories.robotics.includes(normalizedSkill)) return 'robotics';
    if (skillCategories.software.includes(normalizedSkill)) return 'software';  
    if (skillCategories.product.includes(normalizedSkill)) return 'product';
    return 'default';
}

function applySkillColors() {
    document.querySelectorAll('.exp-tag, .tag, .skill-tag').forEach(tag => {
        const category = getSkillCategory(tag.textContent);
        tag.classList.add(`skill-${category}`);
    });
}
```

---

## **CSS Styling System**

### **Design System Variables**
```css
/* Brand Colors */
--primary-color: #FFB100;      /* Golden Yellow */
--secondary-color: #0C1321;    /* Dark Navy */
--background-color: #F8F9FB;   /* Light Gray */
--text-color: #333333;         /* Dark Gray */

/* Skill Category Colors */
--robotics-color: #1e40af;     /* Blue */
--software-color: #166534;     /* Green */
--product-color: #7c2d12;      /* Purple/Brown */
```

### **Component Classes**

#### **Layout Classes**
```css
.container                     /* Max-width wrapper */
.section-title                 /* Main section headings */
.section-subtitle              /* Section descriptions */
.highlight                     /* Golden text highlight */
```

#### **Project System Classes**
```css
.projects-grid                 /* CSS Grid layout */
.project-card                  /* Individual project cards */
.project-card.featured         /* Featured project styling */
.project-image                 /* Project thumbnail container */
.project-content               /* Project text content */
.project-tags                  /* Skill tags container */
.category-badge                /* Project category indicators */
.featured-badge                /* Featured project indicators */
```

#### **Skill Category Classes**
```css
.skill-robotics               /* Blue color for robotics skills */
.skill-software               /* Green color for software skills */
.skill-product                /* Purple color for product skills */
.skill-default                /* Default color for uncategorized skills */
```

#### **Modal System Classes**
```css
.modal                        /* Full-screen overlay */
.modal-content                /* Modal container */
.modal-header                 /* Title and badges section */
.modal-body                   /* Main content area */
.modal-media                  /* Media gallery container */
.modal-section                /* Individual content sections */
.image-carousel               /* Image carousel system */
.carousel-slide               /* Individual carousel images */
.video-embed                  /* Video container styling */
```

### **Responsive Design System**
```css
/* Mobile-first approach */
@media (max-width: 768px) {
    /* Tablet and mobile styles */
}

@media (max-width: 480px) {
    /* Mobile-specific styles */
}
```

---

## **Adding New Projects**

### **Step 1: Prepare Assets**
1. **Create project folder**: `resources/project-images/project-name/`
2. **Add thumbnail image**: `project_thumbnail.png/jpg` (recommended 400x300px)
3. **Add project images**: High-quality screenshots/photos
4. **Add videos**: Upload to YouTube or use local `.webm/.mp4` files

### **Step 2: Add HTML Project Card**
Add to the `projects-grid` div in `index.html`:

```html
<div class="project-card featured" data-category="product" data-project="new-project">
    <div class="project-image">
        <img src="resources/project-images/new-project/thumbnail.jpg" alt="Project Name" class="project-thumbnail">
        <div class="category-badge product-badge">Product Management</div>
        <div class="featured-badge">Featured</div>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <h4 class="project-subtitle">Project Subtitle</h4>
        <p>Brief project description for the card.</p>
        <div class="project-tags">
            <span class="tag">React Native</span>
            <span class="tag">User Research</span>
            <span class="tag">Figma</span>
        </div>
        <div class="project-overlay">
            <button class="view-project-btn">View Details</button>
        </div>
    </div>
</div>
```

### **Step 3: Add Project Data**
Add to the `projectData` object in `script.js`:

```javascript
'new-project': {
    title: "Project Name",
    subtitle: "Detailed Project Subtitle",
    badges: ["Product Management", "Featured", "React Native"],
    description: "Comprehensive project description...",
    contributions: [
        "Specific contribution 1",
        "Specific contribution 2",
        "Specific contribution 3"
    ],
    skills: ["React Native", "User Research", "Figma", "JavaScript"],
    impacts: [
        "Measurable impact 1",
        "Measurable impact 2", 
        "Measurable impact 3"
    ],
    media: [
        {
            type: "video",
            title: "Project Demo",
            description: "Complete walkthrough of the application",
            url: "path/to/video.webm"
        },
        {
            type: "image",
            title: "Main Interface",
            description: "Primary user interface design",
            url: "resources/project-images/new-project/interface.png"
        }
    ]
}
```

### **Step 4: Update Skills (if needed)**
Add new skills to the appropriate category in `skillCategories`:

```javascript
const skillCategories = {
    software: [
        // existing skills...
        'New Technology',
        'New Framework'
    ]
};
```

---

## **Adding New Skills**

### **Method 1: Add to HTML Skills Section**
In `index.html`, find the skills section and add to appropriate category:

```html
<div class="skill-category software-card">
    <div class="skill-tags">
        <span class="skill-tag">Existing Skill</span>
        <span class="skill-tag">New Skill</span> <!-- Add here -->
    </div>
</div>
```

### **Method 2: Update Skill Categorization**
In `script.js`, add skills to the appropriate category:

```javascript
const skillCategories = {
    robotics: [/* robotics skills */],
    software: [
        // existing skills...
        'New Programming Language',
        'New Framework'
    ],
    product: [/* product skills */]
};
```

### **Method 3: Create New Skill Category**
1. **Add to HTML**:
```html
<div class="skill-category new-category-card">
    <div class="skill-icon">
        <i class="fas fa-new-icon"></i>
    </div>
    <h3>New Category Name</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

2. **Add to CSS**:
```css
.new-category-card {
    background: linear-gradient(135deg, #new-color1 0%, #new-color2 100%);
}

.skill-new-category {
    background: #new-category-color;
    color: white;
}
```

3. **Add to JavaScript**:
```javascript
const skillCategories = {
    // existing categories...
    newcategory: ['New Skill 1', 'New Skill 2']
};
```

---

## **Content Management**

### **Content Specifications Location**
Content guidelines are stored in the `txt_guides/` directory:

| File | Purpose |
|------|---------|
| `website_design_guidelines.md` | Design system and brand guidelines |
| `experience_section_contents.txt` | Work experience data and formatting |
| `projects_summary_detailed.txt` | Project descriptions and achievements |
| `my_context.txt` | Personal background and career objectives |
| `hobbies_interests_guidelines.md` | Personal interests content |
| `documenting_my_learnings.md` | Learning framework documentation |
| `my_data.txt` | Contact info and external links |

### **Updating Experience Section**
The experience timeline in `index.html` follows this structure:

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="experience-header">
            <div class="experience-title">
                <h3>Job Title</h3>
                <h4>Company Name</h4>
            </div>
            <div class="experience-duration">
                <span class="duration">Duration</span>
                <span class="period">Date Range</span>
            </div>
        </div>
        <div class="experience-description">
            <p>Role description</p>
            <ul class="achievements-list">
                <li><strong>Achievement Type:</strong> Description</li>
            </ul>
        </div>
        <div class="experience-skills">
            <span class="exp-tag">Skill</span>
        </div>
    </div>
</div>
```

### **Updating Learning Hub**
Learning hub cards integrate with Miro boards:

```html
<div class="learning-card">
    <div class="learning-preview">
        <div class="miro-preview" data-board="board-id">
            <div class="preview-placeholder">
                <i class="fas fa-chart-line"></i>
                <span>Interactive Board</span>
            </div>
        </div>
    </div>
    <div class="learning-content">
        <h3>Framework Name</h3>
        <p class="learning-source">Source</p>
        <p class="learning-tagline">Description</p>
        <a href="miro-board-url" target="_blank" rel="noopener" class="explore-board-btn">
            Explore Board <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</div>
```

---

## **Media Asset Guidelines**

### **Image Specifications**
| Asset Type | Recommended Size | Format | Location |
|------------|------------------|--------|----------|
| Project Thumbnails | 400x300px | JPG/PNG | `resources/project-images/project-name/` |
| Project Screenshots | 1920x1080px | PNG | `resources/project-images/project-name/` |
| Book Covers | 300x450px | JPG | `resources/books images/` |
| Profile Images | 200x200px | JPG/PNG | `resources/other_images/` |

### **Video Guidelines**
- **Format**: WebM (preferred) or MP4
- **Quality**: 1080p maximum
- **Duration**: Keep under 2 minutes for demos
- **Location**: `resources/project-images/project-name/`

### **Naming Conventions**
- Use lowercase with underscores: `project_thumbnail.png`
- Be descriptive: `signin_screen.png`, `user_interface.png`
- Avoid spaces and special characters

### **File Organization**
```
resources/project-images/project-name/
├── project_thumbnail.jpg      # Main thumbnail
├── screen1.png               # Interface screenshots
├── screen2.png
├── demo_video.webm           # Demo videos
└── architecture_diagram.png   # Technical diagrams
```

---

## **Deployment & Maintenance**

### **Development Workflow**
1. **Local Testing**: Open `index.html` in browser
2. **Asset Optimization**: Compress images before adding
3. **Code Validation**: Check HTML/CSS/JS for errors
4. **Cross-Browser Testing**: Test in multiple browsers
5. **Mobile Testing**: Verify responsive design

### **Deployment Options**
- **GitHub Pages**: Automatic deployment from repository
- **Netlify**: Drag-and-drop deployment
- **Vercel**: Git-based deployment
- **Traditional Hosting**: Upload files via FTP

### **Performance Optimization**
- **Image Compression**: Use tools like TinyPNG
- **CSS Minification**: Optional for production
- **JavaScript Optimization**: Keep functions efficient
- **Caching**: Leverage browser caching for assets

### **SEO Maintenance**
- Update meta descriptions for new content
- Add alt text for all images
- Ensure proper heading hierarchy
- Update sitemap if using multiple pages

---

## **Common Customization Patterns**

### **Adding a New Section**
1. **HTML Structure**:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">New <span class="highlight">Section</span></h2>
        <p class="section-subtitle">Section description</p>
        <!-- Section content -->
    </div>
</section>
```

2. **CSS Styling**:
```css
.new-section {
    padding: 6rem 0;
    background: #f8f9fb; /* Alternate with white */
}
```

3. **Navigation Update**:
```html
<li><a href="#new-section">New Section</a></li>
```

### **Modifying Color Scheme**
Update CSS variables in `styles.css`:
```css
:root {
    --primary-color: #new-primary;
    --secondary-color: #new-secondary;
    --robotics-color: #new-robotics-color;
    --software-color: #new-software-color;
    --product-color: #new-product-color;
}
```

### **Adding External Integrations**
- **Google Analytics**: Add tracking code to `<head>`
- **Social Media**: Update social links in header and footer
- **Contact Forms**: Integrate with services like Formspree
- **Blog Integration**: Add blog section or external links

---

**This guide provides the complete blueprint for understanding, maintaining, and extending the portfolio website. Use it as your primary reference for any modifications or additions to the site.**