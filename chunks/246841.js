"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  s = n("395361"),
  a = n("829820"),
  o = n("22387");

function l(e) {
  let {
    activity: t,
    user: n,
    source: l,
    className: u,
    size: d,
    look: _,
    color: c,
    fullWidth: E,
    onAction: I
  } = e, {
    label: T,
    tooltip: f,
    loading: S,
    disabled: h,
    onClick: A
  } = (0, a.useSpotifyPlayAction)(t, n, l), m = () => {
    null == I || I(), A()
  };
  return (0, i.jsx)(r.Tooltip, {
    text: f,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, i.jsxs)(r.Button, {
        className: u,
        innerClassName: o.playButtonInner,
        size: d,
        look: _,
        color: c,
        fullWidth: E,
        onClick: m,
        onMouseEnter: t,
        onMouseLeave: n,
        disabled: h,
        submitting: S,
        children: [(0, i.jsx)(s.default, {
          width: 16,
          height: 16
        }), T]
      })
    }
  })
}