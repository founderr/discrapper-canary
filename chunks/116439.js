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
  o = n("437825"),
  u = n("142303"),
  d = n("981913"),
  c = n("423725");

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
    m = (0, i.useAppContext)(),
    C = r ? () => d() : () => s(!e.enabled, m);
  return (0, a.jsx)(a.Fragment, {
    children: f({
      onClick: C,
      active: n,
      disabled: !n && (!c || h),
      iconComponent: p || n ? o.default : u.default,
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
    cameraUnavailable: o,
    hasPermission: u,
    className: h,
    channelLimitReached: p,
    channelLimit: m,
    centerButton: C = !1,
    onPopoutClick: E,
    ...g
  } = e, S = C ? d.CenterControlButton : d.default;
  return (0, a.jsx)(f, {
    enabled: t,
    join: n,
    channel: r,
    onChange: i,
    onCameraUnavailable: l,
    cameraUnavailable: o,
    hasPermission: u,
    channelLimitReached: p,
    channelLimit: m,
    children: e => {
      let {
        unavailable: n,
        ...r
      } = e;
      return (0, a.jsx)(S, {
        ...r,
        ...g,
        isActive: t,
        className: s(h, {
          [c.fauxDisabled]: n
        }),
        onPopoutClick: E
      })
    }
  })
}