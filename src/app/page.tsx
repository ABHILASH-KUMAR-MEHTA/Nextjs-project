import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ClientSection from "./components/ClientSection";
import FeatureSection from "./components/FeatureSection";
import PixelgradeExperience from "./components/Pixel";
import Phone from "./components/Phone";
import BusinessStats from "./components/Aoo";
import TestimonialSection from "./components/TestimonialSection";
import BlogSection from "./components/BlogSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import "./globals.css";

const LandingPage: React.FC = () => {
  const stats = [
    {
      imageSrc: "image3.png",
      count: "2,245,341",
      label: "Members",
    },
    {
      imageSrc: "image4.png",
      count: "8 Years",
      label: "Event Booking",
    },
    {
      imageSrc: "image5.png",
      count: "46,328",
      label: "Clubs",
    },
    {
      imageSrc: "image6.png",
      count: "1,926,436",
      label: "Payments",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white shadow-2xl">
      <Header
        logoSrc1="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/2ccb127bf71a59cfdfef09a152bd53eced7b132ed0abe457a9f5f8373f98ce8c?apiKey=66f24bb10319401b926f00beb93fa44e&"
        logoSrc2="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/656206a53d3e507e3a8765df8f9b7a37f78d13a7ba640e6c68a6c96ae95da023?apiKey=66f24bb10319401b926f00beb93fa44e&"
        registerButtonText="Register Now"
      />
      <main>
        <Hero
          title={
            <div>
              <span className="text-black pb-20">Lessons and insights</span>
              <br /> from 8 years
            </div>
          }
          subtitle="Where to grow your business as a photographer: site or social media?"
          buttonText="Sign up"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/8dfd2c72a2f24cab240e24eef3c2159959da356c3730eb80d97db027c92f6d26?apiKey=66f24bb10319401b926f00beb93fa44e&"
        />

        <ClientSection
          title="Our Clients"
          subtitle="We have been working with some Fortune 500+ clients"
          clientLogos={[
            "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/75a89b6a9f42317a6fa2ca68e1c03ee309aa4acfbc9d4bf72e371888634d2d04?apiKey=66f24bb10319401b926f00beb93fa44e&",
            "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/49d4464ff2d1f7873c3954ed0ab66994150580575ef81e7c7a46da5a9c27f12a?apiKey=66f24bb10319401b926f00beb93fa44e&",
            "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/766ccf888094822f1cb852d49706ecc4f297341716e86ab84dbf69750baac511?apiKey=66f24bb10319401b926f00beb93fa44e&",
            "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/3a0cee41d5d8d5d9af31c44646ada6b68c8df29c9aa735964092b71e813972cf?apiKey=66f24bb10319401b926f00beb93fa44e&",
            "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/21cd94438dff0dd156ae2165a634118f9e4fa28b4f096947a44f05e5ba8fec84?apiKey=66f24bb10319401b926f00beb93fa44e&",
            "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/1ec4416a35de23d93e1e784701cbc4588ba109db6c7fdab9c3def1321de5c273?apiKey=66f24bb10319401b926f00beb93fa44e&",
            "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/7795378094d7d8da25f03c6808bf1d4e6332c4a1f854ba5deaef88f6afb15c9a?apiKey=66f24bb10319401b926f00beb93fa44e&",
          ]}
        />
        <FeatureSection
          title="Manage your entire community in a single system"
          subtitle="Who is Nextcent suitable for?"
          features={[
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/c9313bba3a9d63005ff7de7b8772f469d695a71b2ad4160ae72514312bb23dd7?apiKey=66f24bb10319401b926f00beb93fa44e&",
              title: "Membership Organisations",
              description:
                "Our membership management software provides full automation of membership renewals and payments",
            },
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/289868446650b9dbec9c1a3339aeb2bdd18d58c9c78d06ed260cff8481ee3222?apiKey=66f24bb10319401b926f00beb93fa44e&",
              title: "National Associations",
              description:
                "Our membership management software provides full automation of membership renewals and payments",
            },
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/5a6d6bc18d50a19153bf425e933ea02faf8864493f45ea988e22ea0a807dfb97?apiKey=66f24bb10319401b926f00beb93fa44e&",
              title: "Clubs And Groups",
              description:
                "Our membership management software provides full automation of membership renewals and payments",
            },
          ]}
        />
        <PixelgradeExperience
          imageSrc="./image.png"
          title="The unseen of spending three years at Pixelgrade"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          buttonText="Learn More"
        />
        <BusinessStats
          title="Helping a local"
          subtitle="business reinvent itself"
          stats={stats}
        />
        <Phone
          imageSrc="./image1.png"
          title="How to design your site footer like we did"
          description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
          buttonText="Learn More"
        />
        <TestimonialSection
          imageSrc="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/8382d09d22282c68a69d96124a213a3985d5e9cbd3c54d553c1d03fc9d0f551f?apiKey=66f24bb10319401b926f00beb93fa44e&"
          testimonialText="Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna."
          authorName="Tim Smith"
          authorTitle="British Dragon Boat Racing Association"
          clientLogos={[
            "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/3a644820a9d7a0a72ed42423bdeb5e2191b85680236b1de9e26848bbf019c1db?apiKey=66f24bb10319401b926f00beb93fa44e&",
            "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/32219d259b56eefb98758e9f6a1d735eb87a9ee14ff05642b689b0680c8e07c5?apiKey=66f24bb10319401b926f00beb93fa44e&",
            "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/a1ccd3dd6c5df35e3aba10a24a356d4370e21b8f4e6f6f9652bb6bc628386011?apiKey=66f24bb10319401b926f00beb93fa44e&",
            "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/6aed5631545eec0a7eae0663faf7991e91960266007b2e7e9aad95fd998ec374?apiKey=66f24bb10319401b926f00beb93fa44e&",
            "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/c8d1198a065f2877fb211efcb8ee37e1d09c2ce0b5faf445e9a72863cdad275d?apiKey=66f24bb10319401b926f00beb93fa44e&",
            "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/dedf453982881d2e3608f790b65acf408e9a46a6fd178af29cc33c8aaf507123?apiKey=66f24bb10319401b926f00beb93fa44e&",
          ]}
        />
        <BlogSection
          sectionTitle="Caring is the new marketing"
          sectionSubtitle="The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​"
          blogPosts={[
            {
              imageSrc:
                "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/bc1892dfe55b1ec750da7656da02fce753dc0ae92728f56ccdd96085d8123fc1?apiKey=66f24bb10319401b926f00beb93fa44e&",
              title: "Creating Streamlined Safeguarding Processes with OneRen",
            },
            {
              imageSrc:
                "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/b452d85d32527ada8642b616e7dcca55d15aa2844c3220ff70a53b8b45fe0fd8?apiKey=66f24bb10319401b926f00beb93fa44e&",
              title:
                "What are your safeguarding responsibilities and how can you manage them?",
            },
            {
              imageSrc:
                "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/2af40c147d2202b91f2c16f50ab9197d3bc73bd77b367e99aaf9f46c0faa7aa9?apiKey=66f24bb10319401b926f00beb93fa44e&",
              title: "Revamping the Membership Model with Triathlon Australia",
            },
          ]}
        />
        <CallToAction
          title="Pellentesque suscipit fringilla libero eu."
          buttonText="Get a Demo"
        />
      </main>
      <Footer
        logoSrc1="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/ea6e4d206b94a4d08e3f4ebba8c3096fdd70b152ecdb9dd65d6985ae6e2759dd?apiKey=66f24bb10319401b926f00beb93fa44e&"
        logoSrc2="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/c9e6a55652526bba475c950670ed0ca07ce4b9419178d03e83a4dee2c3aa9197?apiKey=66f24bb10319401b926f00beb93fa44e&"
        socialIcons={[
          "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/33f181de5a5e1a1724c17927c073caa1e906112935888fd4c50547d7ec261c28?apiKey=66f24bb10319401b926f00beb93fa44e&",
          "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/9271076244f3b453fa6a395d0e5fc74c4a1940eee021e5e0276c721add22abea?apiKey=66f24bb10319401b926f00beb93fa44e&",
          "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/c4d18222388bdfc097d818461abf04a5a6d367b34cdb153957c8528840611010?apiKey=66f24bb10319401b926f00beb93fa44e&",
          "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/8ed2cb7db76631fa3451dc27403887b1910847008522b26c10e9d126ddbedabe?apiKey=66f24bb10319401b926f00beb93fa44e&",
        ]}
        companyLinks={[
          "About us",
          "Blog",
          "Contact us",
          "Pricing",
          "Testimonials",
        ]}
        supportLinks={[
          "Help center",
          "Terms of service",
          "Legal",
          "Privacy policy",
          "Status",
        ]}
      />
    </div>
  );
};

export default LandingPage;
