n.d(t, {
    j: function () {
        return u;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(607070),
    s = n(451478);
let l = 1000,
    u = (e, t) => {
        let n = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
            r = (0, a.e7)([s.Z], () => s.Z.isFocused()),
            [u, c] = i.useState(!1),
            d = i.useRef(null);
        return (
            i.useEffect(() => {
                clearTimeout(d.current), (d.current = null);
                let i = !n && !t,
                    a = r && (e || i);
                a && n
                    ? (d.current = window.setTimeout(() => {
                          c(!0);
                      }, l))
                    : c(a);
            }, [r, e, n, t]),
            i.useEffect(() => () => clearTimeout(d.current), []),
            { canAnimate: u }
        );
    };
