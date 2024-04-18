"use strict";
n.r(t), n("411104"), n("47120");
var l = n("735250");
n("470079");
var a = n("848246"),
  s = n("481060"),
  i = n("570140"),
  r = n("317770"),
  o = n("100527"),
  u = n("963249"),
  d = n("592125"),
  c = n("594174"),
  f = n("295226"),
  h = n("74538"),
  p = n("351742"),
  m = n("937579"),
  C = n("316941"),
  g = n("485731"),
  E = n("841174"),
  _ = n("424082"),
  S = n("11352"),
  I = n("633361"),
  N = n("981631");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class A extends r.default {
  _initialize() {
    __OVERLAY__ ? i.default.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (i.default.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), i.default.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), i.default.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), i.default.subscribe("POST_CONNECTION_OPEN", this._trackCustomNotificationSoundsExposure), i.default.subscribe("RTC_CONNECTION_STATE", this.maybeShowHDStreamingPerksDemoPostUpsellModal))
  }
  _terminate() {
    __OVERLAY__ ? i.default.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (i.default.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), i.default.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), i.default.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), i.default.unsubscribe("POST_CONNECTION_OPEN", this._trackCustomNotificationSoundsExposure), i.default.unsubscribe("RTC_CONNECTION_STATE", this.maybeShowHDStreamingPerksDemoPostUpsellModal))
  }
  handleMessageLengthUpsell(e) {
    let {
      channel: t,
      content: a
    } = e;
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e("33184").then(n.bind(n, "465836"));
      return n => (0, l.jsx)(e, {
        channel: t,
        content: a,
        ...n
      })
    })
  }
  openPremiumPaymentModalInApp(e) {
    if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
    return new Promise((t, n) => {
      (0, u.default)({
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
    return new Promise((e, s) => {
      this._premiumPaymentModalCloseResolve = e, this._premiumPaymentModalCloseReject = s, i.default.dispatch({
        type: "PREMIUM_PAYMENT_MODAL_OPEN",
        initialPlanId: t,
        subscriptionTier: n,
        followupSKUInfo: l,
        analyticsObject: a
      })
    })
  }
  maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
    if (!p.default.getCurrentConfig({
        location: "PremiumManager"
      }, {
        autoTrackExposure: !1
      }).enabled || e.state !== N.RTCConnectionStates.DISCONNECTED || e.willReconnect || !g.usePerksDemosUIStore.getState().hqStreamingDidEnable) return;
    let t = d.default.getChannel(e.channelId);
    null != t && (i.default.dispatch({
      type: "PREMIUM_PERKS_DEMO_COMPLETE",
      perkType: a.EntitlementFeatureNames.STREAM_HIGH_QUALITY
    }), (0, E.default)(t.guild_id))
  }
  constructor(...e) {
    super(...e), T(this, "_premiumPaymentModalCloseResolve", null), T(this, "_premiumPaymentModalCloseReject", null), T(this, "_maybeFetchPremiumOffer", () => {
      let e = c.default.getCurrentUser(),
        {
          annualDiscountsEnabled: t
        } = (0, _.getAnnualDiscountsExperimentConfig)("PremiumManager");
      null != e && e.verified && (!(0, h.isPremium)(e) && f.default.shouldFetchOffer() && ((0, I.shouldHitUserOfferEndPoints)("PremiumManager") ? (0, m.fetchUserOffer)() : C.default.fetchUserTrialOffer()), t && f.default.shouldFetchAnnualOffer() && (0, m.fetchAnnualUserOffer)())
    }), T(this, "_trackCustomNotificationSoundsExposure", () => {
      S.CustomNotificationSoundExperiment.trackExposure({
        location: "PremiumManager"
      })
    }), T(this, "_handlePremiumPaymentModalOpen", e => {
      (0, u.default)({
        ...e,
        analyticsLocations: [o.default.OVERLAY],
        onClose: e => {
          i.default.dispatch({
            type: "PREMIUM_PAYMENT_MODAL_CLOSE",
            didSucceed: e
          })
        }
      })
    }), T(this, "_handlePremiumPaymentModalClose", e => {
      let {
        didSucceed: t
      } = e;
      t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null
    })
  }
}
t.default = new A