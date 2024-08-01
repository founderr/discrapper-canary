n.r(t);
var i = n(735250);
n(470079);
var r = n(481060),
  a = n(239091),
  s = n(883385),
  o = n(108843),
  d = n(911969),
  I = n(947440),
  c = n(100527),
  l = n(441061),
  E = n(167675),
  u = n(737013),
  T = n(145474),
  _ = n(299206),
  N = n(819403),
  S = n(777658),
  p = n(858488),
  O = n(185457),
  Z = n(570870),
  h = n(389052),
  A = n(24311),
  f = n(915193),
  M = n(332576),
  m = n(710631),
  G = n(297047),
  R = n(88966),
  g = n(397616),
  C = n(558924),
  v = n(991307),
  y = n(725119),
  x = n(700994),
  D = n(332031),
  P = n(981631),
  U = n(689938);
t.default = (0, o.Z)((0, s.Z)(function(e) {
  var t;
  let {
user: n,
channel: s,
context: o,
showChatItems: c = !0,
showMediaItems: P = !1,
showChannelCallItems: b = !1,
showModalItems: H = !0,
onSelect: j,
onHeightUpdate: F
  } = e, L = (0, y.Z)({
userId: n.id,
guildId: null
  }), W = (0, G.Z)(n, null, o), B = (0, C.Z)(n.id, s.id), k = (0, R.Z)(n.id, o), w = (0, A.Z)({
user: n,
context: o
  }), V = (0, O.Z)({
user: n,
context: o
  }), K = (0, p.Z)({
user: n
  }), z = (0, x.Z)(n.id), Y = (0, g.Z)(n.id, s.id), q = (0, v.Z)(n.id), X = (0, T.P)({
userId: n.id,
channelId: s.id,
location: 'GroupDMUserContextMenu'
  }), J = (0, M.Z)(n.id, s.id), Q = (0, m.Z)({
user: n
  }), $ = (0, I.Z)(null, n), ee = (0, S.Z)(n), et = (0, h.Z)({
user: n
  }), en = (0, _.Z)({
id: n.id,
label: U.Z.Messages.COPY_ID_USER
  }), ei = (0, D.Z)(n.id), er = (0, E.Z)(n.id), ea = (0, l.Z)(s.id), es = (0, N.Z)(n), eo = (0, u.Z)(n.id), ed = (0, Z.Z)({
commandType: d.yU.USER,
commandTargetId: n.id,
channel: s,
guildId: void 0,
onHeightUpdate: F
  }), eI = (0, f.Z)(n, s), ec = n.isNonUserBot(), el = s.isManaged(), eE = null === (t = s.recipients) || void 0 === t ? void 0 : t.includes(n.id);
  return (0, i.jsxs)(r.Menu, {
navId: 'user-context',
onClose: a.Zy,
'aria-label': U.Z.Messages.USER_ACTIONS_MENU_LABEL,
onSelect: j,
children: [
  !ec && (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(r.MenuGroup, {
        children: es
      }),
      (0, i.jsxs)(r.MenuGroup, {
        children: [
          H && L,
          c && W,
          k,
          w,
          !el && B,
          H && V,
          H && K,
          ei
        ]
      }),
      P && (0, i.jsx)(r.MenuGroup, {
        children: z
      }),
      eE && (0, i.jsxs)(r.MenuGroup, {
        children: [
          !el && Y,
          eI
        ]
      }),
      (0, i.jsx)(r.MenuGroup, {
        children: H && $
      }),
      (0, i.jsxs)(r.MenuGroup, {
        children: [
          P && q,
          P && X,
          P && J,
          ed,
          H && Q,
          ee,
          H && et,
          P && eo
        ]
      }),
      b && (0, i.jsxs)(r.MenuGroup, {
        children: [
          ea,
          er
        ]
      })
    ]
  }),
  (0, i.jsx)(r.MenuGroup, {
    children: en
  })
]
  });
}, {
  object: P.qAy.CONTEXT_MENU
}), [
  c.Z.CONTEXT_MENU,
  c.Z.GROUP_DM_USER_MENU
]);