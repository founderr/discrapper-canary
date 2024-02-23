"use strict";
n.r(t), n.d(t, {
  typeToDismissibleContent: function() {
    return eU
  },
  default: function() {
    return eZ
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
  D = n("404931"),
  x = n("128887"),
  y = n("42060"),
  U = n("167209"),
  j = n("104032"),
  b = n("983424"),
  G = n("897107"),
  B = n("44678"),
  k = n("807345"),
  F = n("840895"),
  w = n("143573"),
  H = n("2973"),
  V = n("703537"),
  Y = n("662285"),
  K = n("808422"),
  W = n("845579"),
  z = n("374363"),
  Q = n("373469"),
  Z = n("271938"),
  J = n("250404"),
  X = n("533222"),
  q = n("42203"),
  $ = n("47319"),
  ee = n("320268"),
  et = n("26989"),
  en = n("305961"),
  es = n("42887"),
  el = n("385649"),
  ea = n("957255"),
  ei = n("669280"),
  er = n("945956"),
  eo = n("18494"),
  eu = n("162771"),
  ed = n("168851"),
  ec = n("102985"),
  eE = n("381684"),
  ef = n("330387"),
  e_ = n("697218"),
  eT = n("800762"),
  eI = n("160299"),
  em = n("357957"),
  eN = n("521012"),
  ep = n("340412"),
  eS = n("437712"),
  eA = n("167726"),
  eC = n("773336"),
  eh = n("719923"),
  eg = n("189459"),
  eM = n("316661"),
  eO = n("352326"),
  eR = n("49111"),
  eL = n("492397"),
  ev = n("411511"),
  eP = n("646718"),
  eD = n("166604"),
  ex = n("843455"),
  ey = n("353927");
let eU = {
    [eR.NoticeTypes.LOCALIZED_PRICING]: r.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING,
    [eR.NoticeTypes.DOWNLOAD_NAG]: r.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD,
    [eR.NoticeTypes.CONNECT_SPOTIFY]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY,
    [eR.NoticeTypes.CONNECT_PLAYSTATION]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
    [eR.NoticeTypes.MFA_SMS_BACKUP]: r.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP,
    [eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
    [eR.NoticeTypes.PREMIUM_REACTIVATE]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
    [eR.NoticeTypes.DROPS_GO_LIVE_BANNER]: r.DismissibleContent.QUEST_2_GO_LIVE_BANNER,
    [eR.NoticeTypes.DROPS_ENDED_INCOMPLETE]: r.DismissibleContent.QUEST_2_ENDED_INCOMPLETE,
    [eR.NoticeTypes.BOUNCED_EMAIL_DETECTED]: r.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE,
    [eR.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: r.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
    [eR.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
    [eR.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR,
    [eR.NoticeTypes.POMELO_ELIGIBLE]: r.DismissibleContent.NAGBAR_NOTICE_POMELO,
    [eR.NoticeTypes.UU_MIGRATION]: r.DismissibleContent.UU_MIGRATION_NOTICE
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
    [eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
    [eR.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH]: "hideEslatamLanguageLaunchNotice"
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
  var s, l, a;
  if (null == e) return;
  let i = ej[e];
  if (null != i && !t && o.default.set(i, !0), eb.has(e) && (eG[e] = !0), null != n && null != i) {
    ;
    s = e, l = n, o.default.set(eF(s), l.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
  } else {
    ;
    a = e, o.default.remove(eF(a))
  }
}

function eH(e) {
  if (null == e) return !1;
  let t = function(e) {
    let {
      enabled: t
    } = b.PremiumTier2TrialOfferNoticeExperiment.getCurrentConfig({
      location: "NoticeStore_isNoticeDismissed"
    }, {
      autoTrackExposure: !0,
      disable: e !== eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING
    });
    return t ? null : eU[e]
  }(e);
  if (null != t) return (0, I.isDismissibleContentDismissed)(t);
  let n = ej[e];
  if (null != n) {
    let t = function(e) {
      let t = o.default.get(eF(e));
      return null != t ? l(t) : null
    }(e);
    if (null != t) return null == t ? void 0 : t.isAfter(l())
  }
  let s = eG[e];
  return !!s || (null != n && "" !== n ? o.default.get(n) : !!eb.has(e) && s)
}
let eV = [eR.NoticeTypes.QUARANTINED, eR.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eR.NoticeTypes.VIEWING_ROLES, eR.NoticeTypes.INVITED_TO_SPEAK, eR.NoticeTypes.LURKING_GUILD, eR.NoticeTypes.VOICE_DISABLED, eR.NoticeTypes.NO_INPUT_DETECTED, eR.NoticeTypes.HARDWARE_MUTE, eR.NoticeTypes.H264_DISABLED, eR.NoticeTypes.DISPATCH_ERROR, eR.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.NoticeTypes.SPOTIFY_AUTO_PAUSED, eR.NoticeTypes.DROPS_PROGRESS_INTERRUPTION, eR.NoticeTypes.WIN32_DEPRECATED_MESSAGE, eR.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE, eR.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE, eR.NoticeTypes.BLOCKED_BY_PROXY, eR.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eR.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION, eR.NoticeTypes.GUILD_RAID_NOTIFICATION, eR.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION, eR.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH, eR.NoticeTypes.UNCLAIMED_ACCOUNT, eR.NoticeTypes.POMELO_ELIGIBLE, eR.NoticeTypes.PENDING_MEMBER, eR.NoticeTypes.OUTBOUND_PROMOTION, eR.NoticeTypes.CORRUPT_INSTALLATION, eR.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eR.NoticeTypes.STREAMER_MODE, eR.NoticeTypes.SCHEDULED_MAINTENANCE, eR.NoticeTypes.BOUNCED_EMAIL_DETECTED, eR.NoticeTypes.UNVERIFIED_ACCOUNT, eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING, eR.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING, eR.NoticeTypes.PREMIUM_UNCANCEL, eR.NoticeTypes.PREMIUM_MISSING_PAYMENT, eR.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT, eR.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT, eR.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eR.NoticeTypes.PREMIUM_REACTIVATE, eR.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION, eR.NoticeTypes.MFA_SMS_BACKUP, eR.NoticeTypes.APPLICATION_TEST_MODE, eR.NoticeTypes.LOCALIZED_PRICING, eR.NoticeTypes.DOWNLOAD_NAG, eR.NoticeTypes.CONNECT_SPOTIFY, eR.NoticeTypes.CONNECT_PLAYSTATION, eR.NoticeTypes.SURVEY, eR.NoticeTypes.SERVER_USAGE_SURVEY, eR.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR, eR.NoticeTypes.DROPS_GO_LIVE_BANNER, eR.NoticeTypes.DROPS_ENDED_INCOMPLETE, eR.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR, eR.NoticeTypes.HABITUAL_DND, eR.NoticeTypes.UU_MIGRATION],
  eY = [eR.NoticeTypes.QUARANTINED, eR.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eR.NoticeTypes.VIEWING_ROLES, eR.NoticeTypes.INVITED_TO_SPEAK, eR.NoticeTypes.LURKING_GUILD, eR.NoticeTypes.VOICE_DISABLED, eR.NoticeTypes.NO_INPUT_DETECTED, eR.NoticeTypes.HARDWARE_MUTE, eR.NoticeTypes.H264_DISABLED, eR.NoticeTypes.DISPATCH_ERROR, eR.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.NoticeTypes.SPOTIFY_AUTO_PAUSED, eR.NoticeTypes.BLOCKED_BY_PROXY, eR.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eR.NoticeTypes.PENDING_MEMBER, eR.NoticeTypes.STREAMER_MODE, eR.NoticeTypes.SCHEDULED_MAINTENANCE],
  eK = {
    [eR.NoticeTypes.GUILD_RAID_NOTIFICATION]: {
      predicate: () => (0, g.shouldShowRaidNotificationNagbar)().show && !eH(eR.NoticeTypes.GUILD_RAID_NOTIFICATION),
      metadata: () => {
        let e = {
          dismissUntil: l().add(3, "hours").toDate()
        };
        return e
      }
    },
    [eR.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE]: {
      predicate: e => {
        let {
          currentUser: t,
          selectedGuildId: n
        } = e;
        if (null == n) return !1;
        let s = et.default.getMember(n, t.id);
        return null != s && !s.isPending && (0, O.hasAutomodQuarantinedProfile)(s)
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
        return v.default.isViewingRoles(t)
      }
    },
    [eR.NoticeTypes.INVITED_TO_SPEAK]: {
      predicate: e => {
        let {
          voiceState: t
        } = e;
        return (0, K.getAudienceRequestToSpeakState)(t) === K.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
      }
    },
    [eR.NoticeTypes.LURKING_GUILD]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && P.default.isLurking(t)
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
        } = e, s = q.default.getChannel(t), l = (null == s ? void 0 : s.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
        return !1 === es.default.getInputDetected() && !l
      }
    },
    [eR.NoticeTypes.H264_DISABLED]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e, n = q.default.getChannel(t);
        return !es.default.getOpenH264() && null != t && eT.default.hasVideo(t) && null != n && n.isGuildStageVoice()
      }
    },
    [eR.NoticeTypes.HARDWARE_MUTE]: {
      predicate: () => er.default.isConnected() && es.default.isHardwareMute(),
      metadata: () => {
        let e = es.default.getInputDeviceId(),
          t = X.default.getVendor(e),
          n = X.default.getModel(e);
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
      predicate: () => Y.default.wasAutoPaused()
    },
    [eR.NoticeTypes.BLOCKED_BY_PROXY]: {
      predicate: () => !eH(eR.NoticeTypes.BLOCKED_BY_PROXY) && w.default.blockedByProxy && F.default.getCurrentConfig({
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
          selectedGuildId: l,
          currentUser: a
        } = e;
        return null !== (s = null != l && null != a && !(null === (t = en.default.getGuild(l)) || void 0 === t ? void 0 : t.hasFeature(eR.GuildFeatures.GUILD_ONBOARDING)) && (null === (n = et.default.getMember(l, a.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== s && s
      }
    },
    [eR.NoticeTypes.OUTBOUND_PROMOTION]: {
      predicate: () => (0, B.shouldShowOutboundPromotionNotice)()
    },
    [eR.NoticeTypes.CORRUPT_INSTALLATION]: {
      predicate: () => eC.isPlatformEmbedded && (!i.default.supported() || eO.default.isCorruptInstallation())
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
      metadata: () => {
        let e = ee.default.getDetectedOffPlatformPremiumPerks();
        return e[0]
      }
    },
    [eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
      predicate: () => !eH(eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && ee.default.getDetectedOffPlatformPremiumPerks().length > 0,
      metadata: () => {
        let e = ee.default.getDetectedOffPlatformPremiumPerks();
        return e[0]
      }
    },
    [eR.NoticeTypes.STREAMER_MODE]: {
      predicate: () => ec.default.enabled
    },
    [eR.NoticeTypes.DOWNLOAD_NAG]: {
      predicate: () => !eC.isPlatformEmbedded && !eH(eR.NoticeTypes.DOWNLOAD_NAG)
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
        return null != t && h.default.getCurrentConfig({
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
      predicate: () => !Y.default.hasConnectedAccount() && S.default.isObservedAppRunning(E.default.get(eR.PlatformTypes.SPOTIFY).name) && !eH(eR.NoticeTypes.CONNECT_SPOTIFY)
    },
    [eR.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: {
      predicate: () => {
        let {
          enabled: e
        } = G.default.getCurrentConfig({
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
    [eR.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE]: {
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
    [eR.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE]: {
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
    [eR.NoticeTypes.CONNECT_PLAYSTATION]: {
      predicate: () => $.default.isSuggestedAccountType(eR.PlatformTypes.PLAYSTATION) && null == $.default.getAccount(null, eR.PlatformTypes.PLAYSTATION) && !eH(eR.NoticeTypes.CONNECT_PLAYSTATION)
    },
    [eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: {
      predicate: () => {
        let e = ep.default.getAlmostExpiringTrialOffers([eP.PremiumSubscriptionSKUs.TIER_2]);
        return e.length > 0 && !eH(eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)
      }
    },
    [eR.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: {
      predicate: () => {
        let e = ep.default.getAlmostExpiringTrialOffers([eP.PremiumSubscriptionSKUs.TIER_0]);
        return e.length > 0 && !eH(eR.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)
      }
    },
    [eR.NoticeTypes.PREMIUM_UNCANCEL]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? l(t.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eR.SubscriptionStatusTypes.CANCELED && 1 >= l().diff(l(t.canceledAt), "days"), i = null != t && l(t.currentPeriodEnd).isBefore(l()), r = null != t && t.status === eR.SubscriptionStatusTypes.CANCELED && !i && s <= 7 && s >= 0 && (0, eh.isPremiumExactly)(n, eP.PremiumTypes.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(eR.NoticeTypes.PREMIUM_UNCANCEL) && r
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? l(n.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eh.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != a ? eh.default.getPremiumType(a) : null;
        return {
          daysLeft: s,
          premiumType: i,
          premiumSubscription: n
        }
      }
    },
    [eR.NoticeTypes.PREMIUM_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? l(t.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = null != t ? l(t.currentPeriodEnd).diff(l(t.currentPeriodStart).startOf("day"), "days") : 0, i = null != t && l(t.currentPeriodEnd).isBefore(l()), r = eS.default.applicationIdsFetched.has(eP.PREMIUM_SUBSCRIPTION_APPLICATION), o = eS.default.getForApplication(eP.PREMIUM_SUBSCRIPTION_APPLICATION), u = null != t ? (0, eh.getPremiumPlanItem)(t) : null, d = null != u ? eh.default.getSkuIdForPlan(u.planId) : null, c = null != o && null != u && Array.from(o).filter(e => {
          let {
            skuId: t,
            consumed: n
          } = e;
          return !n && t === d
        }).length > 0, E = null != t && s <= (a > 14 ? 7 : 2) && s >= 0 && t.status !== eR.SubscriptionStatusTypes.PAST_DUE && !i && r && !c && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(eR.NoticeTypes.PREMIUM_MISSING_PAYMENT) && E
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? l(n.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eh.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != a ? eh.default.getPremiumType(a) : null;
        return {
          daysLeft: s,
          premiumType: i,
          premiumSubscription: n
        }
      }
    },
    [eR.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && null != t.paymentSourceId ? em.default.getPaymentSource(t.paymentSourceId) : null, a = null != t && l(t.currentPeriodEnd).isBefore(l()), i = null != t && t.status === eR.SubscriptionStatusTypes.PAST_DUE && !a && null != s && s.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(eR.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT) && i
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
        } = e, s = null != t && l(t.currentPeriodEnd).isBefore(l()), a = null != t && t.status === eR.SubscriptionStatusTypes.PAST_DUE && !s && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
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
      predicate: () => null != eA.default.testModeApplicationId,
      metadata: () => {
        if (null == eA.default.testModeApplicationId) return {};
        let e = eA.default.testModeApplicationId,
          t = f.default.getApplication(e),
          n = null != t ? t.name : e;
        return {
          applicationName: n,
          applicationId: e
        }
      }
    },
    [eR.NoticeTypes.PREMIUM_REACTIVATE]: {
      predicate: () => !eH(eR.NoticeTypes.PREMIUM_REACTIVATE) && j.default.shouldShowReactivateNotice()
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
        } = e, s = null != t && l(t.currentPeriodEnd).isBefore(l()), a = null != t && null != t.paymentSourceId ? em.default.getPaymentSource(t.paymentSourceId) : null, i = null != a && ex.PREPAID_PAYMENT_SOURCES.has(a.type), r = null != t && t.status === eR.SubscriptionStatusTypes.PAST_DUE && !s && i && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(eR.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && r
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e, n = (null == t ? void 0 : t.status) === eR.SubscriptionStatusTypes.PAST_DUE ? l().diff(l(t.currentPeriodStart), "days") : 0, s = l(null == t ? void 0 : t.currentPeriodStart).add((0, eh.getBillingGracePeriodDays)(t), "days").toDate();
        return {
          daysPastDue: n,
          dismissUntil: s
        }
      }
    },
    [eR.NoticeTypes.DROPS_GO_LIVE_BANNER]: {
      predicate: () => !eH(eR.NoticeTypes.DROPS_GO_LIVE_BANNER) && (0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, N.getShowDropsNoticeBanner)(ev.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: ev.PartnerGame.FORTNITE
      })
    },
    [eR.NoticeTypes.DROPS_PROGRESS_INTERRUPTION]: {
      predicate: () => m.default.isCurrentQuestInterrupted && null != m.default.currentDropQuestGameTitle,
      metadata: () => ({
        gameTitle: m.default.currentDropQuestGameTitle,
        reloadCallback: () => window.location.reload(!0)
      })
    },
    [eR.NoticeTypes.POMELO_ELIGIBLE]: {
      predicate: () => (0, U.isEligibleForPomelo)() && !eH(eR.NoticeTypes.POMELO_ELIGIBLE) && !(0, y.getForceMigration)()
    },
    [eR.NoticeTypes.DROPS_ENDED_INCOMPLETE]: {
      predicate: () => !eH(eR.NoticeTypes.DROPS_ENDED_INCOMPLETE) && (0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, N.getShowDropsEndedIncompleteBanner)(ev.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: ev.PartnerGame.FORTNITE
      })
    },
    [eR.NoticeTypes.UU_MIGRATION]: {
      predicate: () => (0, U.isEligibleForPomelo)() && !eH(eR.NoticeTypes.UU_MIGRATION) && (0, y.getForceMigration)()
    },
    [eR.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e, n = null != t ? en.default.getGuild(t) : null;
        return null != t && null != R.default.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eR.GuildFeatures.COMMUNITY)) && !eH(eR.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
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
    [eR.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: {
      predicate: () => !eH(eR.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== T.default.getEligibleGuildsForNagActivate().length && (0, _.isCreatorMonetizationNagActivateEnabled)()
    },
    [eR.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return !eH(eR.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, L.shouldShowGuildOnboardingUpsell)(t, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    },
    [eR.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return V.isEligibleForNotice(t)
      }
    },
    [eR.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH]: {
      predicate: () => d.ESLatamLaunchExperiment.getCurrentConfig({
        location: "notice_store"
      }).enabled && !eH(eR.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH)
    },
    [eR.NoticeTypes.HABITUAL_DND]: {
      predicate: () => D.default.showNagBar() && !W.QuietMode.getSetting() && W.StatusSetting.getSetting() === ex.StatusTypes.DND && x.QuietModeExperiment.getCurrentConfig({
        location: "notice_store"
      }).allowQuietMode
    },
    [eR.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION]: {
      predicate: () => {
        let e = Q.default.getCurrentUserActiveStream();
        if (null == e) return !1;
        let t = (0, C.encodeStreamKey)(e),
          n = H.default.getStreamHeartbeatFailure(t);
        return null != n && Date.now() - n.firstFailedAt >= eD.CONSECUTIVE_HEARTBEAT_PERIOD_MS
      },
      metadata: () => {
        let e = Q.default.getCurrentUserActiveStream();
        return {
          streamKey: null != e ? (0, C.encodeStreamKey)(e) : null
        }
      }
    }
  };

function eW() {
  if (!A.default.isConnected()) return !1;
  ek = null;
  let e = e_.default.getCurrentUser();
  if (null == e) return !1;
  let t = eN.default.getPremiumSubscription(),
    n = eI.default.isLocalizedPromoEnabled,
    s = eu.default.getGuildId(),
    l = eo.default.getVoiceChannelId(),
    a = null != l ? eT.default.getVoiceStateForChannel(l) : null,
    i = eL.CONFERENCE_MODE_ENABLED ? eY : eV;
  for (let u of i)
    if (null != eK[u] && eK[u].predicate({
        selectedGuildId: s,
        voiceChannelId: l,
        voiceState: a,
        currentUser: e,
        premiumSubscription: t,
        isLocalizedPromoEnabled: n
      })) {
      var r, o;
      let n = null === (r = (o = eK[u]).metadata) || void 0 === r ? void 0 : r.call(o, {
        currentUser: e,
        premiumSubscription: t,
        selectedGuildId: s
      });
      ek = {
        ...eB,
        type: u,
        metadata: n
      };
      break
    } null != ek && eH(ek.type) && (ek = null)
}

function ez() {
  return !ec.default.enabled && delete eG[eR.NoticeTypes.STREAMER_MODE], eW()
}
class eQ extends a.default.Store {
  initialize() {
    this.syncWith([eE.default, ei.default, ee.default, eu.default, k.default, ep.default, J.default, $.default, z.default, M.default, D.default, H.default, Q.default], eW), this.waitFor(e_.default, ed.default, en.default, et.default, er.default, es.default, ec.default, p.default, eu.default, ef.default, Y.default, S.default, ei.default, eg.default, eM.default, eA.default, el.default, eN.default, eO.default, ee.default, em.default, ea.default, k.default, eS.default, ep.default, $.default, P.default, m.default, T.default, w.default, H.default, Q.default)
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
eQ.displayName = "NoticeStore";
var eZ = new eQ(u.default, {
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
    return e.user.id === Z.default.getId() && eW()
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
      return t !== Z.default.getId()
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