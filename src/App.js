import { useState } from "react";
import "./App.css";
import ArticleList from "./component/ArticleList";
import Content from "./component/Content";

function App() {
    const [article, setArticle] = useState({ number: "", title: "", author: "", date: "", content: "" });
    return (
        <>
            <h2 className="text-2xl font-bold my-10">Board App 📋 with Zustand</h2>
            <div className="App">
                <ArticleList article={article} setArticle={setArticle} />
                <Content article={article} setArticle={setArticle} />
            </div>
        </>
    );
}

export default App;
