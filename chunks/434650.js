n.d(t, {
    O: function () {
        return d;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(237617),
    o = n(266338);
let s = {};
function l(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = (0, i.useRef)(null),
        l = (0, a.Z)(null != t ? t : s),
        u = (0, i.useRef)(null);
    return (
        (0, i.useLayoutEffect)(() => {
            if (!n) return;
            null == u.current && (u.current = (0, o.c)(l.current));
            let t = r.current,
                i = u.current;
            if (null != t && null != i) (0, o.YP)(i, t, e);
        }, [n, e]),
        (0, i.useEffect)(() => {
            if (!n) return;
            let e = r.current,
                t = u.current;
            if (null != e && null != t)
                return () => {
                    (0, o.UC)(t, e);
                };
        }, [n, t]),
        r
    );
}
let u = new Map([[1, { threshold: 1 }]]);
function c(e) {
    let t = u.get(e);
    return null != t ? t : ((t = { threshold: e }), u.set(e, t), t);
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = (0, a.Z)((t) => {
            e(t.isIntersecting);
        }),
        o = (0, i.useMemo)(() => c(t), [t]);
    return l(r.current, o, n);
}
