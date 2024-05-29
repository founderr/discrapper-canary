"use strict";
a.r(t), a.d(t, {
  createClient: function() {
    return c
  },
  createPayPalClient: function() {
    return p
  },
  createVenmoClient: function() {
    return d
  },
  reopenPayPalWindow: function() {
    return _
  },
  reopenVenmoWindow: function() {
    return y
  },
  teardownClients: function() {
    return T
  },
  teardownPaypal: function() {
    return A
  },
  teardownVenmo: function() {
    return f
  },
  tokenizePayPal: function() {
    return E
  },
  tokenizeVenmo: function() {
    return m
  }
}), a("411104"), a("47120");
var n = a("544891"),
  s = a("570140"),
  l = a("618541"),
  r = a("751767"),
  o = a("358085"),
  i = a("355467"),
  u = a("981631");

function c() {
  (0, r.getBraintreeSDK)().then(e => {
    e.client.create({
      authorization: u.PaymentSettings.BRAINTREE.KEY
    }).then(e => {
      s.default.dispatch({
        type: "BRAINTREE_CREATE_CLIENT_SUCCESS",
        client: e
      }), p(), d()
    }).catch(() => s.default.dispatch({
      type: "BRAINTREE_CREATE_CLIENT_FAIL"
    }))
  })
}

function d() {
  let e = l.default.getClient();
  if (null == e) throw Error("Braintree client must be initialized before creating Venmo client.");
  (0, r.getBraintreeSDK)().then(t => {
    t.venmo.create({
      client: e,
      allowDesktop: !0,
      paymentMethodUsage: "multi_use"
    }).then(e => {
      s.default.dispatch({
        type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS",
        venmoClient: e
      })
    }).catch(() => {
      s.default.dispatch({
        type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL"
      })
    })
  })
}

function p() {
  let e = l.default.getClient();
  if (null == e) throw Error("braintree client must be initialized before calling this");
  (0, r.getBraintreeSDK)().then(t => {
    t.paypal.create({
      client: e
    }).then(e => {
      if (null == e._navigateFrameToAuth) throw Error("braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?");
      e._navigateFrameToAuth = function(e) {
        let t = this._formatPaymentResourceData(e);
        return n.HTTP.post({
          url: u.Endpoints.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
          oldFormErrors: !0,
          body: {
            return_url: t.returnUrl,
            cancel_url: t.cancelUrl
          }
        }).then(e => {
          let {
            body: {
              token: t
            }
          } = e;
          this._frameService.redirect(function(e) {
            let t = u.PaymentSettings.BRAINTREE.KEY.startsWith("production_") ? "https://www.paypal.com" : "https://sandbox.paypal.com";
            return "".concat(t, "/agreements/approve?nolegacy=1&ba_token=").concat(e)
          }(t))
        }).catch(e => (this._frameService.close(), this._authorizationInProgress = !1, Promise.reject(Error(e.body && e.body.message))))
      }, s.default.dispatch({
        type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS",
        paypalClient: e
      })
    }).catch(() => s.default.dispatch({
      type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL"
    }))
  })
}

function E() {
  let e = l.default.getPayPalClient();
  if (null == e) throw Error("braintree paypal client must be initialized before calling this");
  s.default.dispatch({
    type: "BRAINTREE_TOKENIZE_PAYPAL_START"
  });
  let t = Promise.resolve("");
  (0, o.isDesktop)() && (t = (0, i.popupBridgeState)(u.PaymentSourceTypes.PAYPAL)), t.then(() => e.tokenize({
    flow: "vault"
  })).then(e => {
    let {
      email: t,
      firstName: a,
      lastName: n,
      billingAddress: l
    } = e.details;
    s.default.dispatch({
      type: "BRAINTREE_TOKENIZE_PAYPAL_SUCCESS",
      nonce: e.nonce,
      email: t,
      billingAddress: {
        name: "".concat(a, " ").concat(n),
        line1: l.line1,
        line2: l.line2,
        city: l.city,
        state: l.state,
        country: l.countryCode,
        postalCode: l.postalCode
      }
    })
  }).catch(e => {
    let {
      message: t,
      code: a
    } = e;
    a === u.BraintreeErrors.PAYPAL_POPUP_CLOSED || null == a ? s.default.dispatch({
      type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED"
    }) : s.default.dispatch({
      type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL",
      message: t,
      code: a
    })
  })
}

function m() {
  let e = l.default.getVenmoClient();
  if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
  s.default.dispatch({
    type: "BRAINTREE_TOKENIZE_VENMO_START"
  }), e.tokenize().then(e => {
    let {
      username: t
    } = e.details;
    s.default.dispatch({
      type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS",
      nonce: e.nonce,
      username: t
    })
  }).catch(e => {
    let {
      message: t,
      code: a
    } = e;
    a === u.BraintreeErrors.VENMO_APP_CANCELED || a === u.BraintreeErrors.VENMO_CANCELED ? s.default.dispatch({
      type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED"
    }) : s.default.dispatch({
      type: "BRAINTREE_TOKENIZE_VENMO_FAIL",
      message: t,
      code: a
    })
  })
}

function S(e, t) {
  if (null == e) return Promise.resolve();
  s.default.dispatch(t);
  try {
    return Promise.resolve(e.teardown())
  } catch (e) {
    return Promise.resolve()
  }
}

function A() {
  return S(l.default.getPayPalClient(), {
    type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT"
  })
}

function f() {
  return S(l.default.getVenmoClient(), {
    type: "BRAINTREE_TEARDOWN_VENMO_CLIENT"
  })
}

function T() {
  return Promise.all([A(), f()])
}

function _() {
  let e = l.default.getLastURL();
  null == e ? E() : (s.default.dispatch({
    type: "BRAINTREE_TOKENIZE_PAYPAL_START"
  }), window.open(e))
}

function y() {
  m()
}