r.d(n, {
    M: function () {
        return a;
    }
});
let i = (e) => {
        let n;
        let r = new Set(),
            i = (e, i) => {
                let a = 'function' == typeof e ? e(n) : e;
                if (!Object.is(a, n)) {
                    let e = n;
                    (n = (null != i ? i : 'object' != typeof a || null === a) ? a : Object.assign({}, n, a)), r.forEach((r) => r(n, e));
                }
            },
            a = () => n,
            s = {
                setState: i,
                getState: a,
                getInitialState: () => o,
                subscribe: (e) => (r.add(e), () => r.delete(e))
            },
            o = (n = e(i, a, s));
        return s;
    },
    a = (e) => (e ? i(e) : i);
