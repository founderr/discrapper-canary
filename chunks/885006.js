a.d(n, {
    Z: function () {
        return r;
    }
}),
    a(47120);
var t = a(470079);
function r() {
    var e, n;
    let [a, r] = t.useState({
        width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
        height: null !== (n = window.innerHeight) && void 0 !== n ? n : 1080
    });
    return (
        t.useLayoutEffect(() => {
            function e() {
                let e = window.innerWidth;
                r({
                    width: e,
                    height: window.innerHeight
                });
            }
            return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, []),
        a
    );
}
