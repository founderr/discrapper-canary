n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(47120);
var i = n(470079);
let a = !1,
    o = new Set();
function s(e) {
    e !== a && ((a = e), o.forEach((e) => e(a)));
}
function l() {
    let [e, t] = i.useState(a);
    return (
        i.useEffect(() => {
            let e = (e) => {
                t(e);
            };
            return (
                o.add(e),
                () => {
                    o.delete(e);
                }
            );
        }, []),
        e
    );
}
window.addEventListener('keydown', (e) => {
    s(e.shiftKey);
}),
    window.addEventListener('keyup', (e) => {
        s(e.shiftKey);
    }),
    window.addEventListener('mousemove', (e) => {
        s(e.shiftKey);
    }),
    window.addEventListener('blur', () => {
        s(!1);
    });
