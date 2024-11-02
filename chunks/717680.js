n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379);
let r = !1,
    l = new Set();
function a(e) {
    e !== r && ((r = e), l.forEach((e) => e(r)));
}
function o() {
    let [e, t] = i.useState(r);
    return (
        i.useEffect(() => {
            let e = (e) => {
                t(e);
            };
            return (
                l.add(e),
                () => {
                    l.delete(e);
                }
            );
        }, []),
        e
    );
}
window.addEventListener('keydown', (e) => {
    a(e.shiftKey);
}),
    window.addEventListener('keyup', (e) => {
        a(e.shiftKey);
    }),
    window.addEventListener('mousemove', (e) => {
        a(e.shiftKey);
    }),
    window.addEventListener('blur', () => {
        a(!1);
    });
