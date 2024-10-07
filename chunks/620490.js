r.d(n, {
    Z: function () {
        return t;
    }
});
function t(e, n) {
    if (e.score === n.score) {
        var r, t, o, l, i, a;
        let u = null !== (l = null !== (o = e.sortable) && void 0 !== o ? o : null === (r = e.comparator) || void 0 === r ? void 0 : r.toLocaleLowerCase()) && void 0 !== l ? l : '',
            c = null !== (a = null !== (i = e.sortable) && void 0 !== i ? i : null === (t = n.comparator) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && void 0 !== a ? a : '';
        if (u < c) return -1;
        if (u > c) return 1;
    }
    return n.score - e.score;
}
