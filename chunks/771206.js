n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(470079),
    r = n(122289),
    u = n(622999);
function l() {
    let [e, t] = i.useState(null);
    return (
        i.useEffect(() => {
            (0, u.d2)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, r.q2)(e);
                });
        }, []),
        e
    );
}
