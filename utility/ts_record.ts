interface PageInfo {
  title: string;
  path: string;
  isPublic: boolean;
}

type PageName = "home" | "about" | "contact";

const siteMap: Record<PageName, PageInfo> = {
  home: { title: "홈", path: "/", isPublic: true },
  about: { title: "소개", path: "/about", isPublic: true },
  contact: { title: "문의", path: "/contact", isPublic: false },
};
