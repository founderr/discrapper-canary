n.d(t, {
    Av: function () {
        return I;
    },
    gP: function () {
        return f;
    }
});
var r = n(470079);
let i = {
        prefix: String(Math.round(10000000000 * Math.random())),
        current: 0
    },
    a = r.createContext(i),
    o = r.createContext(!1);
function s(e) {
    let t = $73SJx$useContext(a),
        n = d(t === i),
        [r, s] = $73SJx$useState(!0),
        l = $73SJx$useMemo(
            () => ({
                prefix: t === i ? '' : `${t.prefix}-${n}`,
                current: 0
            }),
            [t, n]
        );
    return (
        'undefined' != typeof document &&
            $73SJx$useLayoutEffect(() => {
                s(!1);
            }, []),
        $73SJx$react.createElement(a.Provider, { value: l }, $73SJx$react.createElement(o.Provider, { value: r }, e.children))
    );
}
let l = !1,
    u = !!('undefined' != typeof window && window.document && window.document.createElement),
    c = new WeakMap();
function d(e = !1) {
    let t = (0, r.useContext)(a),
        n = (0, r.useRef)(null);
    if (null === n.current && !e) {
        var i, o;
        let e = null === (o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o ? void 0 : null === (i = o.ReactCurrentOwner) || void 0 === i ? void 0 : i.current;
        if (e) {
            let n = c.get(e);
            null == n
                ? c.set(e, {
                      id: t.current,
                      state: e.memoizedState
                  })
                : e.memoizedState !== n.state && ((t.current = n.id), c.delete(e));
        }
        n.current = ++t.current;
    }
    return n.current;
}
function _(e) {
    let t = (0, r.useContext)(a);
    t === i && !u && console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
    let n = d(!!e),
        o = `react-aria${t.prefix}`;
    return e || `${o}-${n}`;
}
function E(e) {
    let t = r.useId(),
        [n] = (0, r.useState)(I()),
        a = n ? 'react-aria' : `react-aria${i.prefix}`;
    return e || `${a}-${t}`;
}
let f = 'function' == typeof r.useId ? E : _;
function h() {
    return !1;
}
function p() {
    return !0;
}
function m(e) {
    return () => {};
}
function I() {
    return 'function' == typeof r.useSyncExternalStore ? r.useSyncExternalStore(m, h, p) : (0, r.useContext)(o);
}
