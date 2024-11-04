e.d(t, {
    Z: function () {
        return a;
    }
});
var i = e(442837),
    r = e(592125),
    l = e(944486);
function a() {
    return (0, i.e7)([l.Z, r.Z], () => {
        let n = l.Z.getVoiceChannelId();
        if (null != n) {
            let t = r.Z.getChannel(n);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
        }
        return null;
    });
}
