var n,
    a,
    i,
    r,
    o = t(442837),
    l = t(570140),
    c = t(594174),
    d = t(74538),
    u = t(981631);
let _ = !1,
    E = !1,
    T = !1;
class I extends (r = o.ZP.Store) {
    shouldDisplayUpsell() {
        let e = c.default.getCurrentUser();
        return _ && !(0, d.I5)(e) && !T && !E;
    }
}
(i = 'CashAppPayAwarenessStore'),
    (a = 'displayName') in (n = I)
        ? Object.defineProperty(n, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (n[a] = i),
    (s.Z = new I(l.Z, {
        CASH_APP_PAY_AWARENESS_UPSELL_DISMISSED: function () {
            T = !0;
        },
        CASH_APP_PAY_AWARENESS_UPSELL_CTA_CLICKED: function () {
            E = !0;
        },
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: function (e) {
            var s;
            _ = (null == e ? void 0 : null === (s = e.paymentSource) || void 0 === s ? void 0 : s.type) === u.HeQ.CASH_APP;
        },
        LOGOUT: function () {
            (_ = !1), (T = !1), (E = !1);
        }
    }));
