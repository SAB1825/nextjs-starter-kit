"use client";

import { create } from "zustand";

interface MobileMenuState {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

 const useMobileMenu = create<MobileMenuState>((set) => ({
  mobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
}));

export default useMobileMenu