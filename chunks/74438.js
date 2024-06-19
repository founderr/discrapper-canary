i.r(t), i.d(t, {
  default: function() {
    return x
  }
});
var n = i(735250),
  s = i(470079),
  a = i(399606),
  r = i(626135),
  l = i(894653),
  o = i(738130),
  c = i(132871),
  d = i(961106),
  u = i(62413),
  h = i(603406),
  m = i(165209),
  p = i(981631),
  _ = i(246125);

function x() {
  let e = (0, c.useApplicationDirectoryHistory)(e => e.guildId),
    t = (0, a.e7)([l.Z], () => l.Z.getCategories()),
    i = (0, c.getPreviousView)();
  return s.useEffect(() => {
    r.default.track(p.rMx.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: c.ApplicationDirectoryViews.HOME,
      previous_page: null == i ? void 0 : i.type,
      guild_id: e,
      referrer: document.referrer
    })
  }, [e, i]), (0, n.jsxs)(o.Z, {
    children: [(0, n.jsx)(h.Z, {}), null != t && t.length > 0 && (0, n.jsx)(d.Z, {
      className: _.categoryList
    }), (0, n.jsx)("main", {
      className: _.collectionsContainer,
      children: (0, n.jsx)(u.Z, {})
    }), (0, n.jsx)(m.Z, {})]
  })
}