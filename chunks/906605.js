n.d(t, {
    Sc: function () {
        return f;
    },
    UP: function () {
        return h;
    },
    Zx: function () {
        return _;
    },
    _s: function () {
        return E;
    }
});
var r = n(47120);
var i = n(570140),
    a = n(339085),
    o = n(592125),
    s = n(19780),
    l = n(944486),
    u = n(626135),
    c = n(106301),
    d = n(981631);
function _(e, t) {
    var n;
    if (null == e) {
        f(t);
        return;
    }
    i.Z.dispatch({
        type: 'UPDATE_HANG_STATUS',
        status: e,
        saveAsDefault: t
    }),
        u.default.track(d.rMx.SET_HANG_STATUS, {
            status_type: e,
            channel_id: l.Z.getVoiceChannelId(),
            guild_id: null === (n = o.Z.getChannel(l.Z.getVoiceChannelId())) || void 0 === n ? void 0 : n.guild_id,
            media_session_id: s.Z.getMediaSessionId()
        });
}
function E(e, t, n) {
    var r;
    if ('' === e || null == t) {
        f(n);
        return;
    }
    i.Z.dispatch({
        type: 'UPDATE_HANG_STATUS_CUSTOM',
        emoji: t,
        status: e,
        saveAsDefault: n
    }),
        u.default.track(d.rMx.SET_HANG_STATUS, {
            status_type: e,
            channel_id: l.Z.getVoiceChannelId(),
            guild_id: null === (r = o.Z.getChannel(l.Z.getVoiceChannelId())) || void 0 === r ? void 0 : r.guild_id,
            media_session_id: s.Z.getMediaSessionId()
        });
}
function f(e) {
    var t;
    i.Z.dispatch({
        type: 'CLEAR_HANG_STATUS',
        saveAsDefault: e
    }),
        u.default.track(d.rMx.CLEAR_HANG_STATUS, {
            channel_id: l.Z.getVoiceChannelId(),
            guild_id: null === (t = o.Z.getChannel(l.Z.getVoiceChannelId())) || void 0 === t ? void 0 : t.guild_id,
            media_session_id: s.Z.getMediaSessionId()
        });
}
function h() {
    let e = [c.Z.getCustomHangStatus(), ...c.Z.getRecentCustomStatuses()].filter((e) => {
        var t;
        return null != e && null != e.emoji && (null === (t = e.emoji) || void 0 === t ? void 0 : t.id) != null && null == a.ZP.getCustomEmojiById(e.emoji.id);
    });
    e.length > 0 &&
        i.Z.dispatch({
            type: 'DELETE_INVALID_HANG_STATUSES',
            statuses: e
        });
}
