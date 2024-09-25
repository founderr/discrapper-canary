n.d(t, {
    B: function () {
        return c;
    },
    w: function () {
        return d;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(846519),
    s = n(594174),
    l = n(295226),
    u = n(74538);
function c(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
function d(e) {
    let t = (0, a.e7)([l.Z], () => l.Z.getUserTrialOffer(e)),
        [n, r] = i.useState(c(t)),
        d = (0, a.e7)([s.default], () => (0, u.I5)(s.default.getCurrentUser()));
    return (
        i.useEffect(() => {
            if (null != t && null != t.expires_at) {
                let e = new o.V7(),
                    i = () => {
                        let a = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                        null == e ||
                            e.start(a, () => {
                                !n && c(t) ? r(!0) : i();
                            });
                    };
                return i(), () => e.stop();
            }
        }, [n, t]),
        n || d ? null : t
    );
}
