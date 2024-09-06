n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(314897),
    s = n(565799),
    a = n(501655),
    l = n(88751),
    r = n(427679);
function o(e) {
    if (!e.isGuildStageVoice() || !r.Z.isLive(e.id)) return !1;
    let t = i.default.getId();
    return !!(l.ZP.isModerator(t, e.id) && l.ZP.isSpeaker(t, e.id)) && (null == s.Z.getMutableParticipants(e.id).find((n) => n.user.id !== t && l.ZP.isModerator(n.user.id, e.id)) || null == s.Z.getMutableParticipants(e.id, a.pV.SPEAKER).find((n) => n.user.id !== t && l.ZP.isModerator(n.user.id, e.id)));
}
