n.d(t, {
    ZP: function () {
        return u;
    },
    h9: function () {
        return l;
    },
    nM: function () {
        return s;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(846519);
let s = a.createContext({
        onPreventIdle: () => null,
        onAllowIdle: () => null,
        onForceIdle: () => null,
        onActive: () => null
    }),
    l = a.createContext(!1);
function u(e) {
    let { children: t, timeout: n } = e,
        [r, u] = a.useState(!1),
        c = a.useRef(new Set()),
        d = a.useRef(null);
    a.useEffect(
        () => (
            (d.current = new o.sW(n, () => u(!0))),
            d.current.delay(),
            () => {
                var e;
                null === (e = d.current) || void 0 === e || e.cancel(), (d.current = null);
            }
        ),
        [n]
    );
    let _ = a.useCallback(
            (e) => {
                var t;
                u(!1), c.current.add(e), null === (t = d.current) || void 0 === t || t.cancel();
            },
            [c, d, u]
        ),
        E = a.useCallback(
            (e) => {
                if ((c.current.delete(e), 0 === c.current.size)) {
                    var t;
                    null === (t = d.current) || void 0 === t || t.delay();
                }
            },
            [c, d]
        ),
        f = a.useCallback(() => {
            if ((u(!1), 0 === c.current.size)) {
                var e;
                null === (e = d.current) || void 0 === e || e.delay();
            }
        }, [c, d, u]),
        h = a.useCallback(() => {
            var e;
            if (!(c.current.size > 0)) null === (e = d.current) || void 0 === e || e.cancel(), u(!0);
        }, [d, u]),
        p = a.useMemo(
            () => ({
                onAllowIdle: E,
                onPreventIdle: _,
                onActive: f,
                onForceIdle: h
            }),
            [E, _, f, h]
        );
    return (0, i.jsx)(l.Provider, {
        value: r,
        children: (0, i.jsx)(s.Provider, {
            value: p,
            children: t({
                idle: r,
                ...p
            })
        })
    });
}
