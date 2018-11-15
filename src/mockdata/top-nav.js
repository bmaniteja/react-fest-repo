const topNavData = {
  headerData: [
    { linkName: "Models", linkRoute: "/content/audiusa/home" },
    {
      linkName: "Inventory",
      linkRoute: "#",
      isDropDown: true,
      subLinks: {
        heading: "Inventory",
        links: [{ linkName: "New Inventory", linkTo: "/content/audiusa/home/inventory-search.html" }, { linkName: "Pre Owned", linkTo: "/content/audiusa/home/inventory-search.html" }]
      }
    },
    {
      linkName: "Technology",
      linkRoute: "#",
      isDropDown: true,
      subLinks: {
        heading: "Technology",
        links: [
          { linkName: "Audi connect®" },
          { linkName: "e-tron®" },
          { linkName: "MMI®" },
          { linkName: "quattro®" },
          { linkName: "Explore All" }
        ]
      }
    },
    {
      linkName: "Shopping Tools",
      linkRoute: "#",
      isDropDown: true,
      subLinks: {
        heading: "Shopping Tools",
        links: [
          { linkName: "Explore" },
          { linkName: "Shop" },
          { linkName: "Buy" },
          { linkName: "Rent" }
        ]
      }
    },
    { linkName: "e-tron®", linkRoute: "#" },
    { linkName: "myAudi", linkRoute: "#" }
  ]
};
export default topNavData;