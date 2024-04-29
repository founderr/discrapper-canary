"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("252618"),
  r = a("900849"),
  o = a("526383"),
  u = a("602597"),
  d = a("731455"),
  c = a("689938"),
  f = a("481963"),
  E = a("661278");
t.default = e => {
  let {
    loadId: t
  } = e, a = (0, o.default)();
  return s.useEffect(() => {
    (0, r.trackDiscoveryViewed)({
      loadId: t,
      gamesYouPlayGuilds: [],
      allGuilds: [],
      categoryId: d.DISCORD_HUB_ID
    })
  }, [t]), (0, i.usePageTitle)({
    subsection: c.default.Messages.HUB_SCHOOL_HUBS,
    location: c.default.Messages.HUB_DIRECTORY_SEARCH_TITLE
  }), (0, n.jsx)(l.Scroller, {
    className: f.scroller,
    children: (0, n.jsxs)("div", {
      className: f.viewWrapper,
      children: [(0, n.jsxs)("div", {
        className: f.headerContainer,
        children: [(0, n.jsx)("img", {
          alt: "",
          className: f.headerImage,
          src: E
        }), (0, n.jsxs)("div", {
          className: f.headerContent,
          children: [(0, n.jsx)(l.Heading, {
            className: f.headerText,
            variant: "heading-xl/semibold",
            children: c.default.Messages.HUB_DIRECTORY_SEARCH_TITLE
          }), (0, n.jsx)(l.Text, {
            className: f.headerDescription,
            variant: "text-md/normal",
            color: "none",
            children: c.default.Messages.HUB_DIRECTORY_SEARCH_SUBTITLE
          })]
        })]
      }), (0, n.jsx)(u.default, {
        guilds: a
      }), (0, n.jsx)("div", {
        className: f.divider
      }), (0, n.jsx)(l.Text, {
        className: f.footerDescription,
        variant: "text-md/medium",
        color: "header-secondary",
        children: c.default.Messages.HUB_DISCOVERY_FOOTER_DESCRIPTION
      })]
    })
  })
}