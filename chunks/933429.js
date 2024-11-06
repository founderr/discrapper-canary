n.d(t, {
    m: function () {
        return eL;
    }
}),
    n(47120);
var i,
    r,
    l,
    a,
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    u = n(743426),
    d = n(704215),
    m = n(433517),
    h = n(570140),
    f = n(579806),
    p = n(726542),
    g = n(812206),
    _ = n(223892),
    E = n(674525),
    C = n(605236),
    I = n(353926),
    x = n(594190),
    N = n(38618),
    v = n(569545),
    T = n(615365),
    S = n(528011),
    A = n(487419),
    b = n(715903),
    j = n(223606),
    Z = n(160404),
    R = n(41776),
    P = n(347649),
    L = n(332473),
    y = n(30684),
    O = n(616106),
    M = n(995598),
    k = n(774276),
    D = n(518638),
    B = n(1844),
    U = n(621615),
    w = n(417626),
    F = n(569984),
    G = n(523255),
    V = n(900735),
    H = n(768419),
    z = n(590415),
    W = n(581883),
    K = n(199902),
    Y = n(314897),
    X = n(881998),
    Q = n(463395),
    q = n(592125),
    J = n(553795),
    $ = n(427123),
    ee = n(271383),
    et = n(430824),
    en = n(131951),
    ei = n(292959),
    er = n(496675),
    el = n(571474),
    ea = n(19780),
    eo = n(944486),
    es = n(914010),
    ec = n(215427),
    eu = n(246946),
    ed = n(558724),
    em = n(23434),
    eh = n(594174),
    ef = n(979651),
    ep = n(351402),
    eg = n(853872),
    e_ = n(78839),
    eE = n(431),
    eC = n(580130),
    eI = n(695103),
    ex = n(358085),
    eN = n(74538),
    ev = n(922156),
    eT = n(436181),
    eS = n(941128),
    eA = n(981631),
    eb = n(188785),
    ej = n(474936),
    eZ = n(46140),
    eR = n(231338),
    eP = n(65154);
