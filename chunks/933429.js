"use strict";
n.r(t), n.d(t, {
  typeToDismissibleContent: function() {
    return eU
  }
}), n("47120");
var s, a, l, i, r = n("913527"),
  o = n.n(r),
  u = n("442837"),
  d = n("743426"),
  c = n("704215"),
  f = n("433517"),
  E = n("570140"),
  _ = n("579806"),
  m = n("726542"),
  T = n("812206"),
  I = n("223892"),
  p = n("674525"),
  h = n("605236"),
  N = n("524347"),
  S = n("853197"),
  C = n("353926"),
  g = n("594190"),
  A = n("38618"),
  M = n("569545"),
  R = n("615365"),
  v = n("528011"),
  O = n("487419"),
  x = n("715903"),
  L = n("223606"),
  D = n("150340"),
  P = n("160404"),
  y = n("41776"),
  U = n("347649"),
  j = n("332473"),
  b = n("30684"),
  F = n("616106"),
  B = n("774276"),
  G = n("518638"),
  k = n("1844"),
  w = n("621615"),
  H = n("417626"),
  V = n("569984"),
  Y = n("523255"),
  K = n("768419"),
  W = n("590415"),
  z = n("581883"),
  Q = n("199902"),
  q = n("314897"),
  X = n("881998"),
  Z = n("463395"),
  J = n("592125"),
  $ = n("553795"),
  ee = n("427123"),
  et = n("271383"),
  en = n("430824"),
  es = n("131951"),
  ea = n("292959"),
  el = n("496675"),
  ei = n("571474"),
  er = n("19780"),
  eo = n("944486"),
  eu = n("914010"),
  ed = n("215427"),
  ec = n("246946"),
  ef = n("558724"),
  eE = n("23434"),
  e_ = n("594174"),
  em = n("979651"),
  eT = n("351402"),
  eI = n("853872"),
  ep = n("78839"),
  eh = n("295226"),
  eN = n("580130"),
  eS = n("695103"),
  eC = n("358085"),
  eg = n("74538"),
  eA = n("922156"),
  eM = n("436181"),
  eR = n("941128"),
  ev = n("981631"),
  eO = n("188785"),
  ex = n("702512"),
  eL = n("474936"),
  eD = n("46140"),
  eP = n("231338"),
  ey = n("65154");
