t.d(e, {
    Z: function () {
        return u;
    }
});
var i = t(442837),
    l = t(592125),
    r = t(944486);
function u() {
    return (0, i.e7)([r.Z, l.Z], () => {
        let n = r.Z.getVoiceChannelId();
        if (null != n) {
            let e = l.Z.getChannel(n);
            if (null == e ? void 0 : e.isGuildStageVoice()) return e;
        }
        return null;
    });
}
