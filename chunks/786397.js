r.d(n, {
    B: function () {
        return d;
    },
    w: function () {
        return f;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(442837),
    o = r(846519),
    l = r(594174),
    u = r(431),
    c = r(74538);
function d(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
function f(e) {
    let n = (0, s.e7)([u.Z], () => u.Z.getUserTrialOffer(e)),
        [r, i] = a.useState(d(n)),
        f = (0, s.e7)([l.default], () => (0, c.I5)(l.default.getCurrentUser()));
    return (
        a.useEffect(() => {
            if (null != n && null != n.expires_at) {
                let e = new o.V7(),
                    a = () => {
                        let s = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
                        null == e ||
                            e.start(s, () => {
                                !r && d(n) ? i(!0) : a();
                            });
                    };
                return a(), () => e.stop();
            }
        }, [r, n]),
        r || f ? null : n
    );
}
