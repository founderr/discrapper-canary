n.d(t, {
    $w: function () {
        return g;
    },
    Bh: function () {
        return h;
    },
    Gx: function () {
        return v;
    },
    TA: function () {
        return _;
    },
    V$: function () {
        return p;
    },
    g5: function () {
        return m;
    },
    i7: function () {
        return E;
    },
    rD: function () {
        return c;
    },
    sd: function () {
        return d;
    }
});
var r = n(367907),
    i = n(592125),
    a = n(19780),
    s = n(626135),
    o = n(768581),
    l = n(678916),
    u = n(981631);
function c(e) {
    return null != e && 'object' == typeof e && 'id' in e && e.type === l.xV.BACKGROUND;
}
function d(e) {
    return 'number' == typeof e && e in l.dp;
}
function f(e) {
    return d(e) ? l.X7.includes(e) : !!c(e) && ((0, o.xR)(e.asset) || (0, o.ay)(e.asset));
}
function _(e) {
    return null != e ? 'Video Background' : 'None';
}
function p(e) {
    if (null == e) return 'None';
    if (c(e)) return 'Custom';
    if ('blur' === e) return 'Blur';
    else
        return 'Preset - '.concat(
            (function (e) {
                switch (e) {
                    case l.dp.OPTION_1:
                        return 'Cybercity';
                    case l.dp.OPTION_2:
                        return 'Discord the Movie';
                    case l.dp.OPTION_3:
                        return 'Wumpus Vacation';
                    case l.dp.OPTION_4:
                        return 'Vaporwave';
                    case l.dp.OPTION_7:
                        return 'Capernite Day';
                    case l.dp.OPTION_8:
                        return 'Capernite Night';
                    case l.dp.OPTION_9:
                        return 'Hacker Den';
                    case l.dp.OPTION_10:
                        return 'Wumpice';
                }
            })(e)
        );
}
function h(e, t, n) {
    let o = a.Z.getGuildId(),
        l = a.Z.getChannelId(),
        c = i.Z.getChannel(l),
        d = (0, r.kO)(o, l, !0);
    s.default.track(u.rMx.VIDEO_EFFECT_UPDATED, {
        location: t,
        effect_type: _(e),
        effect_detail: p(e),
        effect_state: n,
        channel_id: l,
        channel_type: null == c ? void 0 : c.type,
        guild_id: o,
        voice_state_count: d.voice_state_count,
        video_stream_count: d.video_stream_count,
        media_session_id: a.Z.getMediaSessionId(),
        rtc_connection_id: a.Z.getRTCConnectionId(),
        is_animated: f(e)
    });
}
function m(e, t, n) {
    s.default.track(u.rMx.VIDEO_BACKGROUND_ADDED, {
        is_animated: f(e),
        is_video: t,
        is_from_tenor: n
    });
}
function g(e) {
    s.default.track(u.rMx.VIDEO_BACKGROUND_DELETED, { is_animated: f(e) });
}
function E(e) {
    if (null == e) return { oneofKind: void 0 };
    if (c(e))
        return {
            oneofKind: 'customAsset',
            customAsset: {
                id: e.id,
                assetHash: e.asset
            }
        };
    if ('blur' === e)
        return {
            oneofKind: 'blur',
            blur: { useBlur: !0 }
        };
    else
        return {
            oneofKind: 'presetOption',
            presetOption: e
        };
}
function v(e, t) {
    if (null == e || void 0 === e.oneofKind) return null;
    switch (e.oneofKind) {
        case 'customAsset':
            return {
                type: l.xV.BACKGROUND,
                id: e.customAsset.id,
                user_id: t,
                asset: e.customAsset.assetHash
            };
        case 'blur':
            return e.blur.useBlur ? 'blur' : null;
        case 'presetOption':
            return e.presetOption;
    }
}
