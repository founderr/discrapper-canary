"use strict";
n.r(t), n.d(t, {
  typeToDismissibleContent: function() {
    return ey
  }
}), n("47120");
var s, a, l, i, r = n("913527"),
  o = n.n(r),
  u = n("442837"),
  d = n("743426"),
  c = n("524437"),
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
  v = n("615365"),
  R = n("528011"),
  O = n("487419"),
  x = n("715903"),
  L = n("223606"),
  D = n("150340"),
  P = n("160404"),
  y = n("41776"),
  U = n("347649"),
  j = n("332473"),
  b = n("616106"),
  F = n("774276"),
  B = n("518638"),
  G = n("1844"),
  k = n("621615"),
  w = n("417626"),
  H = n("569984"),
  V = n("523255"),
  Y = n("768419"),
  K = n("590415"),
  W = n("581883"),
  z = n("199902"),
  Q = n("314897"),
  q = n("881998"),
  X = n("463395"),
  Z = n("592125"),
  J = n("553795"),
  $ = n("427123"),
  ee = n("271383"),
  et = n("430824"),
  en = n("131951"),
  es = n("292959"),
  ea = n("496675"),
  el = n("571474"),
  ei = n("19780"),
  er = n("944486"),
  eo = n("914010"),
  eu = n("215427"),
  ed = n("246946"),
  ec = n("558724"),
  ef = n("23434"),
  eE = n("594174"),
  e_ = n("979651"),
  em = n("351402"),
  eT = n("853872"),
  eI = n("78839"),
  ep = n("295226"),
  eh = n("580130"),
  eN = n("695103"),
  eS = n("358085"),
  eC = n("74538"),
  eg = n("922156"),
  eA = n("436181"),
  eM = n("941128"),
  ev = n("981631"),
  eR = n("188785"),
  eO = n("702512"),
  ex = n("474936"),
  eL = n("46140"),
  eD = n("231338"),
  eP = n("65154");
let ey = {
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
    [ev.NoticeTypes.UU_MIGRATION]: c.DismissibleContent.UU_MIGRATION_NOTICE
  },
  eU = {
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
  ej = new Set([ev.NoticeTypes.NO_INPUT_DETECTED, ev.NoticeTypes.STREAMER_MODE, ev.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, ev.NoticeTypes.SPOTIFY_AUTO_PAUSED, ev.NoticeTypes.DISPATCH_ERROR, ev.NoticeTypes.DISPATCH_ERROR, ev.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, ev.NoticeTypes.BLOCKED_BY_PROXY]),
  eb = {},
  eF = Object.freeze({
    id: null,
    message: null,
    buttonText: null,
    callback: void 0,
    metadata: null
  }),
  eB = null;

function eG(e) {
  return eU[e] + "-untilAtLeast"
}

function ek(e, t, n) {
  var s, a, l;
  if (null == e) return;
  let i = eU[e];
  if (null != i && !t && f.Storage.set(i, !0), ej.has(e) && (eb[e] = !0), null != n && null != i) {
    ;
    s = e, a = n, f.Storage.set(eG(s), a.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
  } else {
    ;
    l = e, f.Storage.remove(eG(l))
  }
}

function ew(e) {
  if (null == e) return !1;
  let t = function(e) {
    let {
      enabled: t
    } = F.PremiumTier2TrialOfferNoticeExperiment.getCurrentConfig({
      location: "NoticeStore_isNoticeDismissed"
    }, {
      autoTrackExposure: !0,
      disable: e !== ev.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING
    });
    return t ? null : ey[e]
  }(e);
  if (null != t) return (0, h.isDismissibleContentDismissed)(t);
  let n = eU[e];
  if (null != n) {
    let t = function(e) {
      let t = f.Storage.get(eG(e));
      return null != t ? o()(t) : null
    }(e);
    if (null != t) return null == t ? void 0 : t.isAfter(o()())
  }
  let s = eb[e];
  return !!s || (null != n && "" !== n ? f.Storage.get(n) : !!ej.has(e) && s)
}
let eH = [ev.NoticeTypes.QUARANTINED, ev.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, ev.NoticeTypes.VIEWING_ROLES, ev.NoticeTypes.INVITED_TO_SPEAK, ev.NoticeTypes.LURKING_GUILD, ev.NoticeTypes.VOICE_DISABLED, ev.NoticeTypes.NO_INPUT_DETECTED, ev.NoticeTypes.HARDWARE_MUTE, ev.NoticeTypes.H264_DISABLED, ev.NoticeTypes.DISPATCH_ERROR, ev.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, ev.NoticeTypes.SPOTIFY_AUTO_PAUSED, ev.NoticeTypes.DROPS_PROGRESS_INTERRUPTION, ev.NoticeTypes.WIN32_DEPRECATED_MESSAGE, ev.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE, ev.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE, ev.NoticeTypes.BLOCKED_BY_PROXY, ev.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, ev.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION, ev.NoticeTypes.GUILD_RAID_NOTIFICATION, ev.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION, ev.NoticeTypes.UNCLAIMED_ACCOUNT, ev.NoticeTypes.POMELO_ELIGIBLE, ev.NoticeTypes.PENDING_MEMBER, ev.NoticeTypes.OUTBOUND_PROMOTION, ev.NoticeTypes.CORRUPT_INSTALLATION, ev.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, ev.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK, ev.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, ev.NoticeTypes.STREAMER_MODE, ev.NoticeTypes.SCHEDULED_MAINTENANCE, ev.NoticeTypes.BOUNCED_EMAIL_DETECTED, ev.NoticeTypes.UNVERIFIED_ACCOUNT, ev.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING, ev.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING, ev.NoticeTypes.PREMIUM_UNCANCEL, ev.NoticeTypes.PREMIUM_MISSING_PAYMENT, ev.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT, ev.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT, ev.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, ev.NoticeTypes.PREMIUM_REACTIVATE, ev.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION, ev.NoticeTypes.MFA_SMS_BACKUP, ev.NoticeTypes.APPLICATION_TEST_MODE, ev.NoticeTypes.LOCALIZED_PRICING, ev.NoticeTypes.DOWNLOAD_NAG, ev.NoticeTypes.CONNECT_SPOTIFY, ev.NoticeTypes.CONNECT_PLAYSTATION, ev.NoticeTypes.SURVEY, ev.NoticeTypes.SERVER_USAGE_SURVEY, ev.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR, ev.NoticeTypes.DROPS_GO_LIVE_BANNER, ev.NoticeTypes.DROPS_ENDED_INCOMPLETE, ev.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR, ev.NoticeTypes.UU_MIGRATION],
  eV = [ev.NoticeTypes.QUARANTINED, ev.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, ev.NoticeTypes.VIEWING_ROLES, ev.NoticeTypes.INVITED_TO_SPEAK, ev.NoticeTypes.LURKING_GUILD, ev.NoticeTypes.VOICE_DISABLED, ev.NoticeTypes.NO_INPUT_DETECTED, ev.NoticeTypes.HARDWARE_MUTE, ev.NoticeTypes.H264_DISABLED, ev.NoticeTypes.DISPATCH_ERROR, ev.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, ev.NoticeTypes.SPOTIFY_AUTO_PAUSED, ev.NoticeTypes.BLOCKED_BY_PROXY, ev.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, ev.NoticeTypes.PENDING_MEMBER, ev.NoticeTypes.STREAMER_MODE, ev.NoticeTypes.SCHEDULED_MAINTENANCE],
  eY = {
    [ev.NoticeTypes.GUILD_RAID_NOTIFICATION]: {
      predicate: () => (0, R.shouldShowRaidNotificationNagbar)().show && !ew(ev.NoticeTypes.GUILD_RAID_NOTIFICATION),
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
        let s = ee.default.getMember(n, t.id);
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
        return (0, K.getAudienceRequestToSpeakState)(t) === K.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
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
      predicate: () => null != ei.default.getRemoteDisconnectVoiceChannelId()
    },
    [ev.NoticeTypes.VOICE_CONNECTED_LAST_SESSION]: {
      predicate: () => null != ei.default.getLastSessionVoiceChannelId()
    },
    [ev.NoticeTypes.NO_INPUT_DETECTED]: {
      predicate: e => {
        let {
          voiceChannelId: t,
          voiceState: n
        } = e, s = Z.default.getChannel(t), a = (null == s ? void 0 : s.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
        return !1 === en.default.getInputDetected() && !a
      }
    },
    [ev.NoticeTypes.H264_DISABLED]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e, n = Z.default.getChannel(t);
        return !en.default.getOpenH264() && null != t && e_.default.hasVideo(t) && null != n && n.isGuildStageVoice()
      }
    },
    [ev.NoticeTypes.HARDWARE_MUTE]: {
      predicate: () => ei.default.isConnected() && en.default.isHardwareMute(),
      metadata: () => {
        let e = en.default.getInputDeviceId(),
          t = X.default.getVendor(e),
          n = X.default.getModel(e);
        if (null != t && null != n) return {
          vendor: t,
          model: n
        }
      }
    },
    [ev.NoticeTypes.DISPATCH_ERROR]: {
      predicate: () => null != eg.default.getLastError(),
      metadata: () => ({
        error: eg.default.getLastError()
      })
    },
    [ev.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
      predicate: () => null != eA.default.getLastProgress(),
      metadata: () => eA.default.getLastProgress()
    },
    [ev.NoticeTypes.SPOTIFY_AUTO_PAUSED]: {
      predicate: () => Y.default.wasAutoPaused()
    },
    [ev.NoticeTypes.BLOCKED_BY_PROXY]: {
      predicate: () => !ew(ev.NoticeTypes.BLOCKED_BY_PROXY) && w.default.blockedByProxy && k.default.getCurrentConfig({
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
        return null !== (s = null != a && null != l && !(null === (t = et.default.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(ev.GuildFeatures.GUILD_ONBOARDING)) && (null === (n = ee.default.getMember(a, l.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== s && s
      }
    },
    [ev.NoticeTypes.OUTBOUND_PROMOTION]: {
      predicate: () => (0, B.shouldShowOutboundPromotionNotice)()
    },
    [ev.NoticeTypes.CORRUPT_INSTALLATION]: {
      predicate: () => eS.isPlatformEmbedded && (!d.default.supported() || eM.default.isCorruptInstallation())
    },
    [ev.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e;
        return null != t && e_.default.hasVideo(t) && !en.default.supports(eP.Features.VIDEO) && !ew(ev.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER)
      }
    },
    [ev.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return eC.default.canRedeemPremiumPerks(t) && $.default.getDetectedOffPlatformPremiumPerks().length > 0
      },
      metadata: () => $.default.getDetectedOffPlatformPremiumPerks()[0]
    },
    [ev.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
      predicate: () => !ew(ev.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && $.default.getDetectedOffPlatformPremiumPerks().length > 0,
      metadata: () => $.default.getDetectedOffPlatformPremiumPerks()[0]
    },
    [ev.NoticeTypes.STREAMER_MODE]: {
      predicate: () => ed.default.enabled
    },
    [ev.NoticeTypes.DOWNLOAD_NAG]: {
      predicate: () => !eS.isPlatformEmbedded && !ew(ev.NoticeTypes.DOWNLOAD_NAG)
    },
    [ev.NoticeTypes.SCHEDULED_MAINTENANCE]: {
      predicate: () => null != eu.default.getScheduledMaintenance(),
      metadata: () => {
        let e = eu.default.getScheduledMaintenance();
        if (null != e) return {
          id: e.id,
          start: new Date(e.scheduled_for),
          end: new Date(e.scheduled_until)
        }
      }
    },
    [ev.NoticeTypes.SURVEY]: {
      predicate: () => null != ec.default.getCurrentSurvey(),
      metadata: () => ec.default.getCurrentSurvey()
    },
    [ev.NoticeTypes.SERVER_USAGE_SURVEY]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && v.default.getCurrentConfig({
          location: "notice_store"
        }).showSurvey && !ew(ev.NoticeTypes.SERVER_USAGE_SURVEY)
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
      predicate: () => !Y.default.hasConnectedAccount() && g.default.isObservedAppRunning(m.default.get(ev.PlatformTypes.SPOTIFY).name) && !ew(ev.NoticeTypes.CONNECT_SPOTIFY)
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
      predicate: () => J.default.isSuggestedAccountType(ev.PlatformTypes.PLAYSTATION) && null == J.default.getAccount(null, ev.PlatformTypes.PLAYSTATION) && !ew(ev.NoticeTypes.CONNECT_PLAYSTATION)
    },
    [ev.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: {
      predicate: () => ep.default.getAlmostExpiringTrialOffers([ex.PremiumSubscriptionSKUs.TIER_2]).length > 0 && !ew(ev.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)
    },
    [ev.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: {
      predicate: () => ep.default.getAlmostExpiringTrialOffers([ex.PremiumSubscriptionSKUs.TIER_0]).length > 0 && !ew(ev.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)
    },
    [ev.NoticeTypes.PREMIUM_UNCANCEL]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === ev.SubscriptionStatusTypes.CANCELED && 1 >= o()().diff(o()(t.canceledAt), "days"), l = null != t && o()(t.currentPeriodEnd).isBefore(o()()), i = null != t && t.status === ev.SubscriptionStatusTypes.CANCELED && !l && s <= 7 && s >= 0 && (0, eC.isPremiumExactly)(n, ex.PremiumTypes.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ew(ev.NoticeTypes.PREMIUM_UNCANCEL) && i
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eC.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null;
        return {
          daysLeft: s,
          premiumType: null != a ? eC.default.getPremiumType(a) : null,
          premiumSubscription: n
        }
      }
    },
    [ev.NoticeTypes.PREMIUM_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = null != t ? o()(t.currentPeriodEnd).diff(o()(t.currentPeriodStart).startOf("day"), "days") : 0, l = null != t && o()(t.currentPeriodEnd).isBefore(o()()), i = eh.default.applicationIdsFetched.has(ex.PREMIUM_SUBSCRIPTION_APPLICATION), r = eh.default.getForApplication(ex.PREMIUM_SUBSCRIPTION_APPLICATION), u = null != t ? (0, eC.getPremiumPlanItem)(t) : null, d = null != u ? eC.default.getSkuIdForPlan(u.planId) : null, c = null != r && null != u && Array.from(r).filter(e => {
          let {
            skuId: t,
            consumed: n
          } = e;
          return !n && t === d
        }).length > 0, f = null != t && s <= (a > 14 ? 7 : 2) && s >= 0 && t.status !== ev.SubscriptionStatusTypes.PAST_DUE && !l && i && !c && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ew(ev.NoticeTypes.PREMIUM_MISSING_PAYMENT) && f
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eC.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null;
        return {
          daysLeft: s,
          premiumType: null != a ? eC.default.getPremiumType(a) : null,
          premiumSubscription: n
        }
      }
    },
    [ev.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && null != t.paymentSourceId ? eT.default.getPaymentSource(t.paymentSourceId) : null, a = null != t && o()(t.currentPeriodEnd).isBefore(o()()), l = null != t && t.status === ev.SubscriptionStatusTypes.PAST_DUE && !a && null != s && s.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ew(ev.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT) && l
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
        return !ew(ev.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a
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
        return null != t && t.mfaEnabled && !t.hasFlag(ev.UserFlags.MFA_SMS) && !t.hasFlag(ev.UserFlags.STAFF) && !t.hasFlag(ev.UserFlags.PARTNER) && !ew(ev.NoticeTypes.MFA_SMS_BACKUP)
      }
    },
    [ev.NoticeTypes.APPLICATION_TEST_MODE]: {
      predicate: () => null != eN.default.testModeApplicationId,
      metadata: () => {
        if (null == eN.default.testModeApplicationId) return {};
        let e = eN.default.testModeApplicationId,
          t = T.default.getApplication(e);
        return {
          applicationName: null != t ? t.name : e,
          applicationId: e
        }
      }
    },
    [ev.NoticeTypes.PREMIUM_REACTIVATE]: {
      predicate: () => !ew(ev.NoticeTypes.PREMIUM_REACTIVATE) && b.default.shouldShowReactivateNotice()
    },
    [ev.NoticeTypes.LOCALIZED_PRICING]: {
      predicate: e => {
        let {
          isLocalizedPromoEnabled: t
        } = e;
        return !ew(ev.NoticeTypes.LOCALIZED_PRICING) && t
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
        } = e, s = null != t && o()(t.currentPeriodEnd).isBefore(o()()), a = null != t && null != t.paymentSourceId ? eT.default.getPaymentSource(t.paymentSourceId) : null, l = null != a && eD.PREPAID_PAYMENT_SOURCES.has(a.type), i = null != t && t.status === ev.SubscriptionStatusTypes.PAST_DUE && !s && l && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ew(ev.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && i
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
            dismissUntil: (0, eC.getBillingGracePeriodDaysAndExpiresDate)(t).expiresDate.toDate()
          }
        }
      }
    },
    [ev.NoticeTypes.DROPS_GO_LIVE_BANNER]: {
      predicate: () => !ew(ev.NoticeTypes.DROPS_GO_LIVE_BANNER) && (0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, S.getShowDropsNoticeBanner)(eO.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eO.PartnerGame.FORTNITE
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
      predicate: () => (0, j.isEligibleForPomelo)() && !ew(ev.NoticeTypes.POMELO_ELIGIBLE) && !(0, U.getForceMigration)()
    },
    [ev.NoticeTypes.DROPS_ENDED_INCOMPLETE]: {
      predicate: () => !ew(ev.NoticeTypes.DROPS_ENDED_INCOMPLETE) && (0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, S.getShowDropsEndedIncompleteBanner)(eO.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eO.PartnerGame.FORTNITE
      })
    },
    [ev.NoticeTypes.UU_MIGRATION]: {
      predicate: () => (0, j.isEligibleForPomelo)() && !ew(ev.NoticeTypes.UU_MIGRATION) && (0, U.getForceMigration)()
    },
    [ev.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e, n = null != t ? et.default.getGuild(t) : null;
        return null != t && null != L.default.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(ev.GuildFeatures.COMMUNITY)) && !ew(ev.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
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
      predicate: () => !ew(ev.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== p.default.getEligibleGuildsForNagActivate().length && (0, I.isCreatorMonetizationNagActivateEnabled)()
    },
    [ev.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return !ew(ev.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, D.shouldShowGuildOnboardingUpsell)(t, c.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    },
    [ev.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return V.isEligibleForNotice(t)
      }
    },
    [ev.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION]: {
      predicate: () => {
        let e = z.default.getCurrentUserActiveStream();
        if (null == e) return !1;
        let t = (0, M.encodeStreamKey)(e),
          n = H.default.getStreamHeartbeatFailure(t);
        return null != n && Date.now() - n.firstFailedAt >= eL.CONSECUTIVE_HEARTBEAT_PERIOD_MS
      },
      metadata: () => {
        let e = z.default.getCurrentUserActiveStream();
        return {
          streamKey: null != e ? (0, M.encodeStreamKey)(e) : null
        }
      }
    }
  };

function eK() {
  if (!A.default.isConnected()) return !1;
  eB = null;
  let e = eE.default.getCurrentUser();
  if (null == e) return !1;
  let t = eI.default.getPremiumSubscription(),
    n = em.default.isLocalizedPromoEnabled,
    s = eo.default.getGuildId(),
    a = er.default.getVoiceChannelId(),
    l = null != a ? e_.default.getVoiceStateForChannel(a) : null;
  for (let o of eR.CONFERENCE_MODE_ENABLED ? eV : eH)
    if (null != eY[o] && eY[o].predicate({
        selectedGuildId: s,
        voiceChannelId: a,
        voiceState: l,
        currentUser: e,
        premiumSubscription: t,
        isLocalizedPromoEnabled: n
      })) {
      var i, r;
      let n = null === (i = (r = eY[o]).metadata) || void 0 === i ? void 0 : i.call(r, {
        currentUser: e,
        premiumSubscription: t,
        selectedGuildId: s
      });
      eB = {
        ...eF,
        type: o,
        metadata: n
      };
      break
    } null != eB && ew(eB.type) && (eB = null)
}

function eW() {
  return !ed.default.enabled && delete eb[ev.NoticeTypes.STREAMER_MODE], eK()
}
class ez extends(s = u.default.Store) {
  initialize() {
    this.syncWith([ec.default, el.default, $.default, eo.default, G.default, ep.default, q.default, J.default, W.default, O.default, H.default, z.default], eK), this.waitFor(eE.default, eu.default, et.default, ee.default, ei.default, en.default, ed.default, C.default, eo.default, ef.default, Y.default, g.default, el.default, eg.default, eA.default, eN.default, es.default, eI.default, eM.default, $.default, eT.default, ea.default, G.default, eh.default, ep.default, J.default, y.default, N.default, p.default, w.default, H.default, z.default)
  }
  hasNotice() {
    return null != eB && null != eB.type
  }
  getNotice() {
    return null == ef.default.getAction() ? eB : null
  }
  isNoticeDismissed(e) {
    return ew(e)
  }
}
i = "NoticeStore", (l = "displayName") in(a = ez) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new ez(E.default, {
  CURRENT_USER_UPDATE: eK,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: eK,
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eK,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eK,
  STATUS_PAGE_SCHEDULED_MAINTENANCE: eK,
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eK,
  GUILD_CREATE: eK,
  GUILD_DELETE: eK,
  AUDIO_INPUT_DETECTED: eK,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: eK,
  CERTIFIED_DEVICES_SET: eK,
  AUDIO_SET_INPUT_DEVICE: eK,
  AUDIO_SET_OUTPUT_DEVICE: eK,
  MEDIA_ENGINE_DEVICES: eK,
  RTC_CONNECTION_STATE: eK,
  RPC_APP_AUTHENTICATED: eK,
  RPC_APP_DISCONNECTED: eK,
  USER_CONNECTIONS_UPDATE: eK,
  WINDOW_FOCUS: eK,
  INSTANT_INVITE_CREATE: eK,
  INSTANT_INVITE_REVOKE_SUCCESS: eK,
  SPOTIFY_PLAYER_PAUSE: eK,
  RUNNING_GAMES_CHANGE: eK,
  EXPERIMENTS_FETCH_SUCCESS: eK,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eK,
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eK,
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eK,
  DEVELOPER_TEST_MODE_RESET: eK,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: eK,
  DISPATCH_APPLICATION_INSTALL: eK,
  IMPERSONATE_STOP: eK,
  IMPERSONATE_UPDATE: eK,
  GUILD_MEMBER_ADD: function(e) {
    return e.user.id === Q.default.getId() && eK()
  },
  GUILD_MEMBER_UPDATE: eK,
  SURVEY_FETCHED: eK,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eK,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eK,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eK,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eK,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.some(e => {
      let {
        userId: t
      } = e;
      return t !== Q.default.getId()
    }) && eK()
  },
  STREAMER_MODE_UPDATE: eW,
  RUNNING_STREAMER_TOOLS_CHANGE: eW,
  DISPATCH_APPLICATION_ERROR: function() {
    return delete eb[ev.NoticeTypes.DISPATCH_ERROR], eK()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    return delete eb[ev.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS], eK()
  },
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
    return eK()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
    return eK()
  },
  NOTICE_SHOW: function(e) {
    eB = e.notice
  },
  NOTICE_DISMISS: function(e) {
    return null != eB && (null == e.id || e.id === eB.id) && (ek(eB.type, e.isTemporary, e.untilAtLeast), eK())
  },
  NOTICE_DISABLE: function(e) {
    let {
      noticeType: t
    } = e;
    return ek(t), eK()
  },
  LOGOUT: function() {
    eb = {}, eB = null
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: eK,
  AUTO_MODERATION_MENTION_RAID_DETECTION: eK,
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eK,
  PROXY_BLOCKED_REQUEST: eK
})