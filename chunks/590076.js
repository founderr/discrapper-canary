n.d(t, {
  Z: function() {
    return E
  }
});
var l = n(735250),
  i = n(470079),
  s = n(512722),
  a = n.n(s),
  r = n(399606),
  o = n(618158),
  c = n(594174),
  u = n(822183),
  d = n(364125),
  h = n(610947),
  m = n(260788);

function p(e) {
  let {
    focused: t,
    channelId: n,
    streamerId: s,
    stream: u
  } = e, p = i.useRef(null), E = (0, r.e7)([c.default], () => c.default.getCurrentUser());
  a()(null != E, "user cannot be null"), (0, h.Z)(p, E, s, n);
  let {
    handleClick: g,
    handleMouseDown: f,
    handleMouseEnter: C,
    handleMouseMove: _,
    handleMouseUp: I
  } = (0, d.Z)({
    user: E,
    channelId: n,
    streamerId: s,
    stream: u,
    focused: t,
    canvas: p.current
  });
  return (0, l.jsx)(o.Z, {
    children: (0, l.jsx)("canvas", {
      ref: p,
      onClick: g,
      onMouseDown: f,
      onMouseEnter: C,
      onMouseMove: _,
      onMouseUp: I,
      className: m.sharedCanvas
    })
  })
}

function E(e) {
  let {
    isSharedCanvasEnabled: t
  } = u.Z.useExperiment({
    guildId: e.guildId,
    location: "d0de1c_1"
  }, {
    autoTrackExposure: !0
  });
  return !t || e.hasScreenMessage ? null : (0, l.jsx)(p, {
    ...e
  })
}