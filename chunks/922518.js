var n,
    a,
    i,
    r,
    o = t(442837),
    l = t(570140),
    c = t(594174),
    d = t(74538),
    _ = t(981631);
let E = !1,
    u = !1,
    I = !1;
class T extends (r = o.ZP.Store) {
    shouldDisplayUpsell() {
        let e = c.default.getCurrentUser();
        return E && !(0, d.I5)(e) && !I && !u;
    }
}
(i = 'CashAppPayAwarenessStore'),
    (a = 'displayName') in (n = T)
        ? Object.defineProperty(n, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (n[a] = i),
    (s.Z = new T(l.Z, {
        CASH_APP_PAY_AWARENESS_UPSELL_DISMISSED: function () {
            I = !0;
        },
        CASH_APP_PAY_AWARENESS_UPSELL_CTA_CLICKED: function () {
            u = !0;
        },
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: function (e) {
            var s;
            E = (null == e ? void 0 : null === (s = e.paymentSource) || void 0 === s ? void 0 : s.type) === _.HeQ.CASH_APP;
        },
        LOGOUT: function () {
            (E = !1), (I = !1), (u = !1);
        }
    }));
