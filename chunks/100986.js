"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(594190),
  r = n(592125),
  s = n(19780),
  o = n(944486),
  a = n(626135),
  l = n(710111),
  u = n(981631),
  _ = n(474936);

function c(e, t, n, c) {
  var d, E, I;
  let T = r.Z.getChannel(o.Z.getVoiceChannelId()),
    h = null == T ? void 0 : T.getGuildId(),
    f = s.Z.getMediaSessionId(),
    S = s.Z.getRTCConnectionId(),
    A = null === (d = i.ZP.getCurrentGameForAnalytics()) || void 0 === d ? void 0 : d.name,
    N = h !== n.guildId && n.guildId !== l.X8;
  let m = (E = n, I = N, E.guildId === l.X8 ? "default" : I ? "custom-external" : "custom");
  a.default.track(u.rMx.PREMIUM_FEATURE_USAGE, {
    feature_name: _.QP.SOUNDBOARD_PLAY,
    feature_tier: N ? _.h1.PREMIUM_STANDARD : _.h1.FREE,
    guild_id: h,
    location_stack: e,
    rtc_connection_id: S,
    media_session_id: f,
    in_overlay: t,
    application_name: A,
    emoji_count: null != n.emojiId || null != n.emojiName ? 1 : 0,
    feature_selection: m,
    feature_selection_id: n.soundId,
    sound_type: c,
    is_broadcast: null != T && T.isBroadcastChannel()
  })
}