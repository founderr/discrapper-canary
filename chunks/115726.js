var r = n(581031),
    i = n(339718),
    a = Math.floor,
    o = r(''.charAt),
    s = r(''.replace),
    l = r(''.slice),
    u = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    c = /\$([$&'`]|\d{1,2})/g;
e.exports = function (e, t, n, r, d, _) {
    var E = n + e.length,
        f = r.length,
        h = c;
    return (
        void 0 !== d && ((d = i(d)), (h = u)),
        s(_, h, function (i, s) {
            var u;
            switch (o(s, 0)) {
                case '$':
                    return '$';
                case '&':
                    return e;
                case '`':
                    return l(t, 0, n);
                case "'":
                    return l(t, E);
                case '<':
                    u = d[l(s, 1, -1)];
                    break;
                default:
                    var c = +s;
                    if (0 === c) return i;
                    if (c > f) {
                        var _ = a(c / 10);
                        if (0 === _) return i;
                        if (_ <= f) return void 0 === r[_ - 1] ? o(s, 1) : r[_ - 1] + o(s, 1);
                        return i;
                    }
                    u = r[c - 1];
            }
            return void 0 === u ? '' : u;
        })
    );
};
