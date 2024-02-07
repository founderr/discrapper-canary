"use strict";
n.r(t), n.d(t, {
  UserActivityTypes: function() {
    return R
  },
  default: function() {
    return M
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
  I = n("800762"),
  _ = n("313873"),
  y = n("599110"),
  A = n("474293"),
  N = n("49111"),
  x = n("804354");

function O(e) {
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
    className: (0, A.getClass)(x, "actions", t),
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
let R = _.default.Types;
var M = function(e) {
  let {
    activity: t,
    user: n,
    useStoreStream: a = !0,
    showActions: o = !0,
    hideHeader: d = !1,
    ...c
  } = e, A = (0, r.useStateFromStores)([I.default, C.default], () => {
    var e;
    return C.default.getChannel(null === (e = I.default.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId)
  }), {
    enableHangStatus: R
  } = E.HangStatusExperiment.useExperiment({
    guildId: null == A ? void 0 : A.guild_id,
    location: "UserActivityContainer"
  }), M = (0, r.useStateFromStores)([S.default], () => a ? S.default.getAnyStreamForUser(n.id) : null), L = R && v.default.can(N.Permissions.CONNECT, A), P = (null == t ? void 0 : t.type) === N.ActivityTypes.HANG_STATUS && L ? A : null, b = (0, r.useStateFromStores)([T.default, I.default, C.default], () => {
    var e, l;
    return (0, u.default)(t, N.ActivityFlags.EMBEDDED) ? T.default.getGuild(null === (e = C.default.getChannel(null === (l = I.default.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === l ? void 0 : l.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != P ? T.default.getGuild(P.getGuildId()) : null
  }), j = (0, r.useStateFromStores)([T.default], () => null != M ? T.default.getGuild(M.guildId) : null), U = (0, r.useStateFromStores)([f.default], () => {
    if (null != t) return null != t.application_id ? f.default.getApplication(t.application_id) : f.default.getApplicationByName(t.name);
    return null
  }), D = (0, p.default)(), k = D && null != t;
  return (i.useEffect(() => {
    (null == t ? void 0 : t.type) === N.ActivityTypes.HANG_STATUS && L && y.default.track(N.AnalyticEvents.VIEW_HANG_STATUS, {
      source: "UserProfilePopout",
      guild_id: null == P ? void 0 : P.guild_id,
      channel_id: null == P ? void 0 : P.id
    })
  }, [null == t ? void 0 : t.type, L, P]), (null == t ? void 0 : t.type) !== N.ActivityTypes.HANG_STATUS || L) ? (0, l.jsx)(_.default, {
    ...c,
    activity: t,
    user: n,
    application: U,
    hideHeader: d,
    activityGuild: null != b ? b : j,
    renderActions: o ? () => (0, l.jsxs)("div", {
      className: s(k && x.actionsWrapper),
      children: [(0, l.jsx)(O, {
        ...c,
        applicationStream: M,
        activity: t,
        user: n
      }), k && (0, l.jsx)(m.default, {
        activity: t,
        user: n,
        showReact: !0,
        showReply: !0,
        reactor: h.default
      })]
    }) : null,
    onOpenSpotifyTrack: g.openTrack,
    onOpenSpotifyArtist: g.openArtist,
    onOpenSpotifyAlbum: g.openAlbum
  }) : null
}