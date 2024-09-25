var r;
n.d(t, {
    BD: function () {
        return s;
    },
    dQ: function () {
        return r;
    },
    jO: function () {
        return l;
    }
}),
    !(function (e) {
        (e[(e.ExactMatch = 0)] = 'ExactMatch'), (e[(e.PrefixMatch = 1)] = 'PrefixMatch');
    })(r || (r = {}));
let i = (e) => /\p{P}/gu.test(null != e ? e : '') || ' ' === e || '' === e,
    a = (e, t, n) => {
        if (n - t > e.length) return !1;
        let r = e.charAt(t - 1),
            a = e.charAt(n + 1);
        return i(r) && i(a);
    },
    o = (e, t) => i(e.charAt(t - 1)),
    s = (e, t, n, r) => {
        if (1 === r) return o(e, t);
        return a(e, t, n);
    },
    l = (e, t, n, r) => {
        if (0 === r)
            return {
                start: t,
                end: n,
                keyword: e.substring(t, n + 1)
            };
        let a = n;
        for (; a < e.length - 1 && !i(e.charAt(a + 1)); ) a++;
        return {
            start: t,
            end: a,
            keyword: e.substring(t, a + 1)
        };
    };
