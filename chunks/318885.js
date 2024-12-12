r.d(n, {
    Q: function () {
        return f;
    },
    t: function () {
        return d;
    }
});
var i = r(594190),
    a = r(388627),
    s = r(131951),
    o = r(449224),
    l = r(626135),
    u = r(367907),
    c = r(981631);
function d() {
    let e, n, r, a, o;
    let l = s.Z.getGoLiveSource();
    if (null != l && ((e = l.quality.resolution), (n = l.quality.frameRate), null != l.desktopSource)) {
        var u, c;
        r = l.desktopSource.soundshareSession;
        let e = null != l.desktopSource.sourcePid ? i.ZP.getGameForPID(l.desktopSource.sourcePid) : null;
        (a = null !== (u = null == e ? void 0 : e.name) && void 0 !== u ? u : null), (o = null !== (c = null == e ? void 0 : e.id) && void 0 !== c ? c : null);
    }
    return {
        video_input_resolution: e,
        video_input_frame_rate: n,
        soundshare_session: r,
        share_game_name: a,
        share_game_id: o
    };
}
function f(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = __OVERLAY__ ? o.Z.getGame() : (0, a.pL)();
    switch (
        ((n = {
            ...n,
            overlay_game_name: null != i ? i.name : 'Unknown Game',
            overlay_app_id: null != i ? i.id : null
        }),
        e)
    ) {
        case c.rMx.VOICE_CHANNEL_SELECTED:
        case c.rMx.SETTINGS_PANE_VIEWED:
        case c.rMx.GUILD_VIEWED:
        case c.rMx.CHANNEL_OPENED:
            return (0, u.yw)(e, n, r);
        default:
            return l.default.track(e, n, { flush: r });
    }
}
