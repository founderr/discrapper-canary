r.d(n, {
    aB: function () {
        return c;
    }
});
var i = r(653041);
var a = r(47120);
var s = r(392711),
    o = r.n(s);
let l = new (r(710845).Z)('DragAndDropUtils');
function u(e) {
    let { oldOrdering: n, newOrdering: r, idGetter: i, existingPositionGetter: a, ascending: s = !0 } = e,
        o = r.length;
    if (n.length !== o) return l.warn('Arrays are not of the same length!', n, r), [];
    let u = n.map(i).sort().join(':'),
        c = r.map(i).sort().join(':');
    if (u !== c) return l.warn('Object IDs in the old ordering and the new ordering are not the same.', u, c), [];
    let d = {};
    for (let e = 0; e < o; e++) d[i(n[e])] = a(n[e]);
    let f = [];
    for (let e = 0; e < o; e++) {
        let n = i(r[e]),
            l = d[n],
            u = s ? e : o - 1 - e;
        (l !== u || a(r[e]) !== u) &&
            f.push({
                id: n,
                position: u
            });
    }
    return !s && f.reverse(), f;
}
function c(e, n, r) {
    let i = e[n],
        a = [...e];
    return a.splice(n, 1), a.splice(r, 0, i), a;
}
function d(e) {
    let { objectArray: n, fromPosition: r, toPosition: i, idGetter: a, existingPositionGetter: s, ascending: l = !0 } = e;
    !Array.isArray(n) && (n = o().values(n));
    let d = c(n, r, i);
    return u({
        oldOrdering: n,
        newOrdering: d,
        idGetter: a,
        existingPositionGetter: s,
        ascending: l
    });
}
n.ZP = {
    moveItemFromTo: c,
    calculatePositionDeltas: u,
    getPositionUpdates: d
};
