e.d(n, {
    Z: function () {
        return o;
    }
});
var r = e(442837),
    i = e(592125),
    u = e(944486);
function o() {
    return (0, r.e7)([u.Z, i.Z], () => {
        let t = u.Z.getVoiceChannelId();
        if (null != t) {
            let n = i.Z.getChannel(t);
            if (null == n ? void 0 : n.isGuildStageVoice()) return n;
        }
        return null;
    });
}
