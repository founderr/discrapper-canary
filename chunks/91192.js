r.d(n, {
    Ie: function () {
        return m;
    },
    JA: function () {
        return p;
    },
    OP: function () {
        return v;
    },
    SJ: function () {
        return T;
    },
    bG: function () {
        return b;
    },
    eg: function () {
        return E;
    },
    f$: function () {
        return h;
    },
    l2: function () {
        return I;
    },
    mh: function () {
        return g;
    },
    qB: function () {
        return _;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(25441),
    l = r(536895),
    u = r(260866);
let c = {
        id: 'NO_LIST',
        setFocus() {}
    },
    d = {
        id: 'NO_LIST',
        onKeyDown() {},
        orientation: l.hy.VERTICAL,
        ref: s.createRef(),
        tabIndex: -1
    },
    f = s.createContext(c),
    _ = s.createContext(d);
function h() {
    return s.useContext(f);
}
function p(e) {
    let [n, r] = s.useState(-1),
        { id: i, setFocus: a } = h(),
        l = s.useCallback(() => a(e), [e, a]);
    return (
        s.useLayoutEffect(
            () =>
                (0, o.N)(i, (n, i) => {
                    r(i && n === e ? 0 : -1);
                }),
            [e, i]
        ),
        {
            role: 'listitem',
            [u.ie]: (0, u.jb)(i, e),
            tabIndex: n,
            onFocus: l
        }
    );
}
function m(e) {
    return {
        ...p(e),
        role: 'treeitem'
    };
}
function g(e) {
    let { children: n, id: r } = e;
    return n(p(r));
}
function E() {
    return s.useContext(_).ref;
}
function v() {
    let { id: e, onKeyDown: n, ref: r, tabIndex: i } = s.useContext(_);
    return {
        role: 'list',
        tabIndex: i,
        [u.kn]: e,
        onKeyDown: n,
        ref: r
    };
}
function I(e) {
    let {
        id: n,
        containerProps: { onKeyDown: r, ref: i, tabIndex: a },
        orientation: s
    } = e;
    return {
        role: 'list',
        onKeyDown: r,
        ref: i,
        [u.kn]: n,
        tabIndex: a
    };
}
function T(e) {
    let { children: n } = e;
    return n(v());
}
function b(e) {
    let { children: n, navigator: r } = e,
        {
            id: i,
            setFocus: o,
            containerProps: { onKeyDown: l, ref: u, tabIndex: c },
            orientation: d
        } = r,
        h = s.useMemo(
            () => ({
                id: i,
                setFocus: o
            }),
            [i, o]
        ),
        p = s.useMemo(
            () => ({
                onKeyDown: l,
                orientation: d,
                ref: u,
                id: i,
                tabIndex: c
            }),
            [l, d, u, i, c]
        );
    return (0, a.jsxs)(_.Provider, {
        value: p,
        children: [
            (0, a.jsx)(f.Provider, {
                value: h,
                children: n
            }),
            ' '
        ]
    });
}
