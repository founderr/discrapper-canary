n.d(t, {
  O: function() {
    return o
  }
});
var l = n(735250),
  i = n(470079),
  s = n(864094),
  a = n(871499),
  r = n(689938);

function o(e) {
  let t, {
      hasPermission: n,
      streamActive: o,
      isSelfStream: c,
      centerButton: u,
      onMouseEnter: d,
      onMouseLeave: h,
      premiumGlow: m,
      buttonRef: p,
      ...E
    } = e,
    g = u ? a.d : a.Z;
  t = o ? c ? r.Z.Messages.STOP_STREAMING : r.Z.Messages.STOP_WATCHING : n ? r.Z.Messages.SHARE_YOUR_SCREEN : r.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE;
  let {
    Component: f,
    events: C,
    play: _
  } = (0, s.P)(o ? "disable" : "enable");
  return i.useEffect(() => () => _(), [o, _]), (0, l.jsx)(g, {
    buttonRef: p,
    label: t,
    disabled: !n,
    iconComponent: f,
    isActive: o,
    onMouseEnter: e => {
      null == d || d(e), C.onMouseEnter()
    },
    onMouseLeave: e => {
      null == h || h(e), C.onMouseLeave()
    },
    premiumGlow: m,
    ...E
  })
}