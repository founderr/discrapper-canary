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
  p = n("594174"),
  C = n("295226"),
  g = n("74538"),
  E = n("557457"),
  S = n("736871"),
  _ = n("6242"),
  I = n("757692"),
  N = n("351742"),
  T = n("114064"),
  A = n("937579"),
  L = n("485731"),
  v = n("841174"),
  x = n("11352"),
  R = n("981631"),
  M = n("354459"),
  y = n("37113"),
  O = n("689938");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class b extends u.default {
  _initialize() {
    __OVERLAY__ ? r.default.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (r.default.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), r.default.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), r.default.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), r.default.subscribe("POST_CONNECTION_OPEN", this._trackCustomNotificationSoundsExposure), r.default.subscribe("RTC_CONNECTION_STATE", this.maybeShowHDStreamingPerksDemoPostUpsellModal), r.default.subscribe("MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", this.maybeShowHDStreamingViewerUpsellMessage), r.default.subscribe("VOICE_CHANNEL_SELECT", this.cleanupShowHDStreamingViewerUpsellMessage))
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
    } = S.default.getCurrentConfig({
      location: "PremiumManager"
    }, {
      autoTrackExposure: !1
    }), {
      enabled: l
    } = N.default.getCurrentConfig({
      location: "PremiumManager"
    }, {
      autoTrackExposure: !1
    });
    if (!n || !l || e.state !== R.RTCConnectionStates.DISCONNECTED || e.willReconnect) return;
    let a = h.default.getChannel(e.channelId);
    if (null == a || !(null === (t = T.default.getPerksDemos()) || void 0 === t ? void 0 : t[s.EntitlementFeatureNames.STREAM_HIGH_QUALITY])) return;
    let i = T.default.getActivated()[s.EntitlementFeatureNames.STREAM_HIGH_QUALITY];
    i && r.default.dispatch({
      type: "PREMIUM_PERKS_DEMO_COMPLETE",
      perkType: s.EntitlementFeatureNames.STREAM_HIGH_QUALITY
    }), i && L.usePerksDemosUIStore.getState().hqStreamingDidEnable && (0, v.default)(a.guild_id)
  }
  constructor(...e) {
    super(...e), D(this, "_premiumPaymentModalCloseResolve", null), D(this, "_premiumPaymentModalCloseReject", null), D(this, "_lastStreamingChannelId", null), D(this, "_maybeFetchPremiumOffer", async () => {
      let e = p.default.getCurrentUser();
      if (null != e && e.verified) {
        let t = !(0, g.isPremium)(e) && C.default.shouldFetchOffer();
        await (0, A.fetchUserOffer)(t)
      }
      r.default.dispatch({
        type: "PREMIUM_MARKETING_DATA_READY"
      })
    }), D(this, "_trackCustomNotificationSoundsExposure", () => {
      x.CustomNotificationSoundExperiment.trackExposure({
        location: "PremiumManager"
      })
    }), D(this, "_handlePremiumPaymentModalOpen", e => {
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
    }), D(this, "_handlePremiumPaymentModalClose", e => {
      let {
        didSucceed: t
      } = e;
      t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null
    }), D(this, "maybeShowHDStreamingViewerUpsellMessage", e => {
      let t = p.default.getCurrentUser();
      (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t)
    }), D(this, "_maybeSendViewerUpsellMessage", (0, a.debounce)((e, t, n) => {
      var l, a;
      let s = c.default.getSelectedParticipant(e),
        i = (0, I.canStreamParticipantSetting)(s, n),
        {
          sendNitroMessage: r
        } = (0, _.getHDStreamingViewerExperimentConfig)(i),
        u = null !== (a = null === (l = m.default.getGuild(t)) || void 0 === l ? void 0 : l.premiumTier) && void 0 !== a ? a : R.BoostedGuildTiers.NONE;
      if (r && !(u >= R.BoostedGuildTiers.TIER_2) && (null == s ? void 0 : s.type) === M.ParticipantTypes.STREAM && (null == s ? void 0 : s.id) !== (null == n ? void 0 : n.id) && null != s.maxResolution && null != s.maxFrameRate && e !== this._lastStreamingChannelId) {
        this._lastStreamingChannelId = e;
        let t = O.default.Messages.STREAM_PREMIUM_VIEWER_UPSELL_MESSAGE.format({
          nickname: s.userNick,
          resolution: (0, y.makeResolutionLabel)(s.maxResolution.height),
          fps: (0, E.getFPSText)(s.maxFrameRate)
        });
        o.default.sendNitroSystemMessage(e, t)
      }
    }, 200)), D(this, "cleanupShowHDStreamingViewerUpsellMessage", e => {
      null == e.channelId && (this._lastStreamingChannelId = null)
    })
  }
}
t.default = new b