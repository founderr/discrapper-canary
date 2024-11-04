n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(192379);
function l(e, t) {
    let n = (0, i.useRef)(!1),
        l = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        (n.current = e !== l.current), (l.current = e);
    }, [e]),
        (0, i.useEffect)(() => {
            let e = setTimeout(() => (n.current = !1), t);
            return () => clearTimeout(e);
        }, [e, t]);
    let r = e !== l.current,
        s = n.current;
    return r || s;
}
