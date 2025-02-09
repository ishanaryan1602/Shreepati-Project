export const navBarContent = [
  { navItem: "Home", path: "/" },
  { navItem: "About Us", path: "/about" },
  {
    navItem: "Products",
    path: "/products",
    subItems: [
      {
        label: "Kingston",
        imgSrc: "/kingston_nav_img.jpg",
        path: "/kingston",
      },
      {
        label: "Transcend",
        imgSrc: "/transcend_nav_image.jpeg",
        path: "/transcend",
      },
      {
        label: "Oscoo",
        imgSrc: "/oscoo_nav_img.jpg",
        path: "/oscoo",
      },
      {
        label: "Server",
        imgSrc: "/server_nav_img.jpeg",
        path: "/server",
      },
    ],
  },
  {
    navItem: "Alliance",
    path: "/alliance",
  },
  { navItem: "E-Waste", path: "/e-waste" },
  { navItem: "Contact Us", path: "/contact" },
];
