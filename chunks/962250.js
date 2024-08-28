n.d(a, {
    b: function () {
        return r;
    }
}),
    n(47120);
var s = n(470079);
function r() {
    var e, a;
    let [n, r] = s.useState({
        width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
        height: null !== (a = window.innerHeight) && void 0 !== a ? a : 1080
    });
    return (
        s.useLayoutEffect(() => {
            function e() {
                let e = window.innerWidth;
                r({
                    width: e,
                    height: window.innerHeight
                });
            }
            return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, []),
        n
    );
}
