import { articleListStore } from "./articleList";
import { saveInfoStore } from "./saveInfo";

const useStore = () => {
    return { articleListStore, saveInfoStore };
};

export default useStore;
