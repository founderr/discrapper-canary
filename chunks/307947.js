"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("735250");
a("470079");
var s = a("442837"),
  l = a("210887"),
  i = a("186095"),
  r = a("687683"),
  o = a("689938"),
  u = a("843838"),
  d = a("138715"),
  c = a("979770");

function f(e) {
  let {
    section: t
  } = e, a = (0, s.useStateFromStores)([l.default], () => l.default.theme);
  return (0, n.jsxs)(i.default, {
    theme: a,
    className: u.emptyStateContainer,
    children: [(0, n.jsx)(i.default.Image, {
      width: 415,
      height: 200,
      lightSrc: c,
      darkSrc: d
    }), (0, n.jsx)(i.default.Text, {
      note: t === r.MessageRequestSections.SPAM ? o.default.Messages.MESSAGE_REQUESTS_SPAM_EMPTY_STATE_BODY : o.default.Messages.MESSAGE_REQUESTS_EMPTY_STATE_BODY
    })]
  })
}