"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("210887"),
  r = n("687683"),
  o = n("689938"),
  u = n("843838"),
  d = n("138715"),
  c = n("979770");

function f(e) {
  let {
    section: t
  } = e, n = (0, s.useStateFromStores)([i.default], () => i.default.theme);
  return (0, a.jsxs)(l.EmptyState, {
    theme: n,
    className: u.emptyStateContainer,
    children: [(0, a.jsx)(l.EmptyStateImage, {
      width: 415,
      height: 200,
      lightSrc: c,
      darkSrc: d
    }), (0, a.jsx)(l.EmptyStateText, {
      note: t === r.MessageRequestSections.SPAM ? o.default.Messages.MESSAGE_REQUESTS_SPAM_EMPTY_STATE_BODY : o.default.Messages.MESSAGE_REQUESTS_EMPTY_STATE_BODY
    })]
  })
}