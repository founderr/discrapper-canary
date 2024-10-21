n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(192379);
function s(e, t) {
    let n = (0, i.useRef)(!1),
        s = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        (n.current = e !== s.current), (s.current = e);
    }, [e]),
        (0, i.useEffect)(() => {
            let e = setTimeout(() => (n.current = !1), t);
            return () => clearTimeout(e);
        }, [e, t]);
    let a = e !== s.current,
        l = n.current;
    return a || l;
}
