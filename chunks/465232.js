e.exports = function (e, n) {
    var i,
        a,
        s,
        o,
        l,
        u,
        c = this,
        d = [];
    for (s = 0, i = r(727729)(e), o = r(862546), l = r(861391), u = r(64000); s < i.length; ++s) o[(a = i[s])] && (a = o[a]), n && 'keypress' !== n && l[a] && ((a = l[a]), d.push('shift')), u(a) && d.push(a);
    return (
        (n = c.pickBestAction(a, d, n)),
        {
            key: a,
            modifiers: d,
            action: n
        }
    );
};
