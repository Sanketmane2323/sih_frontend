// API KEY = 53400fd09c0446e0b7d67772b5c9810e
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsNav from "./NewsNav";

const TechnologyNews = () => {
  const [technologyNews, setTechnologyNews] = useState([]);

  useEffect(() => {
    const fetchAllTechnologyNews = async () => {
      try {
        const res = await axios.get(
          "https://newsapi.org/v2/everything?q=technology&apiKey=53400fd09c0446e0b7d67772b5c9810e"
        );
        console.log(res.data.articles);
        setTechnologyNews(res.data.articles);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTechnologyNews();
  }, []);
  return (
    <div>
      <NewsNav />
      <div className="news flex flex-wrap justify-center">
        {technologyNews.map((n) => (
          <div
            key={n.title}
            className="max-w-sm rounded overflow-hidden shadow-lg m-4"
          >
            <img className="w-full" src={n.urlToImage} alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-[#3C4852]  mb-2">
                {n.title}
              </div>
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

export default TechnologyNews;
