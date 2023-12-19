// API KEY = 53400fd09c0446e0b7d67772b5c9810e
//Mac Api key = 53400fd09c0446e0b7d67772b5c9810e
import React, { useState, useEffect } from "react";

import axios from "axios";
import NewsNav from "./NewsNav";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const res = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=53400fd09c0446e0b7d67772b5c9810e"
        );
        console.log(res.data.articles);
        setNews(res.data.articles);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllNews();
  }, []);
  return (
    <div>
      <NewsNav />
      <div className="news flex flex-wrap justify-center">
        {news.map((n) => (
          <div
            key={n.title}
            className="max-w-sm rounded overflow-hidden shadow-lg m-4 text-[#3C4852] "
          >
            <img
              className="max-w-[100%] max-h-[100%] p-4"
              src={n.urlToImage}
              alt="Images"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{n.title}</div>
              <p className="text-[#3C4852]  text-base">{n.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-[#08BD80] hover:bg-[#31a985] text-white font-bold py-2 px-4 rounded">
                <a href={n.url}>Read more</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
