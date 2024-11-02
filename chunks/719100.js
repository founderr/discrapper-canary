n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(314897),
    l = n(565799),
    r = n(501655),
    a = n(88751),
    s = n(427679);
function o(e) {
    if (!e.isGuildStageVoice() || !s.Z.isLive(e.id)) return !1;
    let t = i.default.getId();
    return !!(a.ZP.isModerator(t, e.id) && a.ZP.isSpeaker(t, e.id)) && (null == l.Z.getMutableParticipants(e.id).find((n) => n.user.id !== t && a.ZP.isModerator(n.user.id, e.id)) || null == l.Z.getMutableParticipants(e.id, r.pV.SPEAKER).find((n) => n.user.id !== t && a.ZP.isModerator(n.user.id, e.id)));
}
