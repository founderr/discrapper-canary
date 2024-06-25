n.d(t, {
  Z: function() {
    return E
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(433517),
  o = n(518774),
  c = n(27457),
  u = n(981631),
  d = n(289999),
  h = n(972667);
let m = "CameraPreviewPosition";

function E(e) {
  let {
    width: t,
    onContextMenuParticipant: n,
    height: s,
    channel: E,
    participants: p
  } = e, [g, f] = function() {
    let [e, t] = i.useState(() => r.K.get(m, u.VD2.BOTTOM_RIGHT));
    return [e, i.useCallback(e => {
      r.K.set(m, e), t(e)
    }, [])]
  }(), C = i.useRef(null), _ = null == E.getGuildId() ? 70 : 50;
  return i.useLayoutEffect(() => {
    var e;
    null === (e = C.current) || void 0 === e || e.ensureIsInPosition()
  }, [p.length]), (0, l.jsx)("div", {
    className: d.container,
    children: (0, l.jsx)(o._, {
      position: g,
      id: 0,
      ref: C,
      onMove: (e, t) => f(t),
      maxX: t,
      maxY: s,
      edgeOffsetTop: _,
      edgeOffsetBottom: 70,
      edgeOffsetLeft: 16,
      edgeOffsetRight: 16,
      children: (0, l.jsx)("div", {
        className: d.tileContainer,
        children: p.map(e => (0, l.jsx)(c.ZP, {
          participant: e,
          channel: E,
          onContextMenu: n,
          className: a()(d.tile, h.elevationHigh),
          fit: c.BP.COVER,
          inCall: !0,
          inPopout: !1,
          width: 160
        }, e.id))
      })
    })
  })
}