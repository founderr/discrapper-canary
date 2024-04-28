"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("115849"),
  r = a("645792"),
  o = a("787642"),
  u = a("437314"),
  d = a("981631"),
  c = a("689938"),
  f = a("910040");

function E() {
  return (0, n.jsxs)("header", {
    className: f.header,
    children: [(0, n.jsx)(l.FormTitle, {
      tag: "h2",
      className: f.title,
      children: c.default.Messages.ADD_FRIEND
    }), (0, n.jsx)(i.default, {})]
  })
}
t.default = function() {
  return (0, n.jsxs)(s.Fragment, {
    children: [(0, n.jsx)(E, {}), (0, r.backToSchoolEnabled)() && (0, n.jsx)(o.default, {}), (0, n.jsx)("div", {
      className: f.emptyState,
      children: (0, n.jsx)(u.default, {
        type: d.FriendsSections.ADD_FRIEND
      })
    })]
  })
}