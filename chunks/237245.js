n.d(t, {
    w: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(852860),
    a = n(881052),
    o = n(863249),
    c = n(246364),
    d = n(983736),
    u = n(245762),
    m = n(894376),
    h = n(446495),
    g = n(999382),
    x = n(388032);
function p() {
    let [e, t] = r.useState(!1),
        [n, p] = r.useState(null),
        f = (0, l.e7)([g.Z], () => {
            var e;
            return null === (e = g.Z.getProps().guild) || void 0 === e ? void 0 : e.id;
        }),
        C = (0, l.e7)([m.Z], () => m.Z.pendingState),
        I = r.useCallback(() => {
            p(null), u.Z.reset();
        }, []),
        _ = r.useCallback(async (e) => {
            try {
                t(!0), await e(), p(null);
            } catch (e) {
                p(new a.Hx(e).getAnyErrorMessage());
            } finally {
                t(!1);
            }
        }, []),
        v = r.useCallback(() => {
            if (null != f && null != C) {
                if (C.joinType === h.A.INVITE) {
                    let { requireTerms: e, termRules: t = [] } = C,
                        n = t.map((e) => e.value.trim()).filter((e) => '' !== e);
                    if (n.length < 1 && e) {
                        p(x.intl.string(x.t.TCHkcX));
                        return;
                    }
                    let i =
                        n.length > 0
                            ? [
                                  {
                                      field_type: c.QJ.TERMS,
                                      label: x.intl.string(x.t['9suSIC']),
                                      values: n,
                                      required: !0
                                  }
                              ]
                            : [];
                    _(async () => {
                        await o.ZP.updateVerificationForm(f, i, e);
                    });
                } else if (C.joinType === h.A.APPLY) {
                    let { pendingVerificationFields: e } = C;
                    if (null == e) return;
                    if (!e.some((e) => (0, d._C)(e))) {
                        p(x.intl.string(x.t.HGVrIy));
                        return;
                    }
                    _(async () => {
                        await o.ZP.updateVerificationForm(f, e, !0);
                    });
                }
            }
        }, [_, C, f]);
    return (0, i.jsx)(s.Z, {
        submitting: e,
        errorMessage: n,
        onReset: I,
        onSave: v
    });
}
