"use strict";
n.r(t), n.d(t, {
  typeToDismissibleContent: function() {
    return eD
  },
  default: function() {
    return eK
  }
}), n("222007");
var s = n("866227"),
  l = n.n(s),
  a = n("446674"),
  i = n("741397"),
  r = n("151426"),
  o = n("95410"),
  u = n("913144"),
  d = n("363996"),
  c = n("49671"),
  E = n("376556"),
  f = n("299285"),
  _ = n("7331"),
  T = n("889293"),
  I = n("10641"),
  m = n("180273"),
  N = n("579565"),
  p = n("789563"),
  S = n("161454"),
  A = n("619443"),
  C = n("374014"),
  h = n("875037"),
  g = n("398654"),
  M = n("54346"),
  O = n("681937"),
  R = n("619259"),
  L = n("179803"),
  v = n("38654"),
  P = n("267567"),
  D = n("42060"),
  x = n("167209"),
  y = n("104032"),
  U = n("983424"),
  j = n("897107"),
  b = n("44678"),
  G = n("807345"),
  B = n("840895"),
  k = n("143573"),
  F = n("2973"),
  w = n("703537"),
  H = n("662285"),
  V = n("808422"),
  Y = n("374363"),
  W = n("373469"),
  K = n("271938"),
  z = n("250404"),
  Q = n("533222"),
  Z = n("42203"),
  J = n("47319"),
  X = n("320268"),
  q = n("26989"),
  $ = n("305961"),
  ee = n("42887"),
  et = n("385649"),
  en = n("957255"),
  es = n("669280"),
  el = n("945956"),
  ea = n("18494"),
  ei = n("162771"),
  er = n("168851"),
  eo = n("102985"),
  eu = n("381684"),
  ed = n("330387"),
  ec = n("697218"),
  eE = n("800762"),
  ef = n("160299"),
  e_ = n("357957"),
  eT = n("521012"),
  eI = n("340412"),
  em = n("437712"),
  eN = n("167726"),
  ep = n("773336"),
  eS = n("719923"),
  eA = n("189459"),
  eC = n("316661"),
  eh = n("352326"),
  eg = n("49111"),
  eM = n("492397"),
  eO = n("411511"),
  eR = n("646718"),
  eL = n("166604"),
  ev = n("843455"),
  eP = n("353927");
let eD = {
    [eg.NoticeTypes.LOCALIZED_PRICING]: r.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING,
    [eg.NoticeTypes.DOWNLOAD_NAG]: r.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD,
    [eg.NoticeTypes.CONNECT_SPOTIFY]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY,
    [eg.NoticeTypes.CONNECT_PLAYSTATION]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
    [eg.NoticeTypes.MFA_SMS_BACKUP]: r.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP,
    [eg.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
    [eg.NoticeTypes.PREMIUM_REACTIVATE]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
    [eg.NoticeTypes.DROPS_GO_LIVE_BANNER]: r.DismissibleContent.QUEST_2_GO_LIVE_BANNER,
    [eg.NoticeTypes.DROPS_ENDED_INCOMPLETE]: r.DismissibleContent.QUEST_2_ENDED_INCOMPLETE,
    [eg.NoticeTypes.BOUNCED_EMAIL_DETECTED]: r.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE,
    [eg.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: r.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
    [eg.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
    [eg.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR,
    [eg.NoticeTypes.POMELO_ELIGIBLE]: r.DismissibleContent.NAGBAR_NOTICE_POMELO,
    [eg.NoticeTypes.UU_MIGRATION]: r.DismissibleContent.UU_MIGRATION_NOTICE
  },
  ex = {
    [eg.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
    [eg.NoticeTypes.PREMIUM_UNCANCEL]: "hideUncancelReminder",
    [eg.NoticeTypes.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
    [eg.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
    [eg.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
    [eg.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
    [eg.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
    [eg.NoticeTypes.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
    [eg.NoticeTypes.SERVER_USAGE_SURVEY]: "hideServerUsageSurvey",
    [eg.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
    [eg.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
    [eg.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE]: "hideMacOS17_18DeprecationMessageNotice",
    [eg.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
    [eg.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH]: "hideEslatamLanguageLaunchNotice"
  },
  ey = new Set([eg.NoticeTypes.NO_INPUT_DETECTED, eg.NoticeTypes.STREAMER_MODE, eg.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eg.NoticeTypes.SPOTIFY_AUTO_PAUSED, eg.NoticeTypes.DISPATCH_ERROR, eg.NoticeTypes.DISPATCH_ERROR, eg.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eg.NoticeTypes.BLOCKED_BY_PROXY]),
  eU = {},
  ej = Object.freeze({
    id: null,
    message: null,
    buttonText: null,
    callback: void 0,
    metadata: null
  }),
  eb = null;

function eG(e) {
  return ex[e] + "-untilAtLeast"
}

function eB(e, t, n) {
  var s, l, a;
  if (null == e) return;
  let i = ex[e];
  if (null != i && !t && o.default.set(i, !0), ey.has(e) && (eU[e] = !0), null != n && null != i) {
    ;
    s = e, l = n, o.default.set(eG(s), l.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
  } else {
    ;
    a = e, o.default.remove(eG(a))
  }
}

function ek(e) {
  if (null == e) return !1;
  let t = function(e) {
    let {
      enabled: t
    } = U.PremiumTier2TrialOfferNoticeExperiment.getCurrentConfig({
      location: "NoticeStore_isNoticeDismissed"
    }, {
      autoTrackExposure: !0,
      disable: e !== eg.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING
    });
    return t ? null : eD[e]
  }(e);
  if (null != t) return (0, I.isDismissibleContentDismissed)(t);
  let n = ex[e];
  if (null != n) {
    let t = function(e) {
      let t = o.default.get(eG(e));
      return null != t ? l(t) : null
    }(e);
    if (null != t) return null == t ? void 0 : t.isAfter(l())
  }
  let s = eU[e];
  return !!s || (null != n && "" !== n ? o.default.get(n) : !!ey.has(e) && s)
}
let eF = [eg.NoticeTypes.QUARANTINED, eg.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eg.NoticeTypes.VIEWING_ROLES, eg.NoticeTypes.INVITED_TO_SPEAK, eg.NoticeTypes.LURKING_GUILD, eg.NoticeTypes.VOICE_DISABLED, eg.NoticeTypes.NO_INPUT_DETECTED, eg.NoticeTypes.HARDWARE_MUTE, eg.NoticeTypes.H264_DISABLED, eg.NoticeTypes.DISPATCH_ERROR, eg.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eg.NoticeTypes.SPOTIFY_AUTO_PAUSED, eg.NoticeTypes.DROPS_PROGRESS_INTERRUPTION, eg.NoticeTypes.WIN32_DEPRECATED_MESSAGE, eg.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE, eg.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE, eg.NoticeTypes.BLOCKED_BY_PROXY, eg.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eg.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION, eg.NoticeTypes.GUILD_RAID_NOTIFICATION, eg.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION, eg.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH, eg.NoticeTypes.UNCLAIMED_ACCOUNT, eg.NoticeTypes.POMELO_ELIGIBLE, eg.NoticeTypes.PENDING_MEMBER, eg.NoticeTypes.OUTBOUND_PROMOTION, eg.NoticeTypes.CORRUPT_INSTALLATION, eg.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eg.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eg.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eg.NoticeTypes.STREAMER_MODE, eg.NoticeTypes.SCHEDULED_MAINTENANCE, eg.NoticeTypes.BOUNCED_EMAIL_DETECTED, eg.NoticeTypes.UNVERIFIED_ACCOUNT, eg.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING, eg.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING, eg.NoticeTypes.PREMIUM_UNCANCEL, eg.NoticeTypes.PREMIUM_MISSING_PAYMENT, eg.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT, eg.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT, eg.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eg.NoticeTypes.PREMIUM_REACTIVATE, eg.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION, eg.NoticeTypes.MFA_SMS_BACKUP, eg.NoticeTypes.APPLICATION_TEST_MODE, eg.NoticeTypes.LOCALIZED_PRICING, eg.NoticeTypes.DOWNLOAD_NAG, eg.NoticeTypes.CONNECT_SPOTIFY, eg.NoticeTypes.CONNECT_PLAYSTATION, eg.NoticeTypes.SURVEY, eg.NoticeTypes.SERVER_USAGE_SURVEY, eg.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR, eg.NoticeTypes.DROPS_GO_LIVE_BANNER, eg.NoticeTypes.DROPS_ENDED_INCOMPLETE, eg.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR, eg.NoticeTypes.UU_MIGRATION],
  ew = [eg.NoticeTypes.QUARANTINED, eg.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eg.NoticeTypes.VIEWING_ROLES, eg.NoticeTypes.INVITED_TO_SPEAK, eg.NoticeTypes.LURKING_GUILD, eg.NoticeTypes.VOICE_DISABLED, eg.NoticeTypes.NO_INPUT_DETECTED, eg.NoticeTypes.HARDWARE_MUTE, eg.NoticeTypes.H264_DISABLED, eg.NoticeTypes.DISPATCH_ERROR, eg.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eg.NoticeTypes.SPOTIFY_AUTO_PAUSED, eg.NoticeTypes.BLOCKED_BY_PROXY, eg.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eg.NoticeTypes.PENDING_MEMBER, eg.NoticeTypes.STREAMER_MODE, eg.NoticeTypes.SCHEDULED_MAINTENANCE],
  eH = {
    [eg.NoticeTypes.GUILD_RAID_NOTIFICATION]: {
      predicate: () => (0, g.shouldShowRaidNotificationNagbar)().show && !ek(eg.NoticeTypes.GUILD_RAID_NOTIFICATION),
      metadata: () => {
        let e = {
          dismissUntil: l().add(3, "hours").toDate()
        };
        return e
      }
    },
    [eg.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE]: {
      predicate: e => {
        let {
          currentUser: t,
          selectedGuildId: n
        } = e;
        if (null == n) return !1;
        let s = q.default.getMember(n, t.id);
        return null != s && !s.isPending && (0, O.hasAutomodQuarantinedProfile)(s)
      }
    },
    [eg.NoticeTypes.QUARANTINED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return t.hasFlag(eg.UserFlags.QUARANTINED)
      }
    },
    [eg.NoticeTypes.VIEWING_ROLES]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return v.default.isViewingRoles(t)
      }
    },
    [eg.NoticeTypes.INVITED_TO_SPEAK]: {
      predicate: e => {
        let {
          voiceState: t
        } = e;
        return (0, V.getAudienceRequestToSpeakState)(t) === V.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
      }
    },
    [eg.NoticeTypes.LURKING_GUILD]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && P.default.isLurking(t)
      }
    },
    [eg.NoticeTypes.VOICE_DISABLED]: {
      predicate: () => null != el.default.getRemoteDisconnectVoiceChannelId()
    },
    [eg.NoticeTypes.VOICE_CONNECTED_LAST_SESSION]: {
      predicate: () => null != el.default.getLastSessionVoiceChannelId()
    },
    [eg.NoticeTypes.NO_INPUT_DETECTED]: {
      predicate: e => {
        let {
          voiceChannelId: t,
          voiceState: n
        } = e, s = Z.default.getChannel(t), l = (null == s ? void 0 : s.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
        return !1 === ee.default.getInputDetected() && !l
      }
    },
    [eg.NoticeTypes.H264_DISABLED]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e, n = Z.default.getChannel(t);
        return !ee.default.getOpenH264() && null != t && eE.default.hasVideo(t) && null != n && n.isGuildStageVoice()
      }
    },
    [eg.NoticeTypes.HARDWARE_MUTE]: {
      predicate: () => el.default.isConnected() && ee.default.isHardwareMute(),
      metadata: () => {
        let e = ee.default.getInputDeviceId(),
          t = Q.default.getVendor(e),
          n = Q.default.getModel(e);
        if (null != t && null != n) return {
          vendor: t,
          model: n
        }
      }
    },
    [eg.NoticeTypes.DISPATCH_ERROR]: {
      predicate: () => null != eA.default.getLastError(),
      metadata: () => ({
        error: eA.default.getLastError()
      })
    },
    [eg.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
      predicate: () => null != eC.default.getLastProgress(),
      metadata: () => eC.default.getLastProgress()
    },
    [eg.NoticeTypes.SPOTIFY_AUTO_PAUSED]: {
      predicate: () => H.default.wasAutoPaused()
    },
    [eg.NoticeTypes.BLOCKED_BY_PROXY]: {
      predicate: () => !ek(eg.NoticeTypes.BLOCKED_BY_PROXY) && k.default.blockedByProxy && B.default.getCurrentConfig({
        location: "notice_store"
      }).eligibleForNotice
    },
    [eg.NoticeTypes.UNCLAIMED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && !t.isClaimed()
      }
    },
    [eg.NoticeTypes.PENDING_MEMBER]: {
      predicate: e => {
        var t, n, s;
        let {
          selectedGuildId: l,
          currentUser: a
        } = e;
        return null !== (s = null != l && null != a && !(null === (t = $.default.getGuild(l)) || void 0 === t ? void 0 : t.hasFeature(eg.GuildFeatures.GUILD_ONBOARDING)) && (null === (n = q.default.getMember(l, a.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== s && s
      }
    },
    [eg.NoticeTypes.OUTBOUND_PROMOTION]: {
      predicate: () => (0, b.shouldShowOutboundPromotionNotice)()
    },
    [eg.NoticeTypes.CORRUPT_INSTALLATION]: {
      predicate: () => ep.isPlatformEmbedded && (!i.default.supported() || eh.default.isCorruptInstallation())
    },
    [eg.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e;
        return null != t && eE.default.hasVideo(t) && !ee.default.supports(eP.Features.VIDEO) && !ek(eg.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER)
      }
    },
    [eg.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return eS.default.canRedeemPremiumPerks(t) && X.default.getDetectedOffPlatformPremiumPerks().length > 0
      },
      metadata: () => {
        let e = X.default.getDetectedOffPlatformPremiumPerks();
        return e[0]
      }
    },
    [eg.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
      predicate: () => !ek(eg.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && X.default.getDetectedOffPlatformPremiumPerks().length > 0,
      metadata: () => {
        let e = X.default.getDetectedOffPlatformPremiumPerks();
        return e[0]
      }
    },
    [eg.NoticeTypes.STREAMER_MODE]: {
      predicate: () => eo.default.enabled
    },
    [eg.NoticeTypes.DOWNLOAD_NAG]: {
      predicate: () => !ep.isPlatformEmbedded && !ek(eg.NoticeTypes.DOWNLOAD_NAG)
    },
    [eg.NoticeTypes.SCHEDULED_MAINTENANCE]: {
      predicate: () => null != er.default.getScheduledMaintenance(),
      metadata: () => {
        let e = er.default.getScheduledMaintenance();
        if (null != e) return {
          id: e.id,
          start: new Date(e.scheduled_for),
          end: new Date(e.scheduled_until)
        }
      }
    },
    [eg.NoticeTypes.SURVEY]: {
      predicate: () => null != eu.default.getCurrentSurvey(),
      metadata: () => eu.default.getCurrentSurvey()
    },
    [eg.NoticeTypes.SERVER_USAGE_SURVEY]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && h.default.getCurrentConfig({
          location: "notice_store"
        }).showSurvey && !ek(eg.NoticeTypes.SERVER_USAGE_SURVEY)
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
    [eg.NoticeTypes.UNVERIFIED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return (null == t ? void 0 : t.email) != null && !t.verified
      }
    },
    [eg.NoticeTypes.BOUNCED_EMAIL_DETECTED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null == t ? void 0 : t.hasBouncedEmail
      }
    },
    [eg.NoticeTypes.CONNECT_SPOTIFY]: {
      predicate: () => !H.default.hasConnectedAccount() && S.default.isObservedAppRunning(E.default.get(eg.PlatformTypes.SPOTIFY).name) && !ek(eg.NoticeTypes.CONNECT_SPOTIFY)
    },
    [eg.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: {
      predicate: () => {
        let {
          enabled: e
        } = j.default.getCurrentConfig({
          location: "window32_deprecation_message"
        });
        return e && (null === c.default || void 0 === c.default ? void 0 : c.default.os.arch) === "ia32" && (null === c.default || void 0 === c.default ? void 0 : c.default.process.platform) === "win32"
      },
      metadata: () => {
        let e = {
          dismissUntil: l().add(5, "days").toDate()
        };
        return e
      }
    },
    [eg.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE]: {
      predicate: () => {
        if ((null === c.default || void 0 === c.default ? void 0 : c.default.process.platform) === "win32") try {
          let e = parseInt(null === c.default || void 0 === c.default ? void 0 : c.default.os.release.split(".")[0]);
          return e < 10
        } catch (e) {}
        return !1
      },
      metadata: () => {
        let e = {
          dismissUntil: l().add(5, "days").toDate()
        };
        return e
      }
    },
    [eg.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE]: {
      predicate: () => {
        if ((null === c.default || void 0 === c.default ? void 0 : c.default.process.platform) === "darwin") try {
          let e = parseInt(null === c.default || void 0 === c.default ? void 0 : c.default.os.release.split(".")[0]);
          return e < 19
        } catch (e) {}
        return !1
      },
      metadata: () => {
        let e = {
          dismissUntil: l().add(5, "days").toDate()
        };
        return e
      }
    },
    [eg.NoticeTypes.CONNECT_PLAYSTATION]: {
      predicate: () => J.default.isSuggestedAccountType(eg.PlatformTypes.PLAYSTATION) && null == J.default.getAccount(null, eg.PlatformTypes.PLAYSTATION) && !ek(eg.NoticeTypes.CONNECT_PLAYSTATION)
    },
    [eg.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: {
      predicate: () => {
        let e = eI.default.getAlmostExpiringTrialOffers([eR.PremiumSubscriptionSKUs.TIER_2]);
        return e.length > 0 && !ek(eg.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)
      }
    },
    [eg.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: {
      predicate: () => {
        let e = eI.default.getAlmostExpiringTrialOffers([eR.PremiumSubscriptionSKUs.TIER_0]);
        return e.length > 0 && !ek(eg.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)
      }
    },
    [eg.NoticeTypes.PREMIUM_UNCANCEL]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? l(t.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eg.SubscriptionStatusTypes.CANCELED && 1 >= l().diff(l(t.canceledAt), "days"), i = null != t && l(t.currentPeriodEnd).isBefore(l()), r = null != t && t.status === eg.SubscriptionStatusTypes.CANCELED && !i && s <= 7 && s >= 0 && (0, eS.isPremiumExactly)(n, eR.PremiumTypes.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ek(eg.NoticeTypes.PREMIUM_UNCANCEL) && r
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? l(n.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eS.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != a ? eS.default.getPremiumType(a) : null;
        return {
          daysLeft: s,
          premiumType: i,
          premiumSubscription: n
        }
      }
    },
    [eg.NoticeTypes.PREMIUM_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? l(t.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = null != t ? l(t.currentPeriodEnd).diff(l(t.currentPeriodStart).startOf("day"), "days") : 0, i = null != t && l(t.currentPeriodEnd).isBefore(l()), r = em.default.applicationIdsFetched.has(eR.PREMIUM_SUBSCRIPTION_APPLICATION), o = em.default.getForApplication(eR.PREMIUM_SUBSCRIPTION_APPLICATION), u = null != t ? (0, eS.getPremiumPlanItem)(t) : null, d = null != u ? eS.default.getSkuIdForPlan(u.planId) : null, c = null != o && null != u && Array.from(o).filter(e => {
          let {
            skuId: t,
            consumed: n
          } = e;
          return !n && t === d
        }).length > 0, E = null != t && s <= (a > 14 ? 7 : 2) && s >= 0 && t.status !== eg.SubscriptionStatusTypes.PAST_DUE && !i && r && !c && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ek(eg.NoticeTypes.PREMIUM_MISSING_PAYMENT) && E
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? l(n.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eS.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != a ? eS.default.getPremiumType(a) : null;
        return {
          daysLeft: s,
          premiumType: i,
          premiumSubscription: n
        }
      }
    },
    [eg.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && null != t.paymentSourceId ? e_.default.getPaymentSource(t.paymentSourceId) : null, a = null != t && l(t.currentPeriodEnd).isBefore(l()), i = null != t && t.status === eg.SubscriptionStatusTypes.PAST_DUE && !a && null != s && s.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ek(eg.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT) && i
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
    [eg.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && l(t.currentPeriodEnd).isBefore(l()), a = null != t && t.status === eg.SubscriptionStatusTypes.PAST_DUE && !s && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ek(eg.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a
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
    [eg.NoticeTypes.MFA_SMS_BACKUP]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && t.mfaEnabled && !t.hasFlag(eg.UserFlags.MFA_SMS) && !t.hasFlag(eg.UserFlags.STAFF) && !t.hasFlag(eg.UserFlags.PARTNER) && !ek(eg.NoticeTypes.MFA_SMS_BACKUP)
      }
    },
    [eg.NoticeTypes.APPLICATION_TEST_MODE]: {
      predicate: () => null != eN.default.testModeApplicationId,
      metadata: () => {
        if (null == eN.default.testModeApplicationId) return {};
        let e = eN.default.testModeApplicationId,
          t = f.default.getApplication(e),
          n = null != t ? t.name : e;
        return {
          applicationName: n,
          applicationId: e
        }
      }
    },
    [eg.NoticeTypes.PREMIUM_REACTIVATE]: {
      predicate: () => !ek(eg.NoticeTypes.PREMIUM_REACTIVATE) && y.default.shouldShowReactivateNotice()
    },
    [eg.NoticeTypes.LOCALIZED_PRICING]: {
      predicate: e => {
        let {
          isLocalizedPromoEnabled: t
        } = e;
        return !ek(eg.NoticeTypes.LOCALIZED_PRICING) && t
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
    [eg.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && l(t.currentPeriodEnd).isBefore(l()), a = null != t && null != t.paymentSourceId ? e_.default.getPaymentSource(t.paymentSourceId) : null, i = null != a && ev.PREPAID_PAYMENT_SOURCES.has(a.type), r = null != t && t.status === eg.SubscriptionStatusTypes.PAST_DUE && !s && i && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ek(eg.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && r
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e, n = (null == t ? void 0 : t.status) === eg.SubscriptionStatusTypes.PAST_DUE ? l().diff(l(t.currentPeriodStart), "days") : 0, s = l(null == t ? void 0 : t.currentPeriodStart).add((0, eS.getBillingGracePeriodDays)(t), "days").toDate();
        return {
          daysPastDue: n,
          dismissUntil: s
        }
      }
    },
    [eg.NoticeTypes.DROPS_GO_LIVE_BANNER]: {
      predicate: () => !ek(eg.NoticeTypes.DROPS_GO_LIVE_BANNER) && (0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, N.getShowDropsNoticeBanner)(eO.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eO.PartnerGame.FORTNITE
      })
    },
    [eg.NoticeTypes.DROPS_PROGRESS_INTERRUPTION]: {
      predicate: () => m.default.isCurrentQuestInterrupted && null != m.default.currentDropQuestGameTitle,
      metadata: () => ({
        gameTitle: m.default.currentDropQuestGameTitle,
        reloadCallback: () => window.location.reload(!0)
      })
    },
    [eg.NoticeTypes.POMELO_ELIGIBLE]: {
      predicate: () => (0, x.isEligibleForPomelo)() && !ek(eg.NoticeTypes.POMELO_ELIGIBLE) && !(0, D.getForceMigration)()
    },
    [eg.NoticeTypes.DROPS_ENDED_INCOMPLETE]: {
      predicate: () => !ek(eg.NoticeTypes.DROPS_ENDED_INCOMPLETE) && (0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, N.getShowDropsEndedIncompleteBanner)(eO.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eO.PartnerGame.FORTNITE
      })
    },
    [eg.NoticeTypes.UU_MIGRATION]: {
      predicate: () => (0, x.isEligibleForPomelo)() && !ek(eg.NoticeTypes.UU_MIGRATION) && (0, D.getForceMigration)()
    },
    [eg.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e, n = null != t ? $.default.getGuild(t) : null;
        return null != t && null != R.default.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eg.GuildFeatures.COMMUNITY)) && !ek(eg.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
      },
      metadata: e => {
        let {
          selectedGuildId: t
        } = e, n = {
          dismissUntil: l().add(2, "hours").toDate()
        };
        if (null != t) {
          let e = R.default.getMentionRaidDetected(t);
          null != e && (n.decisionId = e.decisionId)
        }
        return n
      }
    },
    [eg.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: {
      predicate: () => !ek(eg.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== T.default.getEligibleGuildsForNagActivate().length && (0, _.isCreatorMonetizationNagActivateEnabled)()
    },
    [eg.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return !ek(eg.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, L.shouldShowGuildOnboardingUpsell)(t, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    },
    [eg.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return w.isEligibleForNotice(t)
      }
    },
    [eg.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH]: {
      predicate: () => d.ESLatamLaunchExperiment.getCurrentConfig({
        location: "notice_store"
      }).enabled && !ek(eg.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH)
    },
    [eg.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION]: {
      predicate: () => {
        let e = W.default.getCurrentUserActiveStream();
        if (null == e) return !1;
        let t = (0, C.encodeStreamKey)(e),
          n = F.default.getStreamHeartbeatFailure(t);
        return null != n && Date.now() - n.firstFailedAt >= eL.CONSECUTIVE_HEARTBEAT_PERIOD_MS
      },
      metadata: () => {
        let e = W.default.getCurrentUserActiveStream();
        return {
          streamKey: null != e ? (0, C.encodeStreamKey)(e) : null
        }
      }
    }
  };

function eV() {
  if (!A.default.isConnected()) return !1;
  eb = null;
  let e = ec.default.getCurrentUser();
  if (null == e) return !1;
  let t = eT.default.getPremiumSubscription(),
    n = ef.default.isLocalizedPromoEnabled,
    s = ei.default.getGuildId(),
    l = ea.default.getVoiceChannelId(),
    a = null != l ? eE.default.getVoiceStateForChannel(l) : null,
    i = eM.CONFERENCE_MODE_ENABLED ? ew : eF;
  for (let u of i)
    if (null != eH[u] && eH[u].predicate({
        selectedGuildId: s,
        voiceChannelId: l,
        voiceState: a,
        currentUser: e,
        premiumSubscription: t,
        isLocalizedPromoEnabled: n
      })) {
      var r, o;
      let n = null === (r = (o = eH[u]).metadata) || void 0 === r ? void 0 : r.call(o, {
        currentUser: e,
        premiumSubscription: t,
        selectedGuildId: s
      });
      eb = {
        ...ej,
        type: u,
        metadata: n
      };
      break
    } null != eb && ek(eb.type) && (eb = null)
}

function eY() {
  return !eo.default.enabled && delete eU[eg.NoticeTypes.STREAMER_MODE], eV()
}
class eW extends a.default.Store {
  initialize() {
    this.syncWith([eu.default, es.default, X.default, ei.default, G.default, eI.default, z.default, J.default, Y.default, M.default, F.default, W.default], eV), this.waitFor(ec.default, er.default, $.default, q.default, el.default, ee.default, eo.default, p.default, ei.default, ed.default, H.default, S.default, es.default, eA.default, eC.default, eN.default, et.default, eT.default, eh.default, X.default, e_.default, en.default, G.default, em.default, eI.default, J.default, P.default, m.default, T.default, k.default, F.default, W.default)
  }
  hasNotice() {
    return null != eb && null != eb.type
  }
  getNotice() {
    return null == ed.default.getAction() ? eb : null
  }
  isNoticeDismissed(e) {
    return ek(e)
  }
}
eW.displayName = "NoticeStore";
var eK = new eW(u.default, {
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
  GUILD_MEMBER_ADD: function(e) {
    return e.user.id === K.default.getId() && eV()
  },
  GUILD_MEMBER_UPDATE: eV,
  SURVEY_FETCHED: eV,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eV,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eV,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eV,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eV,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.some(e => {
      let {
        userId: t
      } = e;
      return t !== K.default.getId()
    }) && eV()
  },
  STREAMER_MODE_UPDATE: eY,
  RUNNING_STREAMER_TOOLS_CHANGE: eY,
  DISPATCH_APPLICATION_ERROR: function() {
    return delete eU[eg.NoticeTypes.DISPATCH_ERROR], eV()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    return delete eU[eg.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS], eV()
  },
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
    return eV()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
    return eV()
  },
  NOTICE_SHOW: function(e) {
    eb = e.notice
  },
  NOTICE_DISMISS: function(e) {
    return null != eb && (null == e.id || e.id === eb.id) && (eB(eb.type, e.isTemporary, e.untilAtLeast), eV())
  },
  NOTICE_DISABLE: function(e) {
    let {
      noticeType: t
    } = e;
    return eB(t), eV()
  },
  LOGOUT: function() {
    eU = {}, eb = null
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: eV,
  AUTO_MODERATION_MENTION_RAID_DETECTION: eV,
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eV,
  PROXY_BLOCKED_REQUEST: eV
})