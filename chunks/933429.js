n.d(t, {
    m: function () {
        return eP;
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
    C = n(150340),
    y = n(160404),
    b = n(41776),
    L = n(347649),
    D = n(332473),
    M = n(514851),
    P = n(30684),
    U = n(616106),
    w = n(666072),
    x = n(995598),
    G = n(774276),
    k = n(518638),
    B = n(1844),
    F = n(621615),
    Z = n(417626),
    V = n(569984),
    H = n(523255),
    Y = n(768419),
    j = n(590415),
    W = n(581883),
    K = n(199902),
    z = n(314897),
    q = n(881998),
    Q = n(463395),
    X = n(592125),
    $ = n(553795),
    J = n(427123),
    ee = n(271383),
    et = n(430824),
    en = n(131951),
    er = n(292959),
    ei = n(496675),
    ea = n(571474),
    eo = n(19780),
    es = n(944486),
    el = n(914010),
    eu = n(215427),
    ec = n(246946),
    ed = n(558724),
    e_ = n(23434),
    eE = n(594174),
    ef = n(979651),
    eh = n(351402),
    ep = n(853872),
    em = n(78839),
    eI = n(295226),
    eT = n(580130),
    eg = n(695103),
    eS = n(358085),
    eA = n(74538),
    ev = n(922156),
    eN = n(436181),
    eO = n(941128),
    eR = n(981631),
    eC = n(188785),
    ey = n(474936),
    eb = n(46140),
    eL = n(231338),
    eD = n(65154);
function eM(e, t, n) {
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
let eP = {
        [eR.kVF.LOCALIZED_PRICING]: u.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
        [eR.kVF.DOWNLOAD_NAG]: u.z.NAGBAR_NOTICE_DOWNLOAD,
        [eR.kVF.CONNECT_SPOTIFY]: u.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eR.kVF.CONNECT_PLAYSTATION]: u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eR.kVF.MFA_SMS_BACKUP]: u.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: u.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eR.kVF.PREMIUM_REACTIVATE]: u.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eR.kVF.BOUNCED_EMAIL_DETECTED]: u.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: u.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: u.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eR.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR]: u.z.GUILD_ONBOARDING_UPSELL_NAGBAR,
        [eR.kVF.POMELO_ELIGIBLE]: u.z.NAGBAR_NOTICE_POMELO,
        [eR.kVF.UU_MIGRATION]: u.z.UU_MIGRATION_NOTICE,
        [eR.kVF.CHECKOUT_RECOVERY_NAGBAR]: u.z.CHECKOUT_RECOVERY_NAGBAR,
        [eR.kVF.CASH_APP_PAY_AWARENESS_NAGBAR]: u.z.CASH_APP_PAY_AWARENESS_NAGBAR
    },
    eU = {
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
        [eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice'
    },
    ew = new Set([eR.kVF.NO_INPUT_DETECTED, eR.kVF.STREAMER_MODE, eR.kVF.VIDEO_UNSUPPORTED_BROWSER, eR.kVF.SPOTIFY_AUTO_PAUSED, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.kVF.BLOCKED_BY_PROXY]),
    ex = {},
    eG = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    ek = null;
function eB(e) {
    return eU[e] + '-untilAtLeast';
}
function eF(e) {
    let t = c.K.get(eB(e));
    return null != t ? o()(t) : null;
}
function eZ(e, t) {
    c.K.set(eB(e), t.format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
}
function eV(e) {
    c.K.remove(eB(e));
}
function eH(e, t, n) {
    if (null == e) return;
    let r = eU[e];
    null != r && !t && c.K.set(r, !0), ew.has(e) && (ex[e] = !0), null != n && null != r ? eZ(e, n) : eV(e);
}
function eY(e) {
    let { enabled: t } = G.cI.getCurrentConfig(
        { location: 'NoticeStore_isNoticeDismissed' },
        {
            autoTrackExposure: !0,
            disable: e !== eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING
        }
    );
    return t ? null : eP[e];
}
function ej(e) {
    if (null == e) return !1;
    let t = eY(e);
    if (null != t) return (0, m.un)(t);
    let n = eU[e];
    if (null != n) {
        let t = eF(e);
        if (null != t) return null == t ? void 0 : t.isAfter(o()());
    }
    let r = ex[e];
    return !!r || (null != n && '' !== n ? c.K.get(n) : !!ew.has(e) && r);
}
let eW = [eR.kVF.QUARANTINED, eR.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eR.kVF.VIEWING_ROLES, eR.kVF.INVITED_TO_SPEAK, eR.kVF.LURKING_GUILD, eR.kVF.VOICE_DISABLED, eR.kVF.NO_INPUT_DETECTED, eR.kVF.HARDWARE_MUTE, eR.kVF.H264_DISABLED, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.kVF.SPOTIFY_AUTO_PAUSED, eR.kVF.WIN32_DEPRECATED_MESSAGE, eR.kVF.WIN7_8_DEPRECATED_MESSAGE, eR.kVF.MACOS_17_18_DEPRECATED_MESSAGE, eR.kVF.BLOCKED_BY_PROXY, eR.kVF.VOICE_CONNECTED_LAST_SESSION, eR.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, eR.kVF.GUILD_RAID_NOTIFICATION, eR.kVF.QUESTS_PROGRESS_INTERRUPTION, eR.kVF.UNCLAIMED_ACCOUNT, eR.kVF.POMELO_ELIGIBLE, eR.kVF.PENDING_MEMBER, eR.kVF.CASH_APP_PAY_AWARENESS_NAGBAR, eR.kVF.CHECKOUT_RECOVERY_NAGBAR, eR.kVF.OUTBOUND_PROMOTION, eR.kVF.CORRUPT_INSTALLATION, eR.kVF.VIDEO_UNSUPPORTED_BROWSER, eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eR.kVF.STREAMER_MODE, eR.kVF.SCHEDULED_MAINTENANCE, eR.kVF.BOUNCED_EMAIL_DETECTED, eR.kVF.UNVERIFIED_ACCOUNT, eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING, eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING, eR.kVF.PREMIUM_UNCANCEL, eR.kVF.PREMIUM_MISSING_PAYMENT, eR.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, eR.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, eR.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eR.kVF.PREMIUM_REACTIVATE, eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION, eR.kVF.MFA_SMS_BACKUP, eR.kVF.APPLICATION_TEST_MODE, eR.kVF.LOCALIZED_PRICING, eR.kVF.DOWNLOAD_NAG, eR.kVF.CONNECT_SPOTIFY, eR.kVF.CONNECT_PLAYSTATION, eR.kVF.SURVEY, eR.kVF.SERVER_USAGE_SURVEY, eR.kVF.SAFETY_USER_SENTIMENT_NAGBAR, eR.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR, eR.kVF.UU_MIGRATION],
    eK = [eR.kVF.QUARANTINED, eR.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eR.kVF.VIEWING_ROLES, eR.kVF.INVITED_TO_SPEAK, eR.kVF.LURKING_GUILD, eR.kVF.VOICE_DISABLED, eR.kVF.NO_INPUT_DETECTED, eR.kVF.HARDWARE_MUTE, eR.kVF.H264_DISABLED, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.kVF.SPOTIFY_AUTO_PAUSED, eR.kVF.BLOCKED_BY_PROXY, eR.kVF.VOICE_CONNECTED_LAST_SESSION, eR.kVF.PENDING_MEMBER, eR.kVF.STREAMER_MODE, eR.kVF.SCHEDULED_MAINTENANCE],
    ez = {
        [eR.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, v.g)().show && !ej(eR.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: o()().add(3, 'hours').toDate() })
        },
        [eR.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let r = ee.ZP.getMember(n, t.id);
                return null != r && !r.isPending && (0, O.EY)(r);
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
                return y.Z.isViewingRoles(t);
            }
        },
        [eR.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, j.gf)(t) === j.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [eR.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && b.Z.isLurking(t);
            }
        },
        [eR.kVF.VOICE_DISABLED]: { predicate: () => null != eo.Z.getRemoteDisconnectVoiceChannelId() },
        [eR.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eo.Z.getLastSessionVoiceChannelId() },
        [eR.kVF.NO_INPUT_DETECTED]: {
            predicate: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    r = X.Z.getChannel(t),
                    i = (null == r ? void 0 : r.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
                return !1 === en.Z.getInputDetected() && !i;
            }
        },
        [eR.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = X.Z.getChannel(t);
                return !en.Z.getOpenH264() && null != t && ef.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [eR.kVF.HARDWARE_MUTE]: {
            predicate: () => eo.Z.isConnected() && en.Z.isHardwareMute() && en.Z.isEnableHardwareMuteNotice(),
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
            predicate: () => null != ev.Z.getLastError(),
            metadata: () => ({ error: ev.Z.getLastError() })
        },
        [eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eN.Z.getLastProgress(),
            metadata: () => eN.Z.getLastProgress()
        },
        [eR.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => Y.Z.wasAutoPaused() },
        [eR.kVF.BLOCKED_BY_PROXY]: { predicate: () => !ej(eR.kVF.BLOCKED_BY_PROXY) && Z.Z.blockedByProxy && F.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [eR.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [eR.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, r;
                let { selectedGuildId: i, currentUser: a } = e;
                return null !== (r = null != i && null != a && !(null === (t = et.Z.getGuild(i)) || void 0 === t ? void 0 : t.hasFeature(eR.oNc.GUILD_ONBOARDING)) && (null === (n = ee.ZP.getMember(i, a.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== r && r;
            }
        },
        [eR.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, k.tq)() },
        [eR.kVF.CORRUPT_INSTALLATION]: { predicate: () => eS.isPlatformEmbedded && (!l.Z.supported() || eO.Z.isCorruptInstallation()) },
        [eR.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && ef.Z.hasVideo(t) && !en.Z.supports(eD.AN.VIDEO) && !ej(eR.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eA.ZP.canRedeemPremiumPerks(t) && J.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !ej(eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && J.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eR.kVF.STREAMER_MODE]: { predicate: () => ec.Z.enabled },
        [eR.kVF.DOWNLOAD_NAG]: { predicate: () => !eS.isPlatformEmbedded && !ej(eR.kVF.DOWNLOAD_NAG) },
        [eR.kVF.SCHEDULED_MAINTENANCE]: {
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
        [eR.kVF.SURVEY]: {
            predicate: () => null != ed.Z.getCurrentSurvey(),
            metadata: () => ed.Z.getCurrentSurvey()
        },
        [eR.kVF.SERVER_USAGE_SURVEY]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && A.Z.getCurrentConfig({ location: 'notice_store' }).showSurvey && !ej(eR.kVF.SERVER_USAGE_SURVEY);
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
        [eR.kVF.CONNECT_SPOTIFY]: { predicate: () => !Y.Z.hasConnectedAccount() && T.ZP.isObservedAppRunning(E.Z.get(eR.ABu.SPOTIFY).name) && !ej(eR.kVF.CONNECT_SPOTIFY) },
        [eR.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === _.Z || void 0 === _.Z ? void 0 : _.Z.os.arch) === 'ia32' && (null === _.Z || void 0 === _.Z ? void 0 : _.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [eR.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === _.Z || void 0 === _.Z ? void 0 : _.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === _.Z || void 0 === _.Z ? void 0 : _.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [eR.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === _.Z || void 0 === _.Z ? void 0 : _.Z.process.platform) === 'darwin')
                    try {
                        return 19 > parseInt(null === _.Z || void 0 === _.Z ? void 0 : _.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [eR.kVF.CONNECT_PLAYSTATION]: { predicate: () => $.Z.isSuggestedAccountType(eR.ABu.PLAYSTATION) && null == $.Z.getAccount(null, eR.ABu.PLAYSTATION) && !ej(eR.kVF.CONNECT_PLAYSTATION) },
        [eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eI.Z.getAlmostExpiringTrialOffers([ey.Si.TIER_2]).length > 0 && !ej(eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eI.Z.getAlmostExpiringTrialOffers([ey.Si.TIER_0]).length > 0 && !ej(eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [eR.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    i = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eR.O0b.CANCELED && 1 >= o()().diff(o()(t.canceledAt), 'days'),
                    a = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    s = null != t && t.status === eR.O0b.CANCELED && !a && r <= 7 && r >= 0 && (0, eA.M5)(n, ey.p9.TIER_2) && !i && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ej(eR.kVF.PREMIUM_UNCANCEL) && s;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    i = null != n ? (null === (t = (0, eA.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? eA.ZP.getPremiumType(i) : null,
                    premiumSubscription: n
                };
            }
        },
        [eR.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    i = (null != t ? o()(t.currentPeriodEnd).diff(o()(t.currentPeriodStart).startOf('day'), 'days') : 0) > 14 ? 7 : 2,
                    a = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    s = eT.Z.applicationIdsFetched.has(ey.CL),
                    l = eT.Z.getForApplication(ey.CL),
                    u = null != t ? (0, eA.Af)(t) : null,
                    c = null != u ? eA.ZP.getSkuIdForPlan(u.planId) : null,
                    d =
                        null != l &&
                        null != u &&
                        Array.from(l).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === c;
                        }).length > 0,
                    _ = null != t && r <= i && r >= 0 && t.status !== eR.O0b.PAST_DUE && !a && s && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ej(eR.kVF.PREMIUM_MISSING_PAYMENT) && _;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    i = null != n ? (null === (t = (0, eA.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? eA.ZP.getPremiumType(i) : null,
                    premiumSubscription: n
                };
            }
        },
        [eR.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && null != t.paymentSourceId ? ep.Z.getPaymentSource(t.paymentSourceId) : null,
                    i = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    a = null != t && t.status === eR.O0b.PAST_DUE && !i && null != r && r.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ej(eR.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && a;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eR.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    i = null != t && t.status === eR.O0b.PAST_DUE && !r && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ej(eR.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eR.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(eR.xW$.MFA_SMS) && !t.hasFlag(eR.xW$.STAFF) && !t.hasFlag(eR.xW$.PARTNER) && !ej(eR.kVF.MFA_SMS_BACKUP);
            }
        },
        [eR.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eg.Z.testModeApplicationId,
            metadata: () => {
                if (null == eg.Z.testModeApplicationId) return {};
                let e = eg.Z.testModeApplicationId,
                    t = f.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [eR.kVF.PREMIUM_REACTIVATE]: { predicate: () => !ej(eR.kVF.PREMIUM_REACTIVATE) && U.Z.shouldShowReactivateNotice() },
        [eR.kVF.LOCALIZED_PRICING]: {
            predicate: (e) => {
                let { isLocalizedPromoEnabled: t } = e;
                return !ej(eR.kVF.LOCALIZED_PRICING) && t;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eR.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    i = null != t && null != t.paymentSourceId ? ep.Z.getPaymentSource(t.paymentSourceId) : null,
                    a = null != i && eL.Uk.has(i.type),
                    s = null != t && t.status === eR.O0b.PAST_DUE && !r && a && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ej(eR.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && s;
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
                        dismissUntil: (0, eA.lY)(t).expiresDate.toDate()
                    };
                }
            }
        },
        [eR.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, D.e)() && !ej(eR.kVF.POMELO_ELIGIBLE) && !(0, L.ov)() },
        [eR.kVF.UU_MIGRATION]: { predicate: () => (0, D.e)() && !ej(eR.kVF.UU_MIGRATION) && (0, L.ov)() },
        [eR.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? et.Z.getGuild(t) : null;
                return (null != t && null != R.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eR.oNc.COMMUNITY)) && !ej(eR.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
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
        [eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !ej(eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== p.Z.getEligibleGuildsForNagActivate().length && (0, h.Lm)() },
        [eR.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return !ej(eR.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, C.S)(t, u.z.GUILD_ONBOARDING_UPSELL_NAGBAR);
            }
        },
        [eR.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return H.SI(t);
            }
        },
        [eR.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = K.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, S.V9)(e),
                    n = V.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eb.Ot;
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
                    r = null !== (t = ep.Z.paymentSources) && void 0 !== t ? t : {};
                return P.Z.getIsTargeted() && !(0, eA.I5)(n) && 0 !== Object.keys(r).length && (0, x.Y)();
            }
        },
        [eR.kVF.CASH_APP_PAY_AWARENESS_NAGBAR]: {
            predicate: () => {
                let e = M.Z.getForCampaign(eR.$Dd.CASH_APP_PAY_AWARENESS);
                return null != e && !0 === e.is_eligible && (0, w.j)();
            }
        }
    };
function eq() {
    if (!g.Z.isConnected()) return !1;
    ek = null;
    let e = eE.default.getCurrentUser();
    if (null == e) return !1;
    let t = em.ZP.getPremiumSubscription(),
        n = eh.Z.isLocalizedPromoEnabled,
        r = el.Z.getGuildId(),
        i = es.Z.getVoiceChannelId(),
        a = null != i ? ef.Z.getVoiceStateForChannel(i) : null;
    for (let l of eC.a ? eK : eW) {
        if (null != ez[l]) {
            if (
                ez[l].predicate({
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
                    null === (o = (s = ez[l]).metadata) || void 0 === o
                        ? void 0
                        : o.call(s, {
                              currentUser: e,
                              premiumSubscription: t,
                              selectedGuildId: r
                          });
                ek = {
                    ...eG,
                    type: l,
                    metadata: n
                };
                break;
            }
        }
    }
    null != ek && ej(ek.type) && (ek = null);
}
function eQ(e) {
    let { voiceStates: t } = e;
    return (
        t.some((e) => {
            let { userId: t } = e;
            return t !== z.default.getId();
        }) && eq()
    );
}
function eX(e) {
    ek = e.notice;
}
function e$(e) {
    return null != ek && (null == e.id || e.id === ek.id) && (eH(ek.type, e.isTemporary, e.untilAtLeast), eq());
}
function eJ(e) {
    let { noticeType: t } = e;
    return eH(t), eq();
}
function e0() {
    return !ec.Z.enabled && delete ex[eR.kVF.STREAMER_MODE], eq();
}
function e1() {
    return delete ex[eR.kVF.DISPATCH_ERROR], eq();
}
function e2() {
    return delete ex[eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eq();
}
function e3() {
    return eq();
}
function e4() {
    return eq();
}
function e5(e) {
    return e.user.id === z.default.getId() && eq();
}
function e6() {
    (ex = {}), (ek = null);
}
class e7 extends (r = s.ZP.Store) {
    initialize() {
        this.syncWith([ed.Z, ea.Z, J.Z, el.Z, B.Z, eI.Z, q.Z, $.Z, W.Z, N.Z, V.Z, K.Z], eq), this.waitFor(eE.default, eu.Z, et.Z, ee.ZP, eo.Z, en.Z, ec.Z, I.Z, el.Z, e_.Z, Y.Z, T.ZP, ea.Z, ev.Z, eN.Z, eg.Z, er.Z, em.ZP, eO.Z, J.Z, ep.Z, ei.Z, B.Z, eT.Z, eI.Z, $.Z, b.Z, p.Z, Z.Z, V.Z, K.Z);
    }
    hasNotice() {
        return null != ek && null != ek.type;
    }
    getNotice() {
        return null == e_.Z.getAction() ? ek : null;
    }
    isNoticeDismissed(e) {
        return ej(e);
    }
}
eM(e7, 'displayName', 'NoticeStore'),
    (t.Z = new e7(d.Z, {
        CURRENT_USER_UPDATE: eq,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: eq,
        CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eq,
        CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eq,
        STATUS_PAGE_SCHEDULED_MAINTENANCE: eq,
        STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eq,
        GUILD_CREATE: eq,
        GUILD_DELETE: eq,
        AUDIO_INPUT_DETECTED: eq,
        AUDIO_SET_DISPLAY_SILENCE_WARNING: eq,
        CERTIFIED_DEVICES_SET: eq,
        AUDIO_SET_INPUT_DEVICE: eq,
        AUDIO_SET_OUTPUT_DEVICE: eq,
        MEDIA_ENGINE_DEVICES: eq,
        RTC_CONNECTION_STATE: eq,
        RPC_APP_AUTHENTICATED: eq,
        RPC_APP_DISCONNECTED: eq,
        USER_CONNECTIONS_UPDATE: eq,
        WINDOW_FOCUS: eq,
        INSTANT_INVITE_CREATE: eq,
        INSTANT_INVITE_REVOKE_SUCCESS: eq,
        SPOTIFY_PLAYER_PAUSE: eq,
        RUNNING_GAMES_CHANGE: eq,
        EXPERIMENTS_FETCH_SUCCESS: eq,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eq,
        DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eq,
        DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eq,
        DEVELOPER_TEST_MODE_RESET: eq,
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: eq,
        DISPATCH_APPLICATION_INSTALL: eq,
        IMPERSONATE_STOP: eq,
        IMPERSONATE_UPDATE: eq,
        GUILD_MEMBER_ADD: e5,
        GUILD_MEMBER_UPDATE: eq,
        SURVEY_FETCHED: eq,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eq,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eq,
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eq,
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eq,
        VOICE_STATE_UPDATES: eQ,
        STREAMER_MODE_UPDATE: e0,
        RUNNING_STREAMER_TOOLS_CHANGE: e0,
        DISPATCH_APPLICATION_ERROR: e1,
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: e2,
        DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: e3,
        DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: e4,
        NOTICE_SHOW: eX,
        NOTICE_DISMISS: e$,
        NOTICE_DISABLE: eJ,
        LOGOUT: e6,
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: eq,
        AUTO_MODERATION_MENTION_RAID_DETECTION: eq,
        CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eq,
        PROXY_BLOCKED_REQUEST: eq
    }));
