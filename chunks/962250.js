n.d(a, {
    b: function () {
        return o;
    }
}),
    n(47120);
var t = n(470079);
function o() {
    var e, a;
    let [n, o] = t.useState({
        width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
        height: null !== (a = window.innerHeight) && void 0 !== a ? a : 1080
    });
    return (
        t.useLayoutEffect(() => {
            function e() {
                let e = window.innerWidth;
                o({
                    width: e,
                    height: window.innerHeight
                });
            }
            return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, []),
        n
    );
}
