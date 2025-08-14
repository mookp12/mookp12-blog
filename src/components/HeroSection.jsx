export function HeroSection() {
    return (
      <section className="bg-[#F9F8F6] min-h-screen px-4 md:px-6 py-10 md:py-15"> 
        <div className="max-w-sm md:max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Left Section - Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-brown-600 leading-tight md:text-right text-center ">
                Stay 
                <br className="hidden md:block" />
                Informed,
                <br />
                Stay Inspired
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed text-center md:text-right font-medium ">
                Discover a World of Knowledge at Your Fingertips. Your Daily Dose
                of Inspiration and Information.
              </p>
            </div>
  
            {/* Middle Section - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                  alt="Man with beard and cat on shoulder in autumn forest"
                  className="w-80 h-96 object-cover rounded-lg"
                />
              </div>
            </div>
  
            {/* Right Section - Author Bio */}
            <div className="space-y-4">
              <div className="text-sm text-gray-500 font-medium">-Author</div>
              <h2 className="text-2xl font-bold text-gray-800">Thompson P.</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed font-medium ">
                <p>
                  I am a pet enthusiast and freelance writer who specializes in
                  animal behavior and care. With a deep love for cats, I enjoy
                  sharing insights on feline companionship and wellness.
                </p>
                <p>
                  When i'm not writing, I spends time volunteering at my local
                  animal shelter, helping cats find loving homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }