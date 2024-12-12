r.d(n, {
    ZP: function () {
        return c;
    },
    h9: function () {
        return u;
    },
    nM: function () {
        return l;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(846519);
let l = s.createContext({
        onPreventIdle: () => null,
        onAllowIdle: () => null,
        onForceIdle: () => null,
        onActive: () => null
    }),
    u = s.createContext(!1);
function c(e) {
    let { children: n, timeout: r } = e,
        [i, c] = s.useState(!1),
        d = s.useRef(new Set()),
        f = s.useRef(null);
    s.useEffect(
        () => (
            (f.current = new o.sW(r, () => c(!0))),
            f.current.delay(),
            () => {
                var e;
                null === (e = f.current) || void 0 === e || e.cancel(), (f.current = null);
            }
        ),
        [r]
    );
    let _ = s.useCallback(
            (e) => {
                var n;
                c(!1), d.current.add(e), null === (n = f.current) || void 0 === n || n.cancel();
            },
            [d, f, c]
        ),
        h = s.useCallback(
            (e) => {
                if ((d.current.delete(e), 0 === d.current.size)) {
                    var n;
                    null === (n = f.current) || void 0 === n || n.delay();
                }
            },
            [d, f]
        ),
        p = s.useCallback(() => {
            if ((c(!1), 0 === d.current.size)) {
                var e;
                null === (e = f.current) || void 0 === e || e.delay();
            }
        }, [d, f, c]),
        m = s.useCallback(() => {
            var e;
            if (!(d.current.size > 0)) null === (e = f.current) || void 0 === e || e.cancel(), c(!0);
        }, [f, c]),
        g = s.useMemo(
            () => ({
                onAllowIdle: h,
                onPreventIdle: _,
                onActive: p,
                onForceIdle: m
            }),
            [h, _, p, m]
        );
    return (0, a.jsx)(u.Provider, {
        value: i,
        children: (0, a.jsx)(l.Provider, {
            value: g,
            children: n({
                idle: i,
                ...g
            })
        })
    });
}
