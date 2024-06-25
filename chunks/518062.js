t.d(n, {
  Z: function() {
    return d
  }
}), t(47120);
var r = t(735250);
t(470079);
var o = t(442837),
  a = t(481060),
  i = t(607070),
  l = t(122890),
  s = t(285952),
  c = t(300395),
  u = t(796116);

function d(e) {
  let {
    purchaseState: n,
    currentStep: t,
    onClose: d
  } = e, [f, p] = (0, l.z)({
    purchaseState: n,
    currentStep: t,
    initialScene: c.fe.Scenes.ENTRY,
    purchaseScene: c.fe.Scenes.STARS,
    errorScene: c.fe.Scenes.ERROR,
    successScene: c.fe.Scenes.SUCCESS
  }), _ = (0, o.e7)([i.Z], () => i.Z.useReducedMotion);
  return (0, r.jsxs)(a.ModalHeader, {
    align: s.Z.Align.START,
    className: u.header,
    separator: !1,
    children: [(0, r.jsx)(c.fe, {
      className: u.animation,
      nextScene: f,
      onScenePlay: e => p(c.fe.getNextScene(e)),
      pauseWhileUnfocused: !1,
      pause: _
    }), (0, r.jsx)("div", {
      className: u.headerTitle
    }), (0, r.jsx)(a.ModalCloseButton, {
      onClick: d,
      className: u.closeButton
    })]
  })
}