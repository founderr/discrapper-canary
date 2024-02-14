"use strict";
n.r(t), n.d(t, {
  UserActivityTypes: function() {
    return P
  },
  default: function() {
    return b
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("446674"),
  o = n("77078"),
  u = n("871388"),
  d = n("152311"),
  c = n("632710"),
  f = n("299285"),
  m = n("267196"),
  p = n("945701"),
  h = n("285749"),
  E = n("78512"),
  g = n("314848"),
  S = n("699209"),
  C = n("769791"),
  T = n("373469"),
  v = n("42203"),
  I = n("305961"),
  _ = n("957255"),
  N = n("697218"),
  A = n("800762"),
  y = n("313873"),
  x = n("599110"),
  O = n("474293"),
  R = n("49111"),
  M = n("970574");

function L(e) {
  let {
    type: t,
    source: n,
    activity: i,
    applicationStream: a,
    user: s,
    guildId: r,
    channelId: u,
    onAction: f,
    isEmbedded: m = (0, d.default)(i),
    actionColor: p
  } = e;
  return (0, l.jsx)(c.default, {
    className: (0, O.getClass)(M, "actions", t),
    type: t,
    source: n,
    activity: i,
    applicationStream: a,
    user: s,
    guildId: r,
    look: o.Button.Looks.FILLED,
    color: null != p ? p : o.Button.Colors.PRIMARY,
    channelId: u,
    onAction: f,
    isEmbedded: m
  })
}
let P = y.default.Types;
var b = function(e) {
  let {
    activity: t,
    user: n,
    useStoreStream: a = !0,
    showActions: o = !0,
    hideHeader: d = !1,
    analyticsParams: c,
    ...O
  } = e, P = (0, r.useStateFromStores)([A.default, v.default], () => {
    var e;
    return v.default.getChannel(null === (e = A.default.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId)
  }), {
    enableHangStatus: b
  } = S.HangStatusExperiment.useExperiment({
    guildId: null == P ? void 0 : P.guild_id,
    location: "UserActivityContainer"
  }, {
    autoTrackExposure: !1
  }), j = (0, r.useStateFromStores)([T.default], () => a ? T.default.getAnyStreamForUser(n.id) : null), U = b && _.default.can(R.Permissions.CONNECT, P), D = (null == t ? void 0 : t.type) === R.ActivityTypes.HANG_STATUS && U ? P : null, k = (0, r.useStateFromStores)([I.default, A.default, v.default], () => {
    var e, l;
    return (0, u.default)(t, R.ActivityFlags.EMBEDDED) ? I.default.getGuild(null === (e = v.default.getChannel(null === (l = A.default.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === l ? void 0 : l.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != D ? I.default.getGuild(D.getGuildId()) : null
  }), w = (0, r.useStateFromStores)([I.default], () => null != j ? I.default.getGuild(j.guildId) : null), F = (0, r.useStateFromStores)([f.default], () => {
    if (null != t) return null != t.application_id ? f.default.getApplication(t.application_id) : f.default.getApplicationByName(t.name);
    return null
  }), B = (0, r.useStateFromStores)([N.default], () => N.default.getCurrentUser()), G = (0, m.default)(), H = (0, g.default)(n), V = G && null != t && H;
  return (i.useEffect(() => {
    (null == t ? void 0 : t.type) === R.ActivityTypes.HANG_STATUS && U && x.default.track(R.AnalyticEvents.VIEW_HANG_STATUS, {
      source: "UserProfilePopout",
      guild_id: null == D ? void 0 : D.guild_id,
      channel_id: null == D ? void 0 : D.id
    })
  }, [null == t ? void 0 : t.type, U, D]), (null == t ? void 0 : t.type) !== R.ActivityTypes.HANG_STATUS || U) ? (0, l.jsx)(y.default, {
    ...O,
    activity: t,
    user: n,
    application: F,
    hideHeader: d,
    activityGuild: null != k ? k : w,
    showReactions: V,
    renderActions: o ? () => (0, l.jsxs)("div", {
      className: s(V && M.actionsWrapper),
      children: [(0, l.jsx)(L, {
        ...O,
        applicationStream: j,
        activity: t,
        user: n
      }), V && (0, l.jsx)(p.default, {
        activity: t,
        user: n,
        filename: "".concat(null == B ? void 0 : B.globalName, "-reacting-to-").concat(t.name, ".png").toLowerCase(),
        altText: (0, E.getActivityAltText)(n, t),
        showReact: !0,
        showReply: !0,
        reactor: h.default,
        analyticsParams: c
      })]
    }) : null,
    onOpenSpotifyTrack: C.openTrack,
    onOpenSpotifyArtist: C.openArtist,
    onOpenSpotifyAlbum: C.openAlbum
  }) : null
}