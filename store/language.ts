import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface LanguageState {
  language: 'en' | 'ar'
  setLanguage: (language: 'en' | 'ar') => void
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

