r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(594190);
function a(e) {
    let n, r;
    if (null == e) return {};
    let a = e.sourcePid;
    if (null != a) {
        let e = i.ZP.getGameForPID(a);
        (n = null == e ? void 0 : e.name), (r = null == e ? void 0 : e.id);
    }
    return {
        soundshare_session: e.soundshareSession,
        share_game_name: n,
        share_game_id: r
    };
}
