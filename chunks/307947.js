n.d(t, {
  Z: function() {
    return E
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(210887),
  r = n(687683),
  o = n(689938),
  c = n(630194),
  u = n(138715),
  d = n(979770);

function E(e) {
  let {
    section: t
  } = e, n = (0, i.e7)([a.Z], () => a.Z.theme);
  return (0, s.jsxs)(l.EmptyState, {
    theme: n,
    className: c.emptyStateContainer,
    children: [(0, s.jsx)(l.EmptyStateImage, {
      width: 415,
      height: 200,
      lightSrc: d,
      darkSrc: u
    }), (0, s.jsx)(l.EmptyStateText, {
      note: t === r.pS.SPAM ? o.Z.Messages.MESSAGE_REQUESTS_SPAM_EMPTY_STATE_BODY : o.Z.Messages.MESSAGE_REQUESTS_EMPTY_STATE_BODY
    })]
  })
}