"use strict";
n.r(t), n.d(t, {
  VideoButtonWrapper: function() {
    return f
  },
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  i = n("244201"),
  l = n("289656"),
  u = n("437825"),
  o = n("142303"),
  d = n("981913"),
  c = n("911360");

function f(e) {
  let t = (0, l.getVideoButtonLabel)(e),
    {
      enabled: n,
      cameraUnavailable: r,
      onChange: s,
      onCameraUnavailable: d,
      hasPermission: c,
      children: f,
      channelLimitReached: h = !1,
      join: p
    } = e,
    E = (0, i.useAppContext)(),
    C = r ? () => d() : () => s(!e.enabled, E);
  return (0, a.jsx)(a.Fragment, {
    children: f({
      onClick: C,
      active: n,
      disabled: !n && (!c || h),
      iconComponent: p || n ? u.default : o.default,
      label: t,
      unavailable: r
    })
  })
}

function h(e) {
  let {
    enabled: t,
    join: n,
    channel: r,
    onChange: i,
    onCameraUnavailable: l,
    cameraUnavailable: u,
    hasPermission: o,
    className: h,
    channelLimitReached: p,
    channelLimit: E,
    centerButton: C = !1,
    onPopoutClick: m,
    ...S
  } = e, g = C ? d.CenterControlButton : d.default;
  return (0, a.jsx)(f, {
    enabled: t,
    join: n,
    channel: r,
    onChange: i,
    onCameraUnavailable: l,
    cameraUnavailable: u,
    hasPermission: o,
    channelLimitReached: p,
    channelLimit: E,
    children: e => {
      let {
        unavailable: n,
        ...r
      } = e;
      return (0, a.jsx)(g, {
        ...r,
        ...S,
        isActive: t,
        className: s(h, {
          [c.fauxDisabled]: n
        }),
        onPopoutClick: m
      })
    }
  })
}