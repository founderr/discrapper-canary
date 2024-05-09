"use strict";
i.r(t), i.d(t, {
  default: function() {
    return C
  }
});
var n = i("735250"),
  a = i("470079"),
  l = i("399606"),
  s = i("626135"),
  r = i("894653"),
  o = i("738130"),
  c = i("132871"),
  d = i("961106"),
  u = i("62413"),
  h = i("603406"),
  p = i("165209"),
  f = i("981631"),
  m = i("691032");

function C() {
  let e = (0, c.useApplicationDirectoryHistory)(e => e.guildId),
    t = (0, l.useStateFromStores)([r.default], () => r.default.getCategories()),
    i = (0, c.getPreviousView)();
  return a.useEffect(() => {
    s.default.track(f.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: c.ApplicationDirectoryViews.HOME,
      previous_page: null == i ? void 0 : i.type,
      guild_id: e
    })
  }, [e, i]), (0, n.jsxs)(o.default, {
    children: [(0, n.jsx)(h.default, {}), null != t && t.length > 0 && (0, n.jsx)(d.default, {
      className: m.categoryList
    }), (0, n.jsx)("main", {
      className: m.collectionsContainer,
      children: (0, n.jsx)(u.default, {})
    }), (0, n.jsx)(p.default, {})]
  })
}