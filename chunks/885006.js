t.d(n, {
    Z: function () {
        return r;
    }
}),
    t(47120);
var i = t(192379);
function r() {
    var e, n;
    let [t, r] = i.useState({
        width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
        height: null !== (n = window.innerHeight) && void 0 !== n ? n : 1080
    });
    return (
        i.useLayoutEffect(() => {
            function e() {
                let e = window.innerWidth;
                r({
                    width: e,
                    height: window.innerHeight
                });
            }
            return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, []),
        t
    );
}
