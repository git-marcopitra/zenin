import { create } from 'zustand';

export type View = 'block' | 'code';

type Store = {
  view: View;
  updateView: (view: View) => void;
};

export const useStore = create<Store>()((set) => ({
  view: 'block',
  updateView: (view: View) => set(() => ({ view })),
}));
