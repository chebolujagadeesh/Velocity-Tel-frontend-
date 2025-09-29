import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Plans from "./pages/Plans";
import ESimActivation from "./pages/ESimActivation";
import ActivateSim from "./pages/ActivateSim";
import QuickRecharge from "./pages/QuickRecharge";
import RaiseTicket from "./pages/RaiseTicket";
import SelfService from "./pages/SelfService";
import MyAccount from "./pages/MyAccount";
import Cart from "./pages/Cart";
import Coverage from "./pages/Coverage";
import BYOP from "./pages/BYOP";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/esim-activation" element={<ESimActivation />} />
                <Route path="/activate-sim" element={<ActivateSim />} />
                <Route path="/quick-recharge" element={<QuickRecharge />} />
                <Route path="/raise-ticket" element={<RaiseTicket />} />
                <Route path="/self-service" element={<SelfService />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/coverage" element={<Coverage />} />
                <Route path="/byop" element={<BYOP />} />
                <Route path="/support" element={<Support />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
