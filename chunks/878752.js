n.d(t, {
  Z: function() {
    return N
  }
});
var l = n(735250);
n(470079);
var i = n(512722),
  s = n.n(i),
  a = n(442837),
  r = n(779618),
  o = n(446226),
  c = n(441167),
  u = n(822183),
  d = n(641015),
  h = n(131951),
  m = n(594174),
  E = n(700785),
  p = n(213652),
  g = n(320427),
  f = n(145010),
  C = n(933686),
  _ = n(997614),
  I = n(159909),
  x = n(981631),
  T = n(549967);

function N(e) {
  let {
    channel: t,
    hasActiveStream: n,
    themeable: i = !1
  } = e, N = (0, a.e7)([m.default], () => {
    let e = m.default.getCurrentUser();
    return s()(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), Z = (0, o.Z)(), {
    isSharedCanvasEnabled: S
  } = u.Z.useExperiment({
    guildId: null == t ? void 0 : t.guild_id,
    location: "b7309a_1"
  }), {
    enableViewerClipping: v
  } = c.Z.useExperiment({
    location: "VoiceEffectsActionBar"
  }, {
    autoTrackExposure: !1
  }), A = (0, r.Z)(h.Z);
  if (null == t || null != Z) return null;
  let M = (0, d.Z)(t),
    R = E.BT({
      permission: x.Plq.ADD_REACTIONS,
      user: N,
      context: t
    });
  return (0, l.jsxs)("div", {
    className: T.voiceEffectsActionBar,
    children: [M && (0, l.jsx)(_.Z, {
      channel: t,
      themeable: i
    }), R && (0, l.jsx)(C.Z, {
      channel: t
    }), v && A && (0, l.jsx)(p.Z, {
      channel: t
    }), S && n && (0, l.jsx)(g.Z, {}), S && n && (0, l.jsx)(f.Z, {
      channel: t
    }), S && n && (0, l.jsx)(I.Z, {})]
  })
}