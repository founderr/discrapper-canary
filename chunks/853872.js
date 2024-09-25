var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(46141);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = {},
    c = null,
    d = !1;
function _(e) {
    let { paymentSources: t } = e;
    for (let e of ((u = {}), (c = null), t)) (u[e.id] = s.ZP.createFromServer(e)), e.default && (c = e.id);
    null == c && t.length > 0 && (c = t[0].id), (d = !0);
}
function E(e) {
    let { paymentSource: t } = e;
    (u = {
        ...u,
        [t.id]: t
    }),
        (t.isDefault || 1 === Object.keys(u).length) && (c = t.id);
}
function f(e) {
    let { id: t } = e;
    if (((u = { ...u }), delete u[t], c === t)) {
        let e = Object.keys(u);
        c = 0 === e.length ? null : e[0];
    }
}
function h() {
    (u = {}), (c = null), (d = !1);
}
class p extends (r = a.ZP.Store) {
    get paymentSources() {
        return u;
    }
    get paymentSourceIds() {
        return Object.keys(u);
    }
    get defaultPaymentSourceId() {
        return c;
    }
    get defaultPaymentSource() {
        return null != c ? u[c] : null;
    }
    get hasFetchedPaymentSources() {
        return d;
    }
    getDefaultBillingCountryCode() {
        let e = this.defaultPaymentSource;
        return null == e ? null : e.paymentMethodCountry;
    }
    getPaymentSource(e) {
        return u[e];
    }
}
l(p, 'displayName', 'PaymentSourceStore'),
    (t.Z = new p(o.Z, {
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: E,
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: E,
        BILLING_PAYMENT_SOURCE_FETCH_SUCCESS: E,
        BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: _,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: f,
        LOGOUT: h
    }));
