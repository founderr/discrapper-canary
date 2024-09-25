n.d(t, {
    m: function () {
        return eM;
    }
});
var r,
    i = n(47120);
var a = n(913527),
    o = n.n(a),
    s = n(442837),
    l = n(743426),
    u = n(704215),
    c = n(433517),
    d = n(570140),
    _ = n(579806),
    E = n(726542),
    f = n(812206),
    h = n(223892),
    p = n(674525),
    m = n(605236),
    I = n(353926),
    T = n(594190),
    g = n(38618),
    S = n(569545),
    A = n(615365),
    v = n(528011),
    N = n(487419),
    O = n(715903),
    R = n(223606),
    C = n(160404),
    y = n(41776),
    b = n(347649),
    L = n(332473),
    D = n(514851),
    M = n(30684),
    P = n(616106),
    U = n(666072),
    w = n(995598),
    x = n(774276),
    G = n(518638),
    k = n(1844),
    B = n(621615),
    F = n(417626),
    Z = n(569984),
    V = n(523255),
    H = n(768419),
    Y = n(590415),
    j = n(581883),
    W = n(199902),
    K = n(314897),
    z = n(881998),
    q = n(463395),
    Q = n(592125),
    X = n(553795),
    $ = n(427123),
    J = n(271383),
    ee = n(430824),
    et = n(131951),
    en = n(292959),
    er = n(496675),
    ei = n(571474),
    ea = n(19780),
    eo = n(944486),
    es = n(914010),
    el = n(215427),
    eu = n(246946),
    ec = n(558724),
    ed = n(23434),
    e_ = n(594174),
    eE = n(979651),
    ef = n(351402),
    eh = n(853872),
    ep = n(78839),
    em = n(295226),
    eI = n(580130),
    eT = n(695103),
    eg = n(358085),
    eS = n(74538),
    eA = n(922156),
    ev = n(436181),
    eN = n(941128),
    eO = n(981631),
    eR = n(188785),
    eC = n(474936),
    ey = n(46140),
    eb = n(231338),
    eL = n(65154);
