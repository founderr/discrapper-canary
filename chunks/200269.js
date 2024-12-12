r.d(n, {
    H: function () {
        return l;
    },
    x: function () {
        return c;
    },
    y: function () {
        return o;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379);
function o(e) {
    let { component: n, children: r, forceLevel: i } = e,
        o = s.useContext(u),
        [l, c] = s.useState(null != n),
        d = 1,
        f = 1;
    null != i ? (null != n ? ((d = i), (f = i + 1)) : (f = i)) : null != n ? ((d = o.level), (f = o.level + 1)) : (f = o.level + (l ? 1 : 0));
    let _ = s.useCallback(() => (c(!0), d), [d]),
        h = s.useCallback(() => (c(!0), f), [f]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)(u.Provider, {
                      value: {
                          level: d,
                          getLevelAndMarkUsed: _
                      },
                      children: n
                  })
                : null,
            (0, a.jsx)(u.Provider, {
                value: {
                    level: f,
                    getLevelAndMarkUsed: h
                },
                children: r
            })
        ]
    });
}
function l(e) {
    let n = c(),
        r = 'h'.concat(Math.min(n, 6));
    return (0, a.jsx)(r, {
        ...(n > 6 ? { 'data-excessive-heading-level': n } : {}),
        ...e
    });
}
let u = s.createContext({
    getLevelAndMarkUsed: () => 2,
    level: 2
});
function c() {
    let { getLevelAndMarkUsed: e } = s.useContext(u);
    return e();
}
u.displayName = 'HeadingLevelContext';
