"use strict";
l.r(t), l.d(t, {
  UserActivityTypes: function() {
    return N
  },
  default: function() {
    return C
  }
});
var n = l("37983"),
  a = l("884691"),
  s = l("446674"),
  i = l("77078"),
  r = l("871388"),
  o = l("152311"),
  u = l("632710"),
  d = l("299285"),
  c = l("699209"),
  f = l("769791"),
  m = l("373469"),
  p = l("42203"),
  h = l("305961"),
  E = l("957255"),
  T = l("800762"),
  S = l("313873"),
  _ = l("599110"),
  g = l("474293"),
  A = l("49111"),
  I = l("804354");

function v(e) {
  let {
    type: t,
    source: l,
    activity: a,
    applicationStream: s,
    user: r,
    guildId: d,
    channelId: c,
    onAction: f,
    isEmbedded: m = (0, o.default)(a),
    actionColor: p
  } = e;
  return (0, n.jsx)(u.default, {
    className: (0, g.getClass)(I, "actions", t),
    type: t,
    source: l,
    activity: a,
    applicationStream: s,
    user: r,
    guildId: d,
    look: i.Button.Looks.FILLED,
    color: null != p ? p : i.Button.Colors.PRIMARY,
    channelId: c,
    onAction: f,
    isEmbedded: m
  })
}
let N = S.default.Types;
var C = function(e) {
  let {
    activity: t,
    user: l,
    useStoreStream: i = !0,
    showActions: o = !0,
    hideHeader: u = !1,
    ...g
  } = e, I = (0, s.useStateFromStores)([T.default, p.default], () => {
    var e;
    return p.default.getChannel(null === (e = T.default.getVoiceStateForUser(l.id)) || void 0 === e ? void 0 : e.channelId)
  }), {
    enableHangStatus: N
  } = c.HangStatusExperiment.useExperiment({
    guildId: null == I ? void 0 : I.guild_id,
    location: "UserActivityContainer"
  }), C = (0, s.useStateFromStores)([m.default], () => i ? m.default.getAnyStreamForUser(l.id) : null), y = N && E.default.can(A.Permissions.CONNECT, I), M = (null == t ? void 0 : t.type) === A.ActivityTypes.HANG_STATUS && y ? I : null, x = (0, s.useStateFromStores)([h.default, T.default, p.default], () => {
    var e, n;
    return (0, r.default)(t, A.ActivityFlags.EMBEDDED) ? h.default.getGuild(null === (e = p.default.getChannel(null === (n = T.default.getVoiceStateForSession(l.id, null == t ? void 0 : t.session_id)) || void 0 === n ? void 0 : n.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != M ? h.default.getGuild(M.getGuildId()) : null
  }), O = (0, s.useStateFromStores)([h.default], () => null != C ? h.default.getGuild(C.guildId) : null), R = (0, s.useStateFromStores)([d.default], () => {
    if (null != t) return null != t.application_id ? d.default.getApplication(t.application_id) : d.default.getApplicationByName(t.name);
    return null
  });
  return (a.useEffect(() => {
    (null == t ? void 0 : t.type) === A.ActivityTypes.HANG_STATUS && y && _.default.track(A.AnalyticEvents.VIEW_HANG_STATUS, {
      source: "UserProfilePopout",
      guild_id: null == M ? void 0 : M.guild_id,
      channel_id: null == M ? void 0 : M.id
    })
  }, [null == t ? void 0 : t.type, y, M]), (null == t ? void 0 : t.type) !== A.ActivityTypes.HANG_STATUS || y) ? (0, n.jsx)(S.default, {
    ...g,
    activity: t,
    user: l,
    application: R,
    hideHeader: u,
    activityGuild: null != x ? x : O,
    renderActions: o ? () => (0, n.jsx)(v, {
      ...g,
      applicationStream: C,
      activity: t,
      user: l
    }) : null,
    onOpenSpotifyTrack: f.openTrack,
    onOpenSpotifyArtist: f.openArtist,
    onOpenSpotifyAlbum: f.openAlbum
  }) : null
}