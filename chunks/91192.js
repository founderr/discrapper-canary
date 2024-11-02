n.d(t, {
    Ie: function () {
        return _;
    },
    JA: function () {
        return f;
    },
    OP: function () {
        return m;
    },
    SJ: function () {
        return E;
    },
    bG: function () {
        return v;
    },
    eg: function () {
        return p;
    },
    f$: function () {
        return d;
    },
    l2: function () {
        return g;
    },
    mh: function () {
        return h;
    },
    qB: function () {
        return c;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(25441),
    s = n(536895),
    o = n(260866);
let l = {
        id: 'NO_LIST',
        onKeyDown() {},
        orientation: s.hy.VERTICAL,
        ref: i.createRef(),
        tabIndex: -1
    },
    u = i.createContext({
        id: 'NO_LIST',
        setFocus() {}
    }),
    c = i.createContext(l);
function d() {
    return i.useContext(u);
}
function f(e) {
    let [t, n] = i.useState(-1),
        { id: r, setFocus: s } = d(),
        l = i.useCallback(() => s(e), [e, s]);
    return (
        i.useLayoutEffect(
            () =>
                (0, a.N)(r, (t, r) => {
                    n(r && t === e ? 0 : -1);
                }),
            [e, r]
        ),
        {
            role: 'listitem',
            [o.ie]: (0, o.jb)(r, e),
            tabIndex: t,
            onFocus: l
        }
    );
}
function _(e) {
    return {
        ...f(e),
        role: 'treeitem'
    };
}
function h(e) {
    let { children: t, id: n } = e;
    return t(f(n));
}
function p() {
    return i.useContext(c).ref;
}
function m() {
    let { id: e, onKeyDown: t, ref: n, tabIndex: r } = i.useContext(c);
    return {
        role: 'list',
        tabIndex: r,
        [o.kn]: e,
        onKeyDown: t,
        ref: n
    };
}
function g(e) {
    let {
        id: t,
        containerProps: { onKeyDown: n, ref: r, tabIndex: i },
        orientation: a
    } = e;
    return {
        role: 'list',
        onKeyDown: n,
        ref: r,
        [o.kn]: t,
        tabIndex: i
    };
}
function E(e) {
    let { children: t } = e;
    return t(m());
}
function v(e) {
    let { children: t, navigator: n } = e,
        {
            id: a,
            setFocus: s,
            containerProps: { onKeyDown: o, ref: l, tabIndex: d },
            orientation: f
        } = n,
        _ = i.useMemo(
            () => ({
                id: a,
                setFocus: s
            }),
            [a, s]
        ),
        h = i.useMemo(
            () => ({
                onKeyDown: o,
                orientation: f,
                ref: l,
                id: a,
                tabIndex: d
            }),
            [o, f, l, a, d]
        );
    return (0, r.jsxs)(c.Provider, {
        value: h,
        children: [
            (0, r.jsx)(u.Provider, {
                value: _,
                children: t
            }),
            ' '
        ]
    });
}
