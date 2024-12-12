r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(594190),
    a = r(592125),
    s = r(19780),
    o = r(944486),
    l = r(626135),
    u = r(710111),
    c = r(981631),
    d = r(474936);
function f(e, n) {
    return e.guildId === u.X8 ? 'default' : n ? 'custom-external' : 'custom';
}
function _(e, n, r, _) {
    var h;
    let p = a.Z.getChannel(o.Z.getVoiceChannelId()),
        m = null == p ? void 0 : p.getGuildId(),
        g = s.Z.getMediaSessionId(),
        E = s.Z.getRTCConnectionId(),
        v = null === (h = i.ZP.getCurrentGameForAnalytics()) || void 0 === h ? void 0 : h.name,
        I = m !== r.guildId && r.guildId !== u.X8,
        T = f(r, I);
    l.default.track(c.rMx.PREMIUM_FEATURE_USAGE, {
        feature_name: d.QP.SOUNDBOARD_PLAY,
        feature_tier: I ? d.h1.PREMIUM_STANDARD : d.h1.FREE,
        guild_id: m,
        location_stack: e,
        rtc_connection_id: E,
        media_session_id: g,
        in_overlay: n,
        application_name: v,
        emoji_count: null != r.emojiId || null != r.emojiName ? 1 : 0,
        feature_selection: T,
        feature_selection_id: r.soundId,
        sound_type: _
    });
}
