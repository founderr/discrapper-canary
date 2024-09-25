n.d(t, {
    H: function () {
        return s;
    },
    x: function () {
        return u;
    },
    y: function () {
        return o;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079);
function o(e) {
    let { component: t, children: n, forceLevel: r } = e,
        o = a.useContext(l),
        [s, u] = a.useState(null != t),
        c = 1,
        d = 1;
    null != r ? (null != t ? ((c = r), (d = r + 1)) : (d = r)) : null != t ? ((c = o.level), (d = o.level + 1)) : (d = o.level + (s ? 1 : 0));
    let _ = a.useCallback(() => (u(!0), c), [c]),
        E = a.useCallback(() => (u(!0), d), [d]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != t
                ? (0, i.jsx)(l.Provider, {
                      value: {
                          level: c,
                          getLevelAndMarkUsed: _
                      },
                      children: t
                  })
                : null,
            (0, i.jsx)(l.Provider, {
                value: {
                    level: d,
                    getLevelAndMarkUsed: E
                },
                children: n
            })
        ]
    });
}
function s(e) {
    let t = u(),
        n = 'h'.concat(Math.min(t, 6));
    return (0, i.jsx)(n, {
        ...(t > 6 ? { 'data-excessive-heading-level': t } : {}),
        ...e
    });
}
let l = a.createContext({
    getLevelAndMarkUsed: () => 2,
    level: 2
});
function u() {
    let { getLevelAndMarkUsed: e } = a.useContext(l);
    return e();
}
l.displayName = 'HeadingLevelContext';
