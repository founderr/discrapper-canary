e.exports = function (e, t, r, i, a, s) {
    var o,
        l,
        u,
        c,
        d = [],
        f = r.type;
    if (
        ('keypress' === f &&
            !(r.code && 'Arrow' === r.code.slice(0, 5)) &&
            (this.callbacks['any-character'] || []).forEach(function (e) {
                d.push(e);
            }),
        !this.callbacks[e])
    )
        return d;
    for (u = n(64000), 'keyup' === f && u(e) && (t = [e]), o = 0; o < this.callbacks[e].length; ++o) {
        if (((l = this.callbacks[e][o]), (!!i || !l.seq || this.sequenceLevels[l.seq] === l.level) && f === l.action)) {
            if (((c = n(758686)), ('keypress' === f && !r.metaKey && !r.ctrlKey) || c(t, l.modifiers))) {
                var _ = !i && l.combo === a,
                    h = i && l.seq === i && l.level === s;
                (_ || h) && this.callbacks[e].splice(o, 1), d.push(l);
            }
        }
    }
    return d;
};
