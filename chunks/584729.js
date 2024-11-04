n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(271383),
    l = n(5192),
    r = n(354459),
    s = n(388032);
function a(e, t, n) {
    var a, o;
    if (t.type === r.fO.ACTIVITY) return null !== (o = null == n ? void 0 : n.name) && void 0 !== o ? o : null;
    let c = i.ZP.isGuestOrLurker(e.guild_id, null === (a = t.user) || void 0 === a ? void 0 : a.id);
    return l.ZP.getName(e.getGuildId(), e.id, t.user) + (c ? ' '.concat(s.intl.string(s.t['pFO/Pj'])) : '');
}
