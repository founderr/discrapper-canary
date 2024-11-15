t.d(n, {
    Z: function () {
        return a;
    }
}),
    t(47120);
var i = t(192379);
function a() {
    var e, n;
    let [t, a] = i.useState({
        width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
        height: null !== (n = window.innerHeight) && void 0 !== n ? n : 1080
    });
    return (
        i.useLayoutEffect(() => {
            function e() {
                let e = window.innerWidth;
                a({
                    width: e,
                    height: window.innerHeight
                });
            }
            return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, []),
        t
    );
}
