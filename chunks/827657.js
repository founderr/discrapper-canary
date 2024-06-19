t.d(l, {
  Z: function() {
    return E
  }
});
var n = t(735250),
  s = t(470079),
  a = t(120356),
  o = t.n(a),
  i = t(481060),
  r = t(693580),
  C = t(472596),
  c = t(918192),
  d = t(689938),
  u = t(851156);

function E(e) {
  let {
    searchState: l
  } = e, t = s.useMemo(() => ({
    [C.po.LOADING]: null,
    [C.po.SUCCESS_STILL_INDEXING]: {
      icon: (0, n.jsx)(r.Z, {}),
      message: d.Z.Messages.SEARCH_GUILD_STILL_INDEXING
    },
    [C.po.SUCCESS_EMPTY]: {
      icon: (0, n.jsx)(c.Z, {}),
      message: d.Z.Messages.MEMBER_SAFETY_TABLE_NO_RESULTS
    },
    [C.po.SUCCESS_FULL]: null
  }), [])[l];
  return null == t ? null : (0, n.jsxs)("div", {
    className: o()(u.noResultsContainer),
    children: [(0, n.jsx)("div", {
      className: o()(u.__invalid_noResultsIconContainer),
      children: t.icon
    }), (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: t.message
    })]
  })
}