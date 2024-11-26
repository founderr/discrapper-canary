t.r(n),
    t.d(n, {
        getApplicationPaymentSteps: function () {
            return f;
        }
    }),
    t(47120);
var i = t(200651);
t(192379);
var r = t(409813),
    o = t(276442),
    a = t(961830),
    l = t(721165),
    c = t(519801),
    d = t(589771),
    s = t(883419),
    u = t(388032);
function f(e) {
    let { guildId: n, showBenefitsFirst: t } = e;
    return [
        {
            key: null,
            renderStep: (e) =>
                (0, i.jsx)(d.Z, {
                    initialStep: t ? r.h8.BENEFITS : r.h8.REVIEW,
                    guildId: n,
                    ...e
                })
        },
        {
            key: r.h8.BENEFITS,
            renderStep: (e) => (0, i.jsx)(l.Z, { ...e }),
            options: { useBreadcrumbLabel: () => u.intl.string(u.t['5LD2+P']) }
        },
        {
            key: r.h8.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(o.J, {
                        ...e,
                        breadcrumbSteps: [r.h8.ADD_PAYMENT_STEPS, r.h8.REVIEW, r.h8.CONFIRM]
                    })
                }),
            options: { renderHeader: !0 }
        },
        ...a.yp,
        {
            key: r.h8.REVIEW,
            renderStep: (e) =>
                (0, i.jsx)(s.Z, {
                    backButtonEligible: !!t || void 0,
                    prevStep: t ? r.h8.BENEFITS : void 0,
                    ...e
                }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: () => u.intl.string(u.t.QBnNHh)
            }
        },
        {
            key: r.h8.CONFIRM,
            renderStep: (e) =>
                (0, i.jsx)(c.Z, {
                    showBenefits: !t,
                    ...e
                })
        }
    ];
}