let eU = {
    [ev.NoticeTypes.LOCALIZED_PRICING]: c.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING,
    [ev.NoticeTypes.DOWNLOAD_NAG]: c.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD,
    [ev.NoticeTypes.CONNECT_SPOTIFY]: c.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY,
    [ev.NoticeTypes.CONNECT_PLAYSTATION]: c.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
    [ev.NoticeTypes.MFA_SMS_BACKUP]: c.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP,
    [ev.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: c.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
    [ev.NoticeTypes.PREMIUM_REACTIVATE]: c.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
    [ev.NoticeTypes.DROPS_GO_LIVE_BANNER]: c.DismissibleContent.QUEST_2_GO_LIVE_BANNER,
    [ev.NoticeTypes.DROPS_ENDED_INCOMPLETE]: c.DismissibleContent.QUEST_2_ENDED_INCOMPLETE,
    [ev.NoticeTypes.BOUNCED_EMAIL_DETECTED]: c.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE,
    [ev.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: c.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
    [ev.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: c.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
    [ev.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: c.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR,
    [ev.NoticeTypes.POMELO_ELIGIBLE]: c.DismissibleContent.NAGBAR_NOTICE_POMELO,
    [ev.NoticeTypes.UU_MIGRATION]: c.DismissibleContent.UU_MIGRATION_NOTICE,
    [ev.NoticeTypes.CHECKOUT_RECOVERY_NAGBAR]: c.DismissibleContent.CHECKOUT_RECOVERY_NAGBAR
  },
  ej = {
    [ev.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
    [ev.NoticeTypes.PREMIUM_UNCANCEL]: "hideUncancelReminder",
    [ev.NoticeTypes.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
    [ev.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
    [ev.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
    [ev.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
    [ev.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
    [ev.NoticeTypes.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
    [ev.NoticeTypes.SERVER_USAGE_SURVEY]: "hideServerUsageSurvey",
    [ev.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
    [ev.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
    [ev.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE]: "hideMacOS17_18DeprecationMessageNotice",
    [ev.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice"
  },
  eb = new Set([ev.NoticeTypes.NO_INPUT_DETECTED, ev.NoticeTypes.STREAMER_MODE, ev.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, ev.NoticeTypes.SPOTIFY_AUTO_PAUSED, ev.NoticeTypes.DISPATCH_ERROR, ev.NoticeTypes.DISPATCH_ERROR, ev.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, ev.NoticeTypes.BLOCKED_BY_PROXY]),
  eF = {},
  eB = Object.freeze({
    id: null,
    message: null,
    buttonText: null,
    callback: void 0,
    metadata: null
  }),
  eG = null;

function ek(e) {
  return ej[e] + "-untilAtLeast"
}

function ew(e, t, n) {
  var s, a, l;
  if (null == e) return;
  let i = ej[e];
  if (null != i && !t && f.Storage.set(i, !0), eb.has(e) && (eF[e] = !0), null != n && null != i) {
    ;
    s = e, a = n, f.Storage.set(ek(s), a.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
  } else {
    ;
    l = e, f.Storage.remove(ek(l))
  }
}

function eH(e) {
  if (null == e) return !1;
  let t = function(e) {
    let {
      enabled: t
    } = B.PremiumTier2TrialOfferNoticeExperiment.getCurrentConfig({
      location: "NoticeStore_isNoticeDismissed"
    }, {
      autoTrackExposure: !0,
      disable: e !== ev.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING
    });
    return t ? null : eU[e]
  }(e);
  if (null != t) return (0, h.isDismissibleContentDismissed)(t);
  let n = ej[e];
  if (null != n) {
    let t = function(e) {
      let t = f.Storage.get(ek(e));
      return null != t ? o()(t) : null
    }(e);
    if (null != t) return null == t ? void 0 : t.isAfter(o()())
  }
  let s = eF[e];
  return !!s || (null != n && "" !== n ? f.Storage.get(n) : !!eb.has(e) && s)
}
let eV = [ev.NoticeTypes.QUARANTINED, ev.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, ev.NoticeTypes.VIEWING_ROLES, ev.NoticeTypes.INVITED_TO_SPEAK, ev.NoticeTypes.LURKING_GUILD, ev.NoticeTypes.VOICE_DISABLED, ev.NoticeTypes.NO_INPUT_DETECTED, ev.NoticeTypes.HARDWARE_MUTE, ev.NoticeTypes.H264_DISABLED, ev.NoticeTypes.DISPATCH_ERROR, ev.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, ev.NoticeTypes.SPOTIFY_AUTO_PAUSED, ev.NoticeTypes.DROPS_PROGRESS_INTERRUPTION, ev.NoticeTypes.WIN32_DEPRECATED_MESSAGE, ev.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE, ev.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE, ev.NoticeTypes.BLOCKED_BY_PROXY, ev.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, ev.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION, ev.NoticeTypes.GUILD_RAID_NOTIFICATION, ev.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION, ev.NoticeTypes.UNCLAIMED_ACCOUNT, ev.NoticeTypes.POMELO_ELIGIBLE, ev.NoticeTypes.PENDING_MEMBER, ev.NoticeTypes.OUTBOUND_PROMOTION, ev.NoticeTypes.CORRUPT_INSTALLATION, ev.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, ev.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK, ev.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, ev.NoticeTypes.STREAMER_MODE, ev.NoticeTypes.SCHEDULED_MAINTENANCE, ev.NoticeTypes.BOUNCED_EMAIL_DETECTED, ev.NoticeTypes.UNVERIFIED_ACCOUNT, ev.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING, ev.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING, ev.NoticeTypes.PREMIUM_UNCANCEL, ev.NoticeTypes.PREMIUM_MISSING_PAYMENT, ev.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT, ev.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT, ev.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, ev.NoticeTypes.PREMIUM_REACTIVATE, ev.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION, ev.NoticeTypes.MFA_SMS_BACKUP, ev.NoticeTypes.APPLICATION_TEST_MODE, ev.NoticeTypes.LOCALIZED_PRICING, ev.NoticeTypes.DOWNLOAD_NAG, ev.NoticeTypes.CONNECT_SPOTIFY, ev.NoticeTypes.CONNECT_PLAYSTATION, ev.NoticeTypes.SURVEY, ev.NoticeTypes.SERVER_USAGE_SURVEY, ev.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR, ev.NoticeTypes.DROPS_GO_LIVE_BANNER, ev.NoticeTypes.DROPS_ENDED_INCOMPLETE, ev.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR, ev.NoticeTypes.UU_MIGRATION, ev.NoticeTypes.CHECKOUT_RECOVERY_NAGBAR],
  eY = [ev.NoticeTypes.QUARANTINED, ev.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, ev.NoticeTypes.VIEWING_ROLES, ev.NoticeTypes.INVITED_TO_SPEAK, ev.NoticeTypes.LURKING_GUILD, ev.NoticeTypes.VOICE_DISABLED, ev.NoticeTypes.NO_INPUT_DETECTED, ev.NoticeTypes.HARDWARE_MUTE, ev.NoticeTypes.H264_DISABLED, ev.NoticeTypes.DISPATCH_ERROR, ev.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, ev.NoticeTypes.SPOTIFY_AUTO_PAUSED, ev.NoticeTypes.BLOCKED_BY_PROXY, ev.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, ev.NoticeTypes.PENDING_MEMBER, ev.NoticeTypes.STREAMER_MODE, ev.NoticeTypes.SCHEDULED_MAINTENANCE],
  eK = {
    [ev.NoticeTypes.GUILD_RAID_NOTIFICATION]: {
      predicate: () => (0, v.shouldShowRaidNotificationNagbar)().show && !eH(ev.NoticeTypes.GUILD_RAID_NOTIFICATION),
      metadata: () => ({
        dismissUntil: o()().add(3, "hours").toDate()
      })
    },
    [ev.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE]: {
      predicate: e => {
        let {
          currentUser: t,
          selectedGuildId: n
        } = e;
        if (null == n) return !1;
        let s = et.default.getMember(n, t.id);
        return null != s && !s.isPending && (0, x.hasAutomodQuarantinedProfile)(s)
      }
    },
    [ev.NoticeTypes.QUARANTINED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return t.hasFlag(ev.UserFlags.QUARANTINED)
      }
    },
    [ev.NoticeTypes.VIEWING_ROLES]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return P.default.isViewingRoles(t)
      }
    },
    [ev.NoticeTypes.INVITED_TO_SPEAK]: {
      predicate: e => {
        let {
          voiceState: t
        } = e;
        return (0, W.getAudienceRequestToSpeakState)(t) === W.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
      }
    },
    [ev.NoticeTypes.LURKING_GUILD]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && y.default.isLurking(t)
      }
    },
    [ev.NoticeTypes.VOICE_DISABLED]: {
      predicate: () => null != er.default.getRemoteDisconnectVoiceChannelId()
    },
    [ev.NoticeTypes.VOICE_CONNECTED_LAST_SESSION]: {
      predicate: () => null != er.default.getLastSessionVoiceChannelId()
    },
    [ev.NoticeTypes.NO_INPUT_DETECTED]: {
      predicate: e => {
        let {
          voiceChannelId: t,
          voiceState: n
        } = e, s = J.default.getChannel(t), a = (null == s ? void 0 : s.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
        return !1 === es.default.getInputDetected() && !a
      }
    },
    [ev.NoticeTypes.H264_DISABLED]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e, n = J.default.getChannel(t);
        return !es.default.getOpenH264() && null != t && em.default.hasVideo(t) && null != n && n.isGuildStageVoice()
      }
    },
    [ev.NoticeTypes.HARDWARE_MUTE]: {
      predicate: () => er.default.isConnected() && es.default.isHardwareMute(),
      metadata: () => {
        let e = es.default.getInputDeviceId(),
          t = Z.default.getVendor(e),
          n = Z.default.getModel(e);
        if (null != t && null != n) return {
          vendor: t,
          model: n
        }
      }
    },
    [ev.NoticeTypes.DISPATCH_ERROR]: {
      predicate: () => null != eA.default.getLastError(),
      metadata: () => ({
        error: eA.default.getLastError()
      })
    },
    [ev.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
      predicate: () => null != eM.default.getLastProgress(),
      metadata: () => eM.default.getLastProgress()
    },
    [ev.NoticeTypes.SPOTIFY_AUTO_PAUSED]: {
      predicate: () => K.default.wasAutoPaused()
    },
    [ev.NoticeTypes.BLOCKED_BY_PROXY]: {
      predicate: () => !eH(ev.NoticeTypes.BLOCKED_BY_PROXY) && H.default.blockedByProxy && w.default.getCurrentConfig({
        location: "notice_store"
      }).eligibleForNotice
    },
    [ev.NoticeTypes.UNCLAIMED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && !t.isClaimed()
      }
    },
    [ev.NoticeTypes.PENDING_MEMBER]: {
      predicate: e => {
        var t, n, s;
        let {
          selectedGuildId: a,
          currentUser: l
        } = e;
        return null !== (s = null != a && null != l && !(null === (t = en.default.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(ev.GuildFeatures.GUILD_ONBOARDING)) && (null === (n = et.default.getMember(a, l.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== s && s
      }
    },
    [ev.NoticeTypes.OUTBOUND_PROMOTION]: {
      predicate: () => (0, G.shouldShowOutboundPromotionNotice)()
    },
    [ev.NoticeTypes.CORRUPT_INSTALLATION]: {
      predicate: () => eC.isPlatformEmbedded && (!d.default.supported() || eR.default.isCorruptInstallation())
    },
    [ev.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e;
        return null != t && em.default.hasVideo(t) && !es.default.supports(ey.Features.VIDEO) && !eH(ev.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER)
      }
    },
    [ev.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return eg.default.canRedeemPremiumPerks(t) && ee.default.getDetectedOffPlatformPremiumPerks().length > 0
      },
      metadata: () => ee.default.getDetectedOffPlatformPremiumPerks()[0]
    },
    [ev.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
      predicate: () => !eH(ev.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && ee.default.getDetectedOffPlatformPremiumPerks().length > 0,
      metadata: () => ee.default.getDetectedOffPlatformPremiumPerks()[0]
    },
    [ev.NoticeTypes.STREAMER_MODE]: {
      predicate: () => ec.default.enabled
    },
    [ev.NoticeTypes.DOWNLOAD_NAG]: {
      predicate: () => !eC.isPlatformEmbedded && !eH(ev.NoticeTypes.DOWNLOAD_NAG)
    },
    [ev.NoticeTypes.SCHEDULED_MAINTENANCE]: {
      predicate: () => null != ed.default.getScheduledMaintenance(),
      metadata: () => {
        let e = ed.default.getScheduledMaintenance();
        if (null != e) return {
          id: e.id,
          start: new Date(e.scheduled_for),
          end: new Date(e.scheduled_until)
        }
      }
    },
    [ev.NoticeTypes.SURVEY]: {
      predicate: () => null != ef.default.getCurrentSurvey(),
      metadata: () => ef.default.getCurrentSurvey()
    },
    [ev.NoticeTypes.SERVER_USAGE_SURVEY]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && R.default.getCurrentConfig({
          location: "notice_store"
        }).showSurvey && !eH(ev.NoticeTypes.SERVER_USAGE_SURVEY)
      },
      metadata: e => {
        let {
          selectedGuildId: t,
          currentUser: n
        } = e;
        return {
          selectedGuildId: t,
          currentUser: n
        }
      }
    },
    [ev.NoticeTypes.UNVERIFIED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return (null == t ? void 0 : t.email) != null && !t.verified
      }
    },
    [ev.NoticeTypes.BOUNCED_EMAIL_DETECTED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null == t ? void 0 : t.hasBouncedEmail
      }
    },
    [ev.NoticeTypes.CONNECT_SPOTIFY]: {
      predicate: () => !K.default.hasConnectedAccount() && g.default.isObservedAppRunning(m.default.get(ev.PlatformTypes.SPOTIFY).name) && !eH(ev.NoticeTypes.CONNECT_SPOTIFY)
    },
    [ev.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: {
      predicate: () => (null === _.default || void 0 === _.default ? void 0 : _.default.os.arch) === "ia32" && (null === _.default || void 0 === _.default ? void 0 : _.default.process.platform) === "win32",
      metadata: () => ({
        dismissUntil: o()().add(5, "days").toDate()
      })
    },
    [ev.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE]: {
      predicate: () => {
        if ((null === _.default || void 0 === _.default ? void 0 : _.default.process.platform) === "win32") try {
          return 10 > parseInt(null === _.default || void 0 === _.default ? void 0 : _.default.os.release.split(".")[0])
        } catch (e) {}
        return !1
      },
      metadata: () => ({
        dismissUntil: o()().add(5, "days").toDate()
      })
    },
    [ev.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE]: {
      predicate: () => {
        if ((null === _.default || void 0 === _.default ? void 0 : _.default.process.platform) === "darwin") try {
          return 19 > parseInt(null === _.default || void 0 === _.default ? void 0 : _.default.os.release.split(".")[0])
        } catch (e) {}
        return !1
      },
      metadata: () => ({
        dismissUntil: o()().add(5, "days").toDate()
      })
    },
    [ev.NoticeTypes.CONNECT_PLAYSTATION]: {
      predicate: () => $.default.isSuggestedAccountType(ev.PlatformTypes.PLAYSTATION) && null == $.default.getAccount(null, ev.PlatformTypes.PLAYSTATION) && !eH(ev.NoticeTypes.CONNECT_PLAYSTATION)
    },
    [ev.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: {
      predicate: () => eh.default.getAlmostExpiringTrialOffers([eL.PremiumSubscriptionSKUs.TIER_2]).length > 0 && !eH(ev.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)
    },
    [ev.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: {
      predicate: () => eh.default.getAlmostExpiringTrialOffers([eL.PremiumSubscriptionSKUs.TIER_0]).length > 0 && !eH(ev.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)
    },
    [ev.NoticeTypes.PREMIUM_UNCANCEL]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === ev.SubscriptionStatusTypes.CANCELED && 1 >= o()().diff(o()(t.canceledAt), "days"), l = null != t && o()(t.currentPeriodEnd).isBefore(o()()), i = null != t && t.status === ev.SubscriptionStatusTypes.CANCELED && !l && s <= 7 && s >= 0 && (0, eg.isPremiumExactly)(n, eL.PremiumTypes.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(ev.NoticeTypes.PREMIUM_UNCANCEL) && i
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eg.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null;
        return {
          daysLeft: s,
          premiumType: null != a ? eg.default.getPremiumType(a) : null,
          premiumSubscription: n
        }
      }
    },
    [ev.NoticeTypes.PREMIUM_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = null != t ? o()(t.currentPeriodEnd).diff(o()(t.currentPeriodStart).startOf("day"), "days") : 0, l = null != t && o()(t.currentPeriodEnd).isBefore(o()()), i = eN.default.applicationIdsFetched.has(eL.PREMIUM_SUBSCRIPTION_APPLICATION), r = eN.default.getForApplication(eL.PREMIUM_SUBSCRIPTION_APPLICATION), u = null != t ? (0, eg.getPremiumPlanItem)(t) : null, d = null != u ? eg.default.getSkuIdForPlan(u.planId) : null, c = null != r && null != u && Array.from(r).filter(e => {
          let {
            skuId: t,
            consumed: n
          } = e;
          return !n && t === d
        }).length > 0, f = null != t && s <= (a > 14 ? 7 : 2) && s >= 0 && t.status !== ev.SubscriptionStatusTypes.PAST_DUE && !l && i && !c && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(ev.NoticeTypes.PREMIUM_MISSING_PAYMENT) && f
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eg.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null;
        return {
          daysLeft: s,
          premiumType: null != a ? eg.default.getPremiumType(a) : null,
          premiumSubscription: n
        }
      }
    },
    [ev.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && null != t.paymentSourceId ? eI.default.getPaymentSource(t.paymentSourceId) : null, a = null != t && o()(t.currentPeriodEnd).isBefore(o()()), l = null != t && t.status === ev.SubscriptionStatusTypes.PAST_DUE && !a && null != s && s.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(ev.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT) && l
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e;
        return {
          premiumSubscription: t
        }
      }
    },
    [ev.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && o()(t.currentPeriodEnd).isBefore(o()()), a = null != t && t.status === ev.SubscriptionStatusTypes.PAST_DUE && !s && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(ev.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e;
        return {
          premiumSubscription: t
        }
      }
    },
    [ev.NoticeTypes.MFA_SMS_BACKUP]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && t.mfaEnabled && !t.hasFlag(ev.UserFlags.MFA_SMS) && !t.hasFlag(ev.UserFlags.STAFF) && !t.hasFlag(ev.UserFlags.PARTNER) && !eH(ev.NoticeTypes.MFA_SMS_BACKUP)
      }
    },
    [ev.NoticeTypes.APPLICATION_TEST_MODE]: {
      predicate: () => null != eS.default.testModeApplicationId,
      metadata: () => {
        if (null == eS.default.testModeApplicationId) return {};
        let e = eS.default.testModeApplicationId,
          t = T.default.getApplication(e);
        return {
          applicationName: null != t ? t.name : e,
          applicationId: e
        }
      }
    },
    [ev.NoticeTypes.PREMIUM_REACTIVATE]: {
      predicate: () => !eH(ev.NoticeTypes.PREMIUM_REACTIVATE) && F.default.shouldShowReactivateNotice()
    },
    [ev.NoticeTypes.LOCALIZED_PRICING]: {
      predicate: e => {
        let {
          isLocalizedPromoEnabled: t
        } = e;
        return !eH(ev.NoticeTypes.LOCALIZED_PRICING) && t
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e;
        return {
          premiumSubscription: t
        }
      }
    },
    [ev.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && o()(t.currentPeriodEnd).isBefore(o()()), a = null != t && null != t.paymentSourceId ? eI.default.getPaymentSource(t.paymentSourceId) : null, l = null != a && eP.PREPAID_PAYMENT_SOURCES.has(a.type), i = null != t && t.status === ev.SubscriptionStatusTypes.PAST_DUE && !s && l && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(ev.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && i
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e;
        if (null == t) return {
          daysPastDue: 0,
          dismissUntil: o()().toDate()
        };
        {
          let e = t.status === ev.SubscriptionStatusTypes.PAST_DUE ? o()().diff(t.currentPeriodStart, "days") : 0;
          return {
            daysPastDue: e,
            dismissUntil: (0, eg.getBillingGracePeriodDaysAndExpiresDate)(t).expiresDate.toDate()
          }
        }
      }
    },
    [ev.NoticeTypes.DROPS_GO_LIVE_BANNER]: {
      predicate: () => !eH(ev.NoticeTypes.DROPS_GO_LIVE_BANNER) && (0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, S.getShowDropsNoticeBanner)(ex.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: ex.PartnerGame.FORTNITE
      })
    },
    [ev.NoticeTypes.DROPS_PROGRESS_INTERRUPTION]: {
      predicate: () => N.default.isCurrentQuestInterrupted && null != N.default.currentDropQuestGameTitle,
      metadata: () => ({
        gameTitle: N.default.currentDropQuestGameTitle,
        reloadCallback: () => window.location.reload(!0)
      })
    },
    [ev.NoticeTypes.POMELO_ELIGIBLE]: {
      predicate: () => (0, j.isEligibleForPomelo)() && !eH(ev.NoticeTypes.POMELO_ELIGIBLE) && !(0, U.getForceMigration)()
    },
    [ev.NoticeTypes.DROPS_ENDED_INCOMPLETE]: {
      predicate: () => !eH(ev.NoticeTypes.DROPS_ENDED_INCOMPLETE) && (0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, S.getShowDropsEndedIncompleteBanner)(ex.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: ex.PartnerGame.FORTNITE
      })
    },
    [ev.NoticeTypes.UU_MIGRATION]: {
      predicate: () => (0, j.isEligibleForPomelo)() && !eH(ev.NoticeTypes.UU_MIGRATION) && (0, U.getForceMigration)()
    },
    [ev.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e, n = null != t ? en.default.getGuild(t) : null;
        return null != t && null != L.default.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(ev.GuildFeatures.COMMUNITY)) && !eH(ev.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
      },
      metadata: e => {
        let {
          selectedGuildId: t
        } = e, n = {
          dismissUntil: o()().add(2, "hours").toDate()
        };
        if (null != t) {
          let e = L.default.getMentionRaidDetected(t);
          null != e && (n.decisionId = e.decisionId)
        }
        return n
      }
    },
    [ev.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: {
      predicate: () => !eH(ev.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== p.default.getEligibleGuildsForNagActivate().length && (0, I.isCreatorMonetizationNagActivateEnabled)()
    },
    [ev.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return !eH(ev.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, D.shouldShowGuildOnboardingUpsell)(t, c.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    },
    [ev.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return Y.isEligibleForNotice(t)
      }
    },
    [ev.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION]: {
      predicate: () => {
        let e = Q.default.getCurrentUserActiveStream();
        if (null == e) return !1;
        let t = (0, M.encodeStreamKey)(e),
          n = V.default.getStreamHeartbeatFailure(t);
        return null != n && Date.now() - n.firstFailedAt >= eD.CONSECUTIVE_HEARTBEAT_PERIOD_MS
      },
      metadata: () => {
        let e = Q.default.getCurrentUserActiveStream();
        return {
          streamKey: null != e ? (0, M.encodeStreamKey)(e) : null
        }
      }
    },
    [ev.NoticeTypes.CHECKOUT_RECOVERY_NAGBAR]: {
      predicate: () => b.default.isEligibleForNagbar()
    }
  };

function eW() {
  if (!A.default.isConnected()) return !1;
  eG = null;
  let e = e_.default.getCurrentUser();
  if (null == e) return !1;
  let t = ep.default.getPremiumSubscription(),
    n = eT.default.isLocalizedPromoEnabled,
    s = eu.default.getGuildId(),
    a = eo.default.getVoiceChannelId(),
    l = null != a ? em.default.getVoiceStateForChannel(a) : null;
  for (let o of eO.CONFERENCE_MODE_ENABLED ? eY : eV)
    if (null != eK[o] && eK[o].predicate({
        selectedGuildId: s,
        voiceChannelId: a,
        voiceState: l,
        currentUser: e,
        premiumSubscription: t,
        isLocalizedPromoEnabled: n
      })) {
      var i, r;
      let n = null === (i = (r = eK[o]).metadata) || void 0 === i ? void 0 : i.call(r, {
        currentUser: e,
        premiumSubscription: t,
        selectedGuildId: s
      });
      eG = {
        ...eB,
        type: o,
        metadata: n
      };
      break
    } null != eG && eH(eG.type) && (eG = null)
}

function ez() {
  return !ec.default.enabled && delete eF[ev.NoticeTypes.STREAMER_MODE], eW()
}
class eQ extends(s = u.default.Store) {
  initialize() {
    this.syncWith([ef.default, ei.default, ee.default, eu.default, k.default, eh.default, X.default, $.default, z.default, O.default, V.default, Q.default], eW), this.waitFor(e_.default, ed.default, en.default, et.default, er.default, es.default, ec.default, C.default, eu.default, eE.default, K.default, g.default, ei.default, eA.default, eM.default, eS.default, ea.default, ep.default, eR.default, ee.default, eI.default, el.default, k.default, eN.default, eh.default, $.default, y.default, N.default, p.default, H.default, V.default, Q.default)
  }
  hasNotice() {
    return null != eG && null != eG.type
  }
  getNotice() {
    return null == eE.default.getAction() ? eG : null
  }
  isNoticeDismissed(e) {
    return eH(e)
  }
}
i = "NoticeStore", (l = "displayName") in(a = eQ) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new eQ(E.default, {
  CURRENT_USER_UPDATE: eW,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: eW,
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eW,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eW,
  STATUS_PAGE_SCHEDULED_MAINTENANCE: eW,
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eW,
  GUILD_CREATE: eW,
  GUILD_DELETE: eW,
  AUDIO_INPUT_DETECTED: eW,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: eW,
  CERTIFIED_DEVICES_SET: eW,
  AUDIO_SET_INPUT_DEVICE: eW,
  AUDIO_SET_OUTPUT_DEVICE: eW,
  MEDIA_ENGINE_DEVICES: eW,
  RTC_CONNECTION_STATE: eW,
  RPC_APP_AUTHENTICATED: eW,
  RPC_APP_DISCONNECTED: eW,
  USER_CONNECTIONS_UPDATE: eW,
  WINDOW_FOCUS: eW,
  INSTANT_INVITE_CREATE: eW,
  INSTANT_INVITE_REVOKE_SUCCESS: eW,
  SPOTIFY_PLAYER_PAUSE: eW,
  RUNNING_GAMES_CHANGE: eW,
  EXPERIMENTS_FETCH_SUCCESS: eW,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eW,
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eW,
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eW,
  DEVELOPER_TEST_MODE_RESET: eW,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: eW,
  DISPATCH_APPLICATION_INSTALL: eW,
  IMPERSONATE_STOP: eW,
  IMPERSONATE_UPDATE: eW,
  GUILD_MEMBER_ADD: function(e) {
    return e.user.id === q.default.getId() && eW()
  },
  GUILD_MEMBER_UPDATE: eW,
  SURVEY_FETCHED: eW,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eW,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eW,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eW,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eW,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.some(e => {
      let {
        userId: t
      } = e;
      return t !== q.default.getId()
    }) && eW()
  },
  STREAMER_MODE_UPDATE: ez,
  RUNNING_STREAMER_TOOLS_CHANGE: ez,
  DISPATCH_APPLICATION_ERROR: function() {
    return delete eF[ev.NoticeTypes.DISPATCH_ERROR], eW()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    return delete eF[ev.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS], eW()
  },
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
    return eW()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
    return eW()
  },
  NOTICE_SHOW: function(e) {
    eG = e.notice
  },
  NOTICE_DISMISS: function(e) {
    return null != eG && (null == e.id || e.id === eG.id) && (ew(eG.type, e.isTemporary, e.untilAtLeast), eW())
  },
  NOTICE_DISABLE: function(e) {
    let {
      noticeType: t
    } = e;
    return ew(t), eW()
  },
  LOGOUT: function() {
    eF = {}, eG = null
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: eW,
  AUTO_MODERATION_MENTION_RAID_DETECTION: eW,
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eW,
  PROXY_BLOCKED_REQUEST: eW
})