# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Prajwal Sangam, a robotics engineer transitioning to product management roles. The site is built as a modern, single-page application showcasing both technical robotics projects and product management case studies.

## Architecture & Technical Stack

### Core Structure
- **Pure HTML/CSS/JavaScript** - No build system, package managers, or frameworks
- **Single-page application** with smooth scrolling navigation
- **Modal-based project details** with interactive media galleries
- **Dynamic content population** from JavaScript data objects

### Key Files
- `index.html` - Main page structure with all sections
- `styles.css` - Complete styling system with responsive design
- `script.js` - All interactive functionality and project data
- `resources/` - Organized media assets and project images
- `txt_guides/` - Content specifications and design guidelines

## Content Management System

The website uses a content-driven approach where specifications are maintained in `txt_guides/`:

- `website_design_guidelines.md` - Complete design system (colors, typography, layout rules)
- `experience_section_contents.txt` - Work experience data and formatting
- `project_data.txt` - Google Drive links and YouTube URLs for project media
- `projects_summary_detailed.txt` - Detailed project descriptions and achievements
- `my_context.txt` - Personal background and career objectives

## Key Features & Functionality

### Project Modal System
- Interactive project cards that open detailed modals
- Organized media sections (images vs videos)
- Skill categorization with color coding:
  - **Blue (#1e40af)**: Robotics & Hardware skills
  - **Green (#166534)**: Software & Development skills  
  - **Purple (#7c2d12)**: Product Management skills

### Experience Timeline
- Professional timeline with hover effects
- Categorized achievements and skill tags
- Responsive design for mobile/desktop

### Dynamic Skill Categorization
The `skillCategories` object in `script.js` automatically categorizes and color-codes all skill tags throughout the site based on domain expertise.

## Design System

### Brand Colors
- **Primary**: `#FFB100` (Golden Yellow) - Used for highlights, CTAs, and brand elements
- **Secondary**: `#0C1321` (Dark Navy) - Used for text, headers, and professional elements
- **Background**: `#F8F9FB` (Light gray gradient)
- **Typography**: Poppins font family

### Layout Principles
- Grid-based responsive design
- Soft shadows and rounded corners (border-radius: 15px+)
- Generous padding and spacing (minimum 2rem)
- Card-based component system

## Development Workflow

### Running the Site
Simply open `index.html` in any modern web browser - no build process required.

### Adding New Projects
1. Add project data to the `projectData` object in `script.js`
2. Include media files in `resources/project-images/`
3. Update project thumbnails for card display
4. Ensure skills are properly categorized in `skillCategories`

### Content Updates
- Modify relevant files in `txt_guides/` for content specifications
- Update experience data in `experience_section_contents.txt`
- Add new project media to `project_data.txt`

### Asset Management
- **Project images**: `resources/project-images/{project-name}/`
- **Thumbnails**: Used for project card displays
- **Media organization**: Separate folders for different project types
- **Image optimization**: Maintain consistent aspect ratios

## Target Audience Context

The portfolio owner is:
- Experienced robotics engineer (1.5+ years at Orangewood Labs, TCS Research)
- Actively transitioning to product management roles
- Showcasing both technical depth and product strategy capabilities
- Looking to demonstrate user research, competitive analysis, and strategic thinking skills

This context is crucial for understanding content prioritization and feature development decisions throughout the codebase.