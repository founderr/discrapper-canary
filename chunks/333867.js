t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var a = t(772848),
    r = t(481060),
    o = t(159351),
    l = t(667),
    s = t(335131),
    d = t(626135),
    c = t(409813),
    u = t(608579),
    f = t(981631);
let p = 'payment-modal',
    m = new Set([c.h8.REVIEW, c.h8.CONFIRM, c.h8.GIFT_CUSTOMIZATION]);
function _(e) {
    let n;
    let { skuId: t, isGift: c = !1, giftMessage: _, giftingOrigin: g, onClose: b, onComplete: h, analyticsLocations: x, analyticsObject: C, giftRecipient: v, variantsReturnStyle: I } = e,
        S = !1,
        T = (0, a.Z)(),
        j = (e) => {
            n = e;
        };
    (0, r.openModalLazy)(
        async () => (e) => {
            let { onClose: n, returnRef: a, ...r } = e;
            return (0, i.jsx)(u.Z, {
                ...r,
                loadId: T,
                skuId: t,
                isGift: c,
                giftMessage: _,
                giftingOrigin: g,
                analyticsLocations: x,
                giftRecipient: v,
                onClose: (e) => {
                    n(), null == b || b(e);
                },
                onComplete: () => {
                    (S = !0), null == h || h();
                },
                returnRef: a,
                onStepChange: j
            });
        },
        {
            modalKey: p,
            onCloseCallback: () => {
                !S &&
                    d.default.track(f.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: T,
                        payment_type: f.Zuq[f.GZQ.ONE_TIME],
                        location: C,
                        is_gift: c,
                        location_stack: x
                    }),
                    (0, o.fw)(),
                    (0, l.p)(),
                    null == b || b(S),
                    S && (0, s.qg)({ variantsReturnStyle: I });
            },
            onCloseRequest: () => {
                null != n && m.has(n) && (0, r.closeModal)(p);
            }
        }
    );
}
