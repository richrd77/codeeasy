import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";

// Eager load the main page
import Index from "./pages/Index";

// Lazy load all other pages for better performance
const SchoolPrograms = lazy(() => import("./pages/SchoolPrograms"));
const CollegePrograms = lazy(() => import("./pages/CollegePrograms"));
const LanguageCourses = lazy(() => import("./pages/LanguageCourses"));
const StemPrograms = lazy(() => import("./pages/StemPrograms"));
const SteamPrograms = lazy(() => import("./pages/SteamPrograms"));
const FinancePrograms = lazy(() => import("./pages/FinancePrograms"));
const ExamCounseling = lazy(() => import("./pages/ExamCounseling"));
const TechnicalPrograms = lazy(() => import("./pages/TechnicalPrograms"));
const CoreLanguageCourses = lazy(() => import("./pages/CoreLanguageCourses"));
const AICourses = lazy(() => import("./pages/AICourses"));
const CyberSecurityCourses = lazy(() => import("./pages/CyberSecurityCourses"));
const TestimonialsGallery = lazy(() => import("./pages/TestimonialsGallery"));
const PersonalDevelopment = lazy(() => import("./pages/PersonalDevelopment"));
const CourseDetail = lazy(() => import("./pages/CourseDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-muted-foreground text-sm">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses/school" element={<SchoolPrograms />} />
            <Route path="/courses/college" element={<CollegePrograms />} />
            <Route path="/courses/stem" element={<StemPrograms />} />
            <Route path="/courses/steam" element={<SteamPrograms />} />
            <Route path="/courses/languages" element={<LanguageCourses />} />
            <Route path="/courses/finance" element={<FinancePrograms />} />
            <Route path="/courses/technical" element={<TechnicalPrograms />} />
            <Route path="/courses/exam-counseling" element={<ExamCounseling />} />
            <Route path="/courses/technical/core-language" element={<CoreLanguageCourses />} />
            <Route path="/courses/technical/ai" element={<AICourses />} />
            <Route path="/courses/technical/cyber-security" element={<CyberSecurityCourses />} />
            <Route path="/courses/personal-development" element={<PersonalDevelopment />} />
            <Route path="/testimonials" element={<TestimonialsGallery />} />
            <Route path="/course/:slug" element={<CourseDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
