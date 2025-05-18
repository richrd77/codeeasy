import { Component } from '@angular/core';
import { Course } from '../../common/modules/course';

@Component({
  selector: 'ce-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  courseCategories = [
    {
      type: 'School Tuition (1st-8th)',
      courses: [
        {
          title: 'Karnataka State Syllabus',
          description: 'Comprehensive tuition for state syllabus students',
          level: 'All Subjects',
          duration: 'Monthly',
          startDate: 'Ongoing',
          fee: '₹1200/month',
          imgSrc: 'assets/images/school-state.jpg'
        },
        {
          title: 'CBSE Syllabus',
          description: 'Complete CBSE curriculum coverage',
          level: 'All Subjects',
          duration: 'Monthly',
          startDate: 'Ongoing',
          fee: '₹1500/month',
          imgSrc: 'assets/images/school-cbse.jpg'
        },
        {
          title: 'ICSE Syllabus',
          description: 'Thorough ICSE syllabus instruction',
          level: 'All Subjects',
          duration: 'Monthly',
          startDate: 'Ongoing',
          fee: '₹1500/month',
          imgSrc: 'assets/images/school-icse.jpg'
        }
      ]
    },
    {
      type: '9th & 10th Standard',
      courses: [
        {
          title: 'State Board - Math & Science',
          description: 'Focused coaching for core subjects',
          level: '9th-10th',
          duration: 'Yearly',
          startDate: 'June 2023',
          fee: '₹10,000/year',
          imgSrc: 'assets/images/math-science.jpg'
        },
        {
          title: 'State Board - All Subjects',
          description: 'Complete subject coverage',
          level: '9th-10th',
          duration: 'Yearly',
          startDate: 'June 2023',
          fee: '₹15,000/year',
          imgSrc: 'assets/images/all-subjects.jpg'
        },
        {
          title: 'CBSE/ICSE - Math & Science',
          description: 'Specialized coaching for CBSE/ICSE students',
          level: '9th-10th',
          duration: 'Yearly',
          startDate: 'June 2023',
          fee: '₹12,000/year',
          imgSrc: 'assets/images/cbse-math.jpg'
        },
        {
          title: 'CBSE/ICSE - All Subjects',
          description: 'Full curriculum for CBSE/ICSE boards',
          level: '9th-10th',
          duration: 'Yearly',
          startDate: 'June 2023',
          fee: '₹16,000/year',
          imgSrc: 'assets/images/cbse-all.jpg'
        }
      ]
    },
    {
      type: 'Coding & Computer Courses',
      courses: [
        {
          title: 'C Programming',
          description: 'Master the fundamentals of C language',
          level: 'Beginner',
          duration: '2 Months',
          startDate: 'Monthly Batches',
          fee: '₹6000',
          imgSrc: 'assets/images/c-programming.jpg'
        },
        {
          title: 'Python Programming',
          description: 'Learn versatile Python programming',
          level: 'Beginner',
          duration: '2 Months',
          startDate: 'Monthly Batches',
          fee: '₹6000',
          imgSrc: 'assets/images/python.jpg'
        },
        {
          title: 'Java Programming',
          description: 'Object-oriented Java development',
          level: 'Intermediate',
          duration: '2 Months',
          startDate: 'Monthly Batches',
          fee: '₹8000',
          imgSrc: 'assets/images/java.jpg'
        },
        {
          title: 'Scratch Programming',
          description: 'Fun introduction to coding for kids',
          level: 'Beginner',
          duration: '2 Months',
          startDate: 'Monthly Batches',
          fee: '₹6000',
          imgSrc: 'assets/images/scratch.jpg'
        },
        {
          title: 'Tally',
          description: 'Accounting and inventory management',
          level: 'Beginner',
          duration: '2 Months',
          startDate: 'Monthly Batches',
          fee: '₹5000',
          imgSrc: 'assets/images/tally.jpg'
        },
        {
          title: 'Basic Computer Skills',
          description: 'Essential computer literacy course',
          level: 'Beginner',
          duration: '2 Months',
          startDate: 'Monthly Batches',
          fee: '₹6000',
          imgSrc: 'assets/images/computer-basics.jpg'
        }
      ]
    },
    {
      type: 'PUC Coaching',
      courses: [
        {
          title: 'Computer Science',
          description: 'Comprehensive PUC Computer Science',
          level: '1st & 2nd PUC',
          duration: 'Termwise',
          startDate: 'June/Dec Batches',
          fee: '₹6000',
          imgSrc: 'assets/images/puc-cs.jpg'
        },
        {
          title: 'Commerce Subjects',
          description: 'Accounts, Business, Economics, Statistics',
          level: '1st & 2nd PUC',
          duration: 'Termwise',
          startDate: 'June/Dec Batches',
          fee: '₹20,000',
          imgSrc: 'assets/images/commerce.jpg'
        },
        {
          title: 'Income Tax & GST',
          description: 'Practical taxation knowledge',
          level: '1st & 2nd PUC',
          duration: 'Termwise',
          startDate: 'June/Dec Batches',
          fee: '₹6000',
          imgSrc: 'assets/images/taxation.jpg'
        }
      ]
    },
    {
      type: 'Entrance Exam Coaching',
      courses: [
        {
          title: 'PGCET - MCA Entrance',
          description: 'Complete MCA entrance preparation',
          level: 'Entrance',
          duration: '1 Year',
          startDate: 'June 2023',
          fee: '₹8000/year',
          imgSrc: 'assets/images/mca.jpg'
        },
        {
          title: 'PGCET - MBA Entrance',
          description: 'Comprehensive MBA entrance coaching',
          level: 'Entrance',
          duration: '1 Year',
          startDate: 'June 2023',
          fee: '₹7000/year',
          imgSrc: 'assets/images/mba.jpg'
        }
      ]
    },
    {
      type: 'Language Courses',
      courses: [
        {
          title: 'Kannada/Sanskrit',
          description: 'Language courses for PUC & Degree',
          level: 'Language',
          duration: 'Termwise',
          startDate: 'June/Dec Batches',
          fee: '₹5000',
          imgSrc: 'assets/images/languages.jpg'
        }
      ]
    }
  ];
}
