import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Customize {
  links: {
    id: string;
    name: string;
    url: string;
  }[];
  addLink: (link: { id: string; name: string; url: string }) => void;
  setLinks: (links: { id: string; name: string; url: string }[]) => void;
  updateLinkUrl: (index: number, url: string) => void;
  updateLinkOrder: (dragIndex: number, hoverIndex: number) => void;
  updateOption: (index: number, name: string) => void;
  deleteLink: (id: string) => void;
}

export const useCustomizeStore = create<Customize>()(
  persist(
    (set) => ({
      links: [],
      addLink: (link) =>
        set((state) => ({
          links: [...state.links, link],
        })),

      setLinks: (links) => set({ links }),

      updateLinkUrl: (index: number, url: string) =>
        set((state) => {
          const updatedLinks = state.links.map((link, i) =>
            i === index ? { ...link, url } : link
          );
          return { links: updatedLinks };
        }),

      updateLinkOrder: (dragIndex: number, hoverIndex: number) =>
        set((state) => {
          const links = [...state.links];
          const dragLink = links[dragIndex];
          links.splice(dragIndex, 1);
          links.splice(hoverIndex, 0, dragLink);
          return { links };
        }),

      updateOption: (index, name) =>
        set((state) => {
          const updatedLinks = state.links.map((link, i) =>
            i === index ? { ...link, name } : link
          );
          return { links: updatedLinks };
        }),

      deleteLink: (id) =>
        set((state) => ({
          links: state.links.filter((link) => link.id !== id),
        })),
    }),
    {
      name: "links",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
