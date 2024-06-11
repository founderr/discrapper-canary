"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
}), a("411104");
var l = a("735250");
a("470079");
var i = a("481060"),
  n = a("34674"),
  s = a("927356"),
  r = a("689938");

function c(e) {
  let t, a, {
    category: c,
    className: u,
    onViewAll: d
  } = e;
  return null == c || (0, n.isAllCategory)(c) ? (t = r.default.Messages.APP_DIRECTORY_EMPTY_SEARCH_HEADING, a = r.default.Messages.APP_DIRECTORY_EMPTY_SEARCH_SUBHEADING) : (t = r.default.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_HEADING.format({
    categoryName: c.name
  }), a = r.default.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_SUBHEADING.format({
    viewAllHook: (e, t) => (0, l.jsx)(i.Anchor, {
      onClick: d,
      children: e
    }, t)
  })), (0, l.jsx)(s.default, {
    className: u,
    heading: t,
    body: a
  })
}