import { useEffect } from "react";
import useStore from "../store/useStore";
import { authorStore, dateStore } from "../store/saveInfo";

const Content = (props) => {
    const { article, setArticle, setOpenModal, modal } = props;
    const { articleListStore } = useStore();
    const author = authorStore((state) => state.author);
    const date = dateStore((state) => state.date);
    const createArticle = articleListStore((state) => state.createArticle); // selecting state slice

    useEffect(() => {
        if (!modal) return;
        setArticle({
            ...article,
            author,
        });
    }, [author]);
    const submitHandler = (e) => {
        article.date = date.toLocaleDateString();
        e.preventDefault();
        createArticle(article);
        setOpenModal(false);
    };
    const contentChangeHandler = (e) => {
        const tempArticle = Object.assign({}, article);
        tempArticle[e.target.id] = e.target.value;
        setArticle(tempArticle);
    };
    return (
        <section className="p-5 flex flex-1 flex-col">
            <form id="form-content" onSubmit={submitHandler}>
                <h3>Contents</h3>
                <label>
                    제목
                    <input
                        id="title"
                        className="content__title"
                        value={article.title}
                        onChange={contentChangeHandler}
                    />
                </label>
                <div className="content__info">
                    <label>
                        작성자
                        <input
                            id="author"
                            className="content__info__user-input"
                            value={article.author}
                            onChange={contentChangeHandler}
                            readOnly
                        />
                    </label>
                    {!modal && (
                        <label>
                            작성일
                            <input id="date" className="content__info__create-date" value={article.date} readOnly />
                        </label>
                    )}
                </div>
                <div className="content__text">
                    <textarea
                        id="content"
                        className="content__text__textarea"
                        rows={10}
                        value={article.content}
                        onChange={contentChangeHandler}
                    />
                </div>
            </form>
        </section>
    );
};

export default Content;
