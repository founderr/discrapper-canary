i.r(n);
var u = i(735250);
i(470079);
var l = i(481060),
  r = i(239091),
  t = i(883385),
  s = i(108843),
  d = i(947440),
  a = i(100527),
  Z = i(299206),
  o = i(819403),
  E = i(777658),
  _ = i(858488),
  c = i(185457),
  S = i(389052),
  M = i(24311),
  T = i(710631),
  f = i(88966),
  A = i(991307),
  N = i(725119),
  U = i(700994),
  p = i(332031),
  C = i(981631),
  g = i(689938);
n.default = (0, s.Z)((0, t.Z)(function(e) {
  let {
    user: n,
    showMediaItems: i = !1,
    mediaEngineContext: t,
    onSelect: s
  } = e, a = (0, N.Z)(n.id), C = (0, f.Z)(n.id), h = (0, M.Z)(n), v = (0, c.Z)({
    user: n
  }), I = (0, _.Z)({
    user: n
  }), x = (0, p.Z)(n.id), P = (0, U.Z)(n.id), G = (0, A.Z)(n.id, t), O = (0, T.Z)({
    user: n
  }), R = (0, d.Z)(null, n), j = (0, E.Z)(n), b = (0, S.Z)({
    user: n
  }), k = (0, Z.Z)({
    id: n.id,
    label: g.Z.Messages.COPY_ID_USER
  }), L = (0, o.Z)(n), m = n.isNonUserBot();
  return (0, u.jsxs)(l.Menu, {
    navId: "user-context",
    onClose: r.Zy,
    "aria-label": g.Z.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [!m && (0, u.jsxs)(u.Fragment, {
      children: [(0, u.jsx)(l.MenuGroup, {
        children: L
      }), (0, u.jsxs)(l.MenuGroup, {
        children: [a, C, h, v, I, x]
      }), i && (0, u.jsx)(l.MenuGroup, {
        children: P
      }), (0, u.jsx)(l.MenuGroup, {
        children: R
      }), (0, u.jsxs)(l.MenuGroup, {
        children: [i && G, O, j, b]
      })]
    }), (0, u.jsx)(l.MenuGroup, {
      children: k
    })]
  })
}, {
  object: C.qAy.CONTEXT_MENU
}), [a.Z.CONTEXT_MENU, a.Z.USER_GENERIC_MENU])