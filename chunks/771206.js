n.d(e, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var r = n(192379),
    E = n(122289),
    i = n(622999);
function u() {
    let [t, e] = r.useState(null);
    return (
        r.useEffect(() => {
            (0, i.d2)()
                .then((t) => e(t))
                .catch((t) => {
                    (0, E.q2)(t);
                });
        }, []),
        t
    );
}
