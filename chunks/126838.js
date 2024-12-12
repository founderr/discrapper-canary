e.exports = function (e, n, r, i, a) {
    var s,
        o = this;
    o.directMap[e + ':' + r] = n;
    var l = (e = e.replace(/\s+/g, ' ')).split(' ');
    if (l.length > 1) {
        o.bindSequence(e, l, n, r);
        return;
    }
    (s = o.getKeyInfo(e, r)),
        (o.callbacks[s.key] = o.callbacks[s.key] || []),
        o.getMatches(s.key, s.modifiers, { type: s.action }, i, e, a),
        o.callbacks[s.key][i ? 'unshift' : 'push']({
            callback: n,
            modifiers: s.modifiers,
            action: s.action,
            seq: i,
            level: a,
            combo: e
        });
};
