n.d(t, {
  Z: function() {
    return r
  }
});
var l = n(735250);
n(470079);
var i = n(27457),
  s = n(131951),
  a = n(89032);

function r(e) {
  let {
    aspectRatio: t,
    blocked: n,
    channel: r,
    className: o,
    focused: c,
    children: u,
    inCall: d,
    inPopout: h,
    noBorder: m,
    onClick: p,
    onContextMenu: E,
    onDoubleClick: g,
    onVideoResize: f,
    paused: C,
    pulseSpeakingIndicator: _,
    participant: I,
    width: x,
    ...T
  } = e, N = s.Z.getVideoComponent();
  return (0, l.jsx)("div", {
    style: {
      width: x
    },
    className: a.spaceBetweenTiles,
    children: (0, l.jsxs)("div", {
      className: a.tileSizer,
      style: {
        aspectRatio: t
      },
      children: [(0, l.jsx)(i.ZP, {
        blocked: n,
        channel: r,
        className: o,
        focused: c,
        inCall: d,
        inPopout: h,
        noBorder: m,
        onClick: p,
        onContextMenu: E,
        onDoubleClick: g,
        onVideoResize: f,
        participant: I,
        paused: C,
        pulseSpeakingIndicator: _,
        videoComponent: N,
        width: x,
        ...T
      }), u]
    })
  })
}