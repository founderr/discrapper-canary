n.d(t, {
    Ie: function () {
        return h;
    },
    JA: function () {
        return f;
    },
    OP: function () {
        return I;
    },
    SJ: function () {
        return g;
    },
    bG: function () {
        return S;
    },
    eg: function () {
        return m;
    },
    f$: function () {
        return E;
    },
    l2: function () {
        return T;
    },
    mh: function () {
        return p;
    },
    qB: function () {
        return _;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(25441),
    s = n(536895),
    l = n(260866);
let u = {
        id: 'NO_LIST',
        setFocus() {}
    },
    c = {
        id: 'NO_LIST',
        onKeyDown() {},
        orientation: s.hy.VERTICAL,
        ref: a.createRef(),
        tabIndex: -1
    },
    d = a.createContext(u),
    _ = a.createContext(c);
function E() {
    return a.useContext(d);
}
function f(e) {
    let [t, n] = a.useState(-1),
        { id: r, setFocus: i } = E(),
        s = a.useCallback(() => i(e), [e, i]);
    return (
        a.useLayoutEffect(
            () =>
                (0, o.N)(r, (t, r) => {
                    n(r && t === e ? 0 : -1);
                }),
            [e, r]
        ),
        {
            role: 'listitem',
            [l.ie]: (0, l.jb)(r, e),
            tabIndex: t,
            onFocus: s
        }
    );
}
function h(e) {
    return {
        ...f(e),
        role: 'treeitem'
    };
}
function p(e) {
    let { children: t, id: n } = e;
    return t(f(n));
}
function m() {
    return a.useContext(_).ref;
}
function I() {
    let { id: e, onKeyDown: t, ref: n, tabIndex: r } = a.useContext(_);
    return {
        role: 'list',
        tabIndex: r,
        [l.kn]: e,
        onKeyDown: t,
        ref: n
    };
}
function T(e) {
    let {
        id: t,
        containerProps: { onKeyDown: n, ref: r, tabIndex: i },
        orientation: a
    } = e;
    return {
        role: 'list',
        onKeyDown: n,
        ref: r,
        [l.kn]: t,
        tabIndex: i
    };
}
function g(e) {
    let { children: t } = e;
    return t(I());
}
function S(e) {
    let { children: t, navigator: n } = e,
        {
            id: r,
            setFocus: o,
            containerProps: { onKeyDown: s, ref: l, tabIndex: u },
            orientation: c
        } = n,
        E = a.useMemo(
            () => ({
                id: r,
                setFocus: o
            }),
            [r, o]
        ),
        f = a.useMemo(
            () => ({
                onKeyDown: s,
                orientation: c,
                ref: l,
                id: r,
                tabIndex: u
            }),
            [s, c, l, r, u]
        );
    return (0, i.jsxs)(_.Provider, {
        value: f,
        children: [
            (0, i.jsx)(d.Provider, {
                value: E,
                children: t
            }),
            ' '
        ]
    });
}
