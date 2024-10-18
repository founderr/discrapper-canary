n.d(t, {
    m: function () {
        return eP;
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
    P = n(514851),
    D = n(30684),
    j = n(616106),
    U = n(666072),
    y = n(995598),
    B = n(774276),
    k = n(518638),
    G = n(1844),
    F = n(621615),
    w = n(417626),
    V = n(569984),
    H = n(523255),
    Y = n(768419),
    W = n(590415),
    z = n(581883),
    K = n(199902),
    X = n(314897),
    Q = n(881998),
    q = n(463395),
    J = n(592125),
    $ = n(553795),
    ee = n(427123),
    et = n(271383),
    en = n(430824),
    ei = n(131951),
    ea = n(292959),
    es = n(496675),
    er = n(571474),
    el = n(19780),
    eo = n(944486),
    ec = n(914010),
    eu = n(215427),
    ed = n(246946),
    e_ = n(558724),
    eE = n(23434),
    eI = n(594174),
    em = n(979651),
    eT = n(351402),
    ef = n(853872),
    eh = n(78839),
    eN = n(295226),
    ep = n(580130),
    eC = n(695103),
    eg = n(358085),
    eS = n(74538),
    eA = n(922156),
    ex = n(436181),
    eR = n(941128),
    ev = n(981631),
    eO = n(188785),
    eM = n(474936),
    eL = n(46140),
    eZ = n(231338),
    eb = n(65154);
let eP = {
        [ev.kVF.LOCALIZED_PRICING]: d.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
        [ev.kVF.DOWNLOAD_NAG]: d.z.NAGBAR_NOTICE_DOWNLOAD,
        [ev.kVF.CONNECT_SPOTIFY]: d.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [ev.kVF.CONNECT_PLAYSTATION]: d.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [ev.kVF.MFA_SMS_BACKUP]: d.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [ev.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: d.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [ev.kVF.PREMIUM_REACTIVATE]: d.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [ev.kVF.BOUNCED_EMAIL_DETECTED]: d.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [ev.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: d.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [ev.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: d.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [ev.kVF.POMELO_ELIGIBLE]: d.z.NAGBAR_NOTICE_POMELO,
        [ev.kVF.UU_MIGRATION]: d.z.UU_MIGRATION_NOTICE,
        [ev.kVF.CHECKOUT_RECOVERY_NAGBAR]: d.z.CHECKOUT_RECOVERY_NAGBAR,
        [ev.kVF.CASH_APP_PAY_AWARENESS_NAGBAR]: d.z.CASH_APP_PAY_AWARENESS_NAGBAR
    },
    eD = {
        [ev.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [ev.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [ev.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [ev.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [ev.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [ev.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [ev.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [ev.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [ev.kVF.SERVER_USAGE_SURVEY]: 'hideServerUsageSurvey',
        [ev.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [ev.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [ev.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: 'hideMacOS17_18DeprecationMessageNotice',
        [ev.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice'
    },
    ej = new Set([ev.kVF.NO_INPUT_DETECTED, ev.kVF.STREAMER_MODE, ev.kVF.VIDEO_UNSUPPORTED_BROWSER, ev.kVF.SPOTIFY_AUTO_PAUSED, ev.kVF.DISPATCH_ERROR, ev.kVF.DISPATCH_ERROR, ev.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ev.kVF.BLOCKED_BY_PROXY]),
    eU = {},
    ey = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    eB = null;
function ek(e) {
    return eD[e] + '-untilAtLeast';
}
function eG(e, t, n) {
    var i, a, s;
    if (null == e) return;
    let r = eD[e];
    if ((null != r && !t && _.K.set(r, !0), ej.has(e) && (eU[e] = !0), null != n && null != r)) {
        (i = e), (a = n), _.K.set(ek(i), a.format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
    } else {
        (s = e), _.K.remove(ek(s));
    }
}
function eF(e) {
    if (null == e) return !1;
    let t = (function (e) {
        let { enabled: t } = B.cI.getCurrentConfig(
            { location: 'NoticeStore_isNoticeDismissed' },
            {
                autoTrackExposure: !0,
                disable: e !== ev.kVF.PREMIUM_TIER_2_TRIAL_ENDING
            }
        );
        return t ? null : eP[e];
    })(e);
    if (null != t) return (0, N.un)(t);
    let n = eD[e];
    if (null != n) {
        let t = (function (e) {
            let t = _.K.get(ek(e));
            return null != t ? o()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(o()());
    }
    let i = eU[e];
    return !!i || (null != n && '' !== n ? _.K.get(n) : !!ej.has(e) && i);
}
let ew = [ev.kVF.QUARANTINED, ev.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, ev.kVF.VIEWING_ROLES, ev.kVF.INVITED_TO_SPEAK, ev.kVF.LURKING_GUILD, ev.kVF.VOICE_DISABLED, ev.kVF.NO_INPUT_DETECTED, ev.kVF.HARDWARE_MUTE, ev.kVF.H264_DISABLED, ev.kVF.DISPATCH_ERROR, ev.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ev.kVF.SPOTIFY_AUTO_PAUSED, ev.kVF.WIN32_DEPRECATED_MESSAGE, ev.kVF.WIN7_8_DEPRECATED_MESSAGE, ev.kVF.MACOS_17_18_DEPRECATED_MESSAGE, ev.kVF.BLOCKED_BY_PROXY, ev.kVF.VOICE_CONNECTED_LAST_SESSION, ev.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, ev.kVF.GUILD_RAID_NOTIFICATION, ev.kVF.QUESTS_PROGRESS_INTERRUPTION, ev.kVF.UNCLAIMED_ACCOUNT, ev.kVF.POMELO_ELIGIBLE, ev.kVF.PENDING_MEMBER, ev.kVF.CASH_APP_PAY_AWARENESS_NAGBAR, ev.kVF.CHECKOUT_RECOVERY_NAGBAR, ev.kVF.OUTBOUND_PROMOTION, ev.kVF.CORRUPT_INSTALLATION, ev.kVF.VIDEO_UNSUPPORTED_BROWSER, ev.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, ev.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, ev.kVF.STREAMER_MODE, ev.kVF.SCHEDULED_MAINTENANCE, ev.kVF.BOUNCED_EMAIL_DETECTED, ev.kVF.UNVERIFIED_ACCOUNT, ev.kVF.PREMIUM_TIER_2_TRIAL_ENDING, ev.kVF.PREMIUM_TIER_0_TRIAL_ENDING, ev.kVF.PREMIUM_UNCANCEL, ev.kVF.PREMIUM_MISSING_PAYMENT, ev.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, ev.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, ev.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, ev.kVF.PREMIUM_REACTIVATE, ev.kVF.ACTIVATE_SERVER_SUBSCRIPTION, ev.kVF.MFA_SMS_BACKUP, ev.kVF.APPLICATION_TEST_MODE, ev.kVF.LOCALIZED_PRICING, ev.kVF.DOWNLOAD_NAG, ev.kVF.CONNECT_SPOTIFY, ev.kVF.CONNECT_PLAYSTATION, ev.kVF.SURVEY, ev.kVF.SERVER_USAGE_SURVEY, ev.kVF.SAFETY_USER_SENTIMENT_NAGBAR, ev.kVF.UU_MIGRATION],
    eV = [ev.kVF.QUARANTINED, ev.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, ev.kVF.VIEWING_ROLES, ev.kVF.INVITED_TO_SPEAK, ev.kVF.LURKING_GUILD, ev.kVF.VOICE_DISABLED, ev.kVF.NO_INPUT_DETECTED, ev.kVF.HARDWARE_MUTE, ev.kVF.H264_DISABLED, ev.kVF.DISPATCH_ERROR, ev.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ev.kVF.SPOTIFY_AUTO_PAUSED, ev.kVF.BLOCKED_BY_PROXY, ev.kVF.VOICE_CONNECTED_LAST_SESSION, ev.kVF.PENDING_MEMBER, ev.kVF.STREAMER_MODE, ev.kVF.SCHEDULED_MAINTENANCE],
    eH = {
        [ev.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, x.g)().show && !eF(ev.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: o()().add(3, 'hours').toDate() })
        },
        [ev.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let i = et.ZP.getMember(n, t.id);
                return null != i && !i.isPending && (0, v.EY)(i);
            }
        },
        [ev.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(ev.xW$.QUARANTINED);
            }
        },
        [ev.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return M.Z.isViewingRoles(t);
            }
        },
        [ev.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, W.gf)(t) === W.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [ev.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && L.Z.isLurking(t);
            }
        },
        [ev.kVF.VOICE_DISABLED]: { predicate: () => null != el.Z.getRemoteDisconnectVoiceChannelId() },
        [ev.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != el.Z.getLastSessionVoiceChannelId() },
        [ev.kVF.NO_INPUT_DETECTED]: {
            predicate: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    i = J.Z.getChannel(t),
                    a = (null == i ? void 0 : i.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
                return !1 === ei.Z.getInputDetected() && !a;
            }
        },
        [ev.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = J.Z.getChannel(t);
                return !ei.Z.getOpenH264() && null != t && em.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [ev.kVF.HARDWARE_MUTE]: {
            predicate: () => el.Z.isConnected() && ei.Z.isHardwareMute() && ei.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = ei.Z.getInputDeviceId(),
                    t = q.Z.getVendor(e),
                    n = q.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n
                    };
            }
        },
        [ev.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eA.Z.getLastError(),
            metadata: () => ({ error: eA.Z.getLastError() })
        },
        [ev.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != ex.Z.getLastProgress(),
            metadata: () => ex.Z.getLastProgress()
        },
        [ev.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => Y.Z.wasAutoPaused() },
        [ev.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eF(ev.kVF.BLOCKED_BY_PROXY) && w.Z.blockedByProxy && F.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [ev.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [ev.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, i;
                let { selectedGuildId: a, currentUser: s } = e;
                return null !== (i = null != a && null != s && !(null === (t = en.Z.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(ev.oNc.GUILD_ONBOARDING)) && (null === (n = et.ZP.getMember(a, s.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== i && i;
            }
        },
        [ev.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, k.tq)() },
        [ev.kVF.CORRUPT_INSTALLATION]: { predicate: () => eg.isPlatformEmbedded && (!u.Z.supported() || eR.Z.isCorruptInstallation()) },
        [ev.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && em.Z.hasVideo(t) && !ei.Z.supports(eb.AN.VIDEO) && !eF(ev.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [ev.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eS.ZP.canRedeemPremiumPerks(t) && ee.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => ee.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [ev.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eF(ev.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && ee.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => ee.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [ev.kVF.STREAMER_MODE]: { predicate: () => ed.Z.enabled },
        [ev.kVF.DOWNLOAD_NAG]: { predicate: () => !eg.isPlatformEmbedded && !eF(ev.kVF.DOWNLOAD_NAG) },
        [ev.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != eu.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = eu.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until)
                    };
            }
        },
        [ev.kVF.SURVEY]: {
            predicate: () => null != e_.Z.getCurrentSurvey(),
            metadata: () => e_.Z.getCurrentSurvey()
        },
        [ev.kVF.SERVER_USAGE_SURVEY]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && A.Z.getCurrentConfig({ location: 'notice_store' }).showSurvey && !eF(ev.kVF.SERVER_USAGE_SURVEY);
            },
            metadata: (e) => {
                let { selectedGuildId: t, currentUser: n } = e;
                return {
                    selectedGuildId: t,
                    currentUser: n
                };
            }
        },
        [ev.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [ev.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [ev.kVF.CONNECT_SPOTIFY]: { predicate: () => !Y.Z.hasConnectedAccount() && C.ZP.isObservedAppRunning(m.Z.get(ev.ABu.SPOTIFY).name) && !eF(ev.kVF.CONNECT_SPOTIFY) },
        [ev.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.arch) === 'ia32' && (null === I.Z || void 0 === I.Z ? void 0 : I.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [ev.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === I.Z || void 0 === I.Z ? void 0 : I.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [ev.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === I.Z || void 0 === I.Z ? void 0 : I.Z.process.platform) === 'darwin')
                    try {
                        return 19 > parseInt(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [ev.kVF.CONNECT_PLAYSTATION]: { predicate: () => $.Z.isSuggestedAccountType(ev.ABu.PLAYSTATION) && null == $.Z.getAccount(null, ev.ABu.PLAYSTATION) && !eF(ev.kVF.CONNECT_PLAYSTATION) },
        [ev.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eN.Z.getAlmostExpiringTrialOffers([eM.Si.TIER_2]).length > 0 && !eF(ev.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [ev.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eN.Z.getAlmostExpiringTrialOffers([eM.Si.TIER_0]).length > 0 && !eF(ev.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [ev.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === ev.O0b.CANCELED && 1 >= o()().diff(o()(t.canceledAt), 'days'),
                    s = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    r = null != t && t.status === ev.O0b.CANCELED && !s && i <= 7 && i >= 0 && (0, eS.M5)(n, eM.p9.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eF(ev.kVF.PREMIUM_UNCANCEL) && r;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = null != n ? (null === (t = (0, eS.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != a ? eS.ZP.getPremiumType(a) : null,
                    premiumSubscription: n
                };
            }
        },
        [ev.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = null != t ? o()(t.currentPeriodEnd).diff(o()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    s = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    r = ep.Z.applicationIdsFetched.has(eM.CL),
                    l = ep.Z.getForApplication(eM.CL),
                    c = null != t ? (0, eS.Af)(t) : null,
                    u = null != c ? eS.ZP.getSkuIdForPlan(c.planId) : null,
                    d =
                        null != l &&
                        null != c &&
                        Array.from(l).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === u;
                        }).length > 0,
                    _ = null != t && i <= (a > 14 ? 7 : 2) && i >= 0 && t.status !== ev.O0b.PAST_DUE && !s && r && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eF(ev.kVF.PREMIUM_MISSING_PAYMENT) && _;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = null != n ? (null === (t = (0, eS.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != a ? eS.ZP.getPremiumType(a) : null,
                    premiumSubscription: n
                };
            }
        },
        [ev.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && null != t.paymentSourceId ? ef.Z.getPaymentSource(t.paymentSourceId) : null,
                    a = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    s = null != t && t.status === ev.O0b.PAST_DUE && !a && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eF(ev.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [ev.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    a = null != t && t.status === ev.O0b.PAST_DUE && !i && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eF(ev.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [ev.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(ev.xW$.MFA_SMS) && !t.hasFlag(ev.xW$.STAFF) && !t.hasFlag(ev.xW$.PARTNER) && !eF(ev.kVF.MFA_SMS_BACKUP);
            }
        },
        [ev.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eC.Z.testModeApplicationId,
            metadata: () => {
                if (null == eC.Z.testModeApplicationId) return {};
                let e = eC.Z.testModeApplicationId,
                    t = T.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [ev.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eF(ev.kVF.PREMIUM_REACTIVATE) && j.Z.shouldShowReactivateNotice() },
        [ev.kVF.LOCALIZED_PRICING]: {
            predicate: (e) => {
                let { isLocalizedPromoEnabled: t } = e;
                return !eF(ev.kVF.LOCALIZED_PRICING) && t;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [ev.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    a = null != t && null != t.paymentSourceId ? ef.Z.getPaymentSource(t.paymentSourceId) : null,
                    s = null != a && eZ.Uk.has(a.type),
                    r = null != t && t.status === ev.O0b.PAST_DUE && !i && s && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eF(ev.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && r;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                if (null == t)
                    return {
                        daysPastDue: 0,
                        dismissUntil: o()().toDate()
                    };
                {
                    let e = t.status === ev.O0b.PAST_DUE ? o()().diff(t.currentPeriodStart, 'days') : 0;
                    return {
                        daysPastDue: e,
                        dismissUntil: (0, eS.lY)(t).expiresDate.toDate()
                    };
                }
            }
        },
        [ev.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, b.e)() && !eF(ev.kVF.POMELO_ELIGIBLE) && !(0, Z.ov)() },
        [ev.kVF.UU_MIGRATION]: { predicate: () => (0, b.e)() && !eF(ev.kVF.UU_MIGRATION) && (0, Z.ov)() },
        [ev.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? en.Z.getGuild(t) : null;
                return (null != t && null != O.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(ev.oNc.COMMUNITY)) && !eF(ev.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
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
        [ev.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eF(ev.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== h.Z.getEligibleGuildsForNagActivate().length && (0, f.Lm)() },
        [ev.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return H.SI(t);
            }
        },
        [ev.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = K.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, S.V9)(e),
                    n = V.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eL.Ot;
            },
            metadata: () => {
                let e = K.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, S.V9)(e) : null };
            }
        },
        [ev.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    i = null !== (t = ef.Z.paymentSources) && void 0 !== t ? t : {};
                return D.Z.getIsTargeted() && !(0, eS.I5)(n) && 0 !== Object.keys(i).length && (0, y.Y)();
            }
        },
        [ev.kVF.CASH_APP_PAY_AWARENESS_NAGBAR]: {
            predicate: () => {
                let e = P.Z.getForCampaign(ev.$Dd.CASH_APP_PAY_AWARENESS);
                return null != e && !0 === e.is_eligible && (0, U.j)();
            }
        }
    };
function eY() {
    if (!g.Z.isConnected()) return !1;
    eB = null;
    let e = eI.default.getCurrentUser();
    if (null == e) return !1;
    let t = eh.ZP.getPremiumSubscription(),
        n = eT.Z.isLocalizedPromoEnabled,
        i = ec.Z.getGuildId(),
        a = eo.Z.getVoiceChannelId(),
        s = null != a ? em.Z.getVoiceStateForChannel(a) : null;
    for (let o of eO.a ? eV : ew) {
        if (null != eH[o]) {
            if (
                eH[o].predicate({
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
                    null === (r = (l = eH[o]).metadata) || void 0 === r
                        ? void 0
                        : r.call(l, {
                              currentUser: e,
                              premiumSubscription: t,
                              selectedGuildId: i
                          });
                eB = {
                    ...ey,
                    type: o,
                    metadata: n
                };
                break;
            }
        }
    }
    null != eB && eF(eB.type) && (eB = null);
}
function eW() {
    return !ed.Z.enabled && delete eU[ev.kVF.STREAMER_MODE], eY();
}
class ez extends (i = c.ZP.Store) {
    initialize() {
        this.syncWith([e_.Z, er.Z, ee.Z, ec.Z, G.Z, eN.Z, Q.Z, $.Z, z.Z, R.Z, V.Z, K.Z], eY), this.waitFor(eI.default, eu.Z, en.Z, et.ZP, el.Z, ei.Z, ed.Z, p.Z, ec.Z, eE.Z, Y.Z, C.ZP, er.Z, eA.Z, ex.Z, eC.Z, ea.Z, eh.ZP, eR.Z, ee.Z, ef.Z, es.Z, G.Z, ep.Z, eN.Z, $.Z, L.Z, h.Z, w.Z, V.Z, K.Z);
    }
    hasNotice() {
        return null != eB && null != eB.type;
    }
    getNotice() {
        return null == eE.Z.getAction() ? eB : null;
    }
    isNoticeDismissed(e) {
        return eF(e);
    }
}
(r = 'NoticeStore'),
    (s = 'displayName') in (a = ez)
        ? Object.defineProperty(a, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = r),
    (t.Z = new ez(E.Z, {
        CURRENT_USER_UPDATE: eY,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: eY,
        CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eY,
        CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eY,
        STATUS_PAGE_SCHEDULED_MAINTENANCE: eY,
        STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eY,
        GUILD_CREATE: eY,
        GUILD_DELETE: eY,
        AUDIO_INPUT_DETECTED: eY,
        AUDIO_SET_DISPLAY_SILENCE_WARNING: eY,
        CERTIFIED_DEVICES_SET: eY,
        AUDIO_SET_INPUT_DEVICE: eY,
        AUDIO_SET_OUTPUT_DEVICE: eY,
        MEDIA_ENGINE_DEVICES: eY,
        RTC_CONNECTION_STATE: eY,
        RPC_APP_AUTHENTICATED: eY,
        RPC_APP_DISCONNECTED: eY,
        USER_CONNECTIONS_UPDATE: eY,
        WINDOW_FOCUS: eY,
        INSTANT_INVITE_CREATE: eY,
        INSTANT_INVITE_REVOKE_SUCCESS: eY,
        SPOTIFY_PLAYER_PAUSE: eY,
        RUNNING_GAMES_CHANGE: eY,
        EXPERIMENTS_FETCH_SUCCESS: eY,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eY,
        DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eY,
        DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eY,
        DEVELOPER_TEST_MODE_RESET: eY,
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: eY,
        DISPATCH_APPLICATION_INSTALL: eY,
        IMPERSONATE_STOP: eY,
        IMPERSONATE_UPDATE: eY,
        GUILD_MEMBER_ADD: function (e) {
            return e.user.id === X.default.getId() && eY();
        },
        GUILD_MEMBER_UPDATE: eY,
        SURVEY_FETCHED: eY,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eY,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eY,
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eY,
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eY,
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return (
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== X.default.getId();
                }) && eY()
            );
        },
        STREAMER_MODE_UPDATE: eW,
        RUNNING_STREAMER_TOOLS_CHANGE: eW,
        DISPATCH_APPLICATION_ERROR: function () {
            return delete eU[ev.kVF.DISPATCH_ERROR], eY();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
            return delete eU[ev.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eY();
        },
        DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
            return eY();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
            return eY();
        },
        NOTICE_SHOW: function (e) {
            eB = e.notice;
        },
        NOTICE_DISMISS: function (e) {
            return null != eB && (null == e.id || e.id === eB.id) && (eG(eB.type, e.isTemporary, e.untilAtLeast), eY());
        },
        NOTICE_DISABLE: function (e) {
            let { noticeType: t } = e;
            return eG(t), eY();
        },
        LOGOUT: function () {
            (eU = {}), (eB = null);
        },
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: eY,
        AUTO_MODERATION_MENTION_RAID_DETECTION: eY,
        CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eY,
        PROXY_BLOCKED_REQUEST: eY
    }));
