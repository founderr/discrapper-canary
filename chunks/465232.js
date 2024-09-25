e.exports = function (e, t) {
    var r,
        i,
        a,
        o,
        s,
        l,
        u = this,
        c = [];
    for (a = 0, r = n(727729)(e), o = n(862546), s = n(861391), l = n(64000); a < r.length; ++a) o[(i = r[a])] && (i = o[i]), t && 'keypress' !== t && s[i] && ((i = s[i]), c.push('shift')), l(i) && c.push(i);
    return (
        (t = u.pickBestAction(i, c, t)),
        {
            key: i,
            modifiers: c,
            action: t
        }
    );
};
