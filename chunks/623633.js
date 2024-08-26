t.d(n, {
    Z: function () {
        return u;
    }
});
var r = t(442837),
    i = t(592125),
    E = t(944486);
function u() {
    return (0, r.e7)([E.Z, i.Z], () => {
        let e = E.Z.getVoiceChannelId();
        if (null != e) {
            let n = i.Z.getChannel(e);
            if (null == n ? void 0 : n.isGuildStageVoice()) return n;
        }
        return null;
    });
}
