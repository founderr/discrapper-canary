t.d(n, {
    Z: function () {
        return x;
    }
}),
    t(47120);
var s = t(735250);
t(470079);
var a = t(772848),
    l = t(481060),
    i = t(976255),
    r = t(667),
    o = t(335131),
    d = t(626135),
    c = t(409813),
    u = t(608579),
    E = t(981631);
let C = 'payment-modal',
    h = new Set([c.h8.REVIEW, c.h8.CONFIRM]);
function x(e) {
    let n;
    let { skuId: t, isGift: c = !1, giftMessage: x, onClose: f, onComplete: T, analyticsLocations: p, analyticsObject: I } = e,
        m = !1,
        S = (0, a.Z)(),
        g = (e) => {
            n = e;
        };
    (0, l.openModalLazy)(
        async () => (e) => {
            let { onClose: n, returnRef: a, ...l } = e;
            return (0, s.jsx)(u.Z, {
                ...l,
                loadId: S,
                skuId: t,
                isGift: c,
                giftMessage: x,
                analyticsLocations: p,
                onClose: (e) => {
                    n(), null == f || f(e);
                },
                onComplete: () => {
                    (m = !0), null == T || T();
                },
                returnRef: a,
                onStepChange: g
            });
        },
        {
            modalKey: C,
            onCloseCallback: () => {
                !m &&
                    d.default.track(E.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: S,
                        payment_type: E.Zuq[E.GZQ.ONE_TIME],
                        location: I,
                        is_gift: c,
                        location_stack: p
                    }),
                    (0, i.fw)(),
                    (0, r.p)(),
                    null == f || f(m),
                    m && (0, o.qg)();
            },
            onCloseRequest: () => {
                null != n && h.has(n) && (0, l.closeModal)(C);
            }
        }
    );
}
