"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var l = n("37983");
n("884691");
var a = n("627445"),
  s = n.n(a),
  i = n("446674"),
  r = n("18346"),
  u = n("261552"),
  o = n("103979"),
  d = n("780166"),
  c = n("245463"),
  f = n("42887"),
  h = n("697218"),
  m = n("991170"),
  p = n("456127"),
  E = n("888814"),
  g = n("943917"),
  S = n("380116"),
  C = n("149882"),
  _ = n("568009"),
  I = n("49111"),
  T = n("851691");

function v(e) {
  let {
    channel: t,
    hasActiveStream: n,
    themeable: a = !1
  } = e, v = (0, i.useStateFromStores)([h.default], () => {
    let e = h.default.getCurrentUser();
    return s(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), x = (0, u.default)(), {
    isSharedCanvasEnabled: N
  } = d.default.useExperiment({
    guildId: null == t ? void 0 : t.guild_id,
    location: "b7309a_1"
  }), {
    enableViewerClipping: A
  } = o.default.useExperiment({
    location: "VoiceEffectsActionBar"
  }, {
    autoTrackExposure: !1
  }), M = (0, r.default)(f.default);
  if (null == t || null != x) return null;
  let R = (0, c.default)(t),
    j = m.default.can({
      permission: I.Permissions.ADD_REACTIONS,
      user: v,
      context: t
    });
  return (0, l.jsxs)("div", {
    className: T.voiceEffectsActionBar,
    children: [R && (0, l.jsx)(C.default, {
      channel: t,
      themeable: a
    }), j && (0, l.jsx)(S.default, {
      channel: t
    }), A && M && (0, l.jsx)(p.default, {
      channel: t
    }), N && n && (0, l.jsx)(E.default, {}), N && n && (0, l.jsx)(g.default, {
      channel: t
    }), N && n && (0, l.jsx)(_.default, {})]
  })
}