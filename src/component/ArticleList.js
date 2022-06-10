import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare, faTrashCan, faUser } from "@fortawesome/free-solid-svg-icons";
import { authorStore } from "../store/saveInfo";
import { articleListStore } from "../store/articleList";
import Modal from "./Modal";
import Time from "./Time";

const ArticleList = (props) => {
    const { article, setArticle } = props;
    const [openModal, setOpenModal] = useState(false);
    const { author, setAuthor } = authorStore(); // fetching everything
    const { articleList, updateArticle, deleteArticle } = articleListStore();

    const userNameChangeHandler = (e) => {
        setAuthor(e.target.value);
    };
    const createButtonClickHandler = () => {
        setOpenModal(!openModal);
    };
    const updateButtonClickHandler = () => {
        updateArticle(article);
    };
    const deleteButtonClickHandler = () => {
        deleteArticle(article);
    };
    const rowClickHandler = (e) => {
        const { number, title, author, date, content } = e.data;
        setArticle({
            number,
            title,
            author,
            date,
            content,
        });
    };
    return (
        <>
            <section className="p-5 flex flex-1 flex-col">
                <div className="flex content-between">
                    <div className="userInfo">
                        <label htmlFor="user">
                            <FontAwesomeIcon icon={faUser} className="ic-gray" /> 사용자
                        </label>
                        <input id="user" onChange={userNameChangeHandler} value={author} />
                    </div>
                    <Time />
                </div>
                <div className="board">
                    <div className="board__buttons">
                        <button onClick={createButtonClickHandler}>
                            <FontAwesomeIcon icon={faPlus} /> 신규
                        </button>
                        <button onClick={updateButtonClickHandler}>
                            <FontAwesomeIcon icon={faPenToSquare} /> 수정
                        </button>
                        <button onClick={deleteButtonClickHandler}>
                            <FontAwesomeIcon icon={faTrashCan} /> 삭제
                        </button>
                    </div>
                    <div
                        className="board__list ag-theme-material"
                        style={{
                            height: "100%",
                            minHeight: "200px",
                        }}
                    >
                        <AgGridReact
                            columnDefs={[
                                { field: "number", headerName: "번호" },
                                { field: "title", headerName: "제목" },
                                { field: "author", headerName: "작성자" },
                                { field: "date", headerName: "작성일" },
                            ]}
                            defaultColDef={{
                                flex: 1,
                                resizable: true,
                                sortable: true,
                                filter: true,
                            }}
                            rowData={articleList}
                            onRowClicked={rowClickHandler}
                        />
                    </div>
                </div>
            </section>
            {openModal && <Modal setOpenModal={setOpenModal} />}
        </>
    );
};

export default ArticleList;
