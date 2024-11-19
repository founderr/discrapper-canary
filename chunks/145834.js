n.d(t, {
    $: function () {
        return s;
    }
});
var i = n(70956),
    l = n(51144),
    r = n(388032);
let a = 1 * i.Z.Millis.DAY;
function s(e) {
    var t, n, i;
    if ((0, l.EO)(e.user)) return r.intl.string(r.t.VaCdhY);
    let s = null === (t = e.member) || void 0 === t ? void 0 : t.joinedAt;
    return null == s ? r.intl.string(r.t.CQmziY) : null != e.member && e.member.roles.length > 0 ? (null !== (i = null === (n = e.role) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : r.intl.string(r.t['97/NdH'])) : new Date().getTime() - Date.parse(s) < a ? r.intl.string(r.t.IKE48v) : r.intl.string(r.t.u0gUWl);
}
