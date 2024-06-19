var i = n(735250),
  s = n(470079),
  l = n(481060),
  a = n(252618),
  r = n(900849),
  o = n(526383),
  c = n(602597),
  u = n(731455),
  d = n(689938),
  E = n(939502),
  h = n(661278);
t.Z = e => {
  let {
    loadId: t
  } = e, n = (0, o.Z)();
  return s.useEffect(() => {
    (0, r.Zt)({
      loadId: t,
      gamesYouPlayGuilds: [],
      allGuilds: [],
      categoryId: u.U
    })
  }, [t]), (0, a.Tt)({
    subsection: d.Z.Messages.HUB_SCHOOL_HUBS,
    location: d.Z.Messages.HUB_DIRECTORY_SEARCH_TITLE
  }), (0, i.jsx)(l.Scroller, {
    className: E.scroller,
    children: (0, i.jsxs)("div", {
      className: E.viewWrapper,
      children: [(0, i.jsxs)("div", {
        className: E.headerContainer,
        children: [(0, i.jsx)("img", {
          alt: "",
          className: E.headerImage,
          src: h
        }), (0, i.jsxs)("div", {
          className: E.headerContent,
          children: [(0, i.jsx)(l.Heading, {
            className: E.headerText,
            variant: "heading-xl/semibold",
            children: d.Z.Messages.HUB_DIRECTORY_SEARCH_TITLE
          }), (0, i.jsx)(l.Text, {
            className: E.headerDescription,
            variant: "text-md/normal",
            color: "none",
            children: d.Z.Messages.HUB_DIRECTORY_SEARCH_SUBTITLE
          })]
        })]
      }), (0, i.jsx)(c.Z, {
        guilds: n
      }), (0, i.jsx)("div", {
        className: E.divider
      }), (0, i.jsx)(l.Text, {
        className: E.footerDescription,
        variant: "text-md/medium",
        color: "header-secondary",
        children: d.Z.Messages.HUB_DISCOVERY_FOOTER_DESCRIPTION
      })]
    })
  })
}