a.d(n, {
  Z: function() {
    return c
  }
}), a(411104);
var t = a(735250);
a(470079);
var i = a(481060),
  l = a(34674),
  s = a(927356),
  r = a(689938);

function c(e) {
  let n, a, {
    category: c,
    className: o,
    onViewAll: d
  } = e;
  return null == c || (0, l.m0)(c) ? (n = r.Z.Messages.APP_DIRECTORY_EMPTY_SEARCH_HEADING, a = r.Z.Messages.APP_DIRECTORY_EMPTY_SEARCH_SUBHEADING) : (n = r.Z.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_HEADING.format({
    categoryName: c.name
  }), a = r.Z.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_SUBHEADING.format({
    viewAllHook: (e, n) => (0, t.jsx)(i.Anchor, {
      onClick: d,
      children: e
    }, n)
  })), (0, t.jsx)(s.Z, {
    className: o,
    heading: n,
    body: a
  })
}