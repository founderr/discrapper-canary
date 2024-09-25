n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(439849);
function o(e, t) {
    let [n, r] = i.useState();
    return (
        i.useEffect(() => {
            if (null == e || null != t) {
                r(void 0);
                return;
            }
            (0, a.Z)().then((t) => {
                if (null != t)
                    t.identifyGame(e, (e, t) => {
                        if (0 === e && null != t.icon && '' !== t.icon && null != t.name && '' !== t.name) r('data:image/png;base64,'.concat(t.icon));
                    });
            });
        }, [e, t]),
        null != t ? t : n
    );
}
