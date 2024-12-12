var i = r(317063),
    a = r(757209);
function s(e) {
    return i(function (n, r) {
        var i = -1,
            s = r.length,
            o = s > 1 ? r[s - 1] : void 0,
            l = s > 2 ? r[2] : void 0;
        for (o = e.length > 3 && 'function' == typeof o ? (s--, o) : void 0, l && a(r[0], r[1], l) && ((o = s < 3 ? void 0 : o), (s = 1)), n = Object(n); ++i < s; ) {
            var u = r[i];
            u && e(n, u, i, o);
        }
        return n;
    });
}
e.exports = s;
