e.exports = function (e, n, i, a, s, o) {
    var l,
        u,
        c,
        d,
        f = this,
        _ = [],
        h = i.type;
    if (
        ('keypress' === h &&
            !(i.code && 'Arrow' === i.code.slice(0, 5)) &&
            (f.callbacks['any-character'] || []).forEach(function (e) {
                _.push(e);
            }),
        !f.callbacks[e])
    )
        return _;
    for (c = r(64000), 'keyup' === h && c(e) && (n = [e]), l = 0; l < f.callbacks[e].length; ++l) {
        if (((u = f.callbacks[e][l]), (!!a || !u.seq || f.sequenceLevels[u.seq] === u.level) && h === u.action)) {
            if (((d = r(758686)), ('keypress' === h && !i.metaKey && !i.ctrlKey) || d(n, u.modifiers))) {
                var p = !a && u.combo === s,
                    m = a && u.seq === a && u.level === o;
                (p || m) && f.callbacks[e].splice(l, 1), _.push(u);
            }
        }
    }
    return _;
};
