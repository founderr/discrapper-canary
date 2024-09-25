n.d(t, {
    aB: function () {
        return u;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(392711),
    o = n.n(a);
let s = new (n(710845).Z)('DragAndDropUtils');
function l(e) {
    let { oldOrdering: t, newOrdering: n, idGetter: r, existingPositionGetter: i, ascending: a = !0 } = e,
        o = n.length;
    if (t.length !== o) return s.warn('Arrays are not of the same length!', t, n), [];
    let l = t.map(r).sort().join(':'),
        u = n.map(r).sort().join(':');
    if (l !== u) return s.warn('Object IDs in the old ordering and the new ordering are not the same.', l, u), [];
    let c = {};
    for (let e = 0; e < o; e++) c[r(t[e])] = i(t[e]);
    let d = [];
    for (let e = 0; e < o; e++) {
        let t = r(n[e]),
            s = c[t],
            l = a ? e : o - 1 - e;
        (s !== l || i(n[e]) !== l) &&
            d.push({
                id: t,
                position: l
            });
    }
    return !a && d.reverse(), d;
}
function u(e, t, n) {
    let r = e[t],
        i = [...e];
    return i.splice(t, 1), i.splice(n, 0, r), i;
}
function c(e) {
    let { objectArray: t, fromPosition: n, toPosition: r, idGetter: i, existingPositionGetter: a, ascending: s = !0 } = e;
    !Array.isArray(t) && (t = o().values(t));
    let c = u(t, n, r);
    return l({
        oldOrdering: t,
        newOrdering: c,
        idGetter: i,
        existingPositionGetter: a,
        ascending: s
    });
}
t.ZP = {
    moveItemFromTo: u,
    calculatePositionDeltas: l,
    getPositionUpdates: c
};
