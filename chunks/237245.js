n.d(t, {
    w: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(852860),
    a = n(881052),
    o = n(863249),
    c = n(983736),
    d = n(245762),
    u = n(894376),
    m = n(446495),
    h = n(999382),
    g = n(388032);
function x() {
    let [e, t] = r.useState(!1),
        [n, x] = r.useState(null),
        p = (0, l.e7)([h.Z], () => {
            var e;
            return null === (e = h.Z.getProps().guild) || void 0 === e ? void 0 : e.id;
        }),
        f = (0, l.e7)([u.Z], () => u.Z.pendingState),
        C = r.useCallback(() => {
            x(null), d.Z.reset();
        }, []),
        _ = r.useCallback(async () => {
            if (null != p && null != f) {
                if (f.joinType === m.A.APPLY) {
                    let { pendingVerificationFields: e } = f;
                    if (null == e) return;
                    if (!e.some((e) => (0, c._C)(e))) {
                        x(g.intl.string(g.t.HGVrIy));
                        return;
                    }
                    try {
                        t(!0), await o.ZP.updateVerificationForm(p, e), x(null);
                    } catch (e) {
                        x(new a.Hx(e).getAnyErrorMessage());
                    } finally {
                        t(!1);
                    }
                    return;
                }
            }
        }, [f, p]);
    return (0, i.jsx)(s.Z, {
        submitting: e,
        errorMessage: n,
        onReset: C,
        onSave: _
    });
}
