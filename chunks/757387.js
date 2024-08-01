n.r(t);
var i = n(735250);
n(470079);
var r = n(442837),
  o = n(481060),
  a = n(239091),
  E = n(883385),
  d = n(108843),
  _ = n(911969),
  u = n(947440),
  s = n(100527),
  I = n(441061),
  c = n(167675),
  T = n(737013),
  l = n(145474),
  N = n(299206),
  S = n(976192),
  A = n(819403),
  p = n(286694),
  O = n(592125),
  Z = n(777658),
  M = n(858488),
  h = n(185457),
  f = n(933409),
  G = n(570870),
  R = n(389052),
  C = n(24311),
  y = n(332576),
  D = n(710631),
  g = n(297047),
  U = n(88966),
  m = n(712301),
  b = n(991307),
  L = n(725119),
  H = n(931617),
  P = n(700994),
  v = n(332031),
  F = n(981631),
  x = n(689938);
t.default = (0, d.Z)((0, E.Z)(function(e) {
  let {
user: t,
guildId: n,
channel: E,
showMediaItems: d = !1,
showChatItems: s = !0,
showChannelCallItems: B = !1,
showModalItems: V = !0,
showStageChannelItems: W = !1,
context: k,
onSelect: K,
onHeightUpdate: j,
viewingChannelId: w
  } = e, Y = {
page: F.ZY5.GUILD_CHANNEL,
section: F.jXE.CHAT_USERNAME,
object: F.qAy.CONTEXT_MENU_ITEM
  }, q = (0, L.Z)({
userId: t.id,
guildId: n,
channelId: E.id
  }), z = (0, g.Z)(t, n, k), X = (0, U.Z)(t.id, k), Q = (0, v.Z)(t.id), J = (0, C.Z)({
user: t,
context: k
  }), $ = (0, h.Z)({
user: t,
guildId: n,
context: k
  }), ee = (0, M.Z)({
user: t
  }), et = (0, P.Z)(t.id), en = (0, b.Z)(t.id), ei = (0, l.P)({
userId: t.id,
channelId: E.id,
location: 'GuildChannelUserContextMenu'
  }), er = (0, S.Z)({
guildId: n,
userId: t.id,
analyticsLocation: Y,
context: k
  }), eo = (0, D.Z)({
user: t,
guildId: n
  }), ea = (0, u.Z)(null, t), eE = (0, Z.Z)(t), ed = (0, R.Z)({
user: t
  }), e_ = (0, f.Z)(t, n, E.id), eu = (0, H.Z)(t.id, n), es = (0, m.Z)(t, n), eI = (0, N.Z)({
id: t.id,
label: x.Z.Messages.COPY_ID_USER
  }), ec = (0, y.Z)(t.id, E.id), eT = (0, c.Z)(t.id), el = (0, I.Z)(E.id), eN = (0, A.Z)(t), eS = (0, p.Z)(t, n, E.id), eA = (0, r.e7)([O.Z], () => null != w ? O.Z.getChannel(w) : null), ep = (0, G.Z)({
commandType: _.yU.USER,
commandTargetId: t.id,
channel: null != eA ? eA : E,
guildId: n,
onHeightUpdate: j,
context: k
  }), eO = (0, T.Z)(t.id), eZ = t.isNonUserBot();
  return (0, i.jsxs)(o.Menu, {
navId: 'user-context',
onClose: a.Zy,
'aria-label': x.Z.Messages.USER_ACTIONS_MENU_LABEL,
onSelect: K,
children: [
  !eZ && (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsxs)(o.MenuGroup, {
        children: [
          eN,
          W && eS
        ]
      }),
      (0, i.jsxs)(o.MenuGroup, {
        children: [
          V && q,
          s && z,
          X,
          J,
          V && $,
          V && ee,
          Q
        ]
      }),
      d && (0, i.jsx)(o.MenuGroup, {
        children: et
      }),
      (0, i.jsx)(o.MenuGroup, {
        children: V && ea
      }),
      (0, i.jsxs)(o.MenuGroup, {
        children: [
          d && en,
          d && ei,
          d && ec,
          V && er,
          ep,
          V && eo,
          eE,
          V && ed,
          B && eO
        ]
      }),
      (0, i.jsx)(o.MenuGroup, {
        children: e_
      }),
      (0, i.jsxs)(o.MenuGroup, {
        children: [
          eu,
          es
        ]
      }),
      B && (0, i.jsxs)(o.MenuGroup, {
        children: [
          el,
          eT
        ]
      })
    ]
  }),
  (0, i.jsx)(o.MenuGroup, {
    children: eI
  })
]
  });
}, {
  object: F.qAy.CONTEXT_MENU
}), [
  s.Z.CONTEXT_MENU,
  s.Z.GUILD_CHANNEL_USER_MENU
]);