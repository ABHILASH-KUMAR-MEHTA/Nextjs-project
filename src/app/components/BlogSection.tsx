import React from "react";

interface BlogPost {
  imageSrc: string;
  title: string;
}

interface BlogSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  blogPosts?: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({
  sectionTitle,
  sectionSubtitle,
  blogPosts = [],
}) => {
  return (
    <section
      className="flex flex-col items-center mt-12 w-full px-6 py-10 sm:px-12 md:px-16 lg:px-24"
      role="region"
      aria-labelledby="blog-section-title"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2
          id="blog-section-title"
          className="text-3xl font-semibold text-neutral-800 leading-tight"
        >
          {sectionTitle}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600">
          {sectionSubtitle}
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 gap-10 sm:gap-12 mt-8 w-full max-w-6xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="relative flex flex-col rounded-lg shadow-lg mb-10 sm:mb-12 md:mb-14 lg:mb-16"
          >
            {/* Image */}
            <img
              loading="lazy"
              src={post.imageSrc}
              alt={post.title}
              className="w-full h-60 sm:h-48 md:h-60 object-cover rounded-t-lg"
            />
            {/* Overlay Content */}
            <div className="absolute z-20 bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 mx-4 mb-[-50px] rounded-lg shadow-lg">
              <h3 className="text-sm sm:text-base font-semibold text-neutral-800">
                {post.title}
              </h3>
              <button
                className="flex items-center gap-2 mt-2 text-green-600 font-medium hover:text-green-800"
                aria-label={`Read more about ${post.title}`}
              >
                <span>Read more</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/f21d923fc124929a04d3db518966ac19331cf79630f7afc6fde93caacfcc5e06?apiKey=66f24bb10319401b926f00beb93fa44e&"
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
