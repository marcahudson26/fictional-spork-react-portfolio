import { create } from 'zustand';

export default create((set) => ({
    playHero: true,
    togglePlayHero: () => set(state => ({ playHero: !state.playHero })),
}))