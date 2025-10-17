# React CV Generator

A modern, responsive digital curriculum vitae built with React and Vite, designed for easy customization and professional presentation.

## Features

- **Single-Source Data Management**: All CV content is centralized in a single JavaScript file for easy updates
- **Modular Component Architecture**: Separate components for each CV section (Profile, Education, Skills, Experience, Projects)
- **Professional Typography**: IBM Plex Mono and Barlow fonts for a clean, technical aesthetic
- **Print-Optimized**: CSS print styles ensure your CV looks great on paper (A4 format)
- **Responsive Design**: Bootstrap 5 integration for mobile and desktop compatibility
- **Icon Integration**: Bootstrap Icons for visual enhancement
- **Easy Customization**: Simple data structure allows quick content updates without touching code

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher)
- npm (v8.0.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/stefanozuffi/react-curriculum-vitae.git
cd react-curriculum-vitae
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Customization

### Updating Your Information

All CV content is managed through the `src/assets/data/info.js` file. Simply update the `cvData` object with your personal information:

```javascript
const cvData = {
  personalInfo: {
    name: "Your Name",
    email: "your.email@example.com",
    // ... other fields
  },
  education: [...],
  projects: [...],
  // ... other sections
}
```

### Sections Included

- **Profile**: Brief professional summary
- **Technical Skills**: Web development, data analysis, and other technical abilities
- **Soft Skills**: Communication, problem-solving, and interpersonal skills
- **Languages**: Language proficiencies
- **Education**: Academic background with expandable details
- **Projects**: Portfolio projects with links and descriptions
- **Experience**: Professional work experience

### Styling

The project uses a combination of:
- **Bootstrap 5**: For responsive grid layout and utilities
- **Custom CSS**: Located in `src/index.css` for brand-specific styling
- **IBM Plex Mono**: Primary font for technical aesthetic
- **Barlow**: Secondary font option

Color scheme can be modified in the CSS file with the main accent color being `brown` for emphasis.

## Project Structure

```
react-curriculum-vitae/
├── src/
│   ├── assets/
│   │   ├── components/     # React components for each CV section
│   │   │   ├── AppHeader.jsx
│   │   │   ├── AppMain.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Skills.jsx
│   │   └── data/          # CV content data
│   │       └── info.js
│   ├── img/               # Images (profile picture, etc.)
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── public/                # Static assets
└── index.html            # HTML template
```

## Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool and development server
- **Bootstrap 5** - CSS framework for responsive design
- **Bootstrap Icons** - Icon library
- **Custom Fonts** - IBM Plex Mono and Barlow via @fontsource
- **ESLint** - Code quality and consistency

## Printing Your CV

The CV is optimized for printing:
1. Open your CV in the browser
2. Use `Ctrl/Cmd + P` to open the print dialog
3. Select "Save as PDF" or print directly
4. The layout automatically adjusts to A4 format with appropriate margins

## Deployment

This project is ready to deploy on platforms like:
- **Vercel**: `vercel deploy`
- **Netlify**: Connect your repository for automatic deployments
- **GitHub Pages**: Use the build output from `npm run build`

## Customization Tips

1. **Add Sections**: Create new components in `src/assets/components/` and add data to `info.js`
2. **Change Colors**: Modify the color scheme in `src/index.css`
3. **Toggle Sections**: Use the `show` property in data objects to hide/show sections
4. **Profile Picture**: Add your image to `src/img/` and uncomment the image line in `AppHeader.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## Acknowledgments

- Built with React and Vite for optimal performance
- Styled with Bootstrap for responsive design
- Typography by IBM Plex Mono and Barlow fonts

---

**Live Demo**: [stefanozuffi-cv.vercel.app](https://stefanozuffi-cv.vercel.app)

**Repository**: [github.com/stefanozuffi/react-curriculum-vitae](https://github.com/stefanozuffi/react-curriculum-vitae)
