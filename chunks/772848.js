var i = r(258099),
    a = r(883830),
    s = r(14309);
function o(e, n, r) {
    if (i.Z.randomUUID && !n && !e) return i.Z.randomUUID();
    let o = (e = e || {}).random || (e.rng || a.Z)();
    if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), n)) {
        r = r || 0;
        for (let e = 0; e < 16; ++e) n[r + e] = o[e];
        return n;
    }
    return (0, s.S)(o);
}
n.Z = o;
