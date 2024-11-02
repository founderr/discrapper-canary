n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120);
var i = n(192379);
function r(e) {
    let [t, n] = i.useState(e),
        r = i.useRef(null);
    return (
        i.useEffect(() => {
            var t, i;
            n(null !== (i = null === (t = r.current) || void 0 === t ? void 0 : t.offsetHeight) && void 0 !== i ? i : e);
        }),
        {
            headerHeight: t,
            headerRef: r
        }
    );
}
