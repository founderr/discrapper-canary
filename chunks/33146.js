n.d(a, {
  Z: function() {
    return c
  }
}), n(411104);
var t = n(735250);
n(470079);
var i = n(481060),
  l = n(34674),
  s = n(927356),
  r = n(689938);

function c(e) {
  let a, n, {
    category: c,
    className: o,
    onViewAll: d
  } = e;
  return null == c || (0, l.m0)(c) ? (a = r.Z.Messages.APP_DIRECTORY_EMPTY_SEARCH_HEADING, n = r.Z.Messages.APP_DIRECTORY_EMPTY_SEARCH_SUBHEADING) : (a = r.Z.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_HEADING.format({
    categoryName: c.name
  }), n = r.Z.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_SUBHEADING.format({
    viewAllHook: (e, a) => (0, t.jsx)(i.Anchor, {
      onClick: d,
      children: e
    }, a)
  })), (0, t.jsx)(s.Z, {
    className: o,
    heading: a,
    body: n
  })
}