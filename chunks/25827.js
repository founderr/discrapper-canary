"use strict";
n.d(t, {
  C: function() {
    return E
  },
  Z: function() {
    return d
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(75735),
  l = n(40851),
  u = n(67844),
  _ = n(871499),
  c = n(830797);

function d(e) {
  let t = (0, u.X)(e),
    {
      enabled: n,
      cameraUnavailable: s,
      onChange: o,
      onCameraUnavailable: _,
      hasPermission: c,
      children: d,
      channelLimitReached: E = !1,
      join: I
    } = e,
    T = (0, l.bp)(),
    h = s ? () => _() : () => o(!e.enabled, T),
    {
      Component: f,
      play: S,
      events: N
    } = (0, a.o)(I || n ? "disable" : "enable");
  return r.useEffect(() => () => S(), [n, S]), (0, i.jsx)(i.Fragment, {
    children: d({
      onClick: h,
      active: n,
      disabled: !n && (!c || E),
      iconComponent: f,
      label: t,
      unavailable: s,
      onMouseEnter: I ? void 0 : N.onMouseEnter,
      onMouseLeave: I ? void 0 : N.onMouseLeave
    })
  })
}

function E(e) {
  let {
    enabled: t,
    join: n,
    channel: r,
    onChange: s,
    onCameraUnavailable: a,
    cameraUnavailable: l,
    hasPermission: u,
    className: E,
    channelLimitReached: I,
    channelLimit: T,
    centerButton: h = !1,
    onPopoutClick: f,
    ...S
  } = e, N = h ? _.d : _.Z;
  return (0, i.jsx)(d, {
    enabled: t,
    join: n,
    channel: r,
    onChange: s,
    onCameraUnavailable: a,
    cameraUnavailable: l,
    hasPermission: u,
    channelLimitReached: I,
    channelLimit: T,
    children: e => {
      let {
        unavailable: n,
        onMouseEnter: r,
        onMouseLeave: s,
        ...a
      } = e;
      return (0, i.jsx)(N, {
        ...a,
        ...S,
        onMouseEnter: e => {
          var t;
          null === (t = S.onMouseEnter) || void 0 === t || t.call(S, e), null == r || r()
        },
        onMouseLeave: e => {
          var t;
          null === (t = S.onMouseLeave) || void 0 === t || t.call(S, e), null == s || s()
        },
        isActive: t,
        className: o()(E, {
          [c.fauxDisabled]: n
        }),
        onPopoutClick: f
      })
    }
  })
}