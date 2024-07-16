t.d(s, {
  Z: function() {
return _;
  }
}), t(47120);
var n = t(735250);
t(470079);
var a = t(442837),
  i = t(481060),
  r = t(607070),
  o = t(122890),
  l = t(285952),
  c = t(300395),
  d = t(546590);

function _(e) {
  let {
purchaseState: s,
currentStep: t,
onClose: _
  } = e, [E, u] = (0, o.z)({
purchaseState: s,
currentStep: t,
initialScene: c.fe.Scenes.ENTRY,
purchaseScene: c.fe.Scenes.STARS,
errorScene: c.fe.Scenes.ERROR,
successScene: c.fe.Scenes.SUCCESS
  }), T = (0, a.e7)([r.Z], () => r.Z.useReducedMotion);
  return (0, n.jsxs)(i.ModalHeader, {
align: l.Z.Align.START,
className: d.header,
separator: !1,
children: [
  (0, n.jsx)(c.fe, {
    className: d.animation,
    nextScene: E,
    onScenePlay: e => u(c.fe.getNextScene(e)),
    pauseWhileUnfocused: !1,
    pause: T
  }),
  (0, n.jsx)('div', {
    className: d.headerTitle
  }),
  (0, n.jsx)(i.ModalCloseButton, {
    onClick: _,
    className: d.closeButton
  })
]
  });
}