i.r(n);
var t = i(735250);
i(470079);
var l = i(481060),
  s = i(239091),
  o = i(883385),
  a = i(108843),
  u = i(947440),
  d = i(100527),
  r = i(299206),
  c = i(976192),
  Z = i(276022),
  M = i(777658),
  E = i(858488),
  f = i(185457),
  _ = i(933409),
  A = i(389052),
  I = i(24311),
  N = i(710631),
  g = i(297047),
  v = i(88966),
  b = i(712301),
  m = i(991307),
  p = i(725119),
  x = i(931617),
  O = i(700994),
  C = i(332031),
  D = i(981631),
  T = i(689938);
n.default = (0, a.Z)((0, o.Z)(function(e) {
  let {
user: n,
guildId: i,
showModalItems: o = !0,
showMediaItems: a = !1,
showChatItems: d = !0,
context: U,
onSelect: L
  } = e, h = {
page: D.ZY5.GUILD_CHANNEL,
section: D.jXE.CHAT_USERNAME,
object: D.qAy.CONTEXT_MENU_ITEM
  }, S = (0, p.Z)(n.id, i), R = (0, g.Z)(n, i, U), j = (0, v.Z)(n.id, U), P = (0, C.Z)(n.id), k = (0, I.Z)({
user: n,
context: U
  }), G = (0, f.Z)({
user: n,
guildId: i,
context: U
  }), V = (0, E.Z)({
user: n
  }), y = (0, O.Z)(n.id), F = (0, m.Z)(n.id), B = (0, c.Z)({
guildId: i,
userId: n.id,
analyticsLocation: h,
context: U
  }), w = (0, Z.Z)({
user: n,
guildId: i
  }), Y = (0, N.Z)({
user: n,
guildId: i
  }), z = (0, u.Z)(null, n), H = (0, M.Z)(n), W = (0, A.Z)({
user: n
  }), q = (0, _.Z)(n, i), X = (0, x.Z)(n.id, i), K = (0, b.Z)(n, i), J = (0, r.Z)({
id: n.id,
label: T.Z.Messages.COPY_ID_USER
  }), Q = n.isNonUserBot();
  return (0, t.jsxs)(l.Menu, {
navId: 'user-context',
onClose: s.Zy,
'aria-label': T.Z.Messages.USER_ACTIONS_MENU_LABEL,
onSelect: L,
children: [
  !Q && (0, t.jsxs)(t.Fragment, {
    children: [
      (0, t.jsxs)(l.MenuGroup, {
        children: [
          o && S,
          d && R,
          j,
          k,
          o && G,
          o && V,
          P
        ]
      }),
      a && (0, t.jsx)(l.MenuGroup, {
        children: y
      }),
      (0, t.jsx)(l.MenuGroup, {
        children: o && z
      }),
      (0, t.jsxs)(l.MenuGroup, {
        children: [
          a && F,
          o && B,
          o && Y,
          H,
          w,
          o && W
        ]
      }),
      (0, t.jsx)(l.MenuGroup, {
        children: q
      }),
      (0, t.jsxs)(l.MenuGroup, {
        children: [
          X,
          K
        ]
      })
    ]
  }),
  (0, t.jsx)(l.MenuGroup, {
    children: J
  })
]
  });
}, {
  object: D.qAy.CONTEXT_MENU
}), [
  d.Z.CONTEXT_MENU,
  d.Z.GUILD_USER_MENU
]);