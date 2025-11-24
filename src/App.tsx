import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-pink-accent/15 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-accent/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-purple-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }} />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-primary/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
