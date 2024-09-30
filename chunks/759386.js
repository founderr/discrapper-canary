t.r(n),
    t.d(n, {
        getApplicationPaymentSteps: function () {
            return I;
        }
    }),
    t(47120);
var r = t(735250);
t(470079);
var i = t(409813),
    a = t(276442),
    s = t(961830),
    o = t(721165),
    l = t(519801),
    c = t(589771),
    u = t(883419),
    d = t(689938);
function I(e) {
    let { guildId: n, eligibleApplicationSubscriptionGuilds: t, showBenefitsFirst: I } = e;
    return [
        {
            key: null,
            renderStep: (e) =>
                (0, r.jsx)(c.Z, {
                    initialStep: I ? i.h8.BENEFITS : i.h8.REVIEW,
                    guildId: n,
                    ...e
                })
        },
        {
            key: i.h8.BENEFITS,
            renderStep: (e) => (0, r.jsx)(o.Z, { ...e }),
            options: { useBreadcrumbLabel: () => d.Z.Messages.APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS }
        },
        {
            key: i.h8.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(a.J, {
                        ...e,
                        breadcrumbSteps: [i.h8.ADD_PAYMENT_STEPS, i.h8.REVIEW, i.h8.CONFIRM]
                    })
                }),
            options: { renderHeader: !0 }
        },
        ...s.yp,
        {
            key: i.h8.REVIEW,
            renderStep: (e) =>
                (0, r.jsx)(u.Z, {
                    backButtonEligible: !!I || void 0,
                    prevStep: I ? i.h8.BENEFITS : void 0,
                    eligibleApplicationSubscriptionGuilds: t,
                    ...e
                }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: () => d.Z.Messages.BILLING_STEP_REVIEW
            }
        },
        {
            key: i.h8.CONFIRM,
            renderStep: (e) =>
                (0, r.jsx)(l.Z, {
                    showBenefits: !I,
                    ...e
                })
        }
    ];
}
