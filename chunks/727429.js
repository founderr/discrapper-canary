r.d(n, {
    Z: function () {
        return l;
    },
    e: function () {
        return u;
    }
});
var i = r(442837),
    a = r(914010),
    s = r(853856),
    o = r(981631);
function l(e) {
    let n = (0, i.e7)([a.Z], () => a.Z.getGuildId());
    return null != n ? n : e.getGuildId();
}
function u(e) {
    return a.Z.getGuildId() !== o.I_8 ? e.getGuildId() : s.Z.isFavorite(e.id) || (e.isThread() && s.Z.isFavorite(e.parent_id)) ? o.I_8 : e.getGuildId();
}
