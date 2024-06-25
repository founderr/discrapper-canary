n(411104), n(47120);
var l = n(735250);
n(470079);
var i = n(392711),
  s = n(848246),
  r = n(481060),
  a = n(570140),
  o = n(904245),
  u = n(317770),
  c = n(100527),
  d = n(358221),
  h = n(963249),
  p = n(592125),
  g = n(430824),
  m = n(594174),
  C = n(295226),
  E = n(626135),
  f = n(74538),
  _ = n(557457),
  I = n(970645),
  N = n(736871),
  Z = n(6242),
  S = n(757692),
  x = n(114064),
  L = n(937579),
  T = n(485731),
  v = n(1163),
  A = n(841174),
  M = n(11352),
  R = n(474936),
  O = n(981631),
  P = n(354459),
  b = n(37113),
  j = n(689938);

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class D extends u.Z {
  _initialize() {
    __OVERLAY__ ? a.Z.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (a.Z.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), a.Z.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), a.Z.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), a.Z.subscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery), a.Z.subscribe("POST_CONNECTION_OPEN", this._trackCustomNotificationSoundsExposure), a.Z.subscribe("RTC_CONNECTION_STATE", this.maybeShowHDStreamingPerksDemoPostUpsellModal), a.Z.subscribe("MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", this.maybeShowHDStreamingViewerUpsellMessage), a.Z.subscribe("VOICE_CHANNEL_SELECT", this.cleanupShowHDStreamingViewerUpsellMessage))
  }
  _terminate() {
    __OVERLAY__ ? a.Z.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (a.Z.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), a.Z.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), a.Z.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), a.Z.unsubscribe("POST_CONNECTION_OPEN", this._trackCustomNotificationSoundsExposure), a.Z.unsubscribe("RTC_CONNECTION_STATE", this.maybeShowHDStreamingPerksDemoPostUpsellModal), a.Z.unsubscribe("MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", this.maybeShowHDStreamingViewerUpsellMessage), a.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.cleanupShowHDStreamingViewerUpsellMessage))
  }
  handleMessageLengthUpsell(e) {
    let {
      channel: t,
      content: i
    } = e;
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e("33184").then(n.bind(n, 465836));
      return n => (0, l.jsx)(e, {
        channel: t,
        content: i,
        ...n
      })
    })
  }
  openPremiumPaymentModalInApp(e) {
    if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
    return new Promise((t, n) => {
      (0, h.Z)({
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
      analyticsObject: i
    } = null != e ? e : {};
    return new Promise((e, s) => {
      this._premiumPaymentModalCloseResolve = e, this._premiumPaymentModalCloseReject = s, a.Z.dispatch({
        type: "PREMIUM_PAYMENT_MODAL_OPEN",
        initialPlanId: t,
        subscriptionTier: n,
        followupSKUInfo: l,
        analyticsObject: i
      })
    })
  }
  maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
    var t;
    let {
      inPerksDemosExperiment: n
    } = N.Z.getCurrentConfig({
      location: "PremiumManager"
    }, {
      autoTrackExposure: !1
    }), {
      enabled: l
    } = v.Z.getCurrentConfig({
      location: "PremiumManager"
    }, {
      autoTrackExposure: !1
    });
    if (!n || !l || e.state !== O.hes.DISCONNECTED || e.willReconnect) return;
    let i = p.Z.getChannel(e.channelId);
    if (null == i || !(null === (t = x.Z.getPerksDemos()) || void 0 === t ? void 0 : t[s.q.STREAM_HIGH_QUALITY])) return;
    let r = x.Z.getActivated()[s.q.STREAM_HIGH_QUALITY];
    if (r && a.Z.dispatch({
        type: "PREMIUM_PERKS_DEMO_COMPLETE",
        perkType: s.q.STREAM_HIGH_QUALITY
      }), !!r && !!T.j$.getState().hqStreamingDidEnable)(0, A.Z)(i.guild_id)
  }
  constructor(...e) {
    super(...e), y(this, "_premiumPaymentModalCloseResolve", null), y(this, "_premiumPaymentModalCloseReject", null), y(this, "_lastStreamingChannelId", null), y(this, "_maybeFetchPremiumOffer", async () => {
      let e = m.default.getCurrentUser();
      if (null != e && e.verified) {
        let t = !(0, f.I5)(e) && C.Z.shouldFetchOffer();
        await (0, L.Tf)(t)
      }
      a.Z.dispatch({
        type: "PREMIUM_MARKETING_DATA_READY"
      })
    }), y(this, "_maybeFetchCheckoutRecovery", async () => {
      let e = m.default.getCurrentUser();
      null != e && e.verified && !(0, f.I5)(e) && await (0, I.o)()
    }), y(this, "_trackCustomNotificationSoundsExposure", () => {
      M.Y.trackExposure({
        location: "PremiumManager"
      })
    }), y(this, "_handlePremiumPaymentModalOpen", e => {
      (0, h.Z)({
        ...e,
        analyticsLocations: [c.Z.OVERLAY],
        onClose: e => {
          a.Z.dispatch({
            type: "PREMIUM_PAYMENT_MODAL_CLOSE",
            didSucceed: e
          })
        }
      })
    }), y(this, "_handlePremiumPaymentModalClose", e => {
      let {
        didSucceed: t
      } = e;
      t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null
    }), y(this, "maybeShowHDStreamingViewerUpsellMessage", e => {
      let t = m.default.getCurrentUser();
      (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t)
    }), y(this, "_maybeSendViewerUpsellMessage", (0, i.debounce)((e, t, n) => {
      var l, i;
      let s = d.Z.getSelectedParticipant(e),
        r = (0, S.o)(s, n),
        {
          sendNitroMessage: a
        } = (0, Z.TD)(r),
        u = null !== (i = null === (l = g.Z.getGuild(t)) || void 0 === l ? void 0 : l.premiumTier) && void 0 !== i ? i : O.Eu4.NONE;
      if (!!a && !(u >= O.Eu4.TIER_2) && (null == s ? void 0 : s.type) === P.fO.STREAM && (null == s ? void 0 : s.id) !== (null == n ? void 0 : n.id) && null != s.maxResolution && null != s.maxFrameRate) {
        if (e !== this._lastStreamingChannelId) {
          this._lastStreamingChannelId = e;
          let n = j.Z.Messages.STREAM_PREMIUM_VIEWER_UPSELL_MESSAGE.format({
            nickname: s.userNick,
            resolution: (0, b.o6)(s.maxResolution.height),
            fps: (0, _.bp)(s.maxFrameRate)
          });
          o.Z.sendNitroSystemMessage(e, n), E.default.track(O.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
            type: R.cd.HD_STREAMING_VIEWER_UPSELL,
            location_section: null != t ? O.jXE.TEXT_IN_VOICE : O.jXE.CHANNEL_TEXT_AREA,
            location_object: O.qAy.MESSAGE,
            guild_id: t
          })
        }
      }
    }, 200)), y(this, "cleanupShowHDStreamingViewerUpsellMessage", e => {
      null == e.channelId && (this._lastStreamingChannelId = null)
    })
  }
}
t.Z = new D