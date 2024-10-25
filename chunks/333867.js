n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var a = n(772848),
    s = n(481060),
    r = n(976255),
    l = n(667),
    o = n(335131),
    c = n(626135),
    u = n(409813),
    d = n(608579),
    _ = n(981631);
let E = 'payment-modal',
    I = new Set([u.h8.REVIEW, u.h8.CONFIRM]);
function m(e) {
    let t;
    let { skuId: n, isGift: u = !1, giftMessage: m, onClose: f, onComplete: T, analyticsLocations: h, analyticsObject: N } = e,
        p = !1,
        C = (0, a.Z)(),
        g = (e) => {
            t = e;
        };
    (0, s.openModalLazy)(
        async () => (e) => {
            let { onClose: t, returnRef: a, ...s } = e;
            return (0, i.jsx)(d.Z, {
                ...s,
                loadId: C,
                skuId: n,
                isGift: u,
                giftMessage: m,
                analyticsLocations: h,
                onClose: (e) => {
                    t(), null == f || f(e);
                },
                onComplete: () => {
                    (p = !0), null == T || T();
                },
                returnRef: a,
                onStepChange: g
            });
        },
        {
            modalKey: E,
            onCloseCallback: () => {
                !p &&
                    c.default.track(_.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: C,
                        payment_type: _.Zuq[_.GZQ.ONE_TIME],
                        location: N,
                        is_gift: u,
                        location_stack: h
                    }),
                    (0, r.fw)(),
                    (0, l.p)(),
                    null == f || f(p),
                    p && (0, o.qg)();
            },
            onCloseRequest: () => {
                null != t && I.has(t) && (0, s.closeModal)(E);
            }
        }
    );
}
