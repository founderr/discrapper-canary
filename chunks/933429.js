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
  c = n("524437"),
  E = n("433517"),
  f = n("570140"),
  _ = n("579806"),
  T = n("726542"),
  I = n("812206"),
  m = n("223892"),
  N = n("674525"),
  p = n("605236"),
  S = n("524347"),
  C = n("853197"),
  A = n("353926"),
  h = n("594190"),
  g = n("38618"),
  M = n("569545"),
  O = n("615365"),
  R = n("528011"),
  v = n("487419"),
  L = n("715903"),
  P = n("223606"),
  D = n("150340"),
  x = n("160404"),
  y = n("41776"),
  U = n("347649"),
  j = n("332473"),
  b = n("616106"),
  G = n("774276"),
  B = n("224998"),
  k = n("443852"),
  F = n("1844"),
  w = n("621615"),
  H = n("417626"),
  V = n("569984"),
  Y = n("523255"),
  K = n("768419"),
  W = n("590415"),
  z = n("581883"),
  Q = n("199902"),
  q = n("314897"),
  J = n("881998"),
  Z = n("463395"),
  X = n("592125"),
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
  eE = n("558724"),
  ef = n("23434"),
  e_ = n("594174"),
  eT = n("979651"),
  eI = n("351402"),
  em = n("853872"),
  eN = n("78839"),
  ep = n("295226"),
  eS = n("580130"),
  eC = n("695103"),
  eA = n("358085"),
  eh = n("74538"),
  eg = n("922156"),
  eM = n("436181"),
  eO = n("941128"),
  eR = n("981631"),
  ev = n("188785"),
  eL = n("702512"),
  eP = n("474936"),
  eD = n("46140"),
  ex = n("231338"),
  ey = n("65154");
let eU = {
    [eR.NoticeTypes.LOCALIZED_PRICING]: c.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING,
    [eR.NoticeTypes.DOWNLOAD_NAG]: c.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD,
    [eR.NoticeTypes.CONNECT_SPOTIFY]: c.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY,
    [eR.NoticeTypes.CONNECT_PLAYSTATION]: c.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
    [eR.NoticeTypes.MFA_SMS_BACKUP]: c.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP,
    [eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: c.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
    [eR.NoticeTypes.PREMIUM_REACTIVATE]: c.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
    [eR.NoticeTypes.DROPS_GO_LIVE_BANNER]: c.DismissibleContent.QUEST_2_GO_LIVE_BANNER,
    [eR.NoticeTypes.DROPS_ENDED_INCOMPLETE]: c.DismissibleContent.QUEST_2_ENDED_INCOMPLETE,
    [eR.NoticeTypes.BOUNCED_EMAIL_DETECTED]: c.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE,
    [eR.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: c.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
    [eR.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: c.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
    [eR.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: c.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR,
    [eR.NoticeTypes.POMELO_ELIGIBLE]: c.DismissibleContent.NAGBAR_NOTICE_POMELO,
    [eR.NoticeTypes.UU_MIGRATION]: c.DismissibleContent.UU_MIGRATION_NOTICE
  },
  ej = {
    [eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
    [eR.NoticeTypes.PREMIUM_UNCANCEL]: "hideUncancelReminder",
    [eR.NoticeTypes.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
    [eR.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
    [eR.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
    [eR.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
    [eR.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
    [eR.NoticeTypes.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
    [eR.NoticeTypes.SERVER_USAGE_SURVEY]: "hideServerUsageSurvey",
    [eR.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
    [eR.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
    [eR.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE]: "hideMacOS17_18DeprecationMessageNotice",
    [eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice"
  },
  eb = new Set([eR.NoticeTypes.NO_INPUT_DETECTED, eR.NoticeTypes.STREAMER_MODE, eR.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eR.NoticeTypes.SPOTIFY_AUTO_PAUSED, eR.NoticeTypes.DISPATCH_ERROR, eR.NoticeTypes.DISPATCH_ERROR, eR.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.NoticeTypes.BLOCKED_BY_PROXY]),
  eG = {},
  eB = Object.freeze({
    id: null,
    message: null,
    buttonText: null,
    callback: void 0,
    metadata: null
  }),
  ek = null;

function eF(e) {
  return ej[e] + "-untilAtLeast"
}

function ew(e, t, n) {
  var s, a, l;
  if (null == e) return;
  let i = ej[e];
  if (null != i && !t && E.Storage.set(i, !0), eb.has(e) && (eG[e] = !0), null != n && null != i) {
    ;
    s = e, a = n, E.Storage.set(eF(s), a.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
  } else {
    ;
    l = e, E.Storage.remove(eF(l))
  }
}

function eH(e) {
  if (null == e) return !1;
  let t = function(e) {
    let {
      enabled: t
    } = G.PremiumTier2TrialOfferNoticeExperiment.getCurrentConfig({
      location: "NoticeStore_isNoticeDismissed"
    }, {
      autoTrackExposure: !0,
      disable: e !== eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING
    });
    return t ? null : eU[e]
  }(e);
  if (null != t) return (0, p.isDismissibleContentDismissed)(t);
  let n = ej[e];
  if (null != n) {
    let t = function(e) {
      let t = E.Storage.get(eF(e));
      return null != t ? o()(t) : null
    }(e);
    if (null != t) return null == t ? void 0 : t.isAfter(o()())
  }
  let s = eG[e];
  return !!s || (null != n && "" !== n ? E.Storage.get(n) : !!eb.has(e) && s)
}
let eV = [eR.NoticeTypes.QUARANTINED, eR.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eR.NoticeTypes.VIEWING_ROLES, eR.NoticeTypes.INVITED_TO_SPEAK, eR.NoticeTypes.LURKING_GUILD, eR.NoticeTypes.VOICE_DISABLED, eR.NoticeTypes.NO_INPUT_DETECTED, eR.NoticeTypes.HARDWARE_MUTE, eR.NoticeTypes.H264_DISABLED, eR.NoticeTypes.DISPATCH_ERROR, eR.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.NoticeTypes.SPOTIFY_AUTO_PAUSED, eR.NoticeTypes.DROPS_PROGRESS_INTERRUPTION, eR.NoticeTypes.WIN32_DEPRECATED_MESSAGE, eR.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE, eR.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE, eR.NoticeTypes.BLOCKED_BY_PROXY, eR.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eR.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION, eR.NoticeTypes.GUILD_RAID_NOTIFICATION, eR.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION, eR.NoticeTypes.UNCLAIMED_ACCOUNT, eR.NoticeTypes.POMELO_ELIGIBLE, eR.NoticeTypes.PENDING_MEMBER, eR.NoticeTypes.OUTBOUND_PROMOTION, eR.NoticeTypes.CORRUPT_INSTALLATION, eR.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eR.NoticeTypes.STREAMER_MODE, eR.NoticeTypes.SCHEDULED_MAINTENANCE, eR.NoticeTypes.BOUNCED_EMAIL_DETECTED, eR.NoticeTypes.UNVERIFIED_ACCOUNT, eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING, eR.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING, eR.NoticeTypes.PREMIUM_UNCANCEL, eR.NoticeTypes.PREMIUM_MISSING_PAYMENT, eR.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT, eR.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT, eR.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eR.NoticeTypes.PREMIUM_REACTIVATE, eR.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION, eR.NoticeTypes.MFA_SMS_BACKUP, eR.NoticeTypes.APPLICATION_TEST_MODE, eR.NoticeTypes.LOCALIZED_PRICING, eR.NoticeTypes.DOWNLOAD_NAG, eR.NoticeTypes.CONNECT_SPOTIFY, eR.NoticeTypes.CONNECT_PLAYSTATION, eR.NoticeTypes.SURVEY, eR.NoticeTypes.SERVER_USAGE_SURVEY, eR.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR, eR.NoticeTypes.DROPS_GO_LIVE_BANNER, eR.NoticeTypes.DROPS_ENDED_INCOMPLETE, eR.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR, eR.NoticeTypes.UU_MIGRATION],
  eY = [eR.NoticeTypes.QUARANTINED, eR.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eR.NoticeTypes.VIEWING_ROLES, eR.NoticeTypes.INVITED_TO_SPEAK, eR.NoticeTypes.LURKING_GUILD, eR.NoticeTypes.VOICE_DISABLED, eR.NoticeTypes.NO_INPUT_DETECTED, eR.NoticeTypes.HARDWARE_MUTE, eR.NoticeTypes.H264_DISABLED, eR.NoticeTypes.DISPATCH_ERROR, eR.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.NoticeTypes.SPOTIFY_AUTO_PAUSED, eR.NoticeTypes.BLOCKED_BY_PROXY, eR.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eR.NoticeTypes.PENDING_MEMBER, eR.NoticeTypes.STREAMER_MODE, eR.NoticeTypes.SCHEDULED_MAINTENANCE],
  eK = {
    [eR.NoticeTypes.GUILD_RAID_NOTIFICATION]: {
      predicate: () => (0, R.shouldShowRaidNotificationNagbar)().show && !eH(eR.NoticeTypes.GUILD_RAID_NOTIFICATION),
      metadata: () => ({
        dismissUntil: o()().add(3, "hours").toDate()
      })
    },
    [eR.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE]: {
      predicate: e => {
        let {
          currentUser: t,
          selectedGuildId: n
        } = e;
        if (null == n) return !1;
        let s = et.default.getMember(n, t.id);
        return null != s && !s.isPending && (0, L.hasAutomodQuarantinedProfile)(s)
      }
    },
    [eR.NoticeTypes.QUARANTINED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return t.hasFlag(eR.UserFlags.QUARANTINED)
      }
    },
    [eR.NoticeTypes.VIEWING_ROLES]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return x.default.isViewingRoles(t)
      }
    },
    [eR.NoticeTypes.INVITED_TO_SPEAK]: {
      predicate: e => {
        let {
          voiceState: t
        } = e;
        return (0, W.getAudienceRequestToSpeakState)(t) === W.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
      }
    },
    [eR.NoticeTypes.LURKING_GUILD]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && y.default.isLurking(t)
      }
    },
    [eR.NoticeTypes.VOICE_DISABLED]: {
      predicate: () => null != er.default.getRemoteDisconnectVoiceChannelId()
    },
    [eR.NoticeTypes.VOICE_CONNECTED_LAST_SESSION]: {
      predicate: () => null != er.default.getLastSessionVoiceChannelId()
    },
    [eR.NoticeTypes.NO_INPUT_DETECTED]: {
      predicate: e => {
        let {
          voiceChannelId: t,
          voiceState: n
        } = e, s = X.default.getChannel(t), a = (null == s ? void 0 : s.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
        return !1 === es.default.getInputDetected() && !a
      }
    },
    [eR.NoticeTypes.H264_DISABLED]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e, n = X.default.getChannel(t);
        return !es.default.getOpenH264() && null != t && eT.default.hasVideo(t) && null != n && n.isGuildStageVoice()
      }
    },
    [eR.NoticeTypes.HARDWARE_MUTE]: {
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
    [eR.NoticeTypes.DISPATCH_ERROR]: {
      predicate: () => null != eg.default.getLastError(),
      metadata: () => ({
        error: eg.default.getLastError()
      })
    },
    [eR.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
      predicate: () => null != eM.default.getLastProgress(),
      metadata: () => eM.default.getLastProgress()
    },
    [eR.NoticeTypes.SPOTIFY_AUTO_PAUSED]: {
      predicate: () => K.default.wasAutoPaused()
    },
    [eR.NoticeTypes.BLOCKED_BY_PROXY]: {
      predicate: () => !eH(eR.NoticeTypes.BLOCKED_BY_PROXY) && H.default.blockedByProxy && w.default.getCurrentConfig({
        location: "notice_store"
      }).eligibleForNotice
    },
    [eR.NoticeTypes.UNCLAIMED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && !t.isClaimed()
      }
    },
    [eR.NoticeTypes.PENDING_MEMBER]: {
      predicate: e => {
        var t, n, s;
        let {
          selectedGuildId: a,
          currentUser: l
        } = e;
        return null !== (s = null != a && null != l && !(null === (t = en.default.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(eR.GuildFeatures.GUILD_ONBOARDING)) && (null === (n = et.default.getMember(a, l.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== s && s
      }
    },
    [eR.NoticeTypes.OUTBOUND_PROMOTION]: {
      predicate: () => (0, k.shouldShowOutboundPromotionNotice)()
    },
    [eR.NoticeTypes.CORRUPT_INSTALLATION]: {
      predicate: () => eA.isPlatformEmbedded && (!d.default.supported() || eO.default.isCorruptInstallation())
    },
    [eR.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e;
        return null != t && eT.default.hasVideo(t) && !es.default.supports(ey.Features.VIDEO) && !eH(eR.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER)
      }
    },
    [eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return eh.default.canRedeemPremiumPerks(t) && ee.default.getDetectedOffPlatformPremiumPerks().length > 0
      },
      metadata: () => ee.default.getDetectedOffPlatformPremiumPerks()[0]
    },
    [eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
      predicate: () => !eH(eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && ee.default.getDetectedOffPlatformPremiumPerks().length > 0,
      metadata: () => ee.default.getDetectedOffPlatformPremiumPerks()[0]
    },
    [eR.NoticeTypes.STREAMER_MODE]: {
      predicate: () => ec.default.enabled
    },
    [eR.NoticeTypes.DOWNLOAD_NAG]: {
      predicate: () => !eA.isPlatformEmbedded && !eH(eR.NoticeTypes.DOWNLOAD_NAG)
    },
    [eR.NoticeTypes.SCHEDULED_MAINTENANCE]: {
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
    [eR.NoticeTypes.SURVEY]: {
      predicate: () => null != eE.default.getCurrentSurvey(),
      metadata: () => eE.default.getCurrentSurvey()
    },
    [eR.NoticeTypes.SERVER_USAGE_SURVEY]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && O.default.getCurrentConfig({
          location: "notice_store"
        }).showSurvey && !eH(eR.NoticeTypes.SERVER_USAGE_SURVEY)
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
    [eR.NoticeTypes.UNVERIFIED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return (null == t ? void 0 : t.email) != null && !t.verified
      }
    },
    [eR.NoticeTypes.BOUNCED_EMAIL_DETECTED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null == t ? void 0 : t.hasBouncedEmail
      }
    },
    [eR.NoticeTypes.CONNECT_SPOTIFY]: {
      predicate: () => !K.default.hasConnectedAccount() && h.default.isObservedAppRunning(T.default.get(eR.PlatformTypes.SPOTIFY).name) && !eH(eR.NoticeTypes.CONNECT_SPOTIFY)
    },
    [eR.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: {
      predicate: () => {
        let {
          enabled: e
        } = B.default.getCurrentConfig({
          location: "window32_deprecation_message"
        });
        return e && (null === _.default || void 0 === _.default ? void 0 : _.default.os.arch) === "ia32" && (null === _.default || void 0 === _.default ? void 0 : _.default.process.platform) === "win32"
      },
      metadata: () => ({
        dismissUntil: o()().add(5, "days").toDate()
      })
    },
    [eR.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE]: {
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
    [eR.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE]: {
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
    [eR.NoticeTypes.CONNECT_PLAYSTATION]: {
      predicate: () => $.default.isSuggestedAccountType(eR.PlatformTypes.PLAYSTATION) && null == $.default.getAccount(null, eR.PlatformTypes.PLAYSTATION) && !eH(eR.NoticeTypes.CONNECT_PLAYSTATION)
    },
    [eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: {
      predicate: () => ep.default.getAlmostExpiringTrialOffers([eP.PremiumSubscriptionSKUs.TIER_2]).length > 0 && !eH(eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)
    },
    [eR.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: {
      predicate: () => ep.default.getAlmostExpiringTrialOffers([eP.PremiumSubscriptionSKUs.TIER_0]).length > 0 && !eH(eR.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)
    },
    [eR.NoticeTypes.PREMIUM_UNCANCEL]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eR.SubscriptionStatusTypes.CANCELED && 1 >= o()().diff(o()(t.canceledAt), "days"), l = null != t && o()(t.currentPeriodEnd).isBefore(o()()), i = null != t && t.status === eR.SubscriptionStatusTypes.CANCELED && !l && s <= 7 && s >= 0 && (0, eh.isPremiumExactly)(n, eP.PremiumTypes.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(eR.NoticeTypes.PREMIUM_UNCANCEL) && i
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eh.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null;
        return {
          daysLeft: s,
          premiumType: null != a ? eh.default.getPremiumType(a) : null,
          premiumSubscription: n
        }
      }
    },
    [eR.NoticeTypes.PREMIUM_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = null != t ? o()(t.currentPeriodEnd).diff(o()(t.currentPeriodStart).startOf("day"), "days") : 0, l = null != t && o()(t.currentPeriodEnd).isBefore(o()()), i = eS.default.applicationIdsFetched.has(eP.PREMIUM_SUBSCRIPTION_APPLICATION), r = eS.default.getForApplication(eP.PREMIUM_SUBSCRIPTION_APPLICATION), u = null != t ? (0, eh.getPremiumPlanItem)(t) : null, d = null != u ? eh.default.getSkuIdForPlan(u.planId) : null, c = null != r && null != u && Array.from(r).filter(e => {
          let {
            skuId: t,
            consumed: n
          } = e;
          return !n && t === d
        }).length > 0, E = null != t && s <= (a > 14 ? 7 : 2) && s >= 0 && t.status !== eR.SubscriptionStatusTypes.PAST_DUE && !l && i && !c && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(eR.NoticeTypes.PREMIUM_MISSING_PAYMENT) && E
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eh.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null;
        return {
          daysLeft: s,
          premiumType: null != a ? eh.default.getPremiumType(a) : null,
          premiumSubscription: n
        }
      }
    },
    [eR.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && null != t.paymentSourceId ? em.default.getPaymentSource(t.paymentSourceId) : null, a = null != t && o()(t.currentPeriodEnd).isBefore(o()()), l = null != t && t.status === eR.SubscriptionStatusTypes.PAST_DUE && !a && null != s && s.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(eR.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT) && l
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
    [eR.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && o()(t.currentPeriodEnd).isBefore(o()()), a = null != t && t.status === eR.SubscriptionStatusTypes.PAST_DUE && !s && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(eR.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a
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
    [eR.NoticeTypes.MFA_SMS_BACKUP]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && t.mfaEnabled && !t.hasFlag(eR.UserFlags.MFA_SMS) && !t.hasFlag(eR.UserFlags.STAFF) && !t.hasFlag(eR.UserFlags.PARTNER) && !eH(eR.NoticeTypes.MFA_SMS_BACKUP)
      }
    },
    [eR.NoticeTypes.APPLICATION_TEST_MODE]: {
      predicate: () => null != eC.default.testModeApplicationId,
      metadata: () => {
        if (null == eC.default.testModeApplicationId) return {};
        let e = eC.default.testModeApplicationId,
          t = I.default.getApplication(e);
        return {
          applicationName: null != t ? t.name : e,
          applicationId: e
        }
      }
    },
    [eR.NoticeTypes.PREMIUM_REACTIVATE]: {
      predicate: () => !eH(eR.NoticeTypes.PREMIUM_REACTIVATE) && b.default.shouldShowReactivateNotice()
    },
    [eR.NoticeTypes.LOCALIZED_PRICING]: {
      predicate: e => {
        let {
          isLocalizedPromoEnabled: t
        } = e;
        return !eH(eR.NoticeTypes.LOCALIZED_PRICING) && t
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
    [eR.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && o()(t.currentPeriodEnd).isBefore(o()()), a = null != t && null != t.paymentSourceId ? em.default.getPaymentSource(t.paymentSourceId) : null, l = null != a && ex.PREPAID_PAYMENT_SOURCES.has(a.type), i = null != t && t.status === eR.SubscriptionStatusTypes.PAST_DUE && !s && l && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(eR.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && i
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
          let e = t.status === eR.SubscriptionStatusTypes.PAST_DUE ? o()().diff(t.currentPeriodStart, "days") : 0;
          return {
            daysPastDue: e,
            dismissUntil: (0, eh.getBillingGracePeriodDaysAndExpiresDate)(t).expiresDate.toDate()
          }
        }
      }
    },
    [eR.NoticeTypes.DROPS_GO_LIVE_BANNER]: {
      predicate: () => !eH(eR.NoticeTypes.DROPS_GO_LIVE_BANNER) && (0, p.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, p.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, C.getShowDropsNoticeBanner)(eL.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eL.PartnerGame.FORTNITE
      })
    },
    [eR.NoticeTypes.DROPS_PROGRESS_INTERRUPTION]: {
      predicate: () => S.default.isCurrentQuestInterrupted && null != S.default.currentDropQuestGameTitle,
      metadata: () => ({
        gameTitle: S.default.currentDropQuestGameTitle,
        reloadCallback: () => window.location.reload(!0)
      })
    },
    [eR.NoticeTypes.POMELO_ELIGIBLE]: {
      predicate: () => (0, j.isEligibleForPomelo)() && !eH(eR.NoticeTypes.POMELO_ELIGIBLE) && !(0, U.getForceMigration)()
    },
    [eR.NoticeTypes.DROPS_ENDED_INCOMPLETE]: {
      predicate: () => !eH(eR.NoticeTypes.DROPS_ENDED_INCOMPLETE) && (0, p.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, p.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, C.getShowDropsEndedIncompleteBanner)(eL.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eL.PartnerGame.FORTNITE
      })
    },
    [eR.NoticeTypes.UU_MIGRATION]: {
      predicate: () => (0, j.isEligibleForPomelo)() && !eH(eR.NoticeTypes.UU_MIGRATION) && (0, U.getForceMigration)()
    },
    [eR.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e, n = null != t ? en.default.getGuild(t) : null;
        return null != t && null != P.default.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eR.GuildFeatures.COMMUNITY)) && !eH(eR.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
      },
      metadata: e => {
        let {
          selectedGuildId: t
        } = e, n = {
          dismissUntil: o()().add(2, "hours").toDate()
        };
        if (null != t) {
          let e = P.default.getMentionRaidDetected(t);
          null != e && (n.decisionId = e.decisionId)
        }
        return n
      }
    },
    [eR.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: {
      predicate: () => !eH(eR.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== N.default.getEligibleGuildsForNagActivate().length && (0, m.isCreatorMonetizationNagActivateEnabled)()
    },
    [eR.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return !eH(eR.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, D.shouldShowGuildOnboardingUpsell)(t, c.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    },
    [eR.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return Y.isEligibleForNotice(t)
      }
    },
    [eR.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION]: {
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
    }
  };

function eW() {
  if (!g.default.isConnected()) return !1;
  ek = null;
  let e = e_.default.getCurrentUser();
  if (null == e) return !1;
  let t = eN.default.getPremiumSubscription(),
    n = eI.default.isLocalizedPromoEnabled,
    s = eu.default.getGuildId(),
    a = eo.default.getVoiceChannelId(),
    l = null != a ? eT.default.getVoiceStateForChannel(a) : null;
  for (let o of ev.CONFERENCE_MODE_ENABLED ? eY : eV)
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
      ek = {
        ...eB,
        type: o,
        metadata: n
      };
      break
    } null != ek && eH(ek.type) && (ek = null)
}

function ez() {
  return !ec.default.enabled && delete eG[eR.NoticeTypes.STREAMER_MODE], eW()
}
class eQ extends(s = u.default.Store) {
  initialize() {
    this.syncWith([eE.default, ei.default, ee.default, eu.default, F.default, ep.default, J.default, $.default, z.default, v.default, V.default, Q.default], eW), this.waitFor(e_.default, ed.default, en.default, et.default, er.default, es.default, ec.default, A.default, eu.default, ef.default, K.default, h.default, ei.default, eg.default, eM.default, eC.default, ea.default, eN.default, eO.default, ee.default, em.default, el.default, F.default, eS.default, ep.default, $.default, y.default, S.default, N.default, H.default, V.default, Q.default)
  }
  hasNotice() {
    return null != ek && null != ek.type
  }
  getNotice() {
    return null == ef.default.getAction() ? ek : null
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
}) : a[l] = i, t.default = new eQ(f.default, {
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
    return delete eG[eR.NoticeTypes.DISPATCH_ERROR], eW()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    return delete eG[eR.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS], eW()
  },
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
    return eW()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
    return eW()
  },
  NOTICE_SHOW: function(e) {
    ek = e.notice
  },
  NOTICE_DISMISS: function(e) {
    return null != ek && (null == e.id || e.id === ek.id) && (ew(ek.type, e.isTemporary, e.untilAtLeast), eW())
  },
  NOTICE_DISABLE: function(e) {
    let {
      noticeType: t
    } = e;
    return ew(t), eW()
  },
  LOGOUT: function() {
    eG = {}, ek = null
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: eW,
  AUTO_MODERATION_MENTION_RAID_DETECTION: eW,
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eW,
  PROXY_BLOCKED_REQUEST: eW
})