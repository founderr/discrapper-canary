r.r(n),
    r.d(n, {
        default: function () {
            return k;
        }
    });
var t = r(735250);
r(470079);
var a = r(100527),
    o = r(906732),
    i = r(987209),
    s = r(598),
    l = r(409813),
    c = r(791785),
    d = r(276442),
    u = r(793541),
    f = r(380898),
    h = r(710094),
    p = r(865921),
    g = r(853872),
    m = r(806984),
    b = r(464797),
    _ = r(946211),
    x = r(231338);
let v = [
    {
        key: null,
        renderStep: (e) => (0, t.jsx)(p.v, { ...e })
    },
    {
        key: l.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, t.jsx)(d.J, {
                ...e,
                onReturn: () => {
                    0 === Object.keys(g.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(l.h8.REVIEW, { trackedFromStep: l.h8.ADD_PAYMENT_STEPS });
                }
            })
    },
    {
        key: l.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, t.jsx)(f.Z, {})
    },
    {
        key: l.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, t.jsx)(u.Z, {})
    },
    {
        key: l.h8.REVIEW,
        renderStep: (e) => (0, t.jsx)(h.l, { ...e })
    },
    {
        key: l.h8.CONFIRM,
        renderStep: (e) => (0, t.jsx)(m.Z, { ...e })
    }
];
function k(e) {
    let { guildProductContext: n, sourceAnalyticsLocations: r, applicationId: l, ...d } = e,
        { analyticsLocations: u } = (0, o.ZP)(r, a.Z.GUILD_PRODUCT_PAYMENT_MODAL);
    return (0, t.jsx)(b.R, {
        ...n,
        children: (0, t.jsx)(o.Gt, {
            value: u,
            children: (0, t.jsx)(s.PaymentContextProvider, {
                stepConfigs: v,
                applicationId: l,
                skuIDs: [d.skuId],
                activeSubscription: null,
                purchaseType: x.GZ.ONE_TIME,
                children: (0, t.jsx)(i.KB, {
                    children: (0, t.jsx)(c.PaymentModal, {
                        initialPlanId: null,
                        analyticsLocations: u,
                        renderHeader: _.L,
                        ...d
                    })
                })
            })
        })
    });
}
