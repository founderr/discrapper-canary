i.d(t, {
  Z: function() {
    return _
  }
}), i(47120);
var n = i(735250),
  s = i(470079),
  a = i(481060),
  r = i(626135),
  l = i(34674),
  o = i(190733),
  c = i(132871),
  d = i(147890),
  u = i(981631),
  h = i(689938),
  m = i(341164),
  p = i(943935);

function _() {
  let e = (0, c.useApplicationDirectoryHistory)(e => e.guildId),
    [t, i] = s.useState(""),
    _ = s.useCallback(() => {
      let i = (0, l.KQ)();
      r.default.track(u.rMx.APP_DIRECTORY_SEARCH_STARTED, {
        search_term: t,
        category: i.name,
        current_page: c.ApplicationDirectoryViews.HOME,
        category_id: i.id,
        guild_id: e
      }), (0, d.goSearch)({
        query: t
      })
    }, [e, t]);
  return (0, n.jsxs)("div", {
    className: m.container,
    children: [(0, n.jsxs)("div", {
      className: m.searchBarContainer,
      children: [(0, n.jsx)(a.Heading, {
        variant: "display-lg",
        className: m.heading,
        children: h.Z.Messages.APP_DIRECTORY_HERO_HEADING
      }), (0, n.jsx)(o.Z, {
        className: m.searchBar,
        query: t,
        onChange: i,
        onSubmit: _,
        canShowCta: !0
      })]
    }), (0, n.jsx)("img", {
      src: p,
      alt: "",
      className: m.rightImage
    })]
  })
}