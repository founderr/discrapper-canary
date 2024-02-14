"use strict";
n.r(t), n.d(t, {
  UserActivityTypes: function() {
    return L
  },
  default: function() {
    return P
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
  g = n("699209"),
  S = n("769791"),
  C = n("373469"),
  T = n("42203"),
  v = n("305961"),
  I = n("957255"),
  _ = n("697218"),
  N = n("800762"),
  A = n("313873"),
  y = n("599110"),
  x = n("474293"),
  O = n("49111"),
  R = n("970574");

function M(e) {
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
    className: (0, x.getClass)(R, "actions", t),
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
let L = A.default.Types;
var P = function(e) {
  let {
    activity: t,
    user: n,
    useStoreStream: a = !0,
    showActions: o = !0,
    hideHeader: d = !1,
    analyticsParams: c,
    ...x
  } = e, L = (0, r.useStateFromStores)([N.default, T.default], () => {
    var e;
    return T.default.getChannel(null === (e = N.default.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId)
  }), {
    enableHangStatus: P
  } = g.HangStatusExperiment.useExperiment({
    guildId: null == L ? void 0 : L.guild_id,
    location: "UserActivityContainer"
  }, {
    autoTrackExposure: !1
  }), b = (0, r.useStateFromStores)([C.default], () => a ? C.default.getAnyStreamForUser(n.id) : null), j = P && I.default.can(O.Permissions.CONNECT, L), U = (null == t ? void 0 : t.type) === O.ActivityTypes.HANG_STATUS && j ? L : null, D = (0, r.useStateFromStores)([v.default, N.default, T.default], () => {
    var e, l;
    return (0, u.default)(t, O.ActivityFlags.EMBEDDED) ? v.default.getGuild(null === (e = T.default.getChannel(null === (l = N.default.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === l ? void 0 : l.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != U ? v.default.getGuild(U.getGuildId()) : null
  }), k = (0, r.useStateFromStores)([v.default], () => null != b ? v.default.getGuild(b.guildId) : null), w = (0, r.useStateFromStores)([f.default], () => {
    if (null != t) return null != t.application_id ? f.default.getApplication(t.application_id) : f.default.getApplicationByName(t.name);
    return null
  }), F = (0, r.useStateFromStores)([_.default], () => _.default.getCurrentUser()), B = (0, m.default)(), G = B && null != t;
  return (i.useEffect(() => {
    (null == t ? void 0 : t.type) === O.ActivityTypes.HANG_STATUS && j && y.default.track(O.AnalyticEvents.VIEW_HANG_STATUS, {
      source: "UserProfilePopout",
      guild_id: null == U ? void 0 : U.guild_id,
      channel_id: null == U ? void 0 : U.id
    })
  }, [null == t ? void 0 : t.type, j, U]), (null == t ? void 0 : t.type) !== O.ActivityTypes.HANG_STATUS || j) ? (0, l.jsx)(A.default, {
    ...x,
    activity: t,
    user: n,
    application: w,
    hideHeader: d,
    activityGuild: null != D ? D : k,
    showReactions: G,
    renderActions: o ? () => (0, l.jsxs)("div", {
      className: s(G && R.actionsWrapper),
      children: [(0, l.jsx)(M, {
        ...x,
        applicationStream: b,
        activity: t,
        user: n
      }), G && (0, l.jsx)(p.default, {
        activity: t,
        user: n,
        filename: "".concat(null == F ? void 0 : F.globalName, "-reacting-to-").concat(t.name, ".png").toLowerCase(),
        altText: (0, E.getActivityAltText)(n, t),
        showReact: !0,
        showReply: !0,
        reactor: h.default,
        analyticsParams: c
      })]
    }) : null,
    onOpenSpotifyTrack: S.openTrack,
    onOpenSpotifyArtist: S.openArtist,
    onOpenSpotifyAlbum: S.openAlbum
  }) : null
}