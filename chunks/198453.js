r.d(n, {
    Av: function () {
        return v;
    },
    gP: function () {
        return p;
    }
});
var i = r(192379);
let a = {
        prefix: String(Math.round(10000000000 * Math.random())),
        current: 0
    },
    s = i.createContext(a),
    o = i.createContext(!1);
function l(e) {
    let n = $73SJx$useContext(s),
        r = f(n === a),
        [i, l] = $73SJx$useState(!0),
        u = $73SJx$useMemo(
            () => ({
                prefix: n === a ? '' : `${n.prefix}-${r}`,
                current: 0
            }),
            [n, r]
        );
    return (
        'undefined' != typeof document &&
            $73SJx$useLayoutEffect(() => {
                l(!1);
            }, []),
        $73SJx$react.createElement(s.Provider, { value: u }, $73SJx$react.createElement(o.Provider, { value: i }, e.children))
    );
}
let u = !1,
    c = !!('undefined' != typeof window && window.document && window.document.createElement),
    d = new WeakMap();
function f(e = !1) {
    let n = (0, i.useContext)(s),
        r = (0, i.useRef)(null);
    if (null === r.current && !e) {
        var a, o;
        let e = null === (o = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o ? void 0 : null === (a = o.ReactCurrentOwner) || void 0 === a ? void 0 : a.current;
        if (e) {
            let r = d.get(e);
            null == r
                ? d.set(e, {
                      id: n.current,
                      state: e.memoizedState
                  })
                : e.memoizedState !== r.state && ((n.current = r.id), d.delete(e));
        }
        r.current = ++n.current;
    }
    return r.current;
}
function _(e) {
    let n = (0, i.useContext)(s);
    n === a && !c && console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
    let r = f(!!e),
        o = `react-aria${n.prefix}`;
    return e || `${o}-${r}`;
}
function h(e) {
    let n = i.useId(),
        [r] = (0, i.useState)(v()),
        s = r ? 'react-aria' : `react-aria${a.prefix}`;
    return e || `${s}-${n}`;
}
let p = 'function' == typeof i.useId ? h : _;
function m() {
    return !1;
}
function g() {
    return !0;
}
function E(e) {
    return () => {};
}
function v() {
    return 'function' == typeof i.useSyncExternalStore ? i.useSyncExternalStore(E, m, g) : (0, i.useContext)(o);
}
