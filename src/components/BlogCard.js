import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    
      <div className="blog-card">
        <div className="card-image">
          <img src=" images/blog-1.jpg" className="img-fluid w-100 " alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec,2023</p>
          <h5 className="title"> A beauti sun day morning</h5>
          <p className="desc">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ratione
            sed delectus a blanditiis! Quis rem, sequi voluptates a soluta,
            illum, commodi exercitationem officia neque at ducimus odit
            distinctio qui.
          </p>
          <Link to="/" className="button">
            Read more
          </Link>
        </div>
      </div>
    
  );
};

export default BlogCard;
