r.r(n), r.d(n, {
  default: function() {
return f;
  }
});
var l = r(735250);
r(470079);
var d = r(374470),
  t = r(481060),
  u = r(239091),
  i = r(911969),
  s = r(299206),
  c = r(26737),
  o = r(905041),
  a = r(89013),
  h = r(570870),
  p = r(449751),
  M = r(601184),
  Z = r(168405),
  E = r(134323),
  S = r(689938);

function f(e) {
  var n;
  let r, f, m, {
  channel: g,
  message: G,
  target: _,
  mediaItem: k,
  onSelect: v,
  onHeightUpdate: x
} = e,
I = _;
  if (null != k)
f = r = k.url;
  else
for (;
  (0, d.k)(I);)
  (0, d.k)(I, HTMLImageElement) && null != I.src && (f = I.src), (0, d.k)(I, HTMLAnchorElement) && null != I.href && (r = I.href, m = I.textContent), I = I.parentNode;
  let j = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString(),
A = (0, c.Z)(j),
C = (0, a.Z)(j),
T = (0, h.Z)({
  commandType: i.yU.MESSAGE,
  commandTargetId: G.id,
  channel: g,
  guildId: void 0,
  onHeightUpdate: x
}),
b = (0, Z.Z)(G, g),
L = (0, p.Z)(G, g),
y = (0, M.Z)(G, g),
N = (0, o.Z)(null != r ? r : f, m),
w = (0, s.Z)({
  id: G.id,
  label: S.Z.Messages.COPY_ID_MESSAGE,
  shiftId: ''.concat(G.channel_id, '-').concat(G.id)
}),
H = (0, E.Z)(G, g);
  return (0, l.jsxs)(t.Menu, {
navId: 'message',
onClose: u.Zy,
'aria-label': S.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
onSelect: v,
children: [
  (0, l.jsx)(t.MenuGroup, {
    children: A
  }),
  (0, l.jsx)(t.MenuGroup, {
    children: C
  }),
  (0, l.jsxs)(t.MenuGroup, {
    children: [
      H,
      T,
      b,
      L,
      y
    ]
  }),
  (0, l.jsx)(t.MenuGroup, {
    children: N
  }),
  (0, l.jsx)(t.MenuGroup, {
    children: w
  })
]
  });
}