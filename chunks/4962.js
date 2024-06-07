"use strict";
s.r(t), s("411104");
var n, a, r = s("735250");
s("470079");
var l = s("120356"),
  i = s.n(l),
  u = s("442837"),
  o = s("481060"),
  d = s("700582"),
  c = s("451478"),
  I = s("689938"),
  T = s("948107");
(a = n || (n = {}))[a.STAFF_NOTES = 1] = "STAFF_NOTES";
let E = u.default.connectStores([c.default], () => ({
    animate: c.default.isFocused()
  }))(e => {
    let {
      user: t,
      className: s,
      animate: n
    } = e;
    return (0, r.jsxs)("div", {
      className: i()(T.staffReviewHeader, s),
      children: [(0, r.jsx)(d.default, {
        size: o.AvatarSizes.SIZE_32,
        user: t,
        animate: n
      }), (0, r.jsxs)("div", {
        className: T.headerText,
        children: [(0, r.jsx)("div", {
          className: T.label,
          children: I.default.Messages.APPLICATION_STORE_STAFF_PICK
        }), (0, r.jsx)("div", {
          className: T.username,
          children: t.username
        })]
      })]
    })
  }),
  f = e => {
    let {
      data: t,
      className: s
    } = e;
    if (1 === t.type) {
      if (null == t.staffNotes) return null;
      let {
        user: e,
        content: n
      } = t.staffNotes;
      return null == e ? null : (0, r.jsxs)("div", {
        className: s,
        children: [(0, r.jsx)(E, {
          user: e,
          className: T.header
        }), (0, r.jsx)("div", {
          className: T.notes,
          children: n
        })]
      })
    }
    throw Error("Unknown type")
  };
f.Types = n, t.default = f