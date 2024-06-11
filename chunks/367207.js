"use strict";
n.r(t), n("411104"), n("47120");
var l = n("735250");
n("470079");
var a = n("392711"),
  s = n("848246"),
  i = n("481060"),
  r = n("570140"),
  o = n("904245"),
  u = n("317770"),
  d = n("100527"),
  c = n("358221"),
  f = n("963249"),
  h = n("592125"),
  m = n("430824"),
  C = n("594174"),
  p = n("295226"),
  g = n("626135"),
  E = n("74538"),
  S = n("557457"),
  _ = n("970645"),
  I = n("736871"),
  N = n("6242"),
  T = n("757692"),
  A = n("351742"),
  L = n("114064"),
  v = n("937579"),
  x = n("485731"),
  R = n("841174"),
  M = n("11352"),
  y = n("474936"),
  O = n("981631"),
  b = n("354459"),
  D = n("37113"),
  j = n("689938");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class G extends u.default {
  _initialize() {
    __OVERLAY__ ? r.default.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (r.default.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), r.default.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), r.default.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), r.default.subscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery), r.default.subscribe("POST_CONNECTION_OPEN", this._trackCustomNotificationSoundsExposure), r.default.subscribe("RTC_CONNECTION_STATE", this.maybeShowHDStreamingPerksDemoPostUpsellModal), r.default.subscribe("MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", this.maybeShowHDStreamingViewerUpsellMessage), r.default.subscribe("VOICE_CHANNEL_SELECT", this.cleanupShowHDStreamingViewerUpsellMessage))
  }
  _terminate() {
    __OVERLAY__ ? r.default.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (r.default.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), r.default.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), r.default.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), r.default.unsubscribe("POST_CONNECTION_OPEN", this._trackCustomNotificationSoundsExposure), r.default.unsubscribe("RTC_CONNECTION_STATE", this.maybeShowHDStreamingPerksDemoPostUpsellModal), r.default.unsubscribe("MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", this.maybeShowHDStreamingViewerUpsellMessage), r.default.unsubscribe("VOICE_CHANNEL_SELECT", this.cleanupShowHDStreamingViewerUpsellMessage))
  }
  handleMessageLengthUpsell(e) {
    let {
      channel: t,
      content: a
    } = e;
    (0, i.openModalLazy)(async () => {
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
      (0, f.default)({
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
      this._premiumPaymentModalCloseResolve = e, this._premiumPaymentModalCloseReject = s, r.default.dispatch({
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
    let {
      inPerksDemosExperiment: n
    } = I.default.getCurrentConfig({
      location: "PremiumManager"
    }, {
      autoTrackExposure: !1
    }), {
      enabled: l
    } = A.default.getCurrentConfig({
      location: "PremiumManager"
    }, {
      autoTrackExposure: !1
    });
    if (!n || !l || e.state !== O.RTCConnectionStates.DISCONNECTED || e.willReconnect) return;
    let a = h.default.getChannel(e.channelId);
    if (null == a || !(null === (t = L.default.getPerksDemos()) || void 0 === t ? void 0 : t[s.EntitlementFeatureNames.STREAM_HIGH_QUALITY])) return;
    let i = L.default.getActivated()[s.EntitlementFeatureNames.STREAM_HIGH_QUALITY];
    i && r.default.dispatch({
      type: "PREMIUM_PERKS_DEMO_COMPLETE",
      perkType: s.EntitlementFeatureNames.STREAM_HIGH_QUALITY
    }), i && x.usePerksDemosUIStore.getState().hqStreamingDidEnable && (0, R.default)(a.guild_id)
  }
  constructor(...e) {
    super(...e), P(this, "_premiumPaymentModalCloseResolve", null), P(this, "_premiumPaymentModalCloseReject", null), P(this, "_lastStreamingChannelId", null), P(this, "_maybeFetchPremiumOffer", async () => {
      let e = C.default.getCurrentUser();
      if (null != e && e.verified) {
        let t = !(0, E.isPremium)(e) && p.default.shouldFetchOffer();
        await (0, v.fetchUserOffer)(t)
      }
      r.default.dispatch({
        type: "PREMIUM_MARKETING_DATA_READY"
      })
    }), P(this, "_maybeFetchCheckoutRecovery", async () => {
      let e = C.default.getCurrentUser();
      null != e && e.verified && !(0, E.isPremium)(e) && await (0, _.fetchCheckoutRecovery)()
    }), P(this, "_trackCustomNotificationSoundsExposure", () => {
      M.CustomNotificationSoundExperiment.trackExposure({
        location: "PremiumManager"
      })
    }), P(this, "_handlePremiumPaymentModalOpen", e => {
      (0, f.default)({
        ...e,
        analyticsLocations: [d.default.OVERLAY],
        onClose: e => {
          r.default.dispatch({
            type: "PREMIUM_PAYMENT_MODAL_CLOSE",
            didSucceed: e
          })
        }
      })
    }), P(this, "_handlePremiumPaymentModalClose", e => {
      let {
        didSucceed: t
      } = e;
      t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null
    }), P(this, "maybeShowHDStreamingViewerUpsellMessage", e => {
      let t = C.default.getCurrentUser();
      (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t)
    }), P(this, "_maybeSendViewerUpsellMessage", (0, a.debounce)((e, t, n) => {
      var l, a;
      let s = c.default.getSelectedParticipant(e),
        i = (0, T.canStreamParticipantSetting)(s, n),
        {
          sendNitroMessage: r
        } = (0, N.getHDStreamingViewerExperimentConfig)(i),
        u = null !== (a = null === (l = m.default.getGuild(t)) || void 0 === l ? void 0 : l.premiumTier) && void 0 !== a ? a : O.BoostedGuildTiers.NONE;
      if (r && !(u >= O.BoostedGuildTiers.TIER_2) && (null == s ? void 0 : s.type) === b.ParticipantTypes.STREAM && (null == s ? void 0 : s.id) !== (null == n ? void 0 : n.id) && null != s.maxResolution && null != s.maxFrameRate && e !== this._lastStreamingChannelId) {
        this._lastStreamingChannelId = e;
        let n = j.default.Messages.STREAM_PREMIUM_VIEWER_UPSELL_MESSAGE.format({
          nickname: s.userNick,
          resolution: (0, D.makeResolutionLabel)(s.maxResolution.height),
          fps: (0, S.getFPSText)(s.maxFrameRate)
        });
        o.default.sendNitroSystemMessage(e, n), g.default.track(O.AnalyticEvents.PREMIUM_UPSELL_MESSAGE_SENT, {
          type: y.PremiumUpsellTypes.HD_STREAMING_VIEWER_UPSELL,
          location_section: O.AnalyticsSections.TEXT_IN_VOICE,
          location_object: O.AnalyticsObjects.MESSAGE,
          guild_id: t
        })
      }
    }, 200)), P(this, "cleanupShowHDStreamingViewerUpsellMessage", e => {
      null == e.channelId && (this._lastStreamingChannelId = null)
    })
  }
}
t.default = new G