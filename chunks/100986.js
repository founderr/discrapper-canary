n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(594190),
    i = n(592125),
    a = n(19780),
    s = n(944486),
    o = n(626135),
    l = n(710111),
    u = n(981631),
    c = n(474936);
function d(e, t, n, d) {
    var f, _, p;
    let h = i.Z.getChannel(s.Z.getVoiceChannelId()),
        m = null == h ? void 0 : h.getGuildId(),
        g = a.Z.getMediaSessionId(),
        E = a.Z.getRTCConnectionId(),
        v = null === (f = r.ZP.getCurrentGameForAnalytics()) || void 0 === f ? void 0 : f.name,
        b = m !== n.guildId && n.guildId !== l.X8;
    let I = ((_ = n), (p = b), _.guildId === l.X8 ? 'default' : p ? 'custom-external' : 'custom');
    o.default.track(u.rMx.PREMIUM_FEATURE_USAGE, {
        feature_name: c.QP.SOUNDBOARD_PLAY,
        feature_tier: b ? c.h1.PREMIUM_STANDARD : c.h1.FREE,
        guild_id: m,
        location_stack: e,
        rtc_connection_id: E,
        media_session_id: g,
        in_overlay: t,
        application_name: v,
        emoji_count: null != n.emojiId || null != n.emojiName ? 1 : 0,
        feature_selection: I,
        feature_selection_id: n.soundId,
        sound_type: d
    });
}
