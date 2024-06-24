t.d(s, {
  Z: function() {
    return d
  }
}), t(47120);
var n = t(735250);
t(470079);
var a = t(442837),
  i = t(481060),
  l = t(607070),
  r = t(122890),
  o = t(285952),
  c = t(300395),
  u = t(796116);

function d(e) {
  let {
    purchaseState: s,
    currentStep: t,
    onClose: d
  } = e, [E, _] = (0, r.z)({
    purchaseState: s,
    currentStep: t,
    initialScene: c.fe.Scenes.ENTRY,
    purchaseScene: c.fe.Scenes.STARS,
    errorScene: c.fe.Scenes.ERROR,
    successScene: c.fe.Scenes.SUCCESS
  }), p = (0, a.e7)([l.Z], () => l.Z.useReducedMotion);
  return (0, n.jsxs)(i.ModalHeader, {
    align: o.Z.Align.START,
    className: u.header,
    separator: !1,
    children: [(0, n.jsx)(c.fe, {
      className: u.animation,
      nextScene: E,
      onScenePlay: e => _(c.fe.getNextScene(e)),
      pauseWhileUnfocused: !1,
      pause: p
    }), (0, n.jsx)("div", {
      className: u.headerTitle
    }), (0, n.jsx)(i.ModalCloseButton, {
      onClick: d,
      className: u.closeButton
    })]
  })
}