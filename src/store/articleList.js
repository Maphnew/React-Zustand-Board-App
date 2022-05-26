import create from "zustand";
import { devtools } from "zustand/middleware";
import produce from "immer";

const store = (set, get) => {
    return {
        articleList: [],
        articleTitles: () => {
            // derived state using "get"
            return get().articleList.map((article) => article.title);
        },
        createArticle: (item) => {
            set((state) => {
                if (state.articleList.length === 0) {
                    item.number = 1;
                } else {
                    const numList = state.articleList.map((a) => parseInt(a.number));
                    item.number = Math.max(...numList) + 1;
                }
                return { articleList: [...state.articleList, item] };
            });
        },
        updateArticle: (item) => {
            set((state) => {
                const updatedArticles = state.articleList.map((article) => {
                    if (item.author === article.author && item.number === article.number) {
                        return item;
                    }
                    return article;
                });
                return { articleList: updatedArticles };
            });
        },
        deleteArticle: (item) => {
            set(
                produce((state) => {
                    state.articleList = state.articleList.filter((article) => {
                        return !(item.author === article.author && item.number === article.number);
                    });
                })
            );
        },
    };
};

export const articleListStore = create(devtools(store, { name: "aaa" }));
