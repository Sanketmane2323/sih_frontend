
import React from "react";
import { Link} from "react-router-dom";

import TechnologyNews from "./TechnologyNews";
import BusinessNews from "./BusinessNews";
import AddBlog from "./AddBlog";
import News from "./News";

const NewsNav = () => {
  return (
    <div>
      <ul className="flex justify-between">
        <li className="flex-1 mr-2 p-2 hover:bg-gray-200 cursor-pointer">
          <Link to="/news/" className="text-[#3C4852] ">
            General
          </Link>
        </li>
        <li className="flex-1 mr-2 p-2 hover:bg-gray-200 cursor-pointer">
          <Link to="/news/business" className="text-[#3C4852] ">
            Business
          </Link>
        </li>
        <li className="flex-1 mr-2 p-2 hover:bg-gray-200 cursor-pointer">
          <Link to="/news/technology" className="text-[#3C4852] ">
            Technology
          </Link>
        </li>
        <li className="flex-1 mr-2 p-2 hover:bg-gray-200 cursor-pointer">
          {/* <a href="/soham">Technology</a> */}
          <Link to="/news/blogs" className="text-[#3C4852] ">
            Blogs
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsNav;
