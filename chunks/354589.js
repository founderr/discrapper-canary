t.r(n);
var i = t(735250);
t(470079);
var r = t(481060),
  a = t(239091),
  s = t(883385),
  o = t(108843),
  l = t(911969),
  u = t(947440),
  d = t(100527),
  c = t(441061),
  E = t(167675),
  _ = t(737013),
  I = t(145474),
  T = t(299206),
  N = t(819403),
  S = t(777658),
  p = t(858488),
  f = t(185457),
  A = t(570870),
  O = t(389052),
  h = t(24311),
  M = t(915193),
  Z = t(332576),
  m = t(710631),
  R = t(297047),
  g = t(88966),
  C = t(397616),
  v = t(558924),
  G = t(991307),
  y = t(725119),
  P = t(700994),
  D = t(332031),
  U = t(981631),
  b = t(689938);
n.default = (0, o.Z)((0, s.Z)(function(e) {
  var n;
  let {
user: t,
channel: s,
context: o,
showChatItems: d = !0,
showMediaItems: U = !1,
showChannelCallItems: x = !1,
showModalItems: H = !0,
onSelect: L,
onHeightUpdate: j
  } = e, w = (0, y.Z)(t.id, null), F = (0, R.Z)(t, null, o), k = (0, v.Z)(t.id, s.id), B = (0, g.Z)(t.id, o), V = (0, h.Z)({
user: t,
context: o
  }), W = (0, f.Z)({
user: t,
context: o
  }), K = (0, p.Z)({
user: t
  }), Y = (0, P.Z)(t.id), q = (0, C.Z)(t.id, s.id), z = (0, G.Z)(t.id), Q = (0, I.P)({
userId: t.id,
channelId: s.id,
location: 'GroupDMUserContextMenu'
  }), $ = (0, Z.Z)(t.id, s.id), J = (0, m.Z)({
user: t
  }), X = (0, u.Z)(null, t), ee = (0, S.Z)(t), en = (0, O.Z)({
user: t
  }), et = (0, T.Z)({
id: t.id,
label: b.Z.Messages.COPY_ID_USER
  }), ei = (0, D.Z)(t.id), er = (0, E.Z)(t.id), ea = (0, c.Z)(s.id), es = (0, N.Z)(t), eo = (0, _.Z)(t.id), el = (0, A.Z)({
commandType: l.yU.USER,
commandTargetId: t.id,
channel: s,
guildId: void 0,
onHeightUpdate: j
  }), eu = (0, M.Z)(t, s), ed = t.isNonUserBot(), ec = s.isManaged(), eE = null === (n = s.recipients) || void 0 === n ? void 0 : n.includes(t.id);
  return (0, i.jsxs)(r.Menu, {
navId: 'user-context',
onClose: a.Zy,
'aria-label': b.Z.Messages.USER_ACTIONS_MENU_LABEL,
onSelect: L,
children: [
  !ed && (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(r.MenuGroup, {
        children: es
      }),
      (0, i.jsxs)(r.MenuGroup, {
        children: [
          H && w,
          d && F,
          B,
          V,
          !ec && k,
          H && W,
          H && K,
          ei
        ]
      }),
      U && (0, i.jsx)(r.MenuGroup, {
        children: Y
      }),
      eE && (0, i.jsxs)(r.MenuGroup, {
        children: [
          !ec && q,
          eu
        ]
      }),
      (0, i.jsx)(r.MenuGroup, {
        children: H && X
      }),
      (0, i.jsxs)(r.MenuGroup, {
        children: [
          U && z,
          U && Q,
          U && $,
          el,
          H && J,
          ee,
          H && en,
          U && eo
        ]
      }),
      x && (0, i.jsxs)(r.MenuGroup, {
        children: [
          ea,
          er
        ]
      })
    ]
  }),
  (0, i.jsx)(r.MenuGroup, {
    children: et
  })
]
  });
}, {
  object: U.qAy.CONTEXT_MENU
}), [
  d.Z.CONTEXT_MENU,
  d.Z.GROUP_DM_USER_MENU
]);