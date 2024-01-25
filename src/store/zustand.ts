import { create } from 'zustand'

export const sideBarStore = create((set) => ({
    isOpen: false,
    handleIsOpen: () => set((state: any) => ({isOpen :  !state.isOpen}))
}));
export default sideBarStore