import create from "zustand";

export const saveInfoStore = create((set) => ({
    author: "Anonymous",
    date: new Date(),
    setAuthor: (author) => {
        set((state) => ({ author }));
    },
    setDate: (date) => {
        set((state) => ({ date }));
    },
}));
