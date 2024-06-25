"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(250050);
t.Z = function(e) {
  let {
    className: t,
    compact: n = !1,
    contentOnly: r = !1,
    zalgo: l = !0,
    disableInteraction: u = !1,
    childrenRepliedMessage: _,
    childrenExecutedCommand: c,
    childrenHeader: d,
    childrenSystemMessage: E,
    childrenButtons: I,
    childrenMessageContent: T,
    childrenAccessories: h,
    messageRef: f,
    focusProps: S = {
      offset: {
        left: 4,
        right: 4
      }
    },
    hasThread: A,
    isSystemMessage: N,
    hasReply: m,
    ...O
  } = e, p = (0, i.jsx)(o.FocusRing, {
    ...S,
    children: (0, i.jsxs)("div", {
      className: s()(t, {
        [a.wrapper]: !0,
        [a.contentOnly]: r,
        [a.compact]: n,
        [a.cozy]: !n,
        [a.zalgo]: l,
        [a.hasThread]: A,
        [a.isSystemMessage]: N,
        [a.hasReply]: m
      }),
      ref: f,
      ...O,
      role: "article",
      children: [_, c, (0, i.jsxs)("div", {
        className: a.contents,
        children: [E, d, null == E && T]
      }), h, null != I ? (0, i.jsx)("div", {
        className: a.buttonContainer,
        children: I
      }) : null]
    })
  });
  return u ? (0, i.jsx)(o.FocusBlock, {
    children: p
  }) : p
}