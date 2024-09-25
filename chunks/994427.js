n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(409813),
    o = n(45572);
function s(e) {
    let [t, n] = i.useState(o.A.WAITING);
    return (
        i.useEffect(() => {
            null != e && e !== a.h8.REVIEW && t !== o.A.WAITING && t !== o.A.COMPLETED && n(o.A.WAITING);
        }, [e, t, n]),
        [t, n]
    );
}
