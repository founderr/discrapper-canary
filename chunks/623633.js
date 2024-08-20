n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(442837),
    s = n(592125),
    a = n(944486);
function r() {
    return (0, i.e7)([a.Z, s.Z], () => {
        let e = a.Z.getVoiceChannelId();
        if (null != e) {
            let t = s.Z.getChannel(e);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
        }
        return null;
    });
}
