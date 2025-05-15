import { Component } from '@angular/core';

@Component({
  selector: 'ce-courses-and-programs',
  standalone: false,
  templateUrl: './courses-and-programs.component.html',
  styleUrl: './courses-and-programs.component.scss'
})
export class CoursesAndProgramsComponent {

  primaryCourses = [
    {
      title: 'Karnataka State Syllabus',
      duration: 'Monthly',
      level: '1st-8th',
      price: '₹1200/month',
      includes: ['All subjects']
    },
    {
      title: 'CBSE Syllabus',
      duration: 'Monthly',
      level: '1st-8th',
      price: '₹1500/month',
      includes: ['All subjects']
    },
    {
      title: 'ICSE Syllabus',
      duration: 'Monthly',
      level: '1st-8th',
      price: '₹1500/month',
      includes: ['All subjects']
    }
  ];

  secondaryCourses = [
    {
      title: 'State Board (Math & Science)',
      duration: 'Yearly',
      level: '9th-10th',
      price: '₹10,000/year',
      includes: ['Math', 'Science'],
      idealFor: 'State board students'
    },
    {
      title: 'State Board (All Subjects)',
      duration: 'Yearly',
      level: '9th-10th',
      price: '₹15,000/year',
      includes: ['All subjects']
    },
    {
      title: 'CBSE/ICSE (Math & Science)',
      duration: 'Yearly',
      level: '9th-10th',
      price: '₹12,000/year',
      includes: ['Math', 'Science']
    },
    {
      title: 'CBSE/ICSE (All Subjects)',
      duration: 'Yearly',
      level: '9th-10th',
      price: '₹16,000/year',
      includes: ['All subjects']
    }
  ];

  codingCourses = [
    {
      title: 'C Programming',
      duration: '2 Months',
      level: 'Coding',
      price: '₹6000',
      keyTopics: ['Loops', 'Functions', 'Pointers'],
      idealFor: 'Beginners in programming'
    },
    {
      title: 'Python Programming',
      duration: '2 Months',
      level: 'Coding',
      price: '₹6000',
      keyTopics: ['Syntax', 'Data Types', 'Functions']
    },
    {
      title: 'Java Programming',
      duration: '2 Months',
      level: 'Coding',
      price: '₹8000',
      keyTopics: ['OOP', 'Collections', 'Exception Handling']
    },
    {
      title: 'Scratch Programming',
      duration: '2 Months',
      level: 'Coding',
      price: '₹6000',
      idealFor: 'School children',
      keyTopics: ['Block coding', 'Animations', 'Game development']
    },
    {
      title: 'Tally',
      duration: '2 Months',
      level: 'Coding',
      price: '₹5000',
      keyTopics: ['Accounting', 'Inventory', 'GST'],
      idealFor: 'Commerce students'
    },
    {
      title: 'Basic Computer Skills',
      duration: '2 Months',
      level: 'Coding',
      price: '₹6000',
      keyTopics: ['MS Office', 'Email', 'Internet'],
      idealFor: 'New computer users'
    }
  ];

  pucCourses = [
    {
      title: 'Computer Science',
      duration: 'Termwise',
      level: 'PUC',
      price: '₹6000',
      includes: ['Computer Science']
    },
    {
      title: 'Commerce Subjects',
      duration: 'Termwise',
      level: 'PUC',
      price: '₹20,000',
      includes: ['Accounts', 'Business Studies', 'Economics', 'Statistics']
    },
    {
      title: 'Income Tax & GST',
      duration: 'Termwise',
      level: 'PUC',
      price: '₹6000',
      includes: ['Taxation', 'GST rules']
    }
  ];

  entranceCourses = [
    {
      title: 'PGCET - MCA Entrance',
      duration: '1 Year',
      level: 'Entrance',
      price: '₹8000/year',
      includes: ['MCA preparation']
    },
    {
      title: 'PGCET - MBA Entrance',
      duration: '1 Year',
      level: 'Entrance',
      price: '₹7000/year',
      includes: ['MBA preparation']
    }
  ];

  languageCourses = [
    {
      title: 'Kannada/Sanskrit',
      duration: 'Termwise',
      level: 'Language',
      price: '₹5000',
      includes: ['Kannada', 'Sanskrit'],
      idealFor: '1st/2nd PUC & Degree students'
    }
  ];
}