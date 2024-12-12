var i;
r.d(n, {
    BD: function () {
        return l;
    },
    dQ: function () {
        return i;
    },
    jO: function () {
        return u;
    }
}),
    !(function (e) {
        (e[(e.ExactMatch = 0)] = 'ExactMatch'), (e[(e.PrefixMatch = 1)] = 'PrefixMatch');
    })(i || (i = {}));
let a = (e) => /\p{P}/gu.test(null != e ? e : '') || ' ' === e || '' === e,
    s = (e, n, r) => {
        if (r - n > e.length) return !1;
        let i = e.charAt(n - 1),
            s = e.charAt(r + 1);
        return a(i) && a(s);
    },
    o = (e, n) => a(e.charAt(n - 1)),
    l = (e, n, r, i) => {
        if (1 === i) return o(e, n);
        return s(e, n, r);
    },
    u = (e, n, r, i) => {
        if (0 === i)
            return {
                start: n,
                end: r,
                keyword: e.substring(n, r + 1)
            };
        let s = r;
        for (; s < e.length - 1 && !a(e.charAt(s + 1)); ) s++;
        return {
            start: n,
            end: s,
            keyword: e.substring(n, s + 1)
        };
    };
