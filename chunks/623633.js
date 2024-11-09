e.d(t, {
    Z: function () {
        return r;
    }
});
var i = e(442837),
    u = e(592125),
    l = e(944486);
function r() {
    return (0, i.e7)([l.Z, u.Z], () => {
        let n = l.Z.getVoiceChannelId();
        if (null != n) {
            let t = u.Z.getChannel(n);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
        }
        return null;
    });
}