let eL = {
        [eA.kVF.LOCALIZED_PRICING]: d.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
        [eA.kVF.DOWNLOAD_NAG]: d.z.NAGBAR_NOTICE_DOWNLOAD,
        [eA.kVF.CONNECT_SPOTIFY]: d.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eA.kVF.CONNECT_PLAYSTATION]: d.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eA.kVF.MFA_SMS_BACKUP]: d.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: d.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eA.kVF.PREMIUM_REACTIVATE]: d.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eA.kVF.BOUNCED_EMAIL_DETECTED]: d.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eA.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: d.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eA.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: d.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eA.kVF.POMELO_ELIGIBLE]: d.z.NAGBAR_NOTICE_POMELO,
        [eA.kVF.UU_MIGRATION]: d.z.UU_MIGRATION_NOTICE,
        [eA.kVF.CHECKOUT_RECOVERY_NAGBAR]: d.z.CHECKOUT_RECOVERY_NAGBAR
    },
    ey = {
        [eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [eA.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [eA.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [eA.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [eA.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [eA.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [eA.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [eA.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [eA.kVF.SERVER_USAGE_SURVEY]: 'hideServerUsageSurvey',
        [eA.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [eA.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [eA.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: 'hideMacOS17_18DeprecationMessageNotice',
        [eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice',
        [eA.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: 'hideNagbarBlockUserFeedbackNotice'
    },
    eO = new Set([eA.kVF.NO_INPUT_DETECTED, eA.kVF.STREAMER_MODE, eA.kVF.VIDEO_UNSUPPORTED_BROWSER, eA.kVF.SPOTIFY_AUTO_PAUSED, eA.kVF.DISPATCH_ERROR, eA.kVF.DISPATCH_ERROR, eA.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eA.kVF.BLOCKED_BY_PROXY]),
    eM = {},
    ek = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    eD = null;
function eB(e) {
    return ey[e] + '-untilAtLeast';
}
function eU(e, t, n) {
    var i, r, l;
    if (null == e) return;
    let a = ey[e];
    if ((null != a && !t && m.K.set(a, !0), eO.has(e) && (eM[e] = !0), null != n && null != a)) {
        (i = e), (r = n), m.K.set(eB(i), r.format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
    } else {
        (l = e), m.K.remove(eB(l));
    }
}
function ew(e) {
    if (null == e) return !1;
    let t = (function (e) {
        let { enabled: t } = k.cI.getCurrentConfig(
            { location: 'NoticeStore_isNoticeDismissed' },
            {
                autoTrackExposure: !0,
                disable: e !== eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING
            }
        );
        return t ? null : eL[e];
    })(e);
    if (null != t) return (0, C.un)(t);
    let n = ey[e];
    if (null != n) {
        let t = (function (e) {
            let t = m.K.get(eB(e));
            return null != t ? s()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(s()());
    }
    let i = eM[e];
    return !!i || (null != n && '' !== n ? m.K.get(n) : !!eO.has(e) && i);
}
let eF = [eA.kVF.QUARANTINED, eA.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eA.kVF.VIEWING_ROLES, eA.kVF.INVITED_TO_SPEAK, eA.kVF.LURKING_GUILD, eA.kVF.VOICE_DISABLED, eA.kVF.NO_INPUT_DETECTED, eA.kVF.HARDWARE_MUTE, eA.kVF.H264_DISABLED, eA.kVF.DISPATCH_ERROR, eA.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eA.kVF.SPOTIFY_AUTO_PAUSED, eA.kVF.WIN32_DEPRECATED_MESSAGE, eA.kVF.WIN7_8_DEPRECATED_MESSAGE, eA.kVF.MACOS_17_18_DEPRECATED_MESSAGE, eA.kVF.BLOCKED_BY_PROXY, eA.kVF.VOICE_CONNECTED_LAST_SESSION, eA.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, eA.kVF.GUILD_RAID_NOTIFICATION, eA.kVF.QUESTS_PROGRESS_INTERRUPTION, eA.kVF.UNCLAIMED_ACCOUNT, eA.kVF.POMELO_ELIGIBLE, eA.kVF.PENDING_MEMBER, eA.kVF.CHECKOUT_RECOVERY_NAGBAR, eA.kVF.OUTBOUND_PROMOTION, eA.kVF.CORRUPT_INSTALLATION, eA.kVF.VIDEO_UNSUPPORTED_BROWSER, eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eA.kVF.STREAMER_MODE, eA.kVF.SCHEDULED_MAINTENANCE, eA.kVF.BOUNCED_EMAIL_DETECTED, eA.kVF.UNVERIFIED_ACCOUNT, eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING, eA.kVF.PREMIUM_TIER_0_TRIAL_ENDING, eA.kVF.PREMIUM_UNCANCEL, eA.kVF.PREMIUM_MISSING_PAYMENT, eA.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, eA.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, eA.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eA.kVF.PREMIUM_REACTIVATE, eA.kVF.ACTIVATE_SERVER_SUBSCRIPTION, eA.kVF.MFA_SMS_BACKUP, eA.kVF.APPLICATION_TEST_MODE, eA.kVF.LOCALIZED_PRICING, eA.kVF.DOWNLOAD_NAG, eA.kVF.CONNECT_SPOTIFY, eA.kVF.CONNECT_PLAYSTATION, eA.kVF.SURVEY, eA.kVF.SERVER_USAGE_SURVEY, eA.kVF.SAFETY_USER_SENTIMENT_NAGBAR, eA.kVF.UU_MIGRATION, eA.kVF.BLOCK_USER_FEEDBACK_NAGBAR],
    eG = [eA.kVF.QUARANTINED, eA.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eA.kVF.VIEWING_ROLES, eA.kVF.INVITED_TO_SPEAK, eA.kVF.LURKING_GUILD, eA.kVF.VOICE_DISABLED, eA.kVF.NO_INPUT_DETECTED, eA.kVF.HARDWARE_MUTE, eA.kVF.H264_DISABLED, eA.kVF.DISPATCH_ERROR, eA.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eA.kVF.SPOTIFY_AUTO_PAUSED, eA.kVF.BLOCKED_BY_PROXY, eA.kVF.VOICE_CONNECTED_LAST_SESSION, eA.kVF.PENDING_MEMBER, eA.kVF.STREAMER_MODE, eA.kVF.SCHEDULED_MAINTENANCE],
    eV = {
        [eA.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, S.g)().show && !ew(eA.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: s()().add(3, 'hours').toDate() })
        },
        [eA.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let i = ee.ZP.getMember(n, t.id);
                return null != i && !i.isPending && (0, b.EY)(i);
            }
        },
        [eA.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(eA.xW$.QUARANTINED);
            }
        },
        [eA.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return Z.Z.isViewingRoles(t);
            }
        },
        [eA.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, z.gf)(t) === z.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [eA.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && R.Z.isLurking(t);
            }
        },
        [eA.kVF.VOICE_DISABLED]: { predicate: () => null != ea.Z.getRemoteDisconnectVoiceChannelId() },
        [eA.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ea.Z.getLastSessionVoiceChannelId() },
        [eA.kVF.NO_INPUT_DETECTED]: {
            predicate: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    i = q.Z.getChannel(t),
                    r = (null == i ? void 0 : i.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
                return !1 === en.Z.getInputDetected() && !r;
            }
        },
        [eA.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = q.Z.getChannel(t);
                return !en.Z.getOpenH264() && null != t && ef.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [eA.kVF.HARDWARE_MUTE]: {
            predicate: () => ea.Z.isConnected() && en.Z.isHardwareMute() && en.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = en.Z.getInputDeviceId(),
                    t = Q.Z.getVendor(e),
                    n = Q.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n
                    };
            }
        },
        [eA.kVF.DISPATCH_ERROR]: {
            predicate: () => null != ev.Z.getLastError(),
            metadata: () => ({ error: ev.Z.getLastError() })
        },
        [eA.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eT.Z.getLastProgress(),
            metadata: () => eT.Z.getLastProgress()
        },
        [eA.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => H.Z.wasAutoPaused() },
        [eA.kVF.BLOCKED_BY_PROXY]: { predicate: () => !ew(eA.kVF.BLOCKED_BY_PROXY) && w.Z.blockedByProxy && U.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [eA.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [eA.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, i;
                let { selectedGuildId: r, currentUser: l } = e;
                return null !== (i = null != r && null != l && !(null === (t = et.Z.getGuild(r)) || void 0 === t ? void 0 : t.hasFeature(eA.oNc.GUILD_ONBOARDING)) && (null === (n = ee.ZP.getMember(r, l.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== i && i;
            }
        },
        [eA.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, D.tq)() },
        [eA.kVF.CORRUPT_INSTALLATION]: { predicate: () => ex.isPlatformEmbedded && (!u.Z.supported() || eS.Z.isCorruptInstallation()) },
        [eA.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && ef.Z.hasVideo(t) && !en.Z.supports(eP.AN.VIDEO) && !ew(eA.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eN.ZP.canRedeemPremiumPerks(t) && $.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => $.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !ew(eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && $.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => $.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eA.kVF.STREAMER_MODE]: { predicate: () => eu.Z.enabled },
        [eA.kVF.DOWNLOAD_NAG]: { predicate: () => !ex.isPlatformEmbedded && !ew(eA.kVF.DOWNLOAD_NAG) },
        [eA.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != ec.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = ec.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until)
                    };
            }
        },
        [eA.kVF.SURVEY]: {
            predicate: () => null != ed.Z.getCurrentSurvey(),
            metadata: () => ed.Z.getCurrentSurvey()
        },
        [eA.kVF.SERVER_USAGE_SURVEY]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && T.Z.getCurrentConfig({ location: 'notice_store' }).showSurvey && !ew(eA.kVF.SERVER_USAGE_SURVEY);
            },
            metadata: (e) => {
                let { selectedGuildId: t, currentUser: n } = e;
                return {
                    selectedGuildId: t,
                    currentUser: n
                };
            }
        },
        [eA.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [eA.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [eA.kVF.CONNECT_SPOTIFY]: { predicate: () => !H.Z.hasConnectedAccount() && x.ZP.isObservedAppRunning(p.Z.get(eA.ABu.SPOTIFY).name) && !ew(eA.kVF.CONNECT_SPOTIFY) },
        [eA.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === f.Z || void 0 === f.Z ? void 0 : f.Z.os.arch) === 'ia32' && (null === f.Z || void 0 === f.Z ? void 0 : f.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: s()().add(5, 'days').toDate() })
        },
        [eA.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === f.Z || void 0 === f.Z ? void 0 : f.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === f.Z || void 0 === f.Z ? void 0 : f.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: s()().add(5, 'days').toDate() })
        },
        [eA.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === f.Z || void 0 === f.Z ? void 0 : f.Z.process.platform) === 'darwin')
                    try {
                        return 19 > parseInt(null === f.Z || void 0 === f.Z ? void 0 : f.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: s()().add(5, 'days').toDate() })
        },
        [eA.kVF.CONNECT_PLAYSTATION]: { predicate: () => J.Z.isSuggestedAccountType(eA.ABu.PLAYSTATION) && null == J.Z.getAccount(null, eA.ABu.PLAYSTATION) && !ew(eA.kVF.CONNECT_PLAYSTATION) },
        [eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eE.Z.getAlmostExpiringTrialOffers([ej.Si.TIER_2]).length > 0 && !ew(eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [eA.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eE.Z.getAlmostExpiringTrialOffers([ej.Si.TIER_0]).length > 0 && !ew(eA.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [eA.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? s()(t.currentPeriodEnd).diff(s()().startOf('day'), 'days') : 0,
                    r = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eA.O0b.CANCELED && 1 >= s()().diff(s()(t.canceledAt), 'days'),
                    l = null != t && s()(t.currentPeriodEnd).isBefore(s()()),
                    a = null != t && t.status === eA.O0b.CANCELED && !l && i <= 7 && i >= 0 && (0, eN.M5)(n, ej.p9.TIER_2) && !r && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ew(eA.kVF.PREMIUM_UNCANCEL) && a;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? s()(n.currentPeriodEnd).diff(s()().startOf('day'), 'days') : 0,
                    r = null != n ? (null === (t = (0, eN.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? eN.ZP.getPremiumType(r) : null,
                    premiumSubscription: n
                };
            }
        },
        [eA.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? s()(t.currentPeriodEnd).diff(s()().startOf('day'), 'days') : 0,
                    r = null != t ? s()(t.currentPeriodEnd).diff(s()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    l = null != t && s()(t.currentPeriodEnd).isBefore(s()()),
                    a = eC.Z.applicationIdsFetched.has(ej.CL),
                    o = eC.Z.getForApplication(ej.CL),
                    c = null != t ? (0, eN.Af)(t) : null,
                    u = null != c ? eN.ZP.getSkuIdForPlan(c.planId) : null,
                    d =
                        null != o &&
                        null != c &&
                        Array.from(o).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === u;
                        }).length > 0,
                    m = null != t && i <= (r > 14 ? 7 : 2) && i >= 0 && t.status !== eA.O0b.PAST_DUE && !l && a && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ew(eA.kVF.PREMIUM_MISSING_PAYMENT) && m;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? s()(n.currentPeriodEnd).diff(s()().startOf('day'), 'days') : 0,
                    r = null != n ? (null === (t = (0, eN.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? eN.ZP.getPremiumType(r) : null,
                    premiumSubscription: n
                };
            }
        },
        [eA.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && null != t.paymentSourceId ? eg.Z.getPaymentSource(t.paymentSourceId) : null,
                    r = null != t && s()(t.currentPeriodEnd).isBefore(s()()),
                    l = null != t && t.status === eA.O0b.PAST_DUE && !r && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ew(eA.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && l;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eA.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && s()(t.currentPeriodEnd).isBefore(s()()),
                    r = null != t && t.status === eA.O0b.PAST_DUE && !i && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ew(eA.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eA.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(eA.xW$.MFA_SMS) && !t.hasFlag(eA.xW$.STAFF) && !t.hasFlag(eA.xW$.PARTNER) && !ew(eA.kVF.MFA_SMS_BACKUP);
            }
        },
        [eA.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eI.Z.testModeApplicationId,
            metadata: () => {
                if (null == eI.Z.testModeApplicationId) return {};
                let e = eI.Z.testModeApplicationId,
                    t = g.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [eA.kVF.PREMIUM_REACTIVATE]: { predicate: () => !ew(eA.kVF.PREMIUM_REACTIVATE) && O.Z.shouldShowReactivateNotice() },
        [eA.kVF.LOCALIZED_PRICING]: {
            predicate: (e) => {
                let { isLocalizedPromoEnabled: t } = e;
                return !ew(eA.kVF.LOCALIZED_PRICING) && t;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eA.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && s()(t.currentPeriodEnd).isBefore(s()()),
                    r = null != t && null != t.paymentSourceId ? eg.Z.getPaymentSource(t.paymentSourceId) : null,
                    l = null != r && eR.Uk.has(r.type),
                    a = null != t && t.status === eA.O0b.PAST_DUE && !i && l && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ew(eA.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                if (null == t)
                    return {
                        daysPastDue: 0,
                        dismissUntil: s()().toDate()
                    };
                {
                    let e = t.status === eA.O0b.PAST_DUE ? s()().diff(t.currentPeriodStart, 'days') : 0;
                    return {
                        daysPastDue: e,
                        dismissUntil: (0, eN.lY)(t).expiresDate.toDate()
                    };
                }
            }
        },
        [eA.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, L.e)() && !ew(eA.kVF.POMELO_ELIGIBLE) && !(0, P.ov)() },
        [eA.kVF.UU_MIGRATION]: { predicate: () => (0, L.e)() && !ew(eA.kVF.UU_MIGRATION) && (0, P.ov)() },
        [eA.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? et.Z.getGuild(t) : null;
                return (null != t && null != j.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eA.oNc.COMMUNITY)) && !ew(eA.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
            },
            metadata: (e) => {
                let { selectedGuildId: t } = e,
                    n = { dismissUntil: s()().add(2, 'hours').toDate() };
                if (null != t) {
                    let e = j.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            }
        },
        [eA.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !ew(eA.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== E.Z.getEligibleGuildsForNagActivate().length && (0, _.Lm)() },
        [eA.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return G.SI(t);
            }
        },
        [eA.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = K.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, v.V9)(e),
                    n = F.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eZ.Ot;
            },
            metadata: () => {
                let e = K.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, v.V9)(e) : null };
            }
        },
        [eA.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    i = null !== (t = eg.Z.paymentSources) && void 0 !== t ? t : {};
                return y.Z.getIsTargeted() && !(0, eN.I5)(n) && 0 !== Object.keys(i).length && (0, M.Y)();
            }
        },
        [eA.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => V.S(),
            metadata: () => ({ dismissUntil: s()().add(180, 'days').toDate() })
        }
    };
function eH() {
    if (!N.Z.isConnected()) return !1;
    eD = null;
    let e = eh.default.getCurrentUser();
    if (null == e) return !1;
    let t = e_.ZP.getPremiumSubscription(),
        n = ep.Z.isLocalizedPromoEnabled,
        i = es.Z.getGuildId(),
        r = eo.Z.getVoiceChannelId(),
        l = null != r ? ef.Z.getVoiceStateForChannel(r) : null;
    for (let s of eb.a ? eG : eF) {
        if (null != eV[s]) {
            if (
                eV[s].predicate({
                    selectedGuildId: i,
                    voiceChannelId: r,
                    voiceState: l,
                    currentUser: e,
                    premiumSubscription: t,
                    isLocalizedPromoEnabled: n
                })
            ) {
                var a, o;
                let n =
                    null === (a = (o = eV[s]).metadata) || void 0 === a
                        ? void 0
                        : a.call(o, {
                              currentUser: e,
                              premiumSubscription: t,
                              selectedGuildId: i
                          });
                eD = {
                    ...ek,
                    type: s,
                    metadata: n
                };
                break;
            }
        }
    }
    null != eD && ew(eD.type) && (eD = null);
}
function ez() {
    return !eu.Z.enabled && delete eM[eA.kVF.STREAMER_MODE], eH();
}
class eW extends (i = c.ZP.Store) {
    initialize() {
        this.syncWith([ed.Z, el.Z, $.Z, es.Z, B.Z, eE.Z, X.Z, J.Z, W.Z, A.Z, F.Z, K.Z], eH), this.waitFor(eh.default, ec.Z, et.Z, ee.ZP, ea.Z, en.Z, eu.Z, I.Z, es.Z, em.Z, H.Z, x.ZP, el.Z, ev.Z, eT.Z, eI.Z, ei.Z, e_.ZP, eS.Z, $.Z, eg.Z, er.Z, B.Z, eC.Z, eE.Z, J.Z, R.Z, E.Z, w.Z, F.Z, K.Z);
    }
    hasNotice() {
        return null != eD && null != eD.type;
    }
    getNotice() {
        return null == em.Z.getAction() ? eD : null;
    }
    isNoticeDismissed(e) {
        return ew(e);
    }
}
(a = 'NoticeStore'),
    (l = 'displayName') in (r = eW)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new eW(h.Z, {
        CURRENT_USER_UPDATE: eH,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: eH,
        CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eH,
        CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eH,
        STATUS_PAGE_SCHEDULED_MAINTENANCE: eH,
        STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eH,
        GUILD_CREATE: eH,
        GUILD_DELETE: eH,
        AUDIO_INPUT_DETECTED: eH,
        AUDIO_SET_DISPLAY_SILENCE_WARNING: eH,
        CERTIFIED_DEVICES_SET: eH,
        AUDIO_SET_INPUT_DEVICE: eH,
        AUDIO_SET_OUTPUT_DEVICE: eH,
        MEDIA_ENGINE_DEVICES: eH,
        RTC_CONNECTION_STATE: eH,
        RPC_APP_AUTHENTICATED: eH,
        RPC_APP_DISCONNECTED: eH,
        USER_CONNECTIONS_UPDATE: eH,
        WINDOW_FOCUS: eH,
        INSTANT_INVITE_CREATE: eH,
        INSTANT_INVITE_REVOKE_SUCCESS: eH,
        SPOTIFY_PLAYER_PAUSE: eH,
        RUNNING_GAMES_CHANGE: eH,
        EXPERIMENTS_FETCH_SUCCESS: eH,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eH,
        DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eH,
        DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eH,
        DEVELOPER_TEST_MODE_RESET: eH,
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: eH,
        DISPATCH_APPLICATION_INSTALL: eH,
        IMPERSONATE_STOP: eH,
        IMPERSONATE_UPDATE: eH,
        GUILD_MEMBER_ADD: function (e) {
            return e.user.id === Y.default.getId() && eH();
        },
        GUILD_MEMBER_UPDATE: eH,
        SURVEY_FETCHED: eH,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eH,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eH,
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eH,
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eH,
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return (
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== Y.default.getId();
                }) && eH()
            );
        },
        STREAMER_MODE_UPDATE: ez,
        RUNNING_STREAMER_TOOLS_CHANGE: ez,
        DISPATCH_APPLICATION_ERROR: function () {
            return delete eM[eA.kVF.DISPATCH_ERROR], eH();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
            return delete eM[eA.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eH();
        },
        DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
            return eH();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
            return eH();
        },
        NOTICE_SHOW: function (e) {
            eD = e.notice;
        },
        NOTICE_DISMISS: function (e) {
            return null != eD && (null == e.id || e.id === eD.id) && (eU(eD.type, e.isTemporary, e.untilAtLeast), eH());
        },
        NOTICE_DISABLE: function (e) {
            let { noticeType: t } = e;
            return eU(t), eH();
        },
        LOGOUT: function () {
            (eM = {}), (eD = null);
        },
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: eH,
        AUTO_MODERATION_MENTION_RAID_DETECTION: eH,
        CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eH,
        PROXY_BLOCKED_REQUEST: eH
    }));
