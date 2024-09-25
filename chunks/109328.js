e.exports = function (e, t, r, i, a, o) {
    var s,
        l,
        u,
        c,
        d = this,
        _ = [],
        E = r.type;
    if (
        ('keypress' === E &&
            !(r.code && 'Arrow' === r.code.slice(0, 5)) &&
            (d.callbacks['any-character'] || []).forEach(function (e) {
                _.push(e);
            }),
        !d.callbacks[e])
    )
        return _;
    for (u = n(64000), 'keyup' === E && u(e) && (t = [e]), s = 0; s < d.callbacks[e].length; ++s) {
        if (((l = d.callbacks[e][s]), (!!i || !l.seq || d.sequenceLevels[l.seq] === l.level) && E === l.action)) {
            if (((c = n(758686)), ('keypress' === E && !r.metaKey && !r.ctrlKey) || c(t, l.modifiers))) {
                var f = !i && l.combo === a,
                    h = i && l.seq === i && l.level === o;
                (f || h) && d.callbacks[e].splice(s, 1), _.push(l);
            }
        }
    }
    return _;
};
