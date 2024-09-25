e.exports = function (e, t, r) {
    var i,
        a,
        o,
        s,
        l = this,
        u = {},
        c = 0,
        d = !1;
    for (a = 0, i = l.getMatches(e, t, r); a < i.length; ++a) i[a].seq && (c = Math.max(c, i[a].level));
    for (a = 0; a < i.length; ++a) {
        if (i[a].seq) {
            if (i[a].level !== c) continue;
            (d = !0), (u[i[a].seq] = 1), l.fireCallback(i[a].callback, r, i[a].combo, i[a].seq);
            continue;
        }
        !d && l.fireCallback(i[a].callback, r, i[a].combo);
    }
    (s = 'keypress' === r.type && l.ignoreNextKeypress), (o = n(64000)), r.type === l.nextExpectedAction && !o(e) && !s && l.resetSequences(u), (l.ignoreNextKeypress = d && 'keydown' === r.type);
};
