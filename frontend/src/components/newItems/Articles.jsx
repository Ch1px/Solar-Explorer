import axios from "axios";
import react, { useEffect, useState } from "react"
import Feed from "./Feed";

const backendURL = 'https://backend-server-solar.onrender.com'

function Articles() {
    const [articles, setArticles] = useState([]);

    console.log(articles);

    const getArticles = async () => {
        try {
            const res = await axios.get(`${backendURL}/`);
            setArticles(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getArticles();
    }, [])

    return (
        <>
            {articles.map((item, i) => (
                <Feed
                    key={i}
                    title={item.item.title}
                    link={item.item.link}
                    date={item.item.pubDate}
                    image={item.item.enclosure?.url} // get the image URL from the item's enclosure object
                />
            ))}
        </>
    )
}

export default Articles;