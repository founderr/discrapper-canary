n.d(t, {
    Ng: function () {
        return f;
    },
    Wp: function () {
        return _;
    },
    kA: function () {
        return d;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(846519),
    s = n(594174),
    l = n(295226),
    u = n(74538),
    c = n(474936);
function d(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
function _(e, t) {
    var n;
    return null != e && new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map((e) => c.GP[e].skuId)).has(t);
}
function E(e, t) {
    let n = (0, a.e7)([l.Z], () => l.Z.getUserDiscountOffer(e)),
        [r, c] = i.useState(d(n)),
        _ = (0, a.e7)([s.default], () => (0, u.I5)(s.default.getCurrentUser()));
    return (
        i.useEffect(() => {
            if (null == n || null == n.expires_at) return;
            let e = new o.V7(),
                t = () => {
                    let i = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
                    null == e ||
                        e.start(i, () => {
                            !r && d(n) ? c(!0) : t();
                        });
                };
            return t(), () => e.stop();
        }, [r, n]),
        r || (_ && !t) ? null : n
    );
}
function f() {
    var e, t;
    let n = E(c.hs),
        r = E(c.RU),
        i = E(c.rB),
        a = E(c.ih);
    return null !== (t = null !== (e = null != n ? n : r) && void 0 !== e ? e : i) && void 0 !== t ? t : a;
}
