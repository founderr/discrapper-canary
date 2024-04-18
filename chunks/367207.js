"use strict";
n.r(t), n("411104"), n("47120");
var l = n("735250");
n("470079");
var a = n("481060"),
  s = n("570140"),
  i = n("317770"),
  r = n("100527"),
  o = n("963249"),
  u = n("592125"),
  d = n("594174"),
  c = n("295226"),
  f = n("74538"),
  h = n("351742"),
  p = n("937579"),
  m = n("316941"),
  C = n("485731"),
  g = n("841174"),
  E = n("424082"),
  _ = n("11352"),
  S = n("633361"),
  I = n("981631");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class T extends i.default {
  _initialize() {
    __OVERLAY__ ? s.default.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (s.default.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), s.default.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), s.default.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), s.default.subscribe("POST_CONNECTION_OPEN", this._trackCustomNotificationSoundsExposure), s.default.subscribe("RTC_CONNECTION_STATE", this.maybeShowHDStreamingPerksDemoPostUpsellModal))
  }
  _terminate() {
    __OVERLAY__ ? s.default.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (s.default.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), s.default.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), s.default.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), s.default.unsubscribe("POST_CONNECTION_OPEN", this._trackCustomNotificationSoundsExposure), s.default.unsubscribe("RTC_CONNECTION_STATE", this.maybeShowHDStreamingPerksDemoPostUpsellModal))
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
  maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
    if (!h.default.getCurrentConfig({
        location: "PremiumManager"
      }, {
        autoTrackExposure: !1
      }).enabled || e.state !== I.RTCConnectionStates.DISCONNECTED || e.willReconnect || !C.usePerksDemosUIStore.getState().hqStreamingDidEnable) return;
    let t = u.default.getChannel(e.channelId);
    null != t && (0, g.default)(t.guild_id)
  }
  constructor(...e) {
    super(...e), N(this, "_premiumPaymentModalCloseResolve", null), N(this, "_premiumPaymentModalCloseReject", null), N(this, "_maybeFetchPremiumOffer", () => {
      let e = d.default.getCurrentUser(),
        {
          annualDiscountsEnabled: t
        } = (0, E.getAnnualDiscountsExperimentConfig)("PremiumManager");
      null != e && e.verified && (!(0, f.isPremium)(e) && c.default.shouldFetchOffer() && ((0, S.shouldHitUserOfferEndPoints)("PremiumManager") ? (0, p.fetchUserOffer)() : m.default.fetchUserTrialOffer()), t && c.default.shouldFetchAnnualOffer() && (0, p.fetchAnnualUserOffer)())
    }), N(this, "_trackCustomNotificationSoundsExposure", () => {
      _.CustomNotificationSoundExperiment.trackExposure({
        location: "PremiumManager"
      })
    }), N(this, "_handlePremiumPaymentModalOpen", e => {
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
    }), N(this, "_handlePremiumPaymentModalClose", e => {
      let {
        didSucceed: t
      } = e;
      t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null
    })
  }
}
t.default = new T