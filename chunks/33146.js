"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
}), a("411104");
var l = a("735250");
a("470079");
var n = a("481060"),
  s = a("34674"),
  i = a("927356"),
  r = a("689938");

function c(e) {
  let t, a, {
    category: c,
    className: u,
    onViewAll: o
  } = e;
  return null == c || (0, s.isAllCategory)(c) ? (t = r.default.Messages.APP_DIRECTORY_EMPTY_SEARCH_HEADING, a = r.default.Messages.APP_DIRECTORY_EMPTY_SEARCH_SUBHEADING) : (t = r.default.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_HEADING.format({
    categoryName: c.name
  }), a = r.default.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_SUBHEADING.format({
    viewAllHook: (e, t) => (0, l.jsx)(n.Anchor, {
      onClick: o,
      children: e
    }, t)
  })), (0, l.jsx)(i.default, {
    className: u,
    heading: t,
    body: a
  })
}