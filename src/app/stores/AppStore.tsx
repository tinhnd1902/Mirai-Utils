import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Workspace } from '../constants/type';

interface AppState {
  workSpace: Workspace | null;
}

interface AppActions {
  reset: () => void;
  setWorkspace: (workSpace: Workspace | null) => void;
}

const initialValues = {
  workSpace: null,
};

const useAppStore = create<AppState & { actions: AppActions }>()(
  devtools(
    persist(
      (set) => ({
        ...initialValues,

        actions: {
          reset: () => set(initialValues),
          setWorkspace: (workSpace) => set({ workSpace }),
        },
      }),
      {
        name: 'AppStore',
        partialize: (state) => Object.fromEntries(Object.entries(state).filter(([key]) => !['actions'].includes(key))),
      },
    ),
  ),
);

export const useAppActions = () => useAppStore((state) => state.actions);
export const useAppWorkspace = () => useAppStore((state) => state.workSpace);

export default useAppStore;
