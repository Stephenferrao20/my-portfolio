# Portfolio Personalization Guide

## 1. Personal Information (components/Hero.tsx)
Replace the placeholder in the Hero component:
```tsx
// Line 58: Update your name, role, and location
Hi! I'm [Your Name], a [Your Role] based in [Your Location].
```

## 2. Navigation Items (data/index.ts)
Update the navigation menu:
```tsx
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];
```

## 3. Grid Items - Your Skills & Highlights (data/index.ts)
Replace the grid items with your own:
```tsx
export const gridItems = [
  {
    id: 1,
    title: "Your key strength or value proposition",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg", // Replace with your image
    spareImg: "",
  },
  // Add more items...
];
```

## 4. Projects (data/index.ts)
Replace with your actual projects:
```tsx
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    des: "Description of your project",
    img: "/your-project-image.svg", // Add your project image to /public/
    iconLists: ["/tech-icon1.svg", "/tech-icon2.svg"], // Add tech stack icons
    link: "https://your-project-url.com",
  },
  // Add more projects...
];
```



## 5. Work Experience (data/index.ts)
Update with your work history:
```tsx
export const workExperience = [
  {
    id: 1,
    title: "Your Job Title",
    desc: "Description of your role and achievements",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg", // Replace with relevant icon
  },
  // Add more experience...
];
```

## 6. Companies/Technologies (data/index.ts)
Update with companies you've worked with or technologies you use:
```tsx
export const companies = [
  {
    id: 1,
    name: "Company Name",
    img: "/company-logo.svg", // Add company logo to /public/
    nameImg: "/company-name.svg",
  },
  // Add more companies...
];
```

## 7. Social Media Links (data/index.ts)
Update with your social media:
```tsx
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg", // GitHub
    link: "https://github.com/yourusername",
  },
  {
    id: 2,
    img: "/twit.svg", // Twitter/X
    link: "https://twitter.com/yourusername",
  },
  {
    id: 3,
    img: "/link.svg", // LinkedIn
    link: "https://linkedin.com/in/yourusername",
  },
];
```

## 8. Images and Assets
Replace images in the `/public/` folder:
- Project images (p1.svg, p2.svg, etc.)
- Company logos
- Experience icons (exp1.svg, exp2.svg, etc.)
- Technology icons
- Your profile picture

## 9. Additional Customization
- Update the hero tagline: "Dynamic Web Magic with Next.js"
- Update the main heading: "Transforming Concepts into Seamless User Experiences"
- Customize colors in `tailwind.config.ts` if needed
- Update the page title and meta description in `app/layout.tsx`

## Next Steps:
1. Fill in your personal information in the Hero component
2. Update the data in `data/index.ts` with your information
3. Replace images in the `/public/` folder
4. Test the website to ensure everything looks good
5. Deploy to your preferred platform (Vercel, Netlify, etc.) 