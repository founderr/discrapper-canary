function r(e, t) {
    if (e.score === t.score) {
        var n, r, i, a, o, s;
        let l = null !== (a = null !== (i = e.sortable) && void 0 !== i ? i : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== a ? a : '',
            u = null !== (s = null !== (o = e.sortable) && void 0 !== o ? o : null === (r = t.comparator) || void 0 === r ? void 0 : r.toLocaleLowerCase()) && void 0 !== s ? s : '';
        if (l < u) return -1;
        if (l > u) return 1;
    }
    return t.score - e.score;
}
n.d(t, {
    Z: function () {
        return r;
    }
});
