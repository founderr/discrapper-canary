n.r(t), n.d(t, {
  default: function() {
return G;
  },
  useMessageMenu: function() {
return F;
  }
});
var i = n(735250);
n(470079);
var a = n(374470),
  s = n(481060),
  r = n(239091),
  l = n(911969),
  o = n(299206),
  c = n(26737),
  u = n(29264),
  d = n(905041),
  _ = n(89013),
  E = n(988500),
  I = n(570870),
  m = n(786095),
  T = n(667922),
  h = n(235624),
  N = n(941389),
  f = n(449751),
  C = n(749339),
  p = n(601184),
  g = n(6148),
  S = n(519110),
  A = n(759875),
  M = n(168405),
  R = n(536639),
  O = n(720904),
  x = n(88791),
  v = n(235047),
  Z = n(385302),
  L = n(873699),
  P = n(134323),
  D = n(429260),
  b = n(1626),
  j = n(279329),
  U = n(627938),
  y = n(512303),
  B = n(481300),
  k = n(689938);

function G(e) {
  var t, n;
  let i, s, l, o, {
  channel: c,
  message: u,
  target: d,
  mediaItem: _,
  shouldHideMediaOptions: E,
  onSelect: I,
  onHeightUpdate: m
} = e,
T = d,
h = d.getAttribute('data-type'),
N = d.getAttribute('data-id'),
f = d.getAttribute('data-name');
  if (null != _)
s = i = l = _.url;
  else
for (;
  (0, a.k)(T);)
  (0, a.k)(T, HTMLImageElement) && null != T.src && (s = T.src), (0, a.k)(T, HTMLAnchorElement) && null != T.href && (i = T.href, o = T.textContent, null == s && 'img' === T.getAttribute('data-role') && (s = i, T.hasAttribute('data-safe-src') && '' !== T.getAttribute('data-safe-src') && (l = T.getAttribute('data-safe-src')))), T = T.parentNode;
  return F({
message: u,
channel: c,
mediaItem: _,
textSelection: null !== (n = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : '',
favoriteableType: h,
favoriteableId: N,
favoriteableName: f,
itemHref: i,
itemSrc: s,
itemSafeSrc: l,
itemTextContent: o,
canReport: !0,
onHeightUpdate: m,
onSelect: I,
onClose: r.Zy,
navId: 'message',
ariaLabel: k.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
shouldHideMediaOptions: E
  });
}

function F(e) {
  let {
message: t,
channel: n,
mediaItem: a,
textSelection: r,
favoriteableType: G,
favoriteableId: F,
favoriteableName: w,
itemHref: V,
itemSrc: H,
itemSafeSrc: Y,
itemTextContent: W,
canReport: K,
onHeightUpdate: z,
onSelect: Q,
onClose: q,
navId: X,
ariaLabel: J,
shouldHideMediaOptions: $ = !1
  } = e, ee = (0, c.Z)(r), et = (0, _.Z)(r), en = (0, O.Z)(t, n), ei = (0, T.Z)(t, n), ea = (0, g.Z)(t, n), es = (0, R.Z)(t, n), er = (0, S.Z)({
type: G,
id: F,
name: w
  }), el = (0, b.Z)(t, n), eo = (0, M.Z)(t, n), ec = (0, x.Z)(t), eu = (0, N.Z)(t, n), ed = (0, f.Z)(t, n), e_ = (0, Z.Z)(t, n), eE = (0, L.Z)(t, n), eI = (0, p.Z)(t, n), em = (0, D.Z)(t), eT = (0, j.Z)(t, n), eh = (0, d.Z)(null != V ? V : H, W, t, {
shouldHideMediaOptions: $
  }), eN = (0, u.Z)(Y, t, {
shouldHideMediaOptions: $
  }), ef = (0, B.Z)(t, a), eC = (0, o.Z)({
id: t.id,
label: k.Z.Messages.COPY_ID_MESSAGE,
shiftId: ''.concat(t.channel_id, '-').concat(t.id)
  }), ep = (0, P.Z)(t, n), eg = (0, A.Z)(t, n), eS = (0, U.Z)(t, n), eA = (0, m.Z)(r, n.getGuildId()), eM = (0, v.Z)(t), eR = (0, h.Z)(t), eO = (0, C.Z)(t), ex = (0, I.Z)({
commandType: l.yU.MESSAGE,
commandTargetId: t.id,
channel: n,
guildId: void 0,
onHeightUpdate: z
  }), ev = (0, y.Z)(t), eZ = (0, E.Z)(t);
  return (0, i.jsxs)(s.Menu, {
navId: X,
onClose: q,
'aria-label': J,
onSelect: Q,
children: [
  (0, i.jsx)(s.MenuGroup, {
    children: ee
  }),
  (0, i.jsx)(s.MenuGroup, {
    children: et
  }),
  (0, i.jsxs)(s.MenuGroup, {
    children: [
      '' === r ? en : null,
      ei,
      ec,
      ea,
      es,
      er,
      ep,
      eg,
      eS,
      eO,
      ex,
      el,
      eo,
      eR,
      eM,
      eu,
      ed,
      eT,
      eZ,
      eE,
      e_,
      ev,
      eI,
      K && em
    ]
  }),
  null != eA && (0, i.jsx)(s.MenuGroup, {
    children: eA
  }),
  (0, i.jsxs)(s.MenuGroup, {
    children: [
      eN,
      ef
    ]
  }),
  (0, i.jsx)(s.MenuGroup, {
    children: eh
  }),
  (0, i.jsx)(s.MenuGroup, {
    children: eC
  })
]
  });
}