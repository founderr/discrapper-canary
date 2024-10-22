n.d(t, {
    ZP: function () {
        return a;
    }
});
var i = n(829750),
    l = n(981631);
function a(e) {
    let { channel: t, locked: n, video: a, selected: r } = e;
    return (
        (function (e) {
            let { channel: t, video: n, considerMaxStageVoiceUserLimit: a = !0 } = e,
                { limit: r } = (0, i.Z)(t),
                s = -1;
            return (t.userLimit > 0 && (s = t.userLimit), n && r > 0 && (s = s > 0 ? Math.min(s, r) : r), a && s === l.xGv) ? 0 : s;
        })({
            channel: t,
            video: a
        }) > 0 &&
        !n &&
        !r
    );
}
