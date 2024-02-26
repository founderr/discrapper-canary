"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var a = n("679243"),
  s = n("42887"),
  i = n("24541");

function r(e) {
  let {
    aspectRatio: t,
    blocked: n,
    channel: r,
    className: u,
    focused: o,
    children: d,
    inCall: c,
    inPopout: f,
    noBorder: h,
    onClick: m,
    onContextMenu: p,
    onDoubleClick: E,
    onVideoResize: S,
    paused: g,
    pulseSpeakingIndicator: C,
    participant: _,
    width: I,
    ...T
  } = e, v = s.default.getVideoComponent();
  return (0, l.jsx)("div", {
    style: {
      width: I
    },
    className: i.spaceBetweenTiles,
    children: (0, l.jsxs)("div", {
      className: i.tileSizer,
      style: {
        aspectRatio: t
      },
      children: [(0, l.jsx)(a.default, {
        blocked: n,
        channel: r,
        className: u,
        focused: o,
        inCall: c,
        inPopout: f,
        noBorder: h,
        onClick: m,
        onContextMenu: p,
        onDoubleClick: E,
        onVideoResize: S,
        participant: _,
        paused: g,
        pulseSpeakingIndicator: C,
        videoComponent: v,
        width: I,
        ...T
      }), d]
    })
  })
}