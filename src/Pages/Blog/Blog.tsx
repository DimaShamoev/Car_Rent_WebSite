import React from 'react'
import './Blog.css'

const Blog: React.FunctionComponent = () => {
  return (
    <div className='blog-page'>
        <div className="blog-title">
            Blog List
        </div>

        <div className="blog-content">
            <div className="blog-content-left-side">
                <div className="blog-post">
                    <div className="blog-post-img">
                        <img src="img/blog-post-1.jpg" alt="" />
                    </div>
                    <div className="blog-post-author">
                        <span>Ali Tufas</span>
                        <span className='dots'></span>
                        <span>April 20, 2024</span>
                    </div>
                    <div className="blog-post-name">
                        The Best Used Cars For Affordable Insurance Policies
                    </div>
                    <div className="blog-post-desc">
                        In 2023, more and more savvy motorists are finding value in the pre-owned vehicle market. Here are 10 used cars that have affordable insurance policies.
                    </div>
                </div>

                <div className="blog-post">
                    <div className="blog-post-img">
                        <img src="img/blog-post-2.jpg" alt="" />
                    </div>
                    <div className="blog-post-author">
                        <span>Ali Tufas</span>
                        <span></span>
                        <span>April 20, 2024</span>
                    </div>
                    <div className="blog-post-name">
                        The Best Used Cars For Affordable Insurance Policies
                    </div>
                    <div className="blog-post-desc">
                        In 2023, more and more savvy motorists are finding value in the pre-owned vehicle market. Here are 10 used cars that have affordable insurance policies.
                    </div>
                </div>

                <div className="blog-post">
                    <div className="blog-post-img">
                        <img src="img/blog-post-3.jpg" alt="" />
                    </div>
                    <div className="blog-post-author">
                        <span>Ali Tufas</span>
                        <span></span>
                        <span>April 20, 2024</span>
                    </div>
                    <div className="blog-post-name">
                        The Best Used Cars For Affordable Insurance Policies
                    </div>
                    <div className="blog-post-desc">
                        In 2023, more and more savvy motorists are finding value in the pre-owned vehicle market. Here are 10 used cars that have affordable insurance policies.
                    </div>
                </div>
            </div>

            <div className="blog-content-right-side">
                <div className="categories-block">
                    <span>Categories</span>
                    <ul>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Body Kit</a></li>
                        <li><a href="#">Interior</a></li>
                        <li><a href="#">Exterior</a></li>
                        <li><a href="#">Sound</a></li>
                        <li><a href="#">Fuel Systems</a></li>
                        <li><a href="#">Wheels</a></li>
                        <li><a href="#">Oil & Filters</a></li>
                    </ul>
                </div>

                <div className="resent-posts">
                    <span>Recent Posts</span>

                    <div className="recent-post-block-list">
                        <div className="recent-post-block">
                            <div className="recent-post-img">
                                <img src="img/recent-post-1.jpg" alt="" />
                            </div>
                            <div className="recent-post-article">
                                <div className="recent-post-title">
                                    Battle of the SUVs - Kia Sport vs Hyundai 
                                </div>
                                <div className="recent-post-date">
                                    November 2, 2024
                                </div>
                            </div>
                        </div>

                        <div className="recent-post-block">
                            <div className="recent-post-img">
                                <img src="img/recent-post-1.jpg" alt="" />
                            </div>
                            <div className="recent-post-article">
                                <div className="recent-post-title">
                                    Battle of the SUVs - Kia Sport vs Hyundai 
                                </div>
                                <div className="recent-post-date">
                                    November 2, 2024
                                </div>
                            </div>
                        </div>

                        <div className="recent-post-block">
                            <div className="recent-post-img">
                                <img src="img/recent-post-1.jpg" alt="" />
                            </div>
                            <div className="recent-post-article">
                                <div className="recent-post-title">
                                    Battle of the SUVs - Kia Sport vs Hyundai 
                                </div>
                                <div className="recent-post-date">
                                    November 2, 2024
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tags">
                    <div className="tags-title">
                        Tags
                    </div>
                    <div className="tags-list">
                        <ul>
                            <li><a href="#">Sound</a></li>
                            <li><a href="#">Exterior</a></li>
                            <li><a href="#">Interior</a></li>
                            <li><a href="#">Fuel System</a></li>
                            <li><a href="#">Wheels</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default Blog