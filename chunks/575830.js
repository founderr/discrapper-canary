n.d(e, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(192379),
    l = n(442837),
    r = n(430824),
    d = n(637565),
    a = n(14263);
function u(t, e) {
    let n = (0, l.e7)([r.Z], () => (null != t ? r.Z.getRoles(t.id) : void 0)),
        u = (0, a.Z)(null == t ? void 0 : t.id);
    return i.useMemo(() => {
        let i = null != t && null != n ? (0, d.T)(t, n, e) : [],
            l = 0;
        for (let t of i) {
            let e = t.id;
            if (null != e) {
                let t = null == u ? void 0 : u[e];
                null != t && (l += t);
            }
        }
        return l;
    }, [u, t, e, n]);
}
