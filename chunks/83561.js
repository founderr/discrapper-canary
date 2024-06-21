n.d(t, {
  S: function() {
    return I
  },
  m: function() {
    return _
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(607070),
  o = n(426563),
  c = n(998502),
  u = n(689938),
  d = n(54880);
let E = c.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function _() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    [t, n] = i.useState(!1),
    s = (0, l.e7)([r.Z], () => r.Z.useReducedMotion),
    a = i.useMemo(() => {
      let n = t || !s && !e;
      return (0, o.j)(n)
    }, [t, s, e]),
    c = i.useCallback(() => n(!0), []);
  return {
    avatarSrc: a,
    eventHandlers: {
      onMouseEnter: c,
      onMouseLeave: i.useCallback(() => n(!1), [])
    }
  }
}

function I(e) {
  let {
    src: t
  } = e;
  return (0, s.jsx)("div", {
    className: d.avatarContainer,
    children: (0, s.jsx)(E, {
      src: t,
      size: a.AvatarSizes.SIZE_40,
      "aria-label": u.Z.Messages.GUILD_AUTOMOD_USERNAME
    })
  })
}