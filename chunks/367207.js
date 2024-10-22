n(411104), n(47120);
var i = n(200651);
n(192379);
var l = n(392711),
    r = n(848246),
    a = n(481060),
    s = n(570140),
    o = n(904245),
    c = n(317770),
    u = n(100527),
    d = n(358221),
    h = n(963249),
    p = n(93127),
    f = n(361291),
    _ = n(592125),
    m = n(430824),
    g = n(594174),
    C = n(295226),
    I = n(626135),
    E = n(74538),
    N = n(557457),
    x = n(970645),
    S = n(30684),
    v = n(514701),
    Z = n(6242),
    T = n(467721),
    b = n(757692),
    A = n(114064),
    M = n(933843),
    R = n(281494),
    L = n(276444),
    y = n(684259),
    P = n(937579),
    O = n(1163),
    j = n(841174),
    D = n(522558),
    w = n(879463),
    U = n(822070),
    G = n(520540),
    k = n(11352),
    B = n(474936),
    H = n(981631),
    V = n(354459),
    F = n(37113),
    W = n(689938);
function z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class Y extends c.Z {
    _initialize() {
        __OVERLAY__ ? s.Z.subscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (s.Z.subscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), s.Z.subscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), s.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), s.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), s.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), s.Z.subscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), s.Z.subscribe('POST_CONNECTION_OPEN', this._trackSkyLoadExposure), s.Z.subscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), s.Z.subscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    _terminate() {
        __OVERLAY__ ? s.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (s.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), s.Z.unsubscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackSkyLoadExposure), s.Z.unsubscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), s.Z.unsubscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    handleMessageLengthUpsell(e) {
        let { channel: t, content: l } = e;
        (0, a.openModalLazy)(async () => {
            let { default: e } = await n.e('33184').then(n.bind(n, 465836));
            return (n) =>
                (0, i.jsx)(e, {
                    channel: t,
                    content: l,
                    ...n
                });
        });
    }
    _getReferralIncentiveEligibility() {
        let e = g.default.getCurrentUser();
        if (L.Z.getIsFetchingReferralIncentiveEligibility() || !(0, E.I5)(e)) return;
        let t = { location: 'PremiumManager' },
            n = { autoTrackExposure: !1 };
        if (!!G.g.getCurrentConfig(t, n).enabled && !w.eP.getCurrentConfig(t, n).enabled) U.$.getCurrentConfig(t, n).enabled && (0, R.bq)();
    }
    openPremiumPaymentModalInApp(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        return new Promise((t, n) => {
            (0, h.Z)({
                ...e,
                onClose: (e) => {
                    e ? t() : n();
                }
            });
        });
    }
    openPremiumPaymentModalInOverlay(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        let { initialPlanId: t, subscriptionTier: n, followupSKUInfo: i, analyticsObject: l } = null != e ? e : {};
        return new Promise((e, r) => {
            (this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = r),
                s.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_MODAL_OPEN',
                    initialPlanId: t,
                    subscriptionTier: n,
                    followupSKUInfo: i,
                    analyticsObject: l
                });
        });
    }
    maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
        let { enabled: t } = O.Z.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
        if (!t || e.state !== H.hes.DISCONNECTED || e.willReconnect) return;
        let n = _.Z.getChannel(e.channelId);
        if (null == n) return;
        let i = A.Z.hasActiveDemo(r.q.STREAM_HIGH_QUALITY);
        if (
            (i &&
                s.Z.dispatch({
                    type: 'PREMIUM_PERKS_DEMO_COMPLETE',
                    perkType: r.q.STREAM_HIGH_QUALITY
                }),
            !i)
        )
            return;
        let { resolution: l, fps: a } = f.Z.getState();
        !(0, M.mc)(l, a) && (0, j.Z)(n.guild_id);
    }
    constructor(...e) {
        super(...e),
            z(this, '_premiumPaymentModalCloseResolve', null),
            z(this, '_premiumPaymentModalCloseReject', null),
            z(this, '_maybeFetchPremiumOffer', async () => {
                let e = g.default.getCurrentUser();
                if (null != e && e.verified) {
                    let t = !(0, E.I5)(e) && C.Z.shouldFetchOffer();
                    await (0, P.T)('PremiumManager', t);
                }
                s.Z.dispatch({ type: 'PREMIUM_MARKETING_DATA_READY' });
            }),
            z(this, '_maybeFetchCheckoutRecovery', async () => {
                let e = g.default.getCurrentUser();
                null != e && e.verified && !(0, E.I5)(e) && S.Z.shouldFetchCheckoutRecovery() && (await (0, x.o)());
            }),
            z(this, '_maybeFetchUserAffinities', () => {
                let { enabled: e } = D.w.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
                e && (0, p.W)();
            }),
            z(this, '_trackCustomNotificationSoundsExposure', () => {
                k.Y.trackExposure({ location: 'PremiumManager' });
            }),
            z(this, '_trackSkyLoadExposure', () => {
                y.Z.trackExposure({ location: 'PremiumManager' });
            }),
            z(this, '_handlePremiumPaymentModalOpen', (e) => {
                (0, h.Z)({
                    ...e,
                    analyticsLocations: [u.Z.OVERLAY],
                    onClose: (e) => {
                        s.Z.dispatch({
                            type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                            didSucceed: e
                        });
                    }
                });
            }),
            z(this, '_handlePremiumPaymentModalClose', (e) => {
                let { didSucceed: t } = e;
                t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), (this._premiumPaymentModalCloseResolve = null), (this._premiumPaymentModalCloseReject = null);
            }),
            z(this, 'maybeShowHDStreamingViewerUpsellMessage', (e) => {
                let t = g.default.getCurrentUser();
                (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t);
            }),
            z(
                this,
                '_maybeSendViewerUpsellMessage',
                (0, l.debounce)((e, t, n) => {
                    var i, l;
                    let r = d.Z.getSelectedParticipant(e),
                        a = (0, b.o)(r, n),
                        { sendNitroMessage: s } = (0, Z.TD)(a),
                        c = null !== (l = null === (i = m.Z.getGuild(t)) || void 0 === i ? void 0 : i.premiumTier) && void 0 !== l ? l : H.Eu4.NONE;
                    if (T.Z.cooldownIsActive() || !s || c >= H.Eu4.TIER_2 || (null == r ? void 0 : r.type) !== V.fO.STREAM || (null == r ? void 0 : r.id) === (null == n ? void 0 : n.id) || null == r.maxResolution || null == r.maxFrameRate) return;
                    v.I();
                    let u = W.Z.Messages.STREAM_PREMIUM_VIEWER_UPSELL_MESSAGE.format({
                        nickname: r.userNick,
                        resolution: (0, F.o6)(r.maxResolution.height),
                        fps: (0, N.bp)(r.maxFrameRate)
                    });
                    o.Z.sendNitroSystemMessage(e, u),
                        I.default.track(H.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                            type: B.cd.HD_STREAMING_VIEWER_UPSELL,
                            location_section: null != t ? H.jXE.TEXT_IN_VOICE : H.jXE.CHANNEL_TEXT_AREA,
                            location_object: H.qAy.MESSAGE,
                            guild_id: t
                        });
                }, 200)
            );
    }
}
t.Z = new Y();
