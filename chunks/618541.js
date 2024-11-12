let r, i;
n(411104);
var a,
    s,
    o,
    l,
    u = n(442837),
    c = n(544891),
    d = n(570140),
    f = n(358085),
    _ = n(981631);
let p = null,
    h = null,
    m = null;
(0, f.isDesktop)() &&
    (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == r) throw Error('popupBridgeState is unset');
            return (0, c.K0)() + _.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(_.gg$.BRAINTREE, r);
        },
        open: (e) => {
            (i = e), window.open(e), E.emitChange();
        }
    });
class g extends (a = u.ZP.Store) {
    getClient() {
        return p;
    }
    getPayPalClient() {
        return h;
    }
    getVenmoClient() {
        return m;
    }
    getLastURL() {
        return i;
    }
}
(l = 'BraintreeStore'),
    (o = 'displayName') in (s = g)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l);
let E = new g(d.Z, {
    BRAINTREE_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        p = t;
    },
    BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function (e) {
        let { paypalClient: t } = e;
        h = t;
    },
    BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
        let { paymentSourceType: t, state: n, path: i, query: a } = e;
        if (t !== _.HeQ.PAYPAL || n !== r) return;
        let s = window.popupBridge.onComplete;
        'function' == typeof s &&
            s(null, {
                path: i,
                queryItems: a
            });
    },
    BILLING_POPUP_BRIDGE_STATE_UPDATE: function (e) {
        let { paymentSourceType: t, state: n } = e;
        t === _.HeQ.PAYPAL && (r = n);
    },
    BRAINTREE_TEARDOWN_PAYPAL_CLIENT: function () {
        h = null;
    },
    BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function (e) {
        let { venmoClient: t } = e;
        m = t;
    },
    BRAINTREE_TEARDOWN_VENMO_CLIENT: function () {
        m = null;
    }
});
t.Z = E;
