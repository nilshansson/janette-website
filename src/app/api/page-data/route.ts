import { NextResponse } from "next/server";

const avatarList = [
  {
    image: "/images/avatar/avatar_1.jpg",
    title: "Sarah Johnson",
  },
  {
    image: "/images/avatar/avatar_2.jpg",
    title: "Olivia Miller",
  },
  {
    image: "/images/avatar/avatar_3.jpg",
    title: "Sophia Roberts",
  },
  {
    image: "/images/avatar/avatar_4.jpg",
    title: "Isabella Clark",
  },
];

const statsFactData = {
  number: "01",
  name: "Stats & facts",
  heading: "High quality web design solutions you can trust.",
  description:
    "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
  scoreData: [
    {
      number: 40,
      numberValue: "K",
      scoreDescp: "People who have launched their Years",
    },
    {
      number: 238,
      scoreDescp: "Experienced professionals ready to assist",
    },
    {
      number: 3,
      numberValue: "M",
      scoreDescp: "Support through messages and live consultations",
    },
  ],
};

const servicesData = {
  number: "03",
  name: "Comission A Work",
  heading: "Comission A Work",
  description:
    "A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences.",
  data: [
    {
      id: 1,
      image: "/images/home/services/textmessage hemsida.png",
      heading: "1. Share Your Vision – or Let Me Surprise You",
      descp:
        "Think about the size, colors, or perhaps a special memory you'd like the painting to reflect. Whether you have a clear idea or want to give me creative freedom, I'm happy to work in the way that suits you best.",
    },
    {
      id: 2,
      image: "/images/home/services/picasso-kollage.jpg",
      heading: "2. Send Me Inspiration",
      descp:
        "If you already have something in mind, please send at least three reference images along with a short note about what speaks to you in each one—colors, mood, shapes, or memories. It helps me capture your vision more clearly.",
    },
    {
      id: 3,
      image: "/images/home/services/livingroom-hemsida.avif",
      heading: "3. Let's Make It Yours",
      descp:
        "If possible, send me a photo of the space where you plan to hang the painting. This helps me tailor the artwork to your environment. We’ll then agree on the size, timeline, and price before I begin.",
    },
  ],
};

const testimonialData = {
  data_1: {
    title:
      "I had a very clear idea for my office space, and Nils brought it to life even better than I imagined. The painting lifts the whole atmosphere and has become a real talking point with my clients.",
    author: "Anna Eriksson",
    company: "Interior Designer",
  },
  data_2: {
    title:
      "I love everything Nils creates, but for my home I had something very specific in mind. I sent him a myriad of inspiration I had collected from museums around Europe. Paintings, color palettes and even specific feelings I wanted the art to convey. A few weeks later, I received two stunning pieces that perfectly captured the vision I had, now resting peacefully and purposefully on my walls. I’m looking forward to get a bigger apartment so I can have more walls to adorn with Nils’ art! 🙂",
    author: "Arian Tavassoli",
    company: "Commissioned two large paintings",
  },
  data_3: {
    preTitle: "Hear from them",
    title:
      "Commissioning a painting from Nils was such an easy and rewarding process. He really listened to my ideas and transformed them into a piece that feels truly personal.",
    author: "Jonas Lindholm",
    company: "Private Collector",
  },
};

const teamData = {
  number: "06",
  data: [
    {
      image: "/images/home/team/team-img-1.png",
      name: "Martha Finley",
      position: "Creative Director",
      socialLinks: [
        {
          icon: "/images/Icon/arrow-icon.svg",
          link: "https://www.youtube.com/watch?v=Hk0nzPMt2nI",
        },
      ],
    },

    {
      image: "/images/home/team/team-img-3.png",
      name: "Glenna Snyder",
      position: "Lead Designer",
      socialLinks: [
        {
          icon: "/images/Icon/arrow-icon.svg",
          link: "https://www.youtube.com/watch?v=ZNpLDFOFmUw",
        },
      ],
    },
    {
      image: "/images/home/team/team-img-4.png",
      name: "Albert Flores",
      position: "UX/UI Developer",
      socialLinks: [
        {
          icon: "/images/Icon/arrow-icon.svg",
          link: "https://www.youtube.com/watch?v=Ss9n3l94z4o",
        },
      ],
    },
  ],
};

const pricingData = {
  data: [
    {
      planName: "Small but Bold",
      planPrice: "990-2490 kr",
      planDescp:
        "Perfect for small spaces or thoughtful gifts. Art that makes a statement, even at 20x20cm.",
      planIncludes: [
        "Original acrylic painting on canvas",
        "Size: approx. 20x20 cm to 40x40 cm",
        "Signed and dated on the back",
        "Comes with a surprise art magnet",
      ],
    },
    {
      planName: "Medium Dream",
      tag: "Most popular",
      planPrice: "2490-3990 SEK",
      planDescp:
        "Balanced in size, bold in personality. Ideal for adding color and story to any room.",
      planIncludes: [
        "Original acrylic painting, medium format",
        "Size: approx. 50x50 cm to 80x80 cm",
        "Signed front or back, your choice",
        "Art magnet + exclusive promo code for your next piece",
      ],
    },
    {
      planName: "Big Statement",
      planPrice: "3990-5990 SEK",
      planDescp:
        "For those who want the painting to be the room. A bold, large-scale dreamscape.",
      planIncludes: [
        "Original large-format painting",
        "Size: approx. 90x90 cm to 120x100 cm",
        "Personally delivered to your home",
        "Signed, titled, and dated",
        "Art magnet + exclusive promo code for your next piece",
        "Personal voice note about the painting’s story",
      ],
    },
  ],

  partnerLogo: [
    {
      light: "/images/home/pricing/partner-1.svg",
      dark: "/images/home/pricing/partner-dark-1.svg",
    },
    {
      light: "/images/home/pricing/partner-2.svg",
      dark: "/images/home/pricing/partner-dark-2.svg",
    },
    {
      light: "/images/home/pricing/partner-3.svg",
      dark: "/images/home/pricing/partner-dark-3.svg",
    },
    {
      light: "/images/home/pricing/partner-4.svg",
      dark: "/images/home/pricing/partner-dark-4.svg",
    },
    {
      light: "/images/home/pricing/partner-5.svg",
      dark: "/images/home/pricing/partner-dark-5.svg",
    },
  ],
};

const faqData = {
  data: [
    {
      faq_que: "Why do you use acrylics?",
      faq_ans:
        "I love how immediate they are. They dry quickly, which lets me work fast and intuitively — perfect for how I paint.",
    },
    {
      faq_que: "Do you ever sell prints?",
      faq_ans:
        "Right now I focus on originals, but I’m working on making a small collection of prints available soon.",
    },
    {
      faq_que: "Can I see your paintings in person before buying?",
      faq_ans:
        "Sometimes! If you're in Stockholm or nearby, feel free to get in touch — I might have something available for a private viewing.",
    },
    {
      faq_que: "How long does it take to make a commissioned painting?",
      faq_ans:
        "It depends on the size and complexity, but usually between 2–4 weeks. I’ll give you a timeline before we begin.",
    },
    {
      faq_que: "How do I know which painting is right for my space?",
      faq_ans:
        "I’m happy to help! You can send me a photo of your wall or room, and I’ll give you a visual suggestion or mock-up to see how a painting might fit.",
    },
  ],
};
const contactData = {
  keypoint: ["Always-On Customer Support", "Service Across the Globe"],
  managerProfile: {
    image: "/images/avatar/avatar_1.jpg",
    name: "Courtney Henry",
    position: "Onboarding & Success Manager",
  },
};
const aboutusStats = [
  {
    number: 25,
    postfix: "+",
    title: "Private and corporate collectors",
    descp:
      "Building long-term value through original works placed in homes, studios, and curated interiors around the world.",
  },
  {
    number: 7,
    title: "Solo and group exhibitions",
    descp:
      "Featured in both emerging and established art spaces, connecting with diverse audiences through color and form.",
  },
  {
    number: 3,
    title: "Live painting performances",
    descp:
      "Engaging audiences in real time through expressive, spontaneous creation—bringing the artistic process to life.",
  },
];
const servicesSliderData = [
  "Did you know: I only started painting when I was 21",
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    statsFactData,
    servicesData,
    testimonialData,
    teamData,
    pricingData,
    faqData,
    contactData,
    aboutusStats,
    servicesSliderData,
  });
};
