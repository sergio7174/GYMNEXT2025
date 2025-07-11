import React from "react";
import Image from "next/image";


const LastNews = () => {
  
    return (
   
   <section class="blog-section" style={{ backgroundColor:'#b6ccfe'}}>
    <div class="container">
        <div class="section-title">
            <h4 class="subtitle"><span>LETEST BLOG</span></h4>
            <h1 class="title">Latest News & Feeds</h1>
        </div>
        <div class="blog-box">
            <div class="blog-left">
                <div class="blog-subtitle">
                    <span>Gymix</span>
                    <span class="separetor"></span>
                    <span>February 08, 2025</span>
                </div>
                <h4 class="blog-heading">
                    <a href="#">How to Create a Workout Routine You’ll Actually Stick To</a>
                </h4>
                <p>Build strength, endurance, and fitness with dynamic workouts and expert guidance for a balanced, powerful physique.</p>
                <div class="button">
                    <a href="#" class="btn">Read More<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="blog-right">
                <div class="image">
                    <Image src="/assets/images/blog-3.jpg" width={1000} height={4000} alt="image"/>
                </div>
            </div>
        </div>
        <div class="blog-box">
            <div class="blog-left">
                <div class="blog-subtitle">
                    <span>Gymix</span>
                    <span class="separetor"></span>
                    <span>February 08, 2025</span>
                </div>
                <h4 class="blog-heading">
                    <a href="#">The Benefits of Strength Training for Every Body Type</a>
                </h4>
                <p>Build strength, endurance, and fitness with dynamic workouts and expert guidance for a balanced, powerful physique.</p>
                <div class="button">
                    <a href="#" class="btn">Read More<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="blog-right">
                <div class="image">
                    <Image src="/assets/images/blog-2.jpg" width={1000} height={4000} alt="image"/>
                </div>
            </div>
        </div>
        <div class="blog-box">
            <div class="blog-left">
                <div class="blog-subtitle">
                    <span>Gymix</span>
                    <span class="separetor"></span>
                    <span>February 08, 2025</span>
                </div>
                <h4 class="blog-heading">
                    <a href="#">Nutrition 101 The Perfect Pair to Your Workout Plan</a>
                </h4>
                <p>Build strength, endurance, and fitness with dynamic workouts and expert guidance for a balanced, powerful physique.</p>
                <div class="button">
                    <a href="#" class="btn">Read More<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="blog-right">
                <div class="image">
                    <Image src="/assets/images/blog-1.jpg" width={1000} height={4000} alt="image" />
                </div>
            </div>
        </div>
    </div>
</section>

   
  );
};

export default LastNews;