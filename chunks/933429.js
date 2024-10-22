n.d(t, {
    m: function () {
        return eZ;
    }
}),
    n(47120);
var i,
    a,
    s,
    r,
    l = n(913527),
    o = n.n(l),
    c = n(442837),
    u = n(743426),
    d = n(704215),
    _ = n(433517),
    E = n(570140),
    I = n(579806),
    m = n(726542),
    T = n(812206),
    f = n(223892),
    h = n(674525),
    N = n(605236),
    p = n(353926),
    C = n(594190),
    g = n(38618),
    S = n(569545),
    A = n(615365),
    x = n(528011),
    R = n(487419),
    v = n(715903),
    O = n(223606),
    M = n(160404),
    L = n(41776),
    Z = n(347649),
    b = n(332473),
    P = n(30684),
    D = n(616106),
    j = n(995598),
    U = n(774276),
    y = n(518638),
    B = n(1844),
    k = n(621615),
    G = n(417626),
    F = n(569984),
    w = n(523255),
    V = n(768419),
    H = n(590415),
    Y = n(581883),
    W = n(199902),
    z = n(314897),
    K = n(881998),
    X = n(463395),
    Q = n(592125),
    q = n(553795),
    J = n(427123),
    $ = n(271383),
    ee = n(430824),
    et = n(131951),
    en = n(292959),
    ei = n(496675),
    ea = n(571474),
    es = n(19780),
    er = n(944486),
    el = n(914010),
    eo = n(215427),
    ec = n(246946),
    eu = n(558724),
    ed = n(23434),
    e_ = n(594174),
    eE = n(979651),
    eI = n(351402),
    em = n(853872),
    eT = n(78839),
    ef = n(295226),
    eh = n(580130),
    eN = n(695103),
    ep = n(358085),
    eC = n(74538),
    eg = n(922156),
    eS = n(436181),
    eA = n(941128),
    ex = n(981631),
    eR = n(188785),
    ev = n(474936),
    eO = n(46140),
    eM = n(231338),
    eL = n(65154);
let eZ = {
        [ex.kVF.LOCALIZED_PRICING]: d.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
        [ex.kVF.DOWNLOAD_NAG]: d.z.NAGBAR_NOTICE_DOWNLOAD,
        [ex.kVF.CONNECT_SPOTIFY]: d.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [ex.kVF.CONNECT_PLAYSTATION]: d.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [ex.kVF.MFA_SMS_BACKUP]: d.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [ex.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: d.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [ex.kVF.PREMIUM_REACTIVATE]: d.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [ex.kVF.BOUNCED_EMAIL_DETECTED]: d.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [ex.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: d.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [ex.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: d.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [ex.kVF.POMELO_ELIGIBLE]: d.z.NAGBAR_NOTICE_POMELO,
        [ex.kVF.UU_MIGRATION]: d.z.UU_MIGRATION_NOTICE,
        [ex.kVF.CHECKOUT_RECOVERY_NAGBAR]: d.z.CHECKOUT_RECOVERY_NAGBAR
    },
    eb = {
        [ex.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [ex.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [ex.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [ex.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [ex.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [ex.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [ex.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [ex.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [ex.kVF.SERVER_USAGE_SURVEY]: 'hideServerUsageSurvey',
        [ex.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [ex.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [ex.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: 'hideMacOS17_18DeprecationMessageNotice',
        [ex.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice'
    },
    eP = new Set([ex.kVF.NO_INPUT_DETECTED, ex.kVF.STREAMER_MODE, ex.kVF.VIDEO_UNSUPPORTED_BROWSER, ex.kVF.SPOTIFY_AUTO_PAUSED, ex.kVF.DISPATCH_ERROR, ex.kVF.DISPATCH_ERROR, ex.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ex.kVF.BLOCKED_BY_PROXY]),
    eD = {},
    ej = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    eU = null;
function ey(e) {
    return eb[e] + '-untilAtLeast';
}
function eB(e, t, n) {
    var i, a, s;
    if (null == e) return;
    let r = eb[e];
    if ((null != r && !t && _.K.set(r, !0), eP.has(e) && (eD[e] = !0), null != n && null != r)) {
        (i = e), (a = n), _.K.set(ey(i), a.format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
    } else {
        (s = e), _.K.remove(ey(s));
    }
}
function ek(e) {
    if (null == e) return !1;
    let t = (function (e) {
        let { enabled: t } = U.cI.getCurrentConfig(
            { location: 'NoticeStore_isNoticeDismissed' },
            {
                autoTrackExposure: !0,
                disable: e !== ex.kVF.PREMIUM_TIER_2_TRIAL_ENDING
            }
        );
        return t ? null : eZ[e];
    })(e);
    if (null != t) return (0, N.un)(t);
    let n = eb[e];
    if (null != n) {
        let t = (function (e) {
            let t = _.K.get(ey(e));
            return null != t ? o()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(o()());
    }
    let i = eD[e];
    return !!i || (null != n && '' !== n ? _.K.get(n) : !!eP.has(e) && i);
}
let eG = [ex.kVF.QUARANTINED, ex.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, ex.kVF.VIEWING_ROLES, ex.kVF.INVITED_TO_SPEAK, ex.kVF.LURKING_GUILD, ex.kVF.VOICE_DISABLED, ex.kVF.NO_INPUT_DETECTED, ex.kVF.HARDWARE_MUTE, ex.kVF.H264_DISABLED, ex.kVF.DISPATCH_ERROR, ex.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ex.kVF.SPOTIFY_AUTO_PAUSED, ex.kVF.WIN32_DEPRECATED_MESSAGE, ex.kVF.WIN7_8_DEPRECATED_MESSAGE, ex.kVF.MACOS_17_18_DEPRECATED_MESSAGE, ex.kVF.BLOCKED_BY_PROXY, ex.kVF.VOICE_CONNECTED_LAST_SESSION, ex.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, ex.kVF.GUILD_RAID_NOTIFICATION, ex.kVF.QUESTS_PROGRESS_INTERRUPTION, ex.kVF.UNCLAIMED_ACCOUNT, ex.kVF.POMELO_ELIGIBLE, ex.kVF.PENDING_MEMBER, ex.kVF.CHECKOUT_RECOVERY_NAGBAR, ex.kVF.OUTBOUND_PROMOTION, ex.kVF.CORRUPT_INSTALLATION, ex.kVF.VIDEO_UNSUPPORTED_BROWSER, ex.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, ex.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, ex.kVF.STREAMER_MODE, ex.kVF.SCHEDULED_MAINTENANCE, ex.kVF.BOUNCED_EMAIL_DETECTED, ex.kVF.UNVERIFIED_ACCOUNT, ex.kVF.PREMIUM_TIER_2_TRIAL_ENDING, ex.kVF.PREMIUM_TIER_0_TRIAL_ENDING, ex.kVF.PREMIUM_UNCANCEL, ex.kVF.PREMIUM_MISSING_PAYMENT, ex.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, ex.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, ex.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, ex.kVF.PREMIUM_REACTIVATE, ex.kVF.ACTIVATE_SERVER_SUBSCRIPTION, ex.kVF.MFA_SMS_BACKUP, ex.kVF.APPLICATION_TEST_MODE, ex.kVF.LOCALIZED_PRICING, ex.kVF.DOWNLOAD_NAG, ex.kVF.CONNECT_SPOTIFY, ex.kVF.CONNECT_PLAYSTATION, ex.kVF.SURVEY, ex.kVF.SERVER_USAGE_SURVEY, ex.kVF.SAFETY_USER_SENTIMENT_NAGBAR, ex.kVF.UU_MIGRATION],
    eF = [ex.kVF.QUARANTINED, ex.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, ex.kVF.VIEWING_ROLES, ex.kVF.INVITED_TO_SPEAK, ex.kVF.LURKING_GUILD, ex.kVF.VOICE_DISABLED, ex.kVF.NO_INPUT_DETECTED, ex.kVF.HARDWARE_MUTE, ex.kVF.H264_DISABLED, ex.kVF.DISPATCH_ERROR, ex.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ex.kVF.SPOTIFY_AUTO_PAUSED, ex.kVF.BLOCKED_BY_PROXY, ex.kVF.VOICE_CONNECTED_LAST_SESSION, ex.kVF.PENDING_MEMBER, ex.kVF.STREAMER_MODE, ex.kVF.SCHEDULED_MAINTENANCE],
    ew = {
        [ex.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, x.g)().show && !ek(ex.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: o()().add(3, 'hours').toDate() })
        },
        [ex.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let i = $.ZP.getMember(n, t.id);
                return null != i && !i.isPending && (0, v.EY)(i);
            }
        },
        [ex.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(ex.xW$.QUARANTINED);
            }
        },
        [ex.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return M.Z.isViewingRoles(t);
            }
        },
        [ex.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, H.gf)(t) === H.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [ex.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && L.Z.isLurking(t);
            }
        },
        [ex.kVF.VOICE_DISABLED]: { predicate: () => null != es.Z.getRemoteDisconnectVoiceChannelId() },
        [ex.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != es.Z.getLastSessionVoiceChannelId() },
        [ex.kVF.NO_INPUT_DETECTED]: {
            predicate: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    i = Q.Z.getChannel(t),
                    a = (null == i ? void 0 : i.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
                return !1 === et.Z.getInputDetected() && !a;
            }
        },
        [ex.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = Q.Z.getChannel(t);
                return !et.Z.getOpenH264() && null != t && eE.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [ex.kVF.HARDWARE_MUTE]: {
            predicate: () => es.Z.isConnected() && et.Z.isHardwareMute() && et.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = et.Z.getInputDeviceId(),
                    t = X.Z.getVendor(e),
                    n = X.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n
                    };
            }
        },
        [ex.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eg.Z.getLastError(),
            metadata: () => ({ error: eg.Z.getLastError() })
        },
        [ex.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eS.Z.getLastProgress(),
            metadata: () => eS.Z.getLastProgress()
        },
        [ex.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => V.Z.wasAutoPaused() },
        [ex.kVF.BLOCKED_BY_PROXY]: { predicate: () => !ek(ex.kVF.BLOCKED_BY_PROXY) && G.Z.blockedByProxy && k.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [ex.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [ex.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, i;
                let { selectedGuildId: a, currentUser: s } = e;
                return null !== (i = null != a && null != s && !(null === (t = ee.Z.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(ex.oNc.GUILD_ONBOARDING)) && (null === (n = $.ZP.getMember(a, s.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== i && i;
            }
        },
        [ex.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, y.tq)() },
        [ex.kVF.CORRUPT_INSTALLATION]: { predicate: () => ep.isPlatformEmbedded && (!u.Z.supported() || eA.Z.isCorruptInstallation()) },
        [ex.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && eE.Z.hasVideo(t) && !et.Z.supports(eL.AN.VIDEO) && !ek(ex.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [ex.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eC.ZP.canRedeemPremiumPerks(t) && J.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [ex.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !ek(ex.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && J.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [ex.kVF.STREAMER_MODE]: { predicate: () => ec.Z.enabled },
        [ex.kVF.DOWNLOAD_NAG]: { predicate: () => !ep.isPlatformEmbedded && !ek(ex.kVF.DOWNLOAD_NAG) },
        [ex.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != eo.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = eo.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until)
                    };
            }
        },
        [ex.kVF.SURVEY]: {
            predicate: () => null != eu.Z.getCurrentSurvey(),
            metadata: () => eu.Z.getCurrentSurvey()
        },
        [ex.kVF.SERVER_USAGE_SURVEY]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && A.Z.getCurrentConfig({ location: 'notice_store' }).showSurvey && !ek(ex.kVF.SERVER_USAGE_SURVEY);
            },
            metadata: (e) => {
                let { selectedGuildId: t, currentUser: n } = e;
                return {
                    selectedGuildId: t,
                    currentUser: n
                };
            }
        },
        [ex.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [ex.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [ex.kVF.CONNECT_SPOTIFY]: { predicate: () => !V.Z.hasConnectedAccount() && C.ZP.isObservedAppRunning(m.Z.get(ex.ABu.SPOTIFY).name) && !ek(ex.kVF.CONNECT_SPOTIFY) },
        [ex.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.arch) === 'ia32' && (null === I.Z || void 0 === I.Z ? void 0 : I.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [ex.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === I.Z || void 0 === I.Z ? void 0 : I.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [ex.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === I.Z || void 0 === I.Z ? void 0 : I.Z.process.platform) === 'darwin')
                    try {
                        return 19 > parseInt(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [ex.kVF.CONNECT_PLAYSTATION]: { predicate: () => q.Z.isSuggestedAccountType(ex.ABu.PLAYSTATION) && null == q.Z.getAccount(null, ex.ABu.PLAYSTATION) && !ek(ex.kVF.CONNECT_PLAYSTATION) },
        [ex.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => ef.Z.getAlmostExpiringTrialOffers([ev.Si.TIER_2]).length > 0 && !ek(ex.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [ex.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => ef.Z.getAlmostExpiringTrialOffers([ev.Si.TIER_0]).length > 0 && !ek(ex.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [ex.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === ex.O0b.CANCELED && 1 >= o()().diff(o()(t.canceledAt), 'days'),
                    s = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    r = null != t && t.status === ex.O0b.CANCELED && !s && i <= 7 && i >= 0 && (0, eC.M5)(n, ev.p9.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ek(ex.kVF.PREMIUM_UNCANCEL) && r;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = null != n ? (null === (t = (0, eC.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != a ? eC.ZP.getPremiumType(a) : null,
                    premiumSubscription: n
                };
            }
        },
        [ex.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = null != t ? o()(t.currentPeriodEnd).diff(o()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    s = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    r = eh.Z.applicationIdsFetched.has(ev.CL),
                    l = eh.Z.getForApplication(ev.CL),
                    c = null != t ? (0, eC.Af)(t) : null,
                    u = null != c ? eC.ZP.getSkuIdForPlan(c.planId) : null,
                    d =
                        null != l &&
                        null != c &&
                        Array.from(l).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === u;
                        }).length > 0,
                    _ = null != t && i <= (a > 14 ? 7 : 2) && i >= 0 && t.status !== ex.O0b.PAST_DUE && !s && r && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ek(ex.kVF.PREMIUM_MISSING_PAYMENT) && _;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = null != n ? (null === (t = (0, eC.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != a ? eC.ZP.getPremiumType(a) : null,
                    premiumSubscription: n
                };
            }
        },
        [ex.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && null != t.paymentSourceId ? em.Z.getPaymentSource(t.paymentSourceId) : null,
                    a = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    s = null != t && t.status === ex.O0b.PAST_DUE && !a && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ek(ex.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [ex.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    a = null != t && t.status === ex.O0b.PAST_DUE && !i && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ek(ex.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [ex.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(ex.xW$.MFA_SMS) && !t.hasFlag(ex.xW$.STAFF) && !t.hasFlag(ex.xW$.PARTNER) && !ek(ex.kVF.MFA_SMS_BACKUP);
            }
        },
        [ex.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eN.Z.testModeApplicationId,
            metadata: () => {
                if (null == eN.Z.testModeApplicationId) return {};
                let e = eN.Z.testModeApplicationId,
                    t = T.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [ex.kVF.PREMIUM_REACTIVATE]: { predicate: () => !ek(ex.kVF.PREMIUM_REACTIVATE) && D.Z.shouldShowReactivateNotice() },
        [ex.kVF.LOCALIZED_PRICING]: {
            predicate: (e) => {
                let { isLocalizedPromoEnabled: t } = e;
                return !ek(ex.kVF.LOCALIZED_PRICING) && t;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [ex.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    a = null != t && null != t.paymentSourceId ? em.Z.getPaymentSource(t.paymentSourceId) : null,
                    s = null != a && eM.Uk.has(a.type),
                    r = null != t && t.status === ex.O0b.PAST_DUE && !i && s && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ek(ex.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && r;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                if (null == t)
                    return {
                        daysPastDue: 0,
                        dismissUntil: o()().toDate()
                    };
                {
                    let e = t.status === ex.O0b.PAST_DUE ? o()().diff(t.currentPeriodStart, 'days') : 0;
                    return {
                        daysPastDue: e,
                        dismissUntil: (0, eC.lY)(t).expiresDate.toDate()
                    };
                }
            }
        },
        [ex.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, b.e)() && !ek(ex.kVF.POMELO_ELIGIBLE) && !(0, Z.ov)() },
        [ex.kVF.UU_MIGRATION]: { predicate: () => (0, b.e)() && !ek(ex.kVF.UU_MIGRATION) && (0, Z.ov)() },
        [ex.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? ee.Z.getGuild(t) : null;
                return (null != t && null != O.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(ex.oNc.COMMUNITY)) && !ek(ex.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
            },
            metadata: (e) => {
                let { selectedGuildId: t } = e,
                    n = { dismissUntil: o()().add(2, 'hours').toDate() };
                if (null != t) {
                    let e = O.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            }
        },
        [ex.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !ek(ex.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== h.Z.getEligibleGuildsForNagActivate().length && (0, f.Lm)() },
        [ex.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return w.SI(t);
            }
        },
        [ex.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = W.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, S.V9)(e),
                    n = F.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eO.Ot;
            },
            metadata: () => {
                let e = W.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, S.V9)(e) : null };
            }
        },
        [ex.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    i = null !== (t = em.Z.paymentSources) && void 0 !== t ? t : {};
                return P.Z.getIsTargeted() && !(0, eC.I5)(n) && 0 !== Object.keys(i).length && (0, j.Y)();
            }
        }
    };
function eV() {
    if (!g.Z.isConnected()) return !1;
    eU = null;
    let e = e_.default.getCurrentUser();
    if (null == e) return !1;
    let t = eT.ZP.getPremiumSubscription(),
        n = eI.Z.isLocalizedPromoEnabled,
        i = el.Z.getGuildId(),
        a = er.Z.getVoiceChannelId(),
        s = null != a ? eE.Z.getVoiceStateForChannel(a) : null;
    for (let o of eR.a ? eF : eG) {
        if (null != ew[o]) {
            if (
                ew[o].predicate({
                    selectedGuildId: i,
                    voiceChannelId: a,
                    voiceState: s,
                    currentUser: e,
                    premiumSubscription: t,
                    isLocalizedPromoEnabled: n
                })
            ) {
                var r, l;
                let n =
                    null === (r = (l = ew[o]).metadata) || void 0 === r
                        ? void 0
                        : r.call(l, {
                              currentUser: e,
                              premiumSubscription: t,
                              selectedGuildId: i
                          });
                eU = {
                    ...ej,
                    type: o,
                    metadata: n
                };
                break;
            }
        }
    }
    null != eU && ek(eU.type) && (eU = null);
}
function eH() {
    return !ec.Z.enabled && delete eD[ex.kVF.STREAMER_MODE], eV();
}
class eY extends (i = c.ZP.Store) {
    initialize() {
        this.syncWith([eu.Z, ea.Z, J.Z, el.Z, B.Z, ef.Z, K.Z, q.Z, Y.Z, R.Z, F.Z, W.Z], eV), this.waitFor(e_.default, eo.Z, ee.Z, $.ZP, es.Z, et.Z, ec.Z, p.Z, el.Z, ed.Z, V.Z, C.ZP, ea.Z, eg.Z, eS.Z, eN.Z, en.Z, eT.ZP, eA.Z, J.Z, em.Z, ei.Z, B.Z, eh.Z, ef.Z, q.Z, L.Z, h.Z, G.Z, F.Z, W.Z);
    }
    hasNotice() {
        return null != eU && null != eU.type;
    }
    getNotice() {
        return null == ed.Z.getAction() ? eU : null;
    }
    isNoticeDismissed(e) {
        return ek(e);
    }
}
(r = 'NoticeStore'),
    (s = 'displayName') in (a = eY)
        ? Object.defineProperty(a, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = r),
    (t.Z = new eY(E.Z, {
        CURRENT_USER_UPDATE: eV,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: eV,
        CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eV,
        CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eV,
        STATUS_PAGE_SCHEDULED_MAINTENANCE: eV,
        STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eV,
        GUILD_CREATE: eV,
        GUILD_DELETE: eV,
        AUDIO_INPUT_DETECTED: eV,
        AUDIO_SET_DISPLAY_SILENCE_WARNING: eV,
        CERTIFIED_DEVICES_SET: eV,
        AUDIO_SET_INPUT_DEVICE: eV,
        AUDIO_SET_OUTPUT_DEVICE: eV,
        MEDIA_ENGINE_DEVICES: eV,
        RTC_CONNECTION_STATE: eV,
        RPC_APP_AUTHENTICATED: eV,
        RPC_APP_DISCONNECTED: eV,
        USER_CONNECTIONS_UPDATE: eV,
        WINDOW_FOCUS: eV,
        INSTANT_INVITE_CREATE: eV,
        INSTANT_INVITE_REVOKE_SUCCESS: eV,
        SPOTIFY_PLAYER_PAUSE: eV,
        RUNNING_GAMES_CHANGE: eV,
        EXPERIMENTS_FETCH_SUCCESS: eV,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eV,
        DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eV,
        DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eV,
        DEVELOPER_TEST_MODE_RESET: eV,
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: eV,
        DISPATCH_APPLICATION_INSTALL: eV,
        IMPERSONATE_STOP: eV,
        IMPERSONATE_UPDATE: eV,
        GUILD_MEMBER_ADD: function (e) {
            return e.user.id === z.default.getId() && eV();
        },
        GUILD_MEMBER_UPDATE: eV,
        SURVEY_FETCHED: eV,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eV,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eV,
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eV,
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eV,
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return (
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== z.default.getId();
                }) && eV()
            );
        },
        STREAMER_MODE_UPDATE: eH,
        RUNNING_STREAMER_TOOLS_CHANGE: eH,
        DISPATCH_APPLICATION_ERROR: function () {
            return delete eD[ex.kVF.DISPATCH_ERROR], eV();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
            return delete eD[ex.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eV();
        },
        DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
            return eV();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
            return eV();
        },
        NOTICE_SHOW: function (e) {
            eU = e.notice;
        },
        NOTICE_DISMISS: function (e) {
            return null != eU && (null == e.id || e.id === eU.id) && (eB(eU.type, e.isTemporary, e.untilAtLeast), eV());
        },
        NOTICE_DISABLE: function (e) {
            let { noticeType: t } = e;
            return eB(t), eV();
        },
        LOGOUT: function () {
            (eD = {}), (eU = null);
        },
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: eV,
        AUTO_MODERATION_MENTION_RAID_DETECTION: eV,
        CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eV,
        PROXY_BLOCKED_REQUEST: eV
    }));
