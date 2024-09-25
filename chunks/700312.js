var r = n(581031),
    i = n(959318),
    a = n(714050),
    o = n(676125),
    s = r(''.charAt),
    l = r(''.charCodeAt),
    u = r(''.slice),
    c = function (e) {
        return function (t, n) {
            var r,
                c,
                d = a(o(t)),
                _ = i(n),
                E = d.length;
            return _ < 0 || _ >= E ? (e ? '' : void 0) : (r = l(d, _)) < 55296 || r > 56319 || _ + 1 === E || (c = l(d, _ + 1)) < 56320 || c > 57343 ? (e ? s(d, _) : r) : e ? u(d, _, _ + 2) : ((r - 55296) << 10) + (c - 56320) + 65536;
        };
    };
e.exports = {
    codeAt: c(!1),
    charAt: c(!0)
};
