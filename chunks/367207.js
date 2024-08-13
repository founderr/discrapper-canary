n(411104), n(47120);
var i = n(735250);
n(470079);
var l = n(392711),
  r = n(848246),
  a = n(481060),
  s = n(570140),
  o = n(904245),
  c = n(317770),
  u = n(100527),
  d = n(358221),
  h = n(963249),
  p = n(592125),
  _ = n(430824),
  f = n(594174),
  g = n(295226),
  m = n(626135),
  C = n(74538),
  I = n(557457),
  E = n(269486),
  N = n(514851),
  x = n(970645),
  S = n(30684),
  Z = n(6242),
  v = n(757692),
  T = n(114064),
  L = n(684259),
  A = n(937579),
  b = n(1163),
  M = n(841174),
  R = n(11352),
  O = n(474936),
  P = n(981631),
  y = n(354459),
  j = n(37113),
  D = n(689938);

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class U extends c.Z {
  _initialize() {
__OVERLAY__ ? s.Z.subscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (s.Z.subscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), s.Z.subscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), s.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), s.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), s.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchCampaignContext), s.Z.subscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), s.Z.subscribe('POST_CONNECTION_OPEN', this._trackSkyLoadExposure), s.Z.subscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), s.Z.subscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage), s.Z.subscribe('VOICE_CHANNEL_SELECT', this.cleanupShowHDStreamingViewerUpsellMessage));
  }
  _terminate() {
__OVERLAY__ ? s.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (s.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), s.Z.unsubscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchCampaignContext), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackSkyLoadExposure), s.Z.unsubscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), s.Z.unsubscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage), s.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.cleanupShowHDStreamingViewerUpsellMessage));
  }
  handleMessageLengthUpsell(e) {
let {
  channel: t,
  content: l
} = e;
(0, a.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('33184').then(n.bind(n, 465836));
  return n => (0, i.jsx)(e, {
    channel: t,
    content: l,
    ...n
  });
});
  }
  openPremiumPaymentModalInApp(e) {
if (__OVERLAY__)
  throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
return new Promise((t, n) => {
  (0, h.Z)({
    ...e,
    onClose: e => {
      e ? t() : n();
    }
  });
});
  }
  openPremiumPaymentModalInOverlay(e) {
if (__OVERLAY__)
  throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
let {
  initialPlanId: t,
  subscriptionTier: n,
  followupSKUInfo: i,
  analyticsObject: l
} = null != e ? e : {};
return new Promise((e, r) => {
  this._premiumPaymentModalCloseResolve = e, this._premiumPaymentModalCloseReject = r, s.Z.dispatch({
    type: 'PREMIUM_PAYMENT_MODAL_OPEN',
    initialPlanId: t,
    subscriptionTier: n,
    followupSKUInfo: i,
    analyticsObject: l
  });
});
  }
  maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
let {
  enabled: t
} = b.Z.getCurrentConfig({
  location: 'PremiumManager'
}, {
  autoTrackExposure: !1
});
if (!t || e.state !== P.hes.DISCONNECTED || e.willReconnect)
  return;
let n = p.Z.getChannel(e.channelId);
if (null == n)
  return;
let i = T.Z.hasActiveDemo(r.q.STREAM_HIGH_QUALITY);
if (i && s.Z.dispatch({
    type: 'PREMIUM_PERKS_DEMO_COMPLETE',
    perkType: r.q.STREAM_HIGH_QUALITY
  }), !!i)
  (0, M.Z)(n.guild_id);
  }
  constructor(...e) {
super(...e), w(this, '_premiumPaymentModalCloseResolve', null), w(this, '_premiumPaymentModalCloseReject', null), w(this, '_lastStreamingChannelId', null), w(this, '_maybeFetchPremiumOffer', async () => {
  let e = f.default.getCurrentUser();
  if (null != e && e.verified) {
    let t = !(0, C.I5)(e) && g.Z.shouldFetchOffer();
    await (0, A.T)('PremiumManager', t);
  }
  s.Z.dispatch({
    type: 'PREMIUM_MARKETING_DATA_READY'
  });
}), w(this, '_maybeFetchCheckoutRecovery', async () => {
  let e = f.default.getCurrentUser();
  null != e && e.verified && !(0, C.I5)(e) && S.Z.shouldFetchCheckoutRecovery() && await (0, x.o)();
}), w(this, '_maybeFetchCampaignContext', async () => {
  let e = f.default.getCurrentUser();
  null != e && e.verified && N.Z.shouldFetchCampaignContext() && await (0, E.W)();
}), w(this, '_trackCustomNotificationSoundsExposure', () => {
  R.Y.trackExposure({
    location: 'PremiumManager'
  });
}), w(this, '_trackSkyLoadExposure', () => {
  L.Z.trackExposure({
    location: 'PremiumManager'
  });
}), w(this, '_handlePremiumPaymentModalOpen', e => {
  (0, h.Z)({
    ...e,
    analyticsLocations: [u.Z.OVERLAY],
    onClose: e => {
      s.Z.dispatch({
        type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
        didSucceed: e
      });
    }
  });
}), w(this, '_handlePremiumPaymentModalClose', e => {
  let {
    didSucceed: t
  } = e;
  t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null;
}), w(this, 'maybeShowHDStreamingViewerUpsellMessage', e => {
  let t = f.default.getCurrentUser();
  (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t);
}), w(this, '_maybeSendViewerUpsellMessage', (0, l.debounce)((e, t, n) => {
  var i, l;
  let r = d.Z.getSelectedParticipant(e),
    a = (0, v.o)(r, n),
    {
      sendNitroMessage: s
    } = (0, Z.TD)(a),
    c = null !== (l = null === (i = _.Z.getGuild(t)) || void 0 === i ? void 0 : i.premiumTier) && void 0 !== l ? l : P.Eu4.NONE;
  if (!!s && !(c >= P.Eu4.TIER_2) && (null == r ? void 0 : r.type) === y.fO.STREAM && (null == r ? void 0 : r.id) !== (null == n ? void 0 : n.id) && null != r.maxResolution && null != r.maxFrameRate) {
    if (e !== this._lastStreamingChannelId) {
      this._lastStreamingChannelId = e;
      let n = D.Z.Messages.STREAM_PREMIUM_VIEWER_UPSELL_MESSAGE.format({
        nickname: r.userNick,
        resolution: (0, j.o6)(r.maxResolution.height),
        fps: (0, I.bp)(r.maxFrameRate)
      });
      o.Z.sendNitroSystemMessage(e, n), m.default.track(P.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
        type: O.cd.HD_STREAMING_VIEWER_UPSELL,
        location_section: null != t ? P.jXE.TEXT_IN_VOICE : P.jXE.CHANNEL_TEXT_AREA,
        location_object: P.qAy.MESSAGE,
        guild_id: t
      });
    }
  }
}, 200)), w(this, 'cleanupShowHDStreamingViewerUpsellMessage', e => {
  null == e.channelId && (this._lastStreamingChannelId = null);
});
  }
}
t.Z = new U();