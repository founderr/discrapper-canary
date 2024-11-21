n.d(t, {
    Me: function () {
        return l;
    },
    ur: function () {
        return u;
    }
});
var r = n(346110),
    i = n(192379),
    a = n(39521);
let s = !!('undefined' != typeof window && window.document && window.document.createElement),
    o = new Map();
function l(e) {
    let [t, n] = (0, i.useState)(e),
        l = (0, i.useRef)(null),
        u = (0, a.gP)(t),
        c = (0, i.useCallback)((e) => {
            l.current = e;
        }, []);
    return (
        s && (o.has(u) && !o.get(u).includes(c) ? o.set(u, [...o.get(u), c]) : o.set(u, [c])),
        (0, r.b)(
            () => () => {
                o.delete(u);
            },
            [u]
        ),
        (0, i.useEffect)(() => {
            let e = l.current;
            e && ((l.current = null), n(e));
        }),
        u
    );
}
function u(e, t) {
    if (e === t) return e;
    let n = o.get(e);
    if (n) return n.forEach((e) => e(t)), t;
    let r = o.get(t);
    return r ? (r.forEach((t) => t(e)), e) : t;
}
