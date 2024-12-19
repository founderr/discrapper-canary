r.d(n, {
    Q: function () {
        return h;
    },
    t: function () {
        return _;
    }
});
var i = r(615287),
    a = r(594190),
    s = r(371651),
    o = r(388627),
    l = r(131951),
    u = r(449224),
    c = r(626135),
    d = r(367907),
    f = r(981631);
function _() {
    let e, n, r, i, s;
    let o = l.Z.getGoLiveSource();
    if (null != o && ((e = o.quality.resolution), (n = o.quality.frameRate), null != o.desktopSource)) {
        var u, c;
        r = o.desktopSource.soundshareSession;
        let e = null != o.desktopSource.sourcePid ? a.ZP.getGameForPID(o.desktopSource.sourcePid) : null;
        (i = null !== (u = null == e ? void 0 : e.name) && void 0 !== u ? u : null), (s = null !== (c = null == e ? void 0 : e.id) && void 0 !== c ? c : null);
    }
    return {
        video_input_resolution: e,
        video_input_frame_rate: n,
        soundshare_session: r,
        share_game_name: i,
        share_game_id: s
    };
}
function h(e, n) {
    var r;
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        _ = __OVERLAY__ ? u.Z.getGame() : (0, o.pL)(),
        h = a.ZP.getRunningGames().find((e) => e.name === (null == _ ? void 0 : _.name)),
        p = null !== (r = s.Z.getRenderMethod(null == h ? void 0 : h.pid)) && void 0 !== r ? r : i.gl.Disabled;
    switch (
        ((n = {
            ...n,
            overlay_game_name: null != _ ? _.name : 'Unknown Game',
            overlay_app_id: null != _ ? _.id : null,
            overlay_method: i.gl[p]
        }),
        e)
    ) {
        case f.rMx.VOICE_CHANNEL_SELECTED:
        case f.rMx.SETTINGS_PANE_VIEWED:
        case f.rMx.GUILD_VIEWED:
        case f.rMx.CHANNEL_OPENED:
            return (0, d.yw)(e, n, l);
        default:
            return c.default.track(e, n, { flush: l });
    }
}
