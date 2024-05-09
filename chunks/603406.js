"use strict";
i.r(t), i.d(t, {
  default: function() {
    return m
  }
}), i("47120");
var n = i("735250"),
  a = i("470079"),
  l = i("481060"),
  s = i("626135"),
  r = i("34674"),
  o = i("190733"),
  c = i("132871"),
  d = i("147890"),
  u = i("981631"),
  h = i("689938"),
  p = i("837159"),
  f = i("943935");

function m() {
  let e = (0, c.useApplicationDirectoryHistory)(e => e.guildId),
    [t, i] = a.useState(""),
    m = a.useCallback(() => {
      let i = (0, r.getAllCategory)();
      s.default.track(u.AnalyticEvents.APP_DIRECTORY_SEARCH_STARTED, {
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
    className: p.container,
    children: [(0, n.jsxs)("div", {
      className: p.searchBarContainer,
      children: [(0, n.jsx)(l.Heading, {
        variant: "display-lg",
        className: p.heading,
        children: h.default.Messages.APP_DIRECTORY_HERO_HEADING
      }), (0, n.jsx)(o.default, {
        className: p.searchBar,
        query: t,
        onChange: i,
        onSubmit: m,
        canShowCta: !0
      })]
    }), (0, n.jsx)("img", {
      src: f,
      alt: "",
      className: p.rightImage
    })]
  })
}