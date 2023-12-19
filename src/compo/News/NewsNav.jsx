// import React from "react";

// const NewsNav = () => {
//   return (
//     <div>
//       <ul class="flex justify-center">
//         <li class="flex-1 mr-2 p-2 hover:bg-gray-200 cursor-pointer text-blue-500">
//           <div class="flex items-center justify-center w-52 h-12 border border-gray-300 rounded-lg text-xl">
//             General
//           </div>
//         </li>
//         <li class="flex-1 mr-2 p-2 hover:bg-gray-200 cursor-pointer text-blue-500">
//           <div class="flex items-center justify-center w-52 h-12 border border-gray-300 rounded-lg text-xl">
//             Technology
//           </div>
//         </li>
//         <li class="flex-1 mr-2 p-2 hover:bg-gray-200 cursor-pointer text-blue-500">
//           <div class="flex items-center justify-center w-52 h-12 border border-gray-300 rounded-lg text-xl">
//             Business
//           </div>
//         </li>
//         <li class="flex-1 mr-2 p-2 hover:bg-gray-200 cursor-pointer text-blue-500">
//           <div class="flex items-center justify-center w-52 h-12 border border-gray-300 rounded-lg text-xl">
//             Blogs
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default NewsNav;
// NewsNav.js
import React from "react";
import { Link, Route, Switch, Router } from "react-router-dom";

import TechnologyNews from "./TechnologyNews";
import BusinessNews from "./BusinessNews";
import AddBlog from "./AddBlog";
import News from "./News";

const NewsNav = () => {
  return (
    <div>
      <ul className="flex justify-center">
        <li className="flex-1 mr-2 p-2 hover:bg-gray-200 cursor-pointer">
          <Link to="/news/" className="text-blue-500">
            General
          </Link>
        </li>
        <li className="flex-1 mr-2 p-2 hover:bg-gray-200 cursor-pointer">
          <Link to="/news/business" className="text-blue-500">
            Business
          </Link>
        </li>
        <li className="flex-1 mr-2 p-2 hover:bg-gray-200 cursor-pointer">
          <Link to="/news/technology" className="text-blue-500">
            Technology
          </Link>
        </li>
        <li className="flex-1 mr-2 p-2 hover:bg-gray-200 cursor-pointer">
          {/* <a href="/soham">Technology</a> */}
          <Link to="/news/blogs" className="text-blue-500">
            Blogs
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsNav;
