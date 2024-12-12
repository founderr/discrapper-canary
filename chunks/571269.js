var i = r(147018),
    a = r(581031),
    s = r(676125),
    o = r(959318),
    l = r(714050),
    u = r(936940),
    c = a(''.charAt);
i(
    {
        target: 'String',
        proto: !0,
        forced: u(function () {
            return '\uD842' !== '\uD842\uDFB7'.at(-2);
        })
    },
    {
        at: function (e) {
            var n = l(s(this)),
                r = n.length,
                i = o(e),
                a = i >= 0 ? i : r + i;
            return a < 0 || a >= r ? void 0 : c(n, a);
        }
    }
);
