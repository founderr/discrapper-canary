"use strict";
n.r(t), n("411104"), n("47120");
var l = n("735250");
n("470079");
var a = n("481060"),
  s = n("570140"),
  i = n("317770"),
  r = n("100527"),
  o = n("963249"),
  u = n("594174"),
  d = n("295226"),
  c = n("74538"),
  f = n("937579"),
  h = n("316941"),
  p = n("424082"),
  m = n("633361");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class g extends i.default {
  _initialize() {
    __OVERLAY__ ? s.default.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (s.default.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), s.default.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), s.default.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer))
  }
  _terminate() {
    __OVERLAY__ ? s.default.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (s.default.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), s.default.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), s.default.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer))
  }
  handleMessageLengthUpsell(e) {
    let {
      channel: t,
      content: s
    } = e;
    (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e("33184").then(n.bind(n, "465836"));
      return n => (0, l.jsx)(e, {
        channel: t,
        content: s,
        ...n
      })
    })
  }
  openPremiumPaymentModalInApp(e) {
    if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
    return new Promise((t, n) => {
      (0, o.default)({
        ...e,
        onClose: e => {
          e ? t() : n()
        }
      })
    })
  }
  openPremiumPaymentModalInOverlay(e) {
    if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
    let {
      initialPlanId: t,
      subscriptionTier: n,
      followupSKUInfo: l,
      analyticsObject: a
    } = null != e ? e : {};
    return new Promise((e, i) => {
      this._premiumPaymentModalCloseResolve = e, this._premiumPaymentModalCloseReject = i, s.default.dispatch({
        type: "PREMIUM_PAYMENT_MODAL_OPEN",
        initialPlanId: t,
        subscriptionTier: n,
        followupSKUInfo: l,
        analyticsObject: a
      })
    })
  }
  constructor(...e) {
    super(...e), C(this, "_premiumPaymentModalCloseResolve", null), C(this, "_premiumPaymentModalCloseReject", null), C(this, "_maybeFetchPremiumOffer", () => {
      let e = u.default.getCurrentUser(),
        t = (0, p.annualDiscountsExperimentEnabled)("PremiumManager");
      null != e && e.verified && (!(0, c.isPremium)(e) && d.default.shouldFetchOffer() && ((0, m.shouldHitUserOfferEndPoints)("PremiumManager") ? (0, f.fetchUserOffer)() : h.default.fetchUserTrialOffer()), t && d.default.shouldFetchAnnualOffer() && (0, f.fetchAnnualUserOffer)())
    }), C(this, "_handlePremiumPaymentModalOpen", e => {
      (0, o.default)({
        ...e,
        analyticsLocations: [r.default.OVERLAY],
        onClose: e => {
          s.default.dispatch({
            type: "PREMIUM_PAYMENT_MODAL_CLOSE",
            didSucceed: e
          })
        }
      })
    }), C(this, "_handlePremiumPaymentModalClose", e => {
      let {
        didSucceed: t
      } = e;
      t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null
    })
  }
}
t.default = new g