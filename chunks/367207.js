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
  m = n("114064"),
  C = n("937579"),
  g = n("316941"),
  E = n("485731"),
  _ = n("841174"),
  S = n("424082"),
  I = n("11352"),
  N = n("633361"),
  T = n("981631");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class L extends r.default {
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
    var t;
    if (!p.default.getCurrentConfig({
        location: "PremiumManager"
      }, {
        autoTrackExposure: !1
      }).enabled || e.state !== T.RTCConnectionStates.DISCONNECTED || e.willReconnect) return;
    let n = d.default.getChannel(e.channelId);
    if (null == n || !(null === (t = m.default.getPerksDemos()) || void 0 === t ? void 0 : t[a.EntitlementFeatureNames.STREAM_HIGH_QUALITY])) return;
    let l = m.default.getActivated()[a.EntitlementFeatureNames.STREAM_HIGH_QUALITY];
    l && i.default.dispatch({
      type: "PREMIUM_PERKS_DEMO_COMPLETE",
      perkType: a.EntitlementFeatureNames.STREAM_HIGH_QUALITY
    }), l && E.usePerksDemosUIStore.getState().hqStreamingDidEnable && (0, _.default)(n.guild_id)
  }
  constructor(...e) {
    super(...e), A(this, "_premiumPaymentModalCloseResolve", null), A(this, "_premiumPaymentModalCloseReject", null), A(this, "_maybeFetchPremiumOffer", () => {
      let e = c.default.getCurrentUser(),
        {
          annualDiscountsEnabled: t
        } = (0, S.getAnnualDiscountsExperimentConfig)("PremiumManager");
      null != e && e.verified && (!(0, h.isPremium)(e) && f.default.shouldFetchOffer() && ((0, N.shouldHitUserOfferEndPoints)("PremiumManager") ? (0, C.fetchUserOffer)() : g.default.fetchUserTrialOffer()), t && f.default.shouldFetchAnnualOffer() && (0, C.fetchAnnualUserOffer)())
    }), A(this, "_trackCustomNotificationSoundsExposure", () => {
      I.CustomNotificationSoundExperiment.trackExposure({
        location: "PremiumManager"
      })
    }), A(this, "_handlePremiumPaymentModalOpen", e => {
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
    }), A(this, "_handlePremiumPaymentModalClose", e => {
      let {
        didSucceed: t
      } = e;
      t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null
    })
  }
}
t.default = new L