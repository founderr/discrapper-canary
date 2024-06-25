"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(5192),
  l = n(829820),
  u = n(171509);

function _(e) {
  let {
    activity: t,
    user: n,
    channelId: r,
    guildId: _,
    source: c,
    size: d,
    look: E,
    color: I,
    className: T,
    onAction: h
  } = e, {
    tooltip: f,
    loading: S,
    disabled: A,
    onClick: N
  } = (0, l.Fe)(t, n, c, a.ZP.getNickname(_, r, n)), m = () => {
    null == h || h(), N()
  };
  return (0, i.jsx)(o.Tooltip, {
    text: f,
    children: e => {
      let {
        onMouseEnter: n,
        onMouseLeave: r
      } = e;
      return (0, i.jsx)(o.Button, {
        size: d,
        className: s()(u.syncButton, T),
        innerClassName: u.syncButtonInner,
        look: E,
        color: I,
        onClick: m,
        onMouseEnter: n,
        onMouseLeave: r,
        disabled: A,
        submitting: S,
        "aria-label": null != f ? f : t.name,
        children: (0, i.jsx)(o.UserPlayIcon, {
          size: "xs",
          color: "currentColor"
        })
      })
    }
  })
}