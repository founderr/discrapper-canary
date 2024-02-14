"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("95410"),
  o = n("457112"),
  u = n("679243"),
  d = n("49111"),
  c = n("802542"),
  f = n("678016");
let h = "CameraPreviewPosition";

function m(e) {
  let {
    width: t,
    onContextMenuParticipant: n,
    height: s,
    channel: m,
    participants: p
  } = e, [E, S] = function() {
    let [e, t] = a.useState(() => r.default.get(h, d.PictureInPicturePositions.BOTTOM_RIGHT));
    return [e, a.useCallback(e => {
      r.default.set(h, e), t(e)
    }, [])]
  }(), g = a.useRef(null), C = null == m.getGuildId() ? 70 : 50;
  return a.useLayoutEffect(() => {
    var e;
    null === (e = g.current) || void 0 === e || e.ensureIsInPosition()
  }, [p.length]), (0, l.jsx)("div", {
    className: c.container,
    children: (0, l.jsx)(o.PictureInPictureWindow, {
      position: E,
      id: 0,
      ref: g,
      onMove: (e, t) => S(t),
      maxX: t,
      maxY: s,
      edgeOffsetTop: C,
      edgeOffsetBottom: 70,
      edgeOffsetLeft: 16,
      edgeOffsetRight: 16,
      children: (0, l.jsx)("div", {
        className: c.tileContainer,
        children: p.map(e => (0, l.jsx)(u.default, {
          participant: e,
          channel: m,
          onContextMenu: n,
          className: i(c.tile, f.elevationHigh),
          fit: u.CallTileFit.COVER,
          inCall: !0,
          inPopout: !1,
          width: 160
        }, e.id))
      })
    })
  })
}