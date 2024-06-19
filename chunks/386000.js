n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(735250),
  i = n(470079),
  s = n(652844),
  a = n(628581),
  r = n(871499);

function o(e) {
  let {
    selfMute: t,
    serverMute: n,
    suppress: o,
    centerButton: c = !1,
    awaitingRemote: u,
    onMouseEnter: d,
    onMouseLeave: h,
    ...m
  } = e, p = t || n || o, E = c ? r.d : r.Z, g = (0, a.Z)(t, n, o, u), {
    Component: f,
    play: C,
    events: _
  } = (0, s.O)(p ? "unmute" : "mute");
  return i.useEffect(() => () => C(), [C, p]), (0, l.jsx)(E, {
    isActive: !p,
    iconComponent: f,
    label: g,
    onMouseEnter: e => {
      null == d || d(e), _.onMouseEnter()
    },
    onMouseLeave: e => {
      null == h || h(e), _.onMouseLeave()
    },
    ...m
  })
}