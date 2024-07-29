import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-1.jpeg";
import tour3 from "./images/tour-1.jpeg";
import tour4 from "./images/tour-1.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", name: "home" },
  { id: 2, href: "#about", name: "about" },
  { id: 3, href: "#services", name: "services" },
  { id: 4, href: "#tours", name: "tours" },
];
export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];
export const servicesData = [
  {
    id: 1,
    servicetitle: "saving money",
    serviceicon: "fas fa-wallet fa-fw",
    servicetext:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    servicetitle: "endless hiking",
    serviceicon: "fas fa-tree fa-fw",
    servicetext:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    servicetitle: "amazing comfort",
    serviceicon: "fas fa-socks fa-fw",
    servicetext:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];
export const tourdata = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quidem, adipisci sint deserunt nobis ut sequi unde quasi officia dolores?",
    country: "China",
    duration: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quidem, adipisci sint deserunt nobis ut sequi unde quasi officia dolores?",
    country: "indonesia",
    duration: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong<",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quidem, adipisci sint deserunt nobis ut sequi unde quasi officia dolores?",
    country: "hong kong",
    duration: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quidem, adipisci sint deserunt nobis ut sequi unde quasi officia dolores?",
    country: "kenya",
    duration: "20 days",
    price: "from $3300",
  },
];