function eD(e, t, n) {
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
let eM = {
        [eO.kVF.LOCALIZED_PRICING]: u.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
        [eO.kVF.DOWNLOAD_NAG]: u.z.NAGBAR_NOTICE_DOWNLOAD,
        [eO.kVF.CONNECT_SPOTIFY]: u.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eO.kVF.CONNECT_PLAYSTATION]: u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eO.kVF.MFA_SMS_BACKUP]: u.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eO.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: u.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eO.kVF.PREMIUM_REACTIVATE]: u.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eO.kVF.BOUNCED_EMAIL_DETECTED]: u.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eO.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: u.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eO.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: u.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eO.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR]: u.z.GUILD_ONBOARDING_UPSELL_NAGBAR,
        [eO.kVF.POMELO_ELIGIBLE]: u.z.NAGBAR_NOTICE_POMELO,
        [eO.kVF.UU_MIGRATION]: u.z.UU_MIGRATION_NOTICE,
        [eO.kVF.CHECKOUT_RECOVERY_NAGBAR]: u.z.CHECKOUT_RECOVERY_NAGBAR,
        [eO.kVF.CASH_APP_PAY_AWARENESS_NAGBAR]: u.z.CASH_APP_PAY_AWARENESS_NAGBAR
    },
    eP = {
        [eO.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [eO.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [eO.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [eO.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [eO.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [eO.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [eO.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [eO.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [eO.kVF.SERVER_USAGE_SURVEY]: 'hideServerUsageSurvey',
        [eO.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [eO.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [eO.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: 'hideMacOS17_18DeprecationMessageNotice',
        [eO.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice'
    },
    eU = new Set([eO.kVF.NO_INPUT_DETECTED, eO.kVF.STREAMER_MODE, eO.kVF.VIDEO_UNSUPPORTED_BROWSER, eO.kVF.SPOTIFY_AUTO_PAUSED, eO.kVF.DISPATCH_ERROR, eO.kVF.DISPATCH_ERROR, eO.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eO.kVF.BLOCKED_BY_PROXY]),
    ew = {},
    ex = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    eG = null;
function ek(e) {
    return eP[e] + '-untilAtLeast';
}
function eB(e) {
    let t = c.K.get(ek(e));
    return null != t ? o()(t) : null;
}
function eF(e, t) {
    c.K.set(ek(e), t.format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
}
function eZ(e) {
    c.K.remove(ek(e));
}
function eV(e, t, n) {
    if (null == e) return;
    let r = eP[e];
    null != r && !t && c.K.set(r, !0), eU.has(e) && (ew[e] = !0), null != n && null != r ? eF(e, n) : eZ(e);
}
function eH(e) {
    let { enabled: t } = x.cI.getCurrentConfig(
        { location: 'NoticeStore_isNoticeDismissed' },
        {
            autoTrackExposure: !0,
            disable: e !== eO.kVF.PREMIUM_TIER_2_TRIAL_ENDING
        }
    );
    return t ? null : eM[e];
}
function eY(e) {
    if (null == e) return !1;
    let t = eH(e);
    if (null != t) return (0, m.un)(t);
    let n = eP[e];
    if (null != n) {
        let t = eB(e);
        if (null != t) return null == t ? void 0 : t.isAfter(o()());
    }
    let r = ew[e];
    return !!r || (null != n && '' !== n ? c.K.get(n) : !!eU.has(e) && r);
}
let ej = [eO.kVF.QUARANTINED, eO.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eO.kVF.VIEWING_ROLES, eO.kVF.INVITED_TO_SPEAK, eO.kVF.LURKING_GUILD, eO.kVF.VOICE_DISABLED, eO.kVF.NO_INPUT_DETECTED, eO.kVF.HARDWARE_MUTE, eO.kVF.H264_DISABLED, eO.kVF.DISPATCH_ERROR, eO.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eO.kVF.SPOTIFY_AUTO_PAUSED, eO.kVF.WIN32_DEPRECATED_MESSAGE, eO.kVF.WIN7_8_DEPRECATED_MESSAGE, eO.kVF.MACOS_17_18_DEPRECATED_MESSAGE, eO.kVF.BLOCKED_BY_PROXY, eO.kVF.VOICE_CONNECTED_LAST_SESSION, eO.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, eO.kVF.GUILD_RAID_NOTIFICATION, eO.kVF.QUESTS_PROGRESS_INTERRUPTION, eO.kVF.UNCLAIMED_ACCOUNT, eO.kVF.POMELO_ELIGIBLE, eO.kVF.PENDING_MEMBER, eO.kVF.CASH_APP_PAY_AWARENESS_NAGBAR, eO.kVF.CHECKOUT_RECOVERY_NAGBAR, eO.kVF.OUTBOUND_PROMOTION, eO.kVF.CORRUPT_INSTALLATION, eO.kVF.VIDEO_UNSUPPORTED_BROWSER, eO.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eO.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eO.kVF.STREAMER_MODE, eO.kVF.SCHEDULED_MAINTENANCE, eO.kVF.BOUNCED_EMAIL_DETECTED, eO.kVF.UNVERIFIED_ACCOUNT, eO.kVF.PREMIUM_TIER_2_TRIAL_ENDING, eO.kVF.PREMIUM_TIER_0_TRIAL_ENDING, eO.kVF.PREMIUM_UNCANCEL, eO.kVF.PREMIUM_MISSING_PAYMENT, eO.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, eO.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, eO.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eO.kVF.PREMIUM_REACTIVATE, eO.kVF.ACTIVATE_SERVER_SUBSCRIPTION, eO.kVF.MFA_SMS_BACKUP, eO.kVF.APPLICATION_TEST_MODE, eO.kVF.LOCALIZED_PRICING, eO.kVF.DOWNLOAD_NAG, eO.kVF.CONNECT_SPOTIFY, eO.kVF.CONNECT_PLAYSTATION, eO.kVF.SURVEY, eO.kVF.SERVER_USAGE_SURVEY, eO.kVF.SAFETY_USER_SENTIMENT_NAGBAR, eO.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR, eO.kVF.UU_MIGRATION],
    eW = [eO.kVF.QUARANTINED, eO.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eO.kVF.VIEWING_ROLES, eO.kVF.INVITED_TO_SPEAK, eO.kVF.LURKING_GUILD, eO.kVF.VOICE_DISABLED, eO.kVF.NO_INPUT_DETECTED, eO.kVF.HARDWARE_MUTE, eO.kVF.H264_DISABLED, eO.kVF.DISPATCH_ERROR, eO.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eO.kVF.SPOTIFY_AUTO_PAUSED, eO.kVF.BLOCKED_BY_PROXY, eO.kVF.VOICE_CONNECTED_LAST_SESSION, eO.kVF.PENDING_MEMBER, eO.kVF.STREAMER_MODE, eO.kVF.SCHEDULED_MAINTENANCE],
    eK = {
        [eO.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, v.g)().show && !eY(eO.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: o()().add(3, 'hours').toDate() })
        },
        [eO.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let r = J.ZP.getMember(n, t.id);
                return null != r && !r.isPending && (0, O.EY)(r);
            }
        },
        [eO.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(eO.xW$.QUARANTINED);
            }
        },
        [eO.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return C.Z.isViewingRoles(t);
            }
        },
        [eO.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, Y.gf)(t) === Y.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [eO.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && y.Z.isLurking(t);
            }
        },
        [eO.kVF.VOICE_DISABLED]: { predicate: () => null != ea.Z.getRemoteDisconnectVoiceChannelId() },
        [eO.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ea.Z.getLastSessionVoiceChannelId() },
        [eO.kVF.NO_INPUT_DETECTED]: {
            predicate: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    r = Q.Z.getChannel(t),
                    i = (null == r ? void 0 : r.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
                return !1 === et.Z.getInputDetected() && !i;
            }
        },
        [eO.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = Q.Z.getChannel(t);
                return !et.Z.getOpenH264() && null != t && eE.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [eO.kVF.HARDWARE_MUTE]: {
            predicate: () => ea.Z.isConnected() && et.Z.isHardwareMute() && et.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = et.Z.getInputDeviceId(),
                    t = q.Z.getVendor(e),
                    n = q.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n
                    };
            }
        },
        [eO.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eA.Z.getLastError(),
            metadata: () => ({ error: eA.Z.getLastError() })
        },
        [eO.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != ev.Z.getLastProgress(),
            metadata: () => ev.Z.getLastProgress()
        },
        [eO.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => H.Z.wasAutoPaused() },
        [eO.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eY(eO.kVF.BLOCKED_BY_PROXY) && F.Z.blockedByProxy && B.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [eO.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [eO.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, r;
                let { selectedGuildId: i, currentUser: a } = e;
                return null !== (r = null != i && null != a && !(null === (t = ee.Z.getGuild(i)) || void 0 === t ? void 0 : t.hasFeature(eO.oNc.GUILD_ONBOARDING)) && (null === (n = J.ZP.getMember(i, a.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== r && r;
            }
        },
        [eO.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, G.tq)() },
        [eO.kVF.CORRUPT_INSTALLATION]: { predicate: () => eg.isPlatformEmbedded && (!l.Z.supported() || eN.Z.isCorruptInstallation()) },
        [eO.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && eE.Z.hasVideo(t) && !et.Z.supports(eL.AN.VIDEO) && !eY(eO.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [eO.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eS.ZP.canRedeemPremiumPerks(t) && $.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => $.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eO.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eY(eO.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && $.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => $.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eO.kVF.STREAMER_MODE]: { predicate: () => eu.Z.enabled },
        [eO.kVF.DOWNLOAD_NAG]: { predicate: () => !eg.isPlatformEmbedded && !eY(eO.kVF.DOWNLOAD_NAG) },
        [eO.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != el.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = el.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until)
                    };
            }
        },
        [eO.kVF.SURVEY]: {
            predicate: () => null != ec.Z.getCurrentSurvey(),
            metadata: () => ec.Z.getCurrentSurvey()
        },
        [eO.kVF.SERVER_USAGE_SURVEY]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && A.Z.getCurrentConfig({ location: 'notice_store' }).showSurvey && !eY(eO.kVF.SERVER_USAGE_SURVEY);
            },
            metadata: (e) => {
                let { selectedGuildId: t, currentUser: n } = e;
                return {
                    selectedGuildId: t,
                    currentUser: n
                };
            }
        },
        [eO.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [eO.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [eO.kVF.CONNECT_SPOTIFY]: { predicate: () => !H.Z.hasConnectedAccount() && T.ZP.isObservedAppRunning(E.Z.get(eO.ABu.SPOTIFY).name) && !eY(eO.kVF.CONNECT_SPOTIFY) },
        [eO.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === _.Z || void 0 === _.Z ? void 0 : _.Z.os.arch) === 'ia32' && (null === _.Z || void 0 === _.Z ? void 0 : _.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [eO.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === _.Z || void 0 === _.Z ? void 0 : _.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === _.Z || void 0 === _.Z ? void 0 : _.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [eO.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === _.Z || void 0 === _.Z ? void 0 : _.Z.process.platform) === 'darwin')
                    try {
                        return 19 > parseInt(null === _.Z || void 0 === _.Z ? void 0 : _.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [eO.kVF.CONNECT_PLAYSTATION]: { predicate: () => X.Z.isSuggestedAccountType(eO.ABu.PLAYSTATION) && null == X.Z.getAccount(null, eO.ABu.PLAYSTATION) && !eY(eO.kVF.CONNECT_PLAYSTATION) },
        [eO.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => em.Z.getAlmostExpiringTrialOffers([eC.Si.TIER_2]).length > 0 && !eY(eO.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [eO.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => em.Z.getAlmostExpiringTrialOffers([eC.Si.TIER_0]).length > 0 && !eY(eO.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [eO.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    i = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eO.O0b.CANCELED && 1 >= o()().diff(o()(t.canceledAt), 'days'),
                    a = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    s = null != t && t.status === eO.O0b.CANCELED && !a && r <= 7 && r >= 0 && (0, eS.M5)(n, eC.p9.TIER_2) && !i && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eY(eO.kVF.PREMIUM_UNCANCEL) && s;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    i = null != n ? (null === (t = (0, eS.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? eS.ZP.getPremiumType(i) : null,
                    premiumSubscription: n
                };
            }
        },
        [eO.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    i = (null != t ? o()(t.currentPeriodEnd).diff(o()(t.currentPeriodStart).startOf('day'), 'days') : 0) > 14 ? 7 : 2,
                    a = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    s = eI.Z.applicationIdsFetched.has(eC.CL),
                    l = eI.Z.getForApplication(eC.CL),
                    u = null != t ? (0, eS.Af)(t) : null,
                    c = null != u ? eS.ZP.getSkuIdForPlan(u.planId) : null,
                    d =
                        null != l &&
                        null != u &&
                        Array.from(l).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === c;
                        }).length > 0,
                    _ = null != t && r <= i && r >= 0 && t.status !== eO.O0b.PAST_DUE && !a && s && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eY(eO.kVF.PREMIUM_MISSING_PAYMENT) && _;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    i = null != n ? (null === (t = (0, eS.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? eS.ZP.getPremiumType(i) : null,
                    premiumSubscription: n
                };
            }
        },
        [eO.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && null != t.paymentSourceId ? eh.Z.getPaymentSource(t.paymentSourceId) : null,
                    i = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    a = null != t && t.status === eO.O0b.PAST_DUE && !i && null != r && r.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eY(eO.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && a;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eO.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    i = null != t && t.status === eO.O0b.PAST_DUE && !r && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eY(eO.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eO.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(eO.xW$.MFA_SMS) && !t.hasFlag(eO.xW$.STAFF) && !t.hasFlag(eO.xW$.PARTNER) && !eY(eO.kVF.MFA_SMS_BACKUP);
            }
        },
        [eO.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eT.Z.testModeApplicationId,
            metadata: () => {
                if (null == eT.Z.testModeApplicationId) return {};
                let e = eT.Z.testModeApplicationId,
                    t = f.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [eO.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eY(eO.kVF.PREMIUM_REACTIVATE) && P.Z.shouldShowReactivateNotice() },
        [eO.kVF.LOCALIZED_PRICING]: {
            predicate: (e) => {
                let { isLocalizedPromoEnabled: t } = e;
                return !eY(eO.kVF.LOCALIZED_PRICING) && t;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eO.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    i = null != t && null != t.paymentSourceId ? eh.Z.getPaymentSource(t.paymentSourceId) : null,
                    a = null != i && eb.Uk.has(i.type),
                    s = null != t && t.status === eO.O0b.PAST_DUE && !r && a && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eY(eO.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && s;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                if (null == t)
                    return {
                        daysPastDue: 0,
                        dismissUntil: o()().toDate()
                    };
                {
                    let e = t.status === eO.O0b.PAST_DUE ? o()().diff(t.currentPeriodStart, 'days') : 0;
                    return {
                        daysPastDue: e,
                        dismissUntil: (0, eS.lY)(t).expiresDate.toDate()
                    };
                }
            }
        },
        [eO.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, L.e)() && !eY(eO.kVF.POMELO_ELIGIBLE) && !(0, b.ov)() },
        [eO.kVF.UU_MIGRATION]: { predicate: () => (0, L.e)() && !eY(eO.kVF.UU_MIGRATION) && (0, b.ov)() },
        [eO.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? ee.Z.getGuild(t) : null;
                return (null != t && null != R.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eO.oNc.COMMUNITY)) && !eY(eO.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
            },
            metadata: (e) => {
                let { selectedGuildId: t } = e,
                    n = { dismissUntil: o()().add(2, 'hours').toDate() };
                if (null != t) {
                    let e = R.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            }
        },
        [eO.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eY(eO.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== p.Z.getEligibleGuildsForNagActivate().length && (0, h.Lm)() },
        [eO.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return V.SI(t);
            }
        },
        [eO.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = W.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, S.V9)(e),
                    n = Z.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= ey.Ot;
            },
            metadata: () => {
                let e = W.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, S.V9)(e) : null };
            }
        },
        [eO.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    r = null !== (t = eh.Z.paymentSources) && void 0 !== t ? t : {};
                return M.Z.getIsTargeted() && !(0, eS.I5)(n) && 0 !== Object.keys(r).length && (0, w.Y)();
            }
        },
        [eO.kVF.CASH_APP_PAY_AWARENESS_NAGBAR]: {
            predicate: () => {
                let e = D.Z.getForCampaign(eO.$Dd.CASH_APP_PAY_AWARENESS);
                return null != e && !0 === e.is_eligible && (0, U.j)();
            }
        }
    };
function ez() {
    if (!g.Z.isConnected()) return !1;
    eG = null;
    let e = e_.default.getCurrentUser();
    if (null == e) return !1;
    let t = ep.ZP.getPremiumSubscription(),
        n = ef.Z.isLocalizedPromoEnabled,
        r = es.Z.getGuildId(),
        i = eo.Z.getVoiceChannelId(),
        a = null != i ? eE.Z.getVoiceStateForChannel(i) : null;
    for (let l of eR.a ? eW : ej) {
        if (null != eK[l]) {
            if (
                eK[l].predicate({
                    selectedGuildId: r,
                    voiceChannelId: i,
                    voiceState: a,
                    currentUser: e,
                    premiumSubscription: t,
                    isLocalizedPromoEnabled: n
                })
            ) {
                var o, s;
                let n =
                    null === (o = (s = eK[l]).metadata) || void 0 === o
                        ? void 0
                        : o.call(s, {
                              currentUser: e,
                              premiumSubscription: t,
                              selectedGuildId: r
                          });
                eG = {
                    ...ex,
                    type: l,
                    metadata: n
                };
                break;
            }
        }
    }
    null != eG && eY(eG.type) && (eG = null);
}
function eq(e) {
    let { voiceStates: t } = e;
    return (
        t.some((e) => {
            let { userId: t } = e;
            return t !== K.default.getId();
        }) && ez()
    );
}
function eQ(e) {
    eG = e.notice;
}
function eX(e) {
    return null != eG && (null == e.id || e.id === eG.id) && (eV(eG.type, e.isTemporary, e.untilAtLeast), ez());
}
function e$(e) {
    let { noticeType: t } = e;
    return eV(t), ez();
}
function eJ() {
    return !eu.Z.enabled && delete ew[eO.kVF.STREAMER_MODE], ez();
}
function e0() {
    return delete ew[eO.kVF.DISPATCH_ERROR], ez();
}
function e1() {
    return delete ew[eO.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], ez();
}
function e2() {
    return ez();
}
function e3() {
    return ez();
}
function e4(e) {
    return e.user.id === K.default.getId() && ez();
}
function e5() {
    (ew = {}), (eG = null);
}
class e6 extends (r = s.ZP.Store) {
    initialize() {
        this.syncWith([ec.Z, ei.Z, $.Z, es.Z, k.Z, em.Z, z.Z, X.Z, j.Z, N.Z, Z.Z, W.Z], ez), this.waitFor(e_.default, el.Z, ee.Z, J.ZP, ea.Z, et.Z, eu.Z, I.Z, es.Z, ed.Z, H.Z, T.ZP, ei.Z, eA.Z, ev.Z, eT.Z, en.Z, ep.ZP, eN.Z, $.Z, eh.Z, er.Z, k.Z, eI.Z, em.Z, X.Z, y.Z, p.Z, F.Z, Z.Z, W.Z);
    }
    hasNotice() {
        return null != eG && null != eG.type;
    }
    getNotice() {
        return null == ed.Z.getAction() ? eG : null;
    }
    isNoticeDismissed(e) {
        return eY(e);
    }
}
eD(e6, 'displayName', 'NoticeStore'),
    (t.Z = new e6(d.Z, {
        CURRENT_USER_UPDATE: ez,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: ez,
        CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: ez,
        CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: ez,
        STATUS_PAGE_SCHEDULED_MAINTENANCE: ez,
        STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: ez,
        GUILD_CREATE: ez,
        GUILD_DELETE: ez,
        AUDIO_INPUT_DETECTED: ez,
        AUDIO_SET_DISPLAY_SILENCE_WARNING: ez,
        CERTIFIED_DEVICES_SET: ez,
        AUDIO_SET_INPUT_DEVICE: ez,
        AUDIO_SET_OUTPUT_DEVICE: ez,
        MEDIA_ENGINE_DEVICES: ez,
        RTC_CONNECTION_STATE: ez,
        RPC_APP_AUTHENTICATED: ez,
        RPC_APP_DISCONNECTED: ez,
        USER_CONNECTIONS_UPDATE: ez,
        WINDOW_FOCUS: ez,
        INSTANT_INVITE_CREATE: ez,
        INSTANT_INVITE_REVOKE_SUCCESS: ez,
        SPOTIFY_PLAYER_PAUSE: ez,
        RUNNING_GAMES_CHANGE: ez,
        EXPERIMENTS_FETCH_SUCCESS: ez,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: ez,
        DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: ez,
        DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: ez,
        DEVELOPER_TEST_MODE_RESET: ez,
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: ez,
        DISPATCH_APPLICATION_INSTALL: ez,
        IMPERSONATE_STOP: ez,
        IMPERSONATE_UPDATE: ez,
        GUILD_MEMBER_ADD: e4,
        GUILD_MEMBER_UPDATE: ez,
        SURVEY_FETCHED: ez,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: ez,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: ez,
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: ez,
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: ez,
        VOICE_STATE_UPDATES: eq,
        STREAMER_MODE_UPDATE: eJ,
        RUNNING_STREAMER_TOOLS_CHANGE: eJ,
        DISPATCH_APPLICATION_ERROR: e0,
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: e1,
        DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: e2,
        DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: e3,
        NOTICE_SHOW: eQ,
        NOTICE_DISMISS: eX,
        NOTICE_DISABLE: e$,
        LOGOUT: e5,
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: ez,
        AUTO_MODERATION_MENTION_RAID_DETECTION: ez,
        CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: ez,
        PROXY_BLOCKED_REQUEST: ez
    }));
