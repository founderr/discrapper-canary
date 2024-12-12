var i = r(4609),
    a = Math.max;
function s(e, n, r) {
    return (
        (n = a(void 0 === n ? e.length - 1 : n, 0)),
        function () {
            for (var s = arguments, o = -1, l = a(s.length - n, 0), u = Array(l); ++o < l; ) u[o] = s[n + o];
            o = -1;
            for (var c = Array(n + 1); ++o < n; ) c[o] = s[o];
            return (c[n] = r(u)), i(e, this, c);
        }
    );
}
e.exports = s;
