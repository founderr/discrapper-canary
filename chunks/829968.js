r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(439849);
function o(e, n) {
    let [r, i] = a.useState();
    return (
        a.useEffect(() => {
            if (null == e || null != n) {
                i(void 0);
                return;
            }
            (0, s.Z)().then((n) => {
                if (null != n)
                    n.identifyGame(e, (e, n) => {
                        if (0 === e && null != n.icon && '' !== n.icon && null != n.name && '' !== n.name) i('data:image/png;base64,'.concat(n.icon));
                    });
            });
        }, [e, n]),
        null != n ? n : r
    );
}
