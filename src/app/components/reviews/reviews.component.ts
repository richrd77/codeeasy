import { Component, OnInit } from '@angular/core';

export interface Review {
  id: number;
  author: string;
  role: string;
  rating: number;
  date: string;
  content: string;
  avatar?: string;
  courseType: string;
}

@Component({
  selector: 'ce-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent  implements OnInit {
  reviews: Review[] = [];
  averageRating: number = 0;
  totalReviews: number = 0;
Math: any;

  ngOnInit(): void {
    this.loadReviews();
    this.calculateStats();
  }

  loadReviews(): void {
    this.reviews = [
      {
        id: 1,
        author: 'Brunda',
        role: 'Web Development Student',
        rating: 5,
        date: '2024-06-16',
        content: 'Code easy classes was very informative..that means the faculties provide a good lecture about HTML and CSS and even they made us to learn basic HTML and CSS codes Which help us in scoring a good marks.',
        avatar: 'assets/avatars/1.jpg',
        courseType: 'coding'
      },
      {
        id: 2,
        author: 'Chitra',
        role: 'Data Science Graduate',
        rating: 4,
        date: '2023-09-22',
        content: 'I had an excellent experience interacting with Codeeasy, a coaching center. The business had expert faculty who were knowledgeable and supportive. They provided high-quality coaching and guidance, creating a positive learning environment. I was impressed by their professionalism and dedication to helping students succeed. Overall, my interaction with Codeeasy was fantastic, and I would highly recommend them to anyone seeking coaching services.',
        avatar: 'assets/avatars/2.jpg',
        courseType: 'coding'
      },
      {
        id: 3,
        author: 'Vishesh K V',
        role: 'Full-stack Developer',
        rating: 5,
        date: '2023-08-05',
        content: 'Manner of teaching is so wonderful and refreshing!! We used to learn here with fun.',
        avatar: 'assets/avatars/3.jpg',
        courseType: 'puc'
      },
      {
        id: 4,
        author: 'Puneeth K E',
        role: 'UI/UX Design Student',
        rating: 5,
        date: '2023-07-18',
        content: 'Best centre codeasy for maths and English.',
        avatar: 'assets/avatars/4.jpg',
        courseType: 'school'
      },
      {
        id: 5,
        author: 'Mohammed Ayaz',
        role: 'Mobile Development Graduate',
        rating: 4,
        date: '2023-06-30',
        content: 'Codeeasy- It`ll make coding easy ,best institute do join.',
        avatar: 'assets/avatars/5.jpg',
        courseType: 'entrance'
      },
      {
        id: 5,
        author: 'Meghana',
        role: 'Mobile Development Graduate',
        rating: 4,
        date: '2023-06-30',
        content: 'Best training center for coding and maths.',
        avatar: 'assets/avatars/5.jpg',
        courseType: 'entrance'
      },
      {
        id: 5,
        author: 'Roopa',
        role: 'Mobile Development Graduate',
        rating: 4,
        date: '2023-06-30',
        content: 'Best place for Coding and Math classes. PROGMATH curriculum is good for kids.',
        avatar: 'assets/avatars/5.jpg',
        courseType: 'entrance'
      },
      {
        id: 5,
        author: 'Banupriya',
        role: 'Mobile Development Graduate',
        rating: 4,
        date: '2023-06-30',
        content: 'Excellent gateway for all the courses.',
        avatar: 'assets/avatars/5.jpg',
        courseType: 'entrance'
      },
      {
        id: 5,
        author: 'Chandan N',
        role: 'Mobile Development Graduate',
        rating: 4,
        date: '2023-06-30',
        content: 'Nice computer training institute. Exceeded my expectations.',
        avatar: 'assets/avatars/5.jpg',
        courseType: 'entrance'
      }
    ];
  }

  calculateStats(): void {
    this.totalReviews = this.reviews.length;
    if (this.totalReviews > 0) {
      const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
      this.averageRating = sum / this.totalReviews;
    }
  }

  // getStars(rating: number): number[] {
  //   return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  // }

  getCourseTypeColor(courseType: string): string {
    switch(courseType) {
      case 'school': return '#4CAF50';
      case 'coding': return '#2196F3';
      case 'puc': return '#9C27B0';
      case 'entrance': return '#FF9800';
      case 'language': return '#3F51B5';
      default: return '#FF6D00';
    }
  }
}