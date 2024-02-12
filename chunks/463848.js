"use strict";
n.r(t), n.d(t, {
  UserActivityTypes: function() {
    return M
  },
  default: function() {
    return L
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
  p = n("267196"),
  m = n("945701"),
  h = n("285749"),
  E = n("699209"),
  g = n("769791"),
  S = n("373469"),
  C = n("42203"),
  T = n("305961"),
  v = n("957255"),
  I = n("697218"),
  _ = n("800762"),
  y = n("313873"),
  A = n("599110"),
  N = n("474293"),
  x = n("49111"),
  O = n("804354");

function R(e) {
  let {
    type: t,
    source: n,
    activity: i,
    applicationStream: a,
    user: s,
    guildId: r,
    channelId: u,
    onAction: f,
    isEmbedded: p = (0, d.default)(i),
    actionColor: m
  } = e;
  return (0, l.jsx)(c.default, {
    className: (0, N.getClass)(O, "actions", t),
    type: t,
    source: n,
    activity: i,
    applicationStream: a,
    user: s,
    guildId: r,
    look: o.Button.Looks.FILLED,
    color: null != m ? m : o.Button.Colors.PRIMARY,
    channelId: u,
    onAction: f,
    isEmbedded: p
  })
}
let M = y.default.Types;
var L = function(e) {
  let {
    activity: t,
    user: n,
    useStoreStream: a = !0,
    showActions: o = !0,
    hideHeader: d = !1,
    analyticsParams: c,
    ...N
  } = e, M = (0, r.useStateFromStores)([_.default, C.default], () => {
    var e;
    return C.default.getChannel(null === (e = _.default.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId)
  }), {
    enableHangStatus: L
  } = E.HangStatusExperiment.useExperiment({
    guildId: null == M ? void 0 : M.guild_id,
    location: "UserActivityContainer"
  }), P = (0, r.useStateFromStores)([S.default], () => a ? S.default.getAnyStreamForUser(n.id) : null), b = L && v.default.can(x.Permissions.CONNECT, M), j = (null == t ? void 0 : t.type) === x.ActivityTypes.HANG_STATUS && b ? M : null, U = (0, r.useStateFromStores)([T.default, _.default, C.default], () => {
    var e, l;
    return (0, u.default)(t, x.ActivityFlags.EMBEDDED) ? T.default.getGuild(null === (e = C.default.getChannel(null === (l = _.default.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === l ? void 0 : l.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != j ? T.default.getGuild(j.getGuildId()) : null
  }), D = (0, r.useStateFromStores)([T.default], () => null != P ? T.default.getGuild(P.guildId) : null), k = (0, r.useStateFromStores)([f.default], () => {
    if (null != t) return null != t.application_id ? f.default.getApplication(t.application_id) : f.default.getApplicationByName(t.name);
    return null
  }), w = (0, r.useStateFromStores)([I.default], () => I.default.getCurrentUser()), F = (0, p.default)(), G = F && null != t;
  return (i.useEffect(() => {
    (null == t ? void 0 : t.type) === x.ActivityTypes.HANG_STATUS && b && A.default.track(x.AnalyticEvents.VIEW_HANG_STATUS, {
      source: "UserProfilePopout",
      guild_id: null == j ? void 0 : j.guild_id,
      channel_id: null == j ? void 0 : j.id
    })
  }, [null == t ? void 0 : t.type, b, j]), (null == t ? void 0 : t.type) !== x.ActivityTypes.HANG_STATUS || b) ? (0, l.jsx)(y.default, {
    ...N,
    activity: t,
    user: n,
    application: k,
    hideHeader: d,
    activityGuild: null != U ? U : D,
    renderActions: o ? () => (0, l.jsxs)("div", {
      className: s(G && O.actionsWrapper),
      children: [(0, l.jsx)(R, {
        ...N,
        applicationStream: P,
        activity: t,
        user: n
      }), G && (0, l.jsx)(m.default, {
        activity: t,
        user: n,
        filename: "".concat(null == w ? void 0 : w.globalName, "-reacting-to-").concat(t.name, ".png").toLowerCase(),
        showReact: !0,
        showReply: !0,
        reactor: h.default,
        analyticsParams: c
      })]
    }) : null,
    onOpenSpotifyTrack: g.openTrack,
    onOpenSpotifyArtist: g.openArtist,
    onOpenSpotifyAlbum: g.openAlbum
  }) : null
}