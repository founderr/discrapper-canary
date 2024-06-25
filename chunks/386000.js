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
  } = e, E = t || n || o, p = c ? r.d : r.Z, g = (0, a.Z)(t, n, o, u), {
    Component: f,
    play: C,
    events: _
  } = (0, s.O)(E ? "unmute" : "mute");
  return i.useEffect(() => () => C(), [C, E]), (0, l.jsx)(p, {
    isActive: !E,
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