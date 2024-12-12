e.exports = function (e, n, i) {
    var a,
        s,
        o,
        l,
        u = this,
        c = {},
        d = 0,
        f = !1;
    for (s = 0, a = u.getMatches(e, n, i); s < a.length; ++s) a[s].seq && (d = Math.max(d, a[s].level));
    for (s = 0; s < a.length; ++s) {
        if (a[s].seq) {
            if (a[s].level !== d) continue;
            (f = !0), (c[a[s].seq] = 1), u.fireCallback(a[s].callback, i, a[s].combo, a[s].seq);
            continue;
        }
        !f && u.fireCallback(a[s].callback, i, a[s].combo);
    }
    (l = 'keypress' === i.type && u.ignoreNextKeypress), (o = r(64000)), i.type === u.nextExpectedAction && !o(e) && !l && u.resetSequences(c), (u.ignoreNextKeypress = f && 'keydown' === i.type);
};
