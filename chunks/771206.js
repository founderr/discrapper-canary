n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(122289),
    o = n(622999);
function s() {
    let [e, t] = i.useState(null);
    return (
        i.useEffect(() => {
            (0, o.d2)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, a.q2)(e);
                });
        }, []),
        e
    );
}
