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
            type: "Other Courses",
            courses:this.courses
        }
        ,
        {
            type: "Other Courses",
            courses:this.courses
        }
    ]
}
