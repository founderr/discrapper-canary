n.d(t, {
    w: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(852860),
    a = n(881052),
    o = n(863249),
    c = n(245762),
    d = n(894376),
    u = n(999382);
function m() {
    let [e, t] = r.useState(!1),
        [n, m] = r.useState(null),
        h = (0, l.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getProps().guild) || void 0 === e ? void 0 : e.id;
        }),
        g = (0, l.e7)([d.Z], () => d.Z.pendingVerificationFields),
        x = r.useCallback(() => {
            c.ZP.reset();
        }, []),
        p = r.useCallback(async () => {
            if (null != h && null != g) {
                t(!0);
                try {
                    await o.ZP.updateVerificationForm(h, g), m(null);
                } catch (e) {
                    m(new a.Hx(e).getAnyErrorMessage());
                } finally {
                    t(!1);
                }
            }
        }, [g, h]);
    return (0, i.jsx)(s.Z, {
        submitting: e,
        errorMessage: n,
        onReset: x,
        onSave: p
    });
}
