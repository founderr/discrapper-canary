n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(410575),
  a = n(821564),
  r = n(453925),
  o = n(632304),
  c = n(947150),
  u = n(488021),
  d = n(822556),
  h = n(981631),
  m = n(689938),
  E = n(528242);

function p(e) {
  let {
    onClose: t,
    renderOutputDevices: n = !1,
    renderInputDevices: p = !1,
    renderInputModes: g = !1,
    renderInputVolume: f = !1,
    renderOutputVolume: C = !1,
    onSelect: _
  } = e, I = (0, d.Z)(), x = (0, c.Z)(), T = (0, u.Z)(), N = (0, a.Z)(), Z = (0, r.Z)(), S = (0, o.Z)();
  return (0, l.jsx)(s.Z, {
    object: h.qAy.CONTEXT_MENU,
    children: (0, l.jsxs)(i.Menu, {
      onSelect: _,
      className: E.menu,
      onClose: t,
      navId: "audio-device-context",
      "aria-label": m.Z.Messages.AUDIO_DEVICE_ACTIONS,
      children: [p ? (0, l.jsx)(i.MenuGroup, {
        label: m.Z.Messages.INPUT_DEVICE,
        children: x
      }) : null, n ? (0, l.jsx)(i.MenuGroup, {
        label: m.Z.Messages.OUTPUT_DEVICE,
        children: T
      }) : null, g ? (0, l.jsx)(i.MenuGroup, {
        label: m.Z.Messages.FORM_LABEL_INPUT_MODE,
        children: N
      }) : null, (0, l.jsxs)(i.MenuGroup, {
        children: [f ? Z : null, C ? S : null, I]
      })]
    })
  })
}