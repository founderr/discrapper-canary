t.d(n, {
    Z: function () {
        return x;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var l = t(772848),
    r = t(481060),
    a = t(159351),
    s = t(667),
    o = t(335131),
    d = t(626135),
    c = t(409813),
    u = t(608579),
    h = t(981631);
let m = 'payment-modal',
    f = new Set([c.h8.REVIEW, c.h8.CONFIRM, c.h8.GIFT_CUSTOMIZATION]);
function x(e) {
    let n;
    let { skuId: t, isGift: c = !1, giftMessage: x, giftingOrigin: v, onClose: p, onComplete: g, analyticsLocations: C, analyticsObject: j, giftRecipient: I } = e,
        T = !1,
        E = (0, l.Z)(),
        N = (e) => {
            n = e;
        };
    (0, r.openModalLazy)(
        async () => (e) => {
            let { onClose: n, returnRef: l, ...r } = e;
            return (0, i.jsx)(u.Z, {
                ...r,
                loadId: E,
                skuId: t,
                isGift: c,
                giftMessage: x,
                giftingOrigin: v,
                analyticsLocations: C,
                giftRecipient: I,
                onClose: (e) => {
                    n(), null == p || p(e);
                },
                onComplete: () => {
                    (T = !0), null == g || g();
                },
                returnRef: l,
                onStepChange: N
            });
        },
        {
            modalKey: m,
            onCloseCallback: () => {
                !T &&
                    d.default.track(h.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: E,
                        payment_type: h.Zuq[h.GZQ.ONE_TIME],
                        location: j,
                        is_gift: c,
                        location_stack: C
                    }),
                    (0, a.fw)(),
                    (0, s.p)(),
                    null == p || p(T),
                    T && (0, o.qg)();
            },
            onCloseRequest: () => {
                null != n && f.has(n) && (0, r.closeModal)(m);
            }
        }
    );
}
