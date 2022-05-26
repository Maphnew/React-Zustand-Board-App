import { articleListStore } from "./articleList";
import { authorStore, dateStore } from "./saveInfo";

const useStore = () => {
    return { articleListStore, authorStore, dateStore };
};

export default useStore;
