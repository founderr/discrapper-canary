n.d(t, {
    y: function () {
        return i;
    }
});
var r = n(192379),
    o = n(237617),
    l = n(889711);
function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, r.useRef)(null),
        i = (0, r.useRef)(null),
        a = (0, o.Z)(() => e(n.current));
    return (
        (0, r.useLayoutEffect)(() => {
            if (!t) return;
            null == i.current && (i.current = (0, l.pP)(a.current));
            let e = n.current,
                r = i.current;
            if (null != e && null != r) (0, l.YP)(r, e);
        }, [t, e]),
        (0, r.useEffect)(() => {
            if (!t) return;
            let e = n.current,
                r = i.current;
            if (null != e && null != r)
                return () => {
                    (0, l.UC)(r, e);
                };
        }, [t]),
        n
    );
}
