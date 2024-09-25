n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(594190),
    i = n(592125),
    a = n(19780),
    o = n(944486),
    s = n(626135),
    l = n(710111),
    u = n(981631),
    c = n(474936);
function d(e, t) {
    return e.guildId === l.X8 ? 'default' : t ? 'custom-external' : 'custom';
}
function _(e, t, n, _) {
    var E;
    let f = i.Z.getChannel(o.Z.getVoiceChannelId()),
        h = null == f ? void 0 : f.getGuildId(),
        p = a.Z.getMediaSessionId(),
        m = a.Z.getRTCConnectionId(),
        I = null === (E = r.ZP.getCurrentGameForAnalytics()) || void 0 === E ? void 0 : E.name,
        T = h !== n.guildId && n.guildId !== l.X8,
        g = d(n, T);
    s.default.track(u.rMx.PREMIUM_FEATURE_USAGE, {
        feature_name: c.QP.SOUNDBOARD_PLAY,
        feature_tier: T ? c.h1.PREMIUM_STANDARD : c.h1.FREE,
        guild_id: h,
        location_stack: e,
        rtc_connection_id: m,
        media_session_id: p,
        in_overlay: t,
        application_name: I,
        emoji_count: null != n.emojiId || null != n.emojiName ? 1 : 0,
        feature_selection: g,
        feature_selection_id: n.soundId,
        sound_type: _
    });
}
