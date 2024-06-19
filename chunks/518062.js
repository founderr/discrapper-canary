t.d(n, {
  Z: function() {
    return d
  }
}), t(47120);
var r = t(735250);
t(470079);
var s = t(442837),
  l = t(481060),
  o = t(607070),
  a = t(122890),
  i = t(285952),
  u = t(300395),
  c = t(796116);

function d(e) {
  let {
    purchaseState: n,
    currentStep: t,
    onClose: d
  } = e, [E, C] = (0, a.z)({
    purchaseState: n,
    currentStep: t,
    initialScene: u.fe.Scenes.ENTRY,
    purchaseScene: u.fe.Scenes.STARS,
    errorScene: u.fe.Scenes.ERROR,
    successScene: u.fe.Scenes.SUCCESS
  }), N = (0, s.e7)([o.Z], () => o.Z.useReducedMotion);
  return (0, r.jsxs)(l.ModalHeader, {
    align: i.Z.Align.START,
    className: c.header,
    separator: !1,
    children: [(0, r.jsx)(u.fe, {
      className: c.animation,
      nextScene: E,
      onScenePlay: e => C(u.fe.getNextScene(e)),
      pauseWhileUnfocused: !1,
      pause: N
    }), (0, r.jsx)("div", {
      className: c.headerTitle
    }), (0, r.jsx)(l.ModalCloseButton, {
      onClick: d,
      className: c.closeButton
    })]
  })
}