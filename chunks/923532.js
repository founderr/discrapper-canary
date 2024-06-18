"use strict";
n.d(t, {
  Z: function() {
    return f
  }
});
var i = n(735250),
  s = n(470079),
  l = n(512722),
  o = n.n(l),
  a = n(399606),
  r = n(822183),
  c = n(673125),
  d = n(610947),
  u = n(594174),
  h = n(904070);

function p(e) {
  let {
    streamerId: t,
    channelId: n
  } = e, l = s.useRef(null), r = (0, a.e7)([u.default], () => u.default.getCurrentUser());
  return o()(null != r, "user cannot be null"), (0, d.Z)(l, r, t, n), (0, i.jsx)("canvas", {
    className: h.canvas,
    ref: l
  })
}

function f(e) {
  let {
    guildId: t,
    channelId: n,
    streamerId: s
  } = e, {
    isSharedCanvasEnabled: l
  } = r.Z.useExperiment({
    guildId: t,
    location: "f0d1b1_1"
  }, {
    autoTrackExposure: !0
  }), o = (0, a.e7)([c.Z], () => c.Z.visibleOverlayCanvas);
  return l && o ? (0, i.jsx)(p, {
    guildId: t,
    channelId: n,
    streamerId: s
  }) : null
}