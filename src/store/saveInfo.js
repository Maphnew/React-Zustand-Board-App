import create from "zustand";

export const authorStore = create((set) => ({
    author: "Anonymous",
    setAuthor: (author) => {
        set((state) => ({ author }));
    },
}));

export const dateStore = create((set) => ({
    date: new Date(),
    setDate: (date) => {
        set((state) => ({ date }));
    },
}));
