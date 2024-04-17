"use strict";
a.r(t), a.d(t, {
  createClient: function() {
    return d
  },
  createPayPalClient: function() {
    return E
  },
  createVenmoClient: function() {
    return c
  },
  reopenPayPalWindow: function() {
    return N
  },
  reopenVenmoWindow: function() {
    return I
  },
  teardownClients: function() {
    return A
  },
  teardownPaypal: function() {
    return S
  },
  teardownVenmo: function() {
    return _
  },
  tokenizePayPal: function() {
    return p
  },
  tokenizeVenmo: function() {
    return m
  }
}), a("411104"), a("47120");
var n = a("544891"),
  l = a("570140"),
  s = a("618541"),
  r = a("751767"),
  o = a("358085"),
  u = a("355467"),
  i = a("981631");

function d() {
  (0, r.getBraintreeSDK)().then(e => {
    e.client.create({
      authorization: i.PaymentSettings.BRAINTREE.KEY
    }).then(e => {
      l.default.dispatch({
        type: "BRAINTREE_CREATE_CLIENT_SUCCESS",
        client: e
      }), E(), c()
    }).catch(() => l.default.dispatch({
      type: "BRAINTREE_CREATE_CLIENT_FAIL"
    }))
  })
}

function c() {
  let e = s.default.getClient();
  if (null == e) throw Error("Braintree client must be initialized before creating Venmo client.");
  (0, r.getBraintreeSDK)().then(t => {
    t.venmo.create({
      client: e,
      allowDesktop: !0,
      paymentMethodUsage: "multi_use"
    }).then(e => {
      l.default.dispatch({
        type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS",
        venmoClient: e
      })
    }).catch(() => {
      l.default.dispatch({
        type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL"
      })
    })
  })
}

function E() {
  let e = s.default.getClient();
  if (null == e) throw Error("braintree client must be initialized before calling this");
  (0, r.getBraintreeSDK)().then(t => {
    t.paypal.create({
      client: e
    }).then(e => {
      if (null == e._navigateFrameToAuth) throw Error("braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?");
      e._navigateFrameToAuth = function(e) {
        let t = this._formatPaymentResourceData(e);
        return n.HTTP.post({
          url: i.Endpoints.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
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
            let t = i.PaymentSettings.BRAINTREE.KEY.startsWith("production_") ? "https://www.paypal.com" : "https://sandbox.paypal.com";
            return "".concat(t, "/agreements/approve?nolegacy=1&ba_token=").concat(e)
          }(t))
        }).catch(e => (this._frameService.close(), this._authorizationInProgress = !1, Promise.reject(Error(e.body && e.body.message))))
      }, l.default.dispatch({
        type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS",
        paypalClient: e
      })
    }).catch(() => l.default.dispatch({
      type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL"
    }))
  })
}

function p() {
  let e = s.default.getPayPalClient();
  if (null == e) throw Error("braintree paypal client must be initialized before calling this");
  l.default.dispatch({
    type: "BRAINTREE_TOKENIZE_PAYPAL_START"
  });
  let t = Promise.resolve("");
  (0, o.isDesktop)() && (t = (0, u.popupBridgeState)(i.PaymentSourceTypes.PAYPAL)), t.then(() => e.tokenize({
    flow: "vault"
  })).then(e => {
    let {
      email: t,
      firstName: a,
      lastName: n,
      billingAddress: s
    } = e.details;
    l.default.dispatch({
      type: "BRAINTREE_TOKENIZE_PAYPAL_SUCCESS",
      nonce: e.nonce,
      email: t,
      billingAddress: {
        name: "".concat(a, " ").concat(n),
        line1: s.line1,
        line2: s.line2,
        city: s.city,
        state: s.state,
        country: s.countryCode,
        postalCode: s.postalCode
      }
    })
  }).catch(e => {
    let {
      message: t,
      code: a
    } = e;
    a === i.BraintreeErrors.PAYPAL_POPUP_CLOSED || null == a ? l.default.dispatch({
      type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED"
    }) : l.default.dispatch({
      type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL",
      message: t,
      code: a
    })
  })
}

function m() {
  let e = s.default.getVenmoClient();
  if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
  l.default.dispatch({
    type: "BRAINTREE_TOKENIZE_VENMO_START"
  }), e.tokenize().then(e => {
    let {
      username: t
    } = e.details;
    l.default.dispatch({
      type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS",
      nonce: e.nonce,
      username: t
    })
  }).catch(e => {
    let {
      message: t,
      code: a
    } = e;
    a === i.BraintreeErrors.VENMO_APP_CANCELED || a === i.BraintreeErrors.VENMO_CANCELED ? l.default.dispatch({
      type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED"
    }) : l.default.dispatch({
      type: "BRAINTREE_TOKENIZE_VENMO_FAIL",
      message: t,
      code: a
    })
  })
}

function f(e, t) {
  if (null == e) return Promise.resolve();
  l.default.dispatch(t);
  try {
    return Promise.resolve(e.teardown())
  } catch (e) {
    return Promise.resolve()
  }
}

function S() {
  return f(s.default.getPayPalClient(), {
    type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT"
  })
}

function _() {
  return f(s.default.getVenmoClient(), {
    type: "BRAINTREE_TEARDOWN_VENMO_CLIENT"
  })
}

function A() {
  return Promise.all([S(), _()])
}

function N() {
  let e = s.default.getLastURL();
  null == e ? p() : (l.default.dispatch({
    type: "BRAINTREE_TOKENIZE_PAYPAL_START"
  }), window.open(e))
}

function I() {
  m()
}