var r = n(67867),
    i = n(96403),
    a = n(223944),
    o = RangeError,
    s = String.fromCharCode,
    l = String.fromCodePoint,
    u = i([].join);
r(
    {
        target: 'String',
        stat: !0,
        arity: 1,
        forced: !!l && 1 !== l.length
    },
    {
        fromCodePoint: function (e) {
            for (var t, n = [], r = arguments.length, i = 0; r > i; ) {
                if (((t = +arguments[i++]), a(t, 1114111) !== t)) throw new o(t + ' is not a valid code point');
                n[i] = t < 65536 ? s(t) : s(((t -= 65536) >> 10) + 55296, (t % 1024) + 56320);
            }
            return u(n, '');
        }
    }
);
