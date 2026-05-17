import meta from "../../../pages/_meta.tsx";
export const pageMap = [{
  data: meta
}, {
  name: "api-ref",
  route: "/api-ref",
  children: [{
    name: "server-exports",
    route: "/api-ref/server-exports",
    frontMatter: {
      "sidebarTitle": "Server Exports"
    }
  }]
}, {
  name: "api-ref",
  route: "/api-ref",
  frontMatter: {
    "sidebarTitle": "API Ref"
  }
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "install",
  route: "/install",
  frontMatter: {
    "sidebarTitle": "Install"
  }
}, {
  name: "templist",
  route: "/templist",
  frontMatter: {
    "sidebarTitle": "Templist"
  }
}];