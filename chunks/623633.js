e.d(t, {
    Z: function () {
        return l;
    }
});
var i = e(442837),
    r = e(592125),
    u = e(944486);
function l() {
    return (0, i.e7)([u.Z, r.Z], () => {
        let n = u.Z.getVoiceChannelId();
        if (null != n) {
            let t = r.Z.getChannel(n);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
        }
        return null;
    });
}
