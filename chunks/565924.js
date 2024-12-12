r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(592125),
    a = r(981631);
function s(e) {
    if (null == e.parent_id) return e.type === a.d4z.GUILD_CATEGORY ? (e.position + 1) * 1000 : e.position;
    {
        var n, r;
        let a = ((null !== (r = null === (n = i.Z.getChannel(e.parent_id)) || void 0 === n ? void 0 : n.position) && void 0 !== r ? r : 0) + 1) * 1000;
        return e.isGuildVocal() ? a + e.position + 500 : a + e.position;
    }
}
function o(e, n) {
    var r, i, a, o, l, u;
    if (e.score !== n.score) return n.score - e.score;
    let c = s(e.record),
        d = s(n.record);
    if (c !== d) return c - d;
    let f = null !== (o = null !== (a = e.sortable) && void 0 !== a ? a : null === (r = e.comparator) || void 0 === r ? void 0 : r.toLocaleLowerCase()) && void 0 !== o ? o : '',
        _ = null !== (u = null !== (l = e.sortable) && void 0 !== l ? l : null === (i = n.comparator) || void 0 === i ? void 0 : i.toLocaleLowerCase()) && void 0 !== u ? u : '';
    return f < _ ? -1 : f > _ ? 1 : 0;
}
