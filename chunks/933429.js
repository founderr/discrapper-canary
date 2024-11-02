n.d(t, {
    m: function () {
        return eb;
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
    f = n(812206),
    T = n(223892),
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
    M = n(223606),
    O = n(160404),
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
    V = n(900735),
    H = n(768419),
    Y = n(590415),
    W = n(581883),
    K = n(199902),
    z = n(314897),
    X = n(881998),
    Q = n(463395),
    q = n(592125),
    J = n(553795),
    $ = n(427123),
    ee = n(271383),
    et = n(430824),
    en = n(131951),
    ei = n(292959),
    ea = n(496675),
    es = n(571474),
    er = n(19780),
    el = n(944486),
    eo = n(914010),
    ec = n(215427),
    eu = n(246946),
    ed = n(558724),
    e_ = n(23434),
    eE = n(594174),
    eI = n(979651),
    em = n(351402),
    ef = n(853872),
    eT = n(78839),
    eh = n(295226),
    eN = n(580130),
    ep = n(695103),
    eC = n(358085),
    eg = n(74538),
    eS = n(922156),
    eA = n(436181),
    ex = n(941128),
    eR = n(981631),
    ev = n(188785),
    eM = n(474936),
    eO = n(46140),
    eL = n(231338),
    eZ = n(65154);
let eb = {
        [eR.kVF.LOCALIZED_PRICING]: d.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
        [eR.kVF.DOWNLOAD_NAG]: d.z.NAGBAR_NOTICE_DOWNLOAD,
        [eR.kVF.CONNECT_SPOTIFY]: d.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eR.kVF.CONNECT_PLAYSTATION]: d.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eR.kVF.MFA_SMS_BACKUP]: d.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: d.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eR.kVF.PREMIUM_REACTIVATE]: d.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eR.kVF.BOUNCED_EMAIL_DETECTED]: d.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: d.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: d.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eR.kVF.POMELO_ELIGIBLE]: d.z.NAGBAR_NOTICE_POMELO,
        [eR.kVF.UU_MIGRATION]: d.z.UU_MIGRATION_NOTICE,
        [eR.kVF.CHECKOUT_RECOVERY_NAGBAR]: d.z.CHECKOUT_RECOVERY_NAGBAR
    },
    eP = {
        [eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [eR.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [eR.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [eR.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [eR.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [eR.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [eR.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [eR.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [eR.kVF.SERVER_USAGE_SURVEY]: 'hideServerUsageSurvey',
        [eR.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [eR.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [eR.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: 'hideMacOS17_18DeprecationMessageNotice',
        [eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice',
        [eR.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: 'hideNagbarBlockUserFeedbackNotice'
    },
    eD = new Set([eR.kVF.NO_INPUT_DETECTED, eR.kVF.STREAMER_MODE, eR.kVF.VIDEO_UNSUPPORTED_BROWSER, eR.kVF.SPOTIFY_AUTO_PAUSED, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.kVF.BLOCKED_BY_PROXY]),
    ej = {},
    eU = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    ey = null;
function eB(e) {
    return eP[e] + '-untilAtLeast';
}
function ek(e, t, n) {
    var i, a, s;
    if (null == e) return;
    let r = eP[e];
    if ((null != r && !t && _.K.set(r, !0), eD.has(e) && (ej[e] = !0), null != n && null != r)) {
        (i = e), (a = n), _.K.set(eB(i), a.format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
    } else {
        (s = e), _.K.remove(eB(s));
    }
}
function eG(e) {
    if (null == e) return !1;
    let t = (function (e) {
        let { enabled: t } = U.cI.getCurrentConfig(
            { location: 'NoticeStore_isNoticeDismissed' },
            {
                autoTrackExposure: !0,
                disable: e !== eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING
            }
        );
        return t ? null : eb[e];
    })(e);
    if (null != t) return (0, N.un)(t);
    let n = eP[e];
    if (null != n) {
        let t = (function (e) {
            let t = _.K.get(eB(e));
            return null != t ? o()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(o()());
    }
    let i = ej[e];
    return !!i || (null != n && '' !== n ? _.K.get(n) : !!eD.has(e) && i);
}
let eF = [eR.kVF.QUARANTINED, eR.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eR.kVF.VIEWING_ROLES, eR.kVF.INVITED_TO_SPEAK, eR.kVF.LURKING_GUILD, eR.kVF.VOICE_DISABLED, eR.kVF.NO_INPUT_DETECTED, eR.kVF.HARDWARE_MUTE, eR.kVF.H264_DISABLED, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.kVF.SPOTIFY_AUTO_PAUSED, eR.kVF.WIN32_DEPRECATED_MESSAGE, eR.kVF.WIN7_8_DEPRECATED_MESSAGE, eR.kVF.MACOS_17_18_DEPRECATED_MESSAGE, eR.kVF.BLOCKED_BY_PROXY, eR.kVF.VOICE_CONNECTED_LAST_SESSION, eR.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, eR.kVF.GUILD_RAID_NOTIFICATION, eR.kVF.QUESTS_PROGRESS_INTERRUPTION, eR.kVF.UNCLAIMED_ACCOUNT, eR.kVF.POMELO_ELIGIBLE, eR.kVF.PENDING_MEMBER, eR.kVF.CHECKOUT_RECOVERY_NAGBAR, eR.kVF.OUTBOUND_PROMOTION, eR.kVF.CORRUPT_INSTALLATION, eR.kVF.VIDEO_UNSUPPORTED_BROWSER, eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eR.kVF.STREAMER_MODE, eR.kVF.SCHEDULED_MAINTENANCE, eR.kVF.BOUNCED_EMAIL_DETECTED, eR.kVF.UNVERIFIED_ACCOUNT, eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING, eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING, eR.kVF.PREMIUM_UNCANCEL, eR.kVF.PREMIUM_MISSING_PAYMENT, eR.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, eR.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, eR.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eR.kVF.PREMIUM_REACTIVATE, eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION, eR.kVF.MFA_SMS_BACKUP, eR.kVF.APPLICATION_TEST_MODE, eR.kVF.LOCALIZED_PRICING, eR.kVF.DOWNLOAD_NAG, eR.kVF.CONNECT_SPOTIFY, eR.kVF.CONNECT_PLAYSTATION, eR.kVF.SURVEY, eR.kVF.SERVER_USAGE_SURVEY, eR.kVF.SAFETY_USER_SENTIMENT_NAGBAR, eR.kVF.UU_MIGRATION, eR.kVF.BLOCK_USER_FEEDBACK_NAGBAR],
    ew = [eR.kVF.QUARANTINED, eR.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eR.kVF.VIEWING_ROLES, eR.kVF.INVITED_TO_SPEAK, eR.kVF.LURKING_GUILD, eR.kVF.VOICE_DISABLED, eR.kVF.NO_INPUT_DETECTED, eR.kVF.HARDWARE_MUTE, eR.kVF.H264_DISABLED, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.kVF.SPOTIFY_AUTO_PAUSED, eR.kVF.BLOCKED_BY_PROXY, eR.kVF.VOICE_CONNECTED_LAST_SESSION, eR.kVF.PENDING_MEMBER, eR.kVF.STREAMER_MODE, eR.kVF.SCHEDULED_MAINTENANCE],
    eV = {
        [eR.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, x.g)().show && !eG(eR.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: o()().add(3, 'hours').toDate() })
        },
        [eR.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let i = ee.ZP.getMember(n, t.id);
                return null != i && !i.isPending && (0, v.EY)(i);
            }
        },
        [eR.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(eR.xW$.QUARANTINED);
            }
        },
        [eR.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return O.Z.isViewingRoles(t);
            }
        },
        [eR.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, Y.gf)(t) === Y.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [eR.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && L.Z.isLurking(t);
            }
        },
        [eR.kVF.VOICE_DISABLED]: { predicate: () => null != er.Z.getRemoteDisconnectVoiceChannelId() },
        [eR.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != er.Z.getLastSessionVoiceChannelId() },
        [eR.kVF.NO_INPUT_DETECTED]: {
            predicate: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    i = q.Z.getChannel(t),
                    a = (null == i ? void 0 : i.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
                return !1 === en.Z.getInputDetected() && !a;
            }
        },
        [eR.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = q.Z.getChannel(t);
                return !en.Z.getOpenH264() && null != t && eI.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [eR.kVF.HARDWARE_MUTE]: {
            predicate: () => er.Z.isConnected() && en.Z.isHardwareMute() && en.Z.isEnableHardwareMuteNotice(),
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
        [eR.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eS.Z.getLastError(),
            metadata: () => ({ error: eS.Z.getLastError() })
        },
        [eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eA.Z.getLastProgress(),
            metadata: () => eA.Z.getLastProgress()
        },
        [eR.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => H.Z.wasAutoPaused() },
        [eR.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eG(eR.kVF.BLOCKED_BY_PROXY) && G.Z.blockedByProxy && k.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [eR.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [eR.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, i;
                let { selectedGuildId: a, currentUser: s } = e;
                return null !== (i = null != a && null != s && !(null === (t = et.Z.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(eR.oNc.GUILD_ONBOARDING)) && (null === (n = ee.ZP.getMember(a, s.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== i && i;
            }
        },
        [eR.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, y.tq)() },
        [eR.kVF.CORRUPT_INSTALLATION]: { predicate: () => eC.isPlatformEmbedded && (!u.Z.supported() || ex.Z.isCorruptInstallation()) },
        [eR.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && eI.Z.hasVideo(t) && !en.Z.supports(eZ.AN.VIDEO) && !eG(eR.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eg.ZP.canRedeemPremiumPerks(t) && $.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => $.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eG(eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && $.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => $.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eR.kVF.STREAMER_MODE]: { predicate: () => eu.Z.enabled },
        [eR.kVF.DOWNLOAD_NAG]: { predicate: () => !eC.isPlatformEmbedded && !eG(eR.kVF.DOWNLOAD_NAG) },
        [eR.kVF.SCHEDULED_MAINTENANCE]: {
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
        [eR.kVF.SURVEY]: {
            predicate: () => null != ed.Z.getCurrentSurvey(),
            metadata: () => ed.Z.getCurrentSurvey()
        },
        [eR.kVF.SERVER_USAGE_SURVEY]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && A.Z.getCurrentConfig({ location: 'notice_store' }).showSurvey && !eG(eR.kVF.SERVER_USAGE_SURVEY);
            },
            metadata: (e) => {
                let { selectedGuildId: t, currentUser: n } = e;
                return {
                    selectedGuildId: t,
                    currentUser: n
                };
            }
        },
        [eR.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [eR.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [eR.kVF.CONNECT_SPOTIFY]: { predicate: () => !H.Z.hasConnectedAccount() && C.ZP.isObservedAppRunning(m.Z.get(eR.ABu.SPOTIFY).name) && !eG(eR.kVF.CONNECT_SPOTIFY) },
        [eR.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.arch) === 'ia32' && (null === I.Z || void 0 === I.Z ? void 0 : I.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [eR.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === I.Z || void 0 === I.Z ? void 0 : I.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [eR.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === I.Z || void 0 === I.Z ? void 0 : I.Z.process.platform) === 'darwin')
                    try {
                        return 19 > parseInt(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [eR.kVF.CONNECT_PLAYSTATION]: { predicate: () => J.Z.isSuggestedAccountType(eR.ABu.PLAYSTATION) && null == J.Z.getAccount(null, eR.ABu.PLAYSTATION) && !eG(eR.kVF.CONNECT_PLAYSTATION) },
        [eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eh.Z.getAlmostExpiringTrialOffers([eM.Si.TIER_2]).length > 0 && !eG(eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eh.Z.getAlmostExpiringTrialOffers([eM.Si.TIER_0]).length > 0 && !eG(eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [eR.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eR.O0b.CANCELED && 1 >= o()().diff(o()(t.canceledAt), 'days'),
                    s = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    r = null != t && t.status === eR.O0b.CANCELED && !s && i <= 7 && i >= 0 && (0, eg.M5)(n, eM.p9.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(eR.kVF.PREMIUM_UNCANCEL) && r;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = null != n ? (null === (t = (0, eg.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != a ? eg.ZP.getPremiumType(a) : null,
                    premiumSubscription: n
                };
            }
        },
        [eR.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = null != t ? o()(t.currentPeriodEnd).diff(o()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    s = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    r = eN.Z.applicationIdsFetched.has(eM.CL),
                    l = eN.Z.getForApplication(eM.CL),
                    c = null != t ? (0, eg.Af)(t) : null,
                    u = null != c ? eg.ZP.getSkuIdForPlan(c.planId) : null,
                    d =
                        null != l &&
                        null != c &&
                        Array.from(l).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === u;
                        }).length > 0,
                    _ = null != t && i <= (a > 14 ? 7 : 2) && i >= 0 && t.status !== eR.O0b.PAST_DUE && !s && r && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(eR.kVF.PREMIUM_MISSING_PAYMENT) && _;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = null != n ? (null === (t = (0, eg.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != a ? eg.ZP.getPremiumType(a) : null,
                    premiumSubscription: n
                };
            }
        },
        [eR.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && null != t.paymentSourceId ? ef.Z.getPaymentSource(t.paymentSourceId) : null,
                    a = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    s = null != t && t.status === eR.O0b.PAST_DUE && !a && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(eR.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eR.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    a = null != t && t.status === eR.O0b.PAST_DUE && !i && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(eR.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eR.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(eR.xW$.MFA_SMS) && !t.hasFlag(eR.xW$.STAFF) && !t.hasFlag(eR.xW$.PARTNER) && !eG(eR.kVF.MFA_SMS_BACKUP);
            }
        },
        [eR.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != ep.Z.testModeApplicationId,
            metadata: () => {
                if (null == ep.Z.testModeApplicationId) return {};
                let e = ep.Z.testModeApplicationId,
                    t = f.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [eR.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eG(eR.kVF.PREMIUM_REACTIVATE) && D.Z.shouldShowReactivateNotice() },
        [eR.kVF.LOCALIZED_PRICING]: {
            predicate: (e) => {
                let { isLocalizedPromoEnabled: t } = e;
                return !eG(eR.kVF.LOCALIZED_PRICING) && t;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eR.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    a = null != t && null != t.paymentSourceId ? ef.Z.getPaymentSource(t.paymentSourceId) : null,
                    s = null != a && eL.Uk.has(a.type),
                    r = null != t && t.status === eR.O0b.PAST_DUE && !i && s && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(eR.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && r;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                if (null == t)
                    return {
                        daysPastDue: 0,
                        dismissUntil: o()().toDate()
                    };
                {
                    let e = t.status === eR.O0b.PAST_DUE ? o()().diff(t.currentPeriodStart, 'days') : 0;
                    return {
                        daysPastDue: e,
                        dismissUntil: (0, eg.lY)(t).expiresDate.toDate()
                    };
                }
            }
        },
        [eR.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, b.e)() && !eG(eR.kVF.POMELO_ELIGIBLE) && !(0, Z.ov)() },
        [eR.kVF.UU_MIGRATION]: { predicate: () => (0, b.e)() && !eG(eR.kVF.UU_MIGRATION) && (0, Z.ov)() },
        [eR.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? et.Z.getGuild(t) : null;
                return (null != t && null != M.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eR.oNc.COMMUNITY)) && !eG(eR.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
            },
            metadata: (e) => {
                let { selectedGuildId: t } = e,
                    n = { dismissUntil: o()().add(2, 'hours').toDate() };
                if (null != t) {
                    let e = M.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            }
        },
        [eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eG(eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== h.Z.getEligibleGuildsForNagActivate().length && (0, T.Lm)() },
        [eR.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return w.SI(t);
            }
        },
        [eR.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = K.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, S.V9)(e),
                    n = F.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eO.Ot;
            },
            metadata: () => {
                let e = K.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, S.V9)(e) : null };
            }
        },
        [eR.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    i = null !== (t = ef.Z.paymentSources) && void 0 !== t ? t : {};
                return P.Z.getIsTargeted() && !(0, eg.I5)(n) && 0 !== Object.keys(i).length && (0, j.Y)();
            }
        },
        [eR.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => V.S(),
            metadata: () => ({ dismissUntil: o()().add(180, 'days').toDate() })
        }
    };
function eH() {
    if (!g.Z.isConnected()) return !1;
    ey = null;
    let e = eE.default.getCurrentUser();
    if (null == e) return !1;
    let t = eT.ZP.getPremiumSubscription(),
        n = em.Z.isLocalizedPromoEnabled,
        i = eo.Z.getGuildId(),
        a = el.Z.getVoiceChannelId(),
        s = null != a ? eI.Z.getVoiceStateForChannel(a) : null;
    for (let o of ev.a ? ew : eF) {
        if (null != eV[o]) {
            if (
                eV[o].predicate({
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
                    null === (r = (l = eV[o]).metadata) || void 0 === r
                        ? void 0
                        : r.call(l, {
                              currentUser: e,
                              premiumSubscription: t,
                              selectedGuildId: i
                          });
                ey = {
                    ...eU,
                    type: o,
                    metadata: n
                };
                break;
            }
        }
    }
    null != ey && eG(ey.type) && (ey = null);
}
function eY() {
    return !eu.Z.enabled && delete ej[eR.kVF.STREAMER_MODE], eH();
}
class eW extends (i = c.ZP.Store) {
    initialize() {
        this.syncWith([ed.Z, es.Z, $.Z, eo.Z, B.Z, eh.Z, X.Z, J.Z, W.Z, R.Z, F.Z, K.Z], eH), this.waitFor(eE.default, ec.Z, et.Z, ee.ZP, er.Z, en.Z, eu.Z, p.Z, eo.Z, e_.Z, H.Z, C.ZP, es.Z, eS.Z, eA.Z, ep.Z, ei.Z, eT.ZP, ex.Z, $.Z, ef.Z, ea.Z, B.Z, eN.Z, eh.Z, J.Z, L.Z, h.Z, G.Z, F.Z, K.Z);
    }
    hasNotice() {
        return null != ey && null != ey.type;
    }
    getNotice() {
        return null == e_.Z.getAction() ? ey : null;
    }
    isNoticeDismissed(e) {
        return eG(e);
    }
}
(r = 'NoticeStore'),
    (s = 'displayName') in (a = eW)
        ? Object.defineProperty(a, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = r),
    (t.Z = new eW(E.Z, {
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
            return e.user.id === z.default.getId() && eH();
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
                    return t !== z.default.getId();
                }) && eH()
            );
        },
        STREAMER_MODE_UPDATE: eY,
        RUNNING_STREAMER_TOOLS_CHANGE: eY,
        DISPATCH_APPLICATION_ERROR: function () {
            return delete ej[eR.kVF.DISPATCH_ERROR], eH();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
            return delete ej[eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eH();
        },
        DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
            return eH();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
            return eH();
        },
        NOTICE_SHOW: function (e) {
            ey = e.notice;
        },
        NOTICE_DISMISS: function (e) {
            return null != ey && (null == e.id || e.id === ey.id) && (ek(ey.type, e.isTemporary, e.untilAtLeast), eH());
        },
        NOTICE_DISABLE: function (e) {
            let { noticeType: t } = e;
            return ek(t), eH();
        },
        LOGOUT: function () {
            (ej = {}), (ey = null);
        },
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: eH,
        AUTO_MODERATION_MENTION_RAID_DETECTION: eH,
        CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eH,
        PROXY_BLOCKED_REQUEST: eH
    }));
