n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(772848),
    l = n(481060),
    a = n(976255),
    o = n(667),
    s = n(335131),
    c = n(626135),
    u = n(409813),
    d = n(608579),
    m = n(981631);
let f = 'payment-modal',
    h = new Set([u.h8.REVIEW, u.h8.CONFIRM]);
function p(e) {
    let t;
    let { skuId: n, isGift: u = !1, giftMessage: p, giftingOrigin: g, onClose: _, onComplete: C, analyticsLocations: E, analyticsObject: I } = e,
        x = !1,
        v = (0, r.Z)(),
        N = (e) => {
            t = e;
        };
    (0, l.openModalLazy)(
        async () => (e) => {
            let { onClose: t, returnRef: r, ...l } = e;
            return (0, i.jsx)(d.Z, {
                ...l,
                loadId: v,
                skuId: n,
                isGift: u,
                giftMessage: p,
                giftingOrigin: g,
                analyticsLocations: E,
                onClose: (e) => {
                    t(), null == _ || _(e);
                },
                onComplete: () => {
                    (x = !0), null == C || C();
                },
                returnRef: r,
                onStepChange: N
            });
        },
        {
            modalKey: f,
            onCloseCallback: () => {
                !x &&
                    c.default.track(m.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: v,
                        payment_type: m.Zuq[m.GZQ.ONE_TIME],
                        location: I,
                        is_gift: u,
                        location_stack: E
                    }),
                    (0, a.fw)(),
                    (0, o.p)(),
                    null == _ || _(x),
                    x && (0, s.qg)();
            },
            onCloseRequest: () => {
                null != t && h.has(t) && (0, l.closeModal)(f);
            }
        }
    );
}
