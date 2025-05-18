export interface Course {
    title: string;
    description: string;
    fee: string;
    duration: string;
    mode: "Online" | "Offline" | "Hybrid";
    level: "Beginner" | "Intermediate" | "Advanced";
    startDate: string;
    instructorName?: string;
    imgSrc: string;
}
