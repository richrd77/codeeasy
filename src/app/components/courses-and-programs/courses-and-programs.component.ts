import { Component } from '@angular/core';

@Component({
  selector: 'ce-courses-and-programs',
  standalone: false,
  templateUrl: './courses-and-programs.component.html',
  styleUrl: './courses-and-programs.component.scss'
})
export class CoursesAndProgramsComponent {

  courses = [
    // Beginner Courses
    {
      title: 'Introduction to Programming',
      duration: '6 Weeks',
      level: 'Beginner',
      languages: ['Python'],
      keyTopics: ['Variables', 'Loops', 'Functions', 'Problem-Solving'],
      idealFor: 'Absolute beginners'
    },
    {
      title: 'Web Development Fundamentals',
      duration: '8 Weeks',
      level: 'Beginner',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      keyTopics: ['Responsive Design', 'DOM', 'Forms', 'Hosting'],
      idealFor: 'Students with zero or basic coding experience'
    },
    // Intermediate Courses
    {
      title: 'Full-Stack Web Development',
      duration: '12 Weeks',
      level: 'Intermediate',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      keyTopics: ['Frontend & Backend Integration', 'REST APIs', 'Authentication'],
      idealFor: 'Students with basic HTML/CSS/JS knowledge'
    },
    {
      title: 'Python for Data Science',
      duration: '10 Weeks',
      level: 'Intermediate',
      libraries: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      keyTopics: ['Data Analysis', 'Visualization', 'Machine Learning Basics'],
      idealFor: 'Those familiar with Python basics'
    },
    // Advanced Courses
    {
      title: 'Advanced JavaScript and Frameworks',
      duration: '10 Weeks',
      level: 'Advanced',
      focus: ['ES6+', 'React.js', 'Redux', 'Async Programming'],
      keyTopics: ['Component Lifecycle', 'Hooks', 'State Management'],
      idealFor: 'Intermediate web developers'
    },
    {
      title: 'Machine Learning Mastery',
      duration: '14 Weeks',
      level: 'Advanced',
      tools: ['Python', 'TensorFlow', 'Scikit-learn'],
      keyTopics: ['Supervised & Unsupervised Learning', 'Projects'],
      idealFor: 'Learners with strong Python and math foundations'
    }
  ];

  programs = [
    {
      title: 'Internship-Integrated Programs',
      features: [
        'Real-time projects with live mentorship',
        'Internship certificates on completion',
        'Soft skills and resume building sessions'
      ]
    },
    {
      title: 'Corporate Training',
      features: [
        'Customizable modules for teams',
        'Delivered onsite or virtually',
        'Post-training assessments and reports'
      ]
    },
    {
      title: 'Weekend Bootcamps',
      features: [
        'Fast-paced sessions on trending topics',
        'Ideal for working professionals',
        'Hands-on, mentor-driven approach'
      ]
    }
  ];

  benefits = [
    'Industry-recognized certificates',
    'Portfolio-worthy capstone projects',
    'Career guidance and placement support'
  ];
}