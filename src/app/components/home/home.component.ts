import { Component } from '@angular/core';
import { Course } from '../../common/modules/course';

@Component({
  selector: 'ce-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    courses: Course[] = [
        {
            title: "C Programming",
            description: "Master the fundamentals of C programming and build a strong programming base with real-world examples.",
            fee: "₹499",
            duration: "4 weeks",
            mode: "Online",
            level: "Beginner",
            startDate: "May 20, 2025",
            instructorName: "Prof. A Kumar",
            imgSrc: "images/course-logos/c-logo.png"
        },
        {
            title: "C++ Programming",
            description: "Deep dive into Object-Oriented Programming, STL, and advanced C++ techniques for high-performance applications.",
            fee: "₹699",
            duration: "5 weeks",
            mode: "Online",
            level: "Intermediate",
            startDate: "June 1, 2025",
            instructorName: "Dr. Nisha Verma",
            imgSrc: "images/course-logos/c++-logo.png"
        },
        {
            title: "Java Programming",
            description: "Learn Java from scratch, build applications, and understand the foundations of Android development.",
            fee: "₹899",
            duration: "8 weeks",
            mode: "Hybrid",
            level: "Beginner",
            startDate: "May 25, 2025",
            instructorName: "Mr. Rahul Mehta",
            imgSrc: "images/course-logos/java-logo.png"
        },
        {
            title: "Python Programming",
            description: "An easy introduction to Python programming, data analysis, and basic machine learning concepts.",
            fee: "₹599",
            duration: "6 weeks",
            mode: "Online",
            level: "Beginner",
            startDate: "June 10, 2025",
            instructorName: "Ms. Priya Sharma",
            imgSrc: "images/course-logos/python-logo.png"
        },
        {
            title: "C Programming",
            description: "Master the fundamentals of C programming and build a strong programming base with real-world examples.",
            fee: "₹499",
            duration: "4 weeks",
            mode: "Online",
            level: "Beginner",
            startDate: "May 20, 2025",
            instructorName: "Prof. A Kumar",
            imgSrc: "images/course-logos/c-logo.png"
        },
        {
            title: "C++ Programming",
            description: "Deep dive into Object-Oriented Programming, STL, and advanced C++ techniques for high-performance applications.",
            fee: "₹699",
            duration: "5 weeks",
            mode: "Online",
            level: "Intermediate",
            startDate: "June 1, 2025",
            instructorName: "Dr. Nisha Verma",
            imgSrc: "images/course-logos/c++-logo.png"
        },
        {
            title: "Java Programming",
            description: "Learn Java from scratch, build applications, and understand the foundations of Android development.",
            fee: "₹899",
            duration: "8 weeks",
            mode: "Hybrid",
            level: "Beginner",
            startDate: "May 25, 2025",
            instructorName: "Mr. Rahul Mehta",
            imgSrc: "images/course-logos/java-logo.png"
        },
        {
            title: "Python Programming",
            description: "An easy introduction to Python programming, data analysis, and basic machine learning concepts.",
            fee: "₹599",
            duration: "6 weeks",
            mode: "Online",
            level: "Beginner",
            startDate: "June 10, 2025",
            instructorName: "Ms. Priya Sharma",
            imgSrc: "images/course-logos/python-logo.png"
        }
    ];

    courseCategory: any[]=[
        {
            type: "Programming Courses",
            courses:this.courses
        },

 
    {
        type: "Web Development",
        courses: [
            {
                title: "Full Stack Development",
                description: "Learn front-end and back-end development with HTML, CSS, JavaScript, Node.js and MongoDB.",
                fee: "₹1999",
                duration: "12 weeks",
                mode: "Hybrid",
                level: "Intermediate",
                startDate: "June 15, 2025",
                instructorName: "Ms. Deepa Patel",
                imgSrc: "images/course-logos/fullstack-logo.png"
            },
            {
                title: "React JS",
                description: "Build modern web applications with React, Redux and React Router.",
                fee: "₹1299",
                duration: "6 weeks",
                mode: "Online",
                level: "Intermediate",
                startDate: "July 1, 2025",
                instructorName: "Mr. Vikram Singh",
                imgSrc: "images/course-logos/react-logo.png"
            }
        ]
    },
    {
        type: "Data Science",
        courses: [
            {
                title: "Python for Data Science",
                description: "Learn data analysis, visualization and machine learning with Python.",
                fee: "₹1599",
                duration: "8 weeks",
                mode: "Hybrid",
                level: "Intermediate",
                startDate: "June 10, 2025",
                instructorName: "Dr. Suresh Kumar",
                imgSrc: "images/course-logos/datascience-logo.png"
            }
        ]
    }
];
}
