t.d(n, {
    Z: function () {
        return f;
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
    x = new Set([c.h8.REVIEW, c.h8.CONFIRM, c.h8.GIFT_CUSTOMIZATION]);
function f(e) {
    let n;
    let { skuId: t, isGift: c = !1, giftMessage: f, giftingOrigin: v, onClose: p, onComplete: g, analyticsLocations: C, analyticsObject: j, giftRecipient: I, variantsReturnStyle: T } = e,
        E = !1,
        N = (0, l.Z)(),
        S = (e) => {
            n = e;
        };
    (0, r.openModalLazy)(
        async () => (e) => {
            let { onClose: n, returnRef: l, ...r } = e;
            return (0, i.jsx)(u.Z, {
                ...r,
                loadId: N,
                skuId: t,
                isGift: c,
                giftMessage: f,
                giftingOrigin: v,
                analyticsLocations: C,
                giftRecipient: I,
                onClose: (e) => {
                    n(), null == p || p(e);
                },
                onComplete: () => {
                    (E = !0), null == g || g();
                },
                returnRef: l,
                onStepChange: S
            });
        },
        {
            modalKey: m,
            onCloseCallback: () => {
                !E &&
                    d.default.track(h.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: N,
                        payment_type: h.Zuq[h.GZQ.ONE_TIME],
                        location: j,
                        is_gift: c,
                        location_stack: C
                    }),
                    (0, a.fw)(),
                    (0, s.p)(),
                    null == p || p(E),
                    E && (0, o.qg)({ variantsReturnStyle: T });
            },
            onCloseRequest: () => {
                null != n && x.has(n) && (0, r.closeModal)(m);
            }
        }
    );
}
