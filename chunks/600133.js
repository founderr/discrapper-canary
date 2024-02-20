"use strict";
n.r(t), n.d(t, {
  typeToDismissibleContent: function() {
    return ev
  },
  default: function() {
    return eY
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
  S = n("619443"),
  A = n("875037"),
  C = n("398654"),
  h = n("54346"),
  g = n("681937"),
  M = n("619259"),
  O = n("179803"),
  R = n("38654"),
  L = n("267567"),
  v = n("404931"),
  P = n("128887"),
  D = n("42060"),
  x = n("167209"),
  y = n("104032"),
  U = n("897107"),
  j = n("44678"),
  b = n("807345"),
  G = n("840895"),
  B = n("143573"),
  k = n("703537"),
  F = n("662285"),
  w = n("808422"),
  H = n("845579"),
  V = n("374363"),
  Y = n("271938"),
  W = n("250404"),
  K = n("533222"),
  z = n("42203"),
  Q = n("47319"),
  Z = n("320268"),
  J = n("26989"),
  X = n("305961"),
  q = n("42887"),
  $ = n("385649"),
  ee = n("957255"),
  et = n("669280"),
  en = n("945956"),
  es = n("568307"),
  el = n("18494"),
  ea = n("162771"),
  ei = n("168851"),
  er = n("102985"),
  eo = n("381684"),
  eu = n("330387"),
  ed = n("697218"),
  ec = n("800762"),
  eE = n("160299"),
  ef = n("357957"),
  e_ = n("521012"),
  eT = n("340412"),
  eI = n("437712"),
  em = n("167726"),
  eN = n("773336"),
  ep = n("719923"),
  eS = n("189459"),
  eA = n("316661"),
  eC = n("352326"),
  eh = n("49111"),
  eg = n("492397"),
  eM = n("411511"),
  eO = n("646718"),
  eR = n("843455"),
  eL = n("353927");
let ev = {
    [eh.NoticeTypes.LOCALIZED_PRICING]: r.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING,
    [eh.NoticeTypes.DOWNLOAD_NAG]: r.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD,
    [eh.NoticeTypes.CONNECT_SPOTIFY]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY,
    [eh.NoticeTypes.CONNECT_PLAYSTATION]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
    [eh.NoticeTypes.MFA_SMS_BACKUP]: r.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP,
    [eh.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
    [eh.NoticeTypes.PREMIUM_REACTIVATE]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
    [eh.NoticeTypes.DROPS_GO_LIVE_BANNER]: r.DismissibleContent.QUEST_2_GO_LIVE_BANNER,
    [eh.NoticeTypes.DROPS_ENDED_INCOMPLETE]: r.DismissibleContent.QUEST_2_ENDED_INCOMPLETE,
    [eh.NoticeTypes.BOUNCED_EMAIL_DETECTED]: r.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE,
    [eh.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: r.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
    [eh.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
    [eh.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR,
    [eh.NoticeTypes.POMELO_ELIGIBLE]: r.DismissibleContent.NAGBAR_NOTICE_POMELO,
    [eh.NoticeTypes.UU_MIGRATION]: r.DismissibleContent.UU_MIGRATION_NOTICE
  },
  eP = {
    [eh.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
    [eh.NoticeTypes.PREMIUM_UNCANCEL]: "hideUncancelReminder",
    [eh.NoticeTypes.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
    [eh.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
    [eh.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
    [eh.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
    [eh.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
    [eh.NoticeTypes.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
    [eh.NoticeTypes.SERVER_USAGE_SURVEY]: "hideServerUsageSurvey",
    [eh.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
    [eh.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
    [eh.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE]: "hideMacOS17_18DeprecationMessageNotice",
    [eh.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH]: "hideEslatamLanguageLaunchNotice"
  },
  eD = new Set([eh.NoticeTypes.NO_INPUT_DETECTED, eh.NoticeTypes.STREAMER_MODE, eh.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eh.NoticeTypes.SPOTIFY_AUTO_PAUSED, eh.NoticeTypes.DISPATCH_ERROR, eh.NoticeTypes.DISPATCH_ERROR, eh.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eh.NoticeTypes.BLOCKED_BY_PROXY]),
  ex = {},
  ey = Object.freeze({
    id: null,
    message: null,
    buttonText: null,
    callback: void 0,
    metadata: null
  }),
  eU = null;

function ej(e) {
  return eP[e] + "-untilAtLeast"
}

function eb(e, t, n) {
  var s, l, a;
  if (null == e) return;
  let i = eP[e];
  if (null != i && !t && o.default.set(i, !0), eD.has(e) && (ex[e] = !0), null != n && null != i) {
    ;
    s = e, l = n, o.default.set(ej(s), l.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
  } else {
    ;
    a = e, o.default.remove(ej(a))
  }
}

function eG(e) {
  if (null == e) return !1;
  let t = ev[e];
  if (null != t) return (0, I.isDismissibleContentDismissed)(t);
  let n = eP[e];
  if (null != n) {
    let t = function(e) {
      let t = o.default.get(ej(e));
      return null != t ? l(t) : null
    }(e);
    if (null != t) return null == t ? void 0 : t.isAfter(l())
  }
  let s = ex[e];
  return !!s || (null != n && "" !== n ? o.default.get(n) : !!eD.has(e) && s)
}
let eB = [eh.NoticeTypes.QUARANTINED, eh.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eh.NoticeTypes.VIEWING_ROLES, eh.NoticeTypes.INVITED_TO_SPEAK, eh.NoticeTypes.LURKING_GUILD, eh.NoticeTypes.VOICE_DISABLED, eh.NoticeTypes.NO_INPUT_DETECTED, eh.NoticeTypes.HARDWARE_MUTE, eh.NoticeTypes.H264_DISABLED, eh.NoticeTypes.DISPATCH_ERROR, eh.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eh.NoticeTypes.SPOTIFY_AUTO_PAUSED, eh.NoticeTypes.DROPS_PROGRESS_INTERRUPTION, eh.NoticeTypes.WIN32_DEPRECATED_MESSAGE, eh.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE, eh.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE, eh.NoticeTypes.BLOCKED_BY_PROXY, eh.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eh.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION, eh.NoticeTypes.GUILD_RAID_NOTIFICATION, eh.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH, eh.NoticeTypes.UNCLAIMED_ACCOUNT, eh.NoticeTypes.POMELO_ELIGIBLE, eh.NoticeTypes.PENDING_MEMBER, eh.NoticeTypes.OUTBOUND_PROMOTION, eh.NoticeTypes.CORRUPT_INSTALLATION, eh.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eh.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eh.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eh.NoticeTypes.STREAMER_MODE, eh.NoticeTypes.SCHEDULED_MAINTENANCE, eh.NoticeTypes.BOUNCED_EMAIL_DETECTED, eh.NoticeTypes.UNVERIFIED_ACCOUNT, eh.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING, eh.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING, eh.NoticeTypes.PREMIUM_UNCANCEL, eh.NoticeTypes.PREMIUM_MISSING_PAYMENT, eh.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT, eh.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT, eh.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eh.NoticeTypes.PREMIUM_REACTIVATE, eh.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION, eh.NoticeTypes.MFA_SMS_BACKUP, eh.NoticeTypes.APPLICATION_TEST_MODE, eh.NoticeTypes.LOCALIZED_PRICING, eh.NoticeTypes.DOWNLOAD_NAG, eh.NoticeTypes.CONNECT_SPOTIFY, eh.NoticeTypes.CONNECT_PLAYSTATION, eh.NoticeTypes.SURVEY, eh.NoticeTypes.SERVER_USAGE_SURVEY, eh.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR, eh.NoticeTypes.DROPS_GO_LIVE_BANNER, eh.NoticeTypes.DROPS_ENDED_INCOMPLETE, eh.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR, eh.NoticeTypes.HABITUAL_DND, eh.NoticeTypes.UU_MIGRATION],
  ek = [eh.NoticeTypes.QUARANTINED, eh.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eh.NoticeTypes.VIEWING_ROLES, eh.NoticeTypes.INVITED_TO_SPEAK, eh.NoticeTypes.LURKING_GUILD, eh.NoticeTypes.VOICE_DISABLED, eh.NoticeTypes.NO_INPUT_DETECTED, eh.NoticeTypes.HARDWARE_MUTE, eh.NoticeTypes.H264_DISABLED, eh.NoticeTypes.DISPATCH_ERROR, eh.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eh.NoticeTypes.SPOTIFY_AUTO_PAUSED, eh.NoticeTypes.BLOCKED_BY_PROXY, eh.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eh.NoticeTypes.PENDING_MEMBER, eh.NoticeTypes.STREAMER_MODE, eh.NoticeTypes.SCHEDULED_MAINTENANCE],
  eF = {
    [eh.NoticeTypes.GUILD_RAID_NOTIFICATION]: {
      predicate: () => (0, C.shouldShowRaidNotificationNagbar)().show && !eG(eh.NoticeTypes.GUILD_RAID_NOTIFICATION),
      metadata: () => {
        let e = {
          dismissUntil: l().add(3, "hours").toDate()
        };
        return e
      }
    },
    [eh.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE]: {
      predicate: e => {
        let {
          currentUser: t,
          selectedGuildId: n
        } = e;
        if (null == n) return !1;
        let s = J.default.getMember(n, t.id);
        return null != s && !s.isPending && (0, g.hasAutomodQuarantinedProfile)(s)
      }
    },
    [eh.NoticeTypes.QUARANTINED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return t.hasFlag(eh.UserFlags.QUARANTINED)
      }
    },
    [eh.NoticeTypes.VIEWING_ROLES]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return R.default.isViewingRoles(t)
      }
    },
    [eh.NoticeTypes.INVITED_TO_SPEAK]: {
      predicate: e => {
        let {
          voiceState: t
        } = e;
        return (0, w.getAudienceRequestToSpeakState)(t) === w.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
      }
    },
    [eh.NoticeTypes.LURKING_GUILD]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && L.default.isLurking(t)
      }
    },
    [eh.NoticeTypes.VOICE_DISABLED]: {
      predicate: () => null != en.default.getRemoteDisconnectVoiceChannelId()
    },
    [eh.NoticeTypes.VOICE_CONNECTED_LAST_SESSION]: {
      predicate: () => null != en.default.getLastSessionVoiceChannelId()
    },
    [eh.NoticeTypes.NO_INPUT_DETECTED]: {
      predicate: e => {
        let {
          voiceChannelId: t,
          voiceState: n
        } = e, s = z.default.getChannel(t), l = (null == s ? void 0 : s.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
        return !1 === q.default.getInputDetected() && !l
      }
    },
    [eh.NoticeTypes.H264_DISABLED]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e, n = z.default.getChannel(t);
        return !q.default.getOpenH264() && null != t && ec.default.hasVideo(t) && null != n && n.isGuildStageVoice()
      }
    },
    [eh.NoticeTypes.HARDWARE_MUTE]: {
      predicate: () => en.default.isConnected() && q.default.isHardwareMute(),
      metadata: () => {
        let e = q.default.getInputDeviceId(),
          t = K.default.getVendor(e),
          n = K.default.getModel(e);
        if (null != t && null != n) return {
          vendor: t,
          model: n
        }
      }
    },
    [eh.NoticeTypes.DISPATCH_ERROR]: {
      predicate: () => null != eS.default.getLastError(),
      metadata: () => ({
        error: eS.default.getLastError()
      })
    },
    [eh.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
      predicate: () => null != eA.default.getLastProgress(),
      metadata: () => eA.default.getLastProgress()
    },
    [eh.NoticeTypes.SPOTIFY_AUTO_PAUSED]: {
      predicate: () => F.default.wasAutoPaused()
    },
    [eh.NoticeTypes.BLOCKED_BY_PROXY]: {
      predicate: () => !eG(eh.NoticeTypes.BLOCKED_BY_PROXY) && B.default.blockedByProxy && G.default.getCurrentConfig({
        location: "notice_store"
      }).eligibleForNotice
    },
    [eh.NoticeTypes.UNCLAIMED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && !t.isClaimed()
      }
    },
    [eh.NoticeTypes.PENDING_MEMBER]: {
      predicate: e => {
        var t, n, s;
        let {
          selectedGuildId: l,
          currentUser: a
        } = e;
        return null !== (s = null != l && null != a && !(null === (t = X.default.getGuild(l)) || void 0 === t ? void 0 : t.hasFeature(eh.GuildFeatures.GUILD_ONBOARDING)) && (null === (n = J.default.getMember(l, a.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== s && s
      }
    },
    [eh.NoticeTypes.OUTBOUND_PROMOTION]: {
      predicate: () => (0, j.shouldShowOutboundPromotionNotice)()
    },
    [eh.NoticeTypes.CORRUPT_INSTALLATION]: {
      predicate: () => eN.isPlatformEmbedded && (!i.default.supported() || eC.default.isCorruptInstallation())
    },
    [eh.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e;
        return null != t && ec.default.hasVideo(t) && !q.default.supports(eL.Features.VIDEO) && !eG(eh.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER)
      }
    },
    [eh.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return ep.default.canRedeemPremiumPerks(t) && Z.default.getDetectedOffPlatformPremiumPerks().length > 0
      },
      metadata: () => {
        let e = Z.default.getDetectedOffPlatformPremiumPerks();
        return e[0]
      }
    },
    [eh.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
      predicate: () => !eG(eh.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && Z.default.getDetectedOffPlatformPremiumPerks().length > 0,
      metadata: () => {
        let e = Z.default.getDetectedOffPlatformPremiumPerks();
        return e[0]
      }
    },
    [eh.NoticeTypes.STREAMER_MODE]: {
      predicate: () => er.default.enabled
    },
    [eh.NoticeTypes.DOWNLOAD_NAG]: {
      predicate: () => !eN.isPlatformEmbedded && !eG(eh.NoticeTypes.DOWNLOAD_NAG)
    },
    [eh.NoticeTypes.SCHEDULED_MAINTENANCE]: {
      predicate: () => null != ei.default.getScheduledMaintenance(),
      metadata: () => {
        let e = ei.default.getScheduledMaintenance();
        if (null != e) return {
          id: e.id,
          start: new Date(e.scheduled_for),
          end: new Date(e.scheduled_until)
        }
      }
    },
    [eh.NoticeTypes.SURVEY]: {
      predicate: () => null != eo.default.getCurrentSurvey(),
      metadata: () => eo.default.getCurrentSurvey()
    },
    [eh.NoticeTypes.SERVER_USAGE_SURVEY]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && A.default.getCurrentConfig({
          location: "notice_store"
        }).showSurvey && !eG(eh.NoticeTypes.SERVER_USAGE_SURVEY)
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
    [eh.NoticeTypes.UNVERIFIED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return (null == t ? void 0 : t.email) != null && !t.verified
      }
    },
    [eh.NoticeTypes.BOUNCED_EMAIL_DETECTED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null == t ? void 0 : t.hasBouncedEmail
      }
    },
    [eh.NoticeTypes.CONNECT_SPOTIFY]: {
      predicate: () => !F.default.hasConnectedAccount() && es.default.isObservedAppRunning(E.default.get(eh.PlatformTypes.SPOTIFY).name) && !eG(eh.NoticeTypes.CONNECT_SPOTIFY)
    },
    [eh.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: {
      predicate: () => {
        let {
          enabled: e
        } = U.default.getCurrentConfig({
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
    [eh.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE]: {
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
    [eh.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE]: {
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
    [eh.NoticeTypes.CONNECT_PLAYSTATION]: {
      predicate: () => Q.default.isSuggestedAccountType(eh.PlatformTypes.PLAYSTATION) && null == Q.default.getAccount(null, eh.PlatformTypes.PLAYSTATION) && !eG(eh.NoticeTypes.CONNECT_PLAYSTATION)
    },
    [eh.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: {
      predicate: () => {
        let e = eT.default.getAlmostExpiringTrialOffers([eO.PremiumSubscriptionSKUs.TIER_2]);
        return e.length > 0 && !eG(eh.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)
      }
    },
    [eh.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: {
      predicate: () => {
        let e = eT.default.getAlmostExpiringTrialOffers([eO.PremiumSubscriptionSKUs.TIER_0]);
        return e.length > 0 && !eG(eh.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)
      }
    },
    [eh.NoticeTypes.PREMIUM_UNCANCEL]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? l(t.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eh.SubscriptionStatusTypes.CANCELED && 1 >= l().diff(l(t.canceledAt), "days"), i = null != t && l(t.currentPeriodEnd).isBefore(l()), r = null != t && t.status === eh.SubscriptionStatusTypes.CANCELED && !i && s <= 7 && s >= 0 && (0, ep.isPremiumExactly)(n, eO.PremiumTypes.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eG(eh.NoticeTypes.PREMIUM_UNCANCEL) && r
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? l(n.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, ep.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != a ? ep.default.getPremiumType(a) : null;
        return {
          daysLeft: s,
          premiumType: i,
          premiumSubscription: n
        }
      }
    },
    [eh.NoticeTypes.PREMIUM_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? l(t.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = null != t ? l(t.currentPeriodEnd).diff(l(t.currentPeriodStart).startOf("day"), "days") : 0, i = null != t && l(t.currentPeriodEnd).isBefore(l()), r = eI.default.applicationIdsFetched.has(eO.PREMIUM_SUBSCRIPTION_APPLICATION), o = eI.default.getForApplication(eO.PREMIUM_SUBSCRIPTION_APPLICATION), u = null != t ? (0, ep.getPremiumPlanItem)(t) : null, d = null != u ? ep.default.getSkuIdForPlan(u.planId) : null, c = null != o && null != u && Array.from(o).filter(e => {
          let {
            skuId: t,
            consumed: n
          } = e;
          return !n && t === d
        }).length > 0, E = null != t && s <= (a > 14 ? 7 : 2) && s >= 0 && t.status !== eh.SubscriptionStatusTypes.PAST_DUE && !i && r && !c && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eG(eh.NoticeTypes.PREMIUM_MISSING_PAYMENT) && E
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? l(n.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, ep.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != a ? ep.default.getPremiumType(a) : null;
        return {
          daysLeft: s,
          premiumType: i,
          premiumSubscription: n
        }
      }
    },
    [eh.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && null != t.paymentSourceId ? ef.default.getPaymentSource(t.paymentSourceId) : null, a = null != t && l(t.currentPeriodEnd).isBefore(l()), i = null != t && t.status === eh.SubscriptionStatusTypes.PAST_DUE && !a && null != s && s.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eG(eh.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT) && i
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
    [eh.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && l(t.currentPeriodEnd).isBefore(l()), a = null != t && t.status === eh.SubscriptionStatusTypes.PAST_DUE && !s && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eG(eh.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a
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
    [eh.NoticeTypes.MFA_SMS_BACKUP]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && t.mfaEnabled && !t.hasFlag(eh.UserFlags.MFA_SMS) && !t.hasFlag(eh.UserFlags.STAFF) && !t.hasFlag(eh.UserFlags.PARTNER) && !eG(eh.NoticeTypes.MFA_SMS_BACKUP)
      }
    },
    [eh.NoticeTypes.APPLICATION_TEST_MODE]: {
      predicate: () => null != em.default.testModeApplicationId,
      metadata: () => {
        if (null == em.default.testModeApplicationId) return {};
        let e = em.default.testModeApplicationId,
          t = f.default.getApplication(e),
          n = null != t ? t.name : e;
        return {
          applicationName: n,
          applicationId: e
        }
      }
    },
    [eh.NoticeTypes.PREMIUM_REACTIVATE]: {
      predicate: () => !eG(eh.NoticeTypes.PREMIUM_REACTIVATE) && y.default.shouldShowReactivateNotice()
    },
    [eh.NoticeTypes.LOCALIZED_PRICING]: {
      predicate: e => {
        let {
          isLocalizedPromoEnabled: t
        } = e;
        return !eG(eh.NoticeTypes.LOCALIZED_PRICING) && t
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
    [eh.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && l(t.currentPeriodEnd).isBefore(l()), a = null != t && null != t.paymentSourceId ? ef.default.getPaymentSource(t.paymentSourceId) : null, i = null != a && eR.PREPAID_PAYMENT_SOURCES.has(a.type), r = null != t && t.status === eh.SubscriptionStatusTypes.PAST_DUE && !s && i && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eG(eh.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && r
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e, n = (null == t ? void 0 : t.status) === eh.SubscriptionStatusTypes.PAST_DUE ? l().diff(l(t.currentPeriodStart), "days") : 0, s = l(null == t ? void 0 : t.currentPeriodStart).add((0, ep.getBillingGracePeriodDays)(t), "days").toDate();
        return {
          daysPastDue: n,
          dismissUntil: s
        }
      }
    },
    [eh.NoticeTypes.DROPS_GO_LIVE_BANNER]: {
      predicate: () => !eG(eh.NoticeTypes.DROPS_GO_LIVE_BANNER) && (0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, N.getShowDropsNoticeBanner)(eM.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eM.PartnerGame.FORTNITE
      })
    },
    [eh.NoticeTypes.DROPS_PROGRESS_INTERRUPTION]: {
      predicate: () => m.default.isCurrentQuestInterrupted && null != m.default.currentDropQuestGameTitle,
      metadata: () => ({
        gameTitle: m.default.currentDropQuestGameTitle,
        reloadCallback: () => window.location.reload(!0)
      })
    },
    [eh.NoticeTypes.POMELO_ELIGIBLE]: {
      predicate: () => (0, x.isEligibleForPomelo)() && !eG(eh.NoticeTypes.POMELO_ELIGIBLE) && !(0, D.getForceMigration)()
    },
    [eh.NoticeTypes.DROPS_ENDED_INCOMPLETE]: {
      predicate: () => !eG(eh.NoticeTypes.DROPS_ENDED_INCOMPLETE) && (0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, N.getShowDropsEndedIncompleteBanner)(eM.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eM.PartnerGame.FORTNITE
      })
    },
    [eh.NoticeTypes.UU_MIGRATION]: {
      predicate: () => (0, x.isEligibleForPomelo)() && !eG(eh.NoticeTypes.UU_MIGRATION) && (0, D.getForceMigration)()
    },
    [eh.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e, n = null != t ? X.default.getGuild(t) : null;
        return null != t && null != M.default.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eh.GuildFeatures.COMMUNITY)) && !eG(eh.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
      },
      metadata: e => {
        let {
          selectedGuildId: t
        } = e, n = {
          dismissUntil: l().add(2, "hours").toDate()
        };
        if (null != t) {
          let e = M.default.getMentionRaidDetected(t);
          null != e && (n.decisionId = e.decisionId)
        }
        return n
      }
    },
    [eh.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: {
      predicate: () => !eG(eh.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== T.default.getEligibleGuildsForNagActivate().length && (0, _.isCreatorMonetizationNagActivateEnabled)()
    },
    [eh.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return !eG(eh.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, O.shouldShowGuildOnboardingUpsell)(t, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    },
    [eh.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return k.isEligibleForNotice(t)
      }
    },
    [eh.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH]: {
      predicate: () => d.ESLatamLaunchExperiment.getCurrentConfig({
        location: "notice_store"
      }).enabled && !eG(eh.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH)
    },
    [eh.NoticeTypes.HABITUAL_DND]: {
      predicate: () => v.default.showNagBar() && !H.QuietMode.getSetting() && H.StatusSetting.getSetting() === eR.StatusTypes.DND && P.QuietModeExperiment.getCurrentConfig({
        location: "notice_store"
      }).allowQuietMode
    }
  };

function ew() {
  if (!S.default.isConnected()) return !1;
  eU = null;
  let e = ed.default.getCurrentUser();
  if (null == e) return !1;
  let t = e_.default.getPremiumSubscription(),
    n = eE.default.isLocalizedPromoEnabled,
    s = ea.default.getGuildId(),
    l = el.default.getVoiceChannelId(),
    a = null != l ? ec.default.getVoiceStateForChannel(l) : null,
    i = eg.CONFERENCE_MODE_ENABLED ? ek : eB;
  for (let u of i)
    if (null != eF[u] && eF[u].predicate({
        selectedGuildId: s,
        voiceChannelId: l,
        voiceState: a,
        currentUser: e,
        premiumSubscription: t,
        isLocalizedPromoEnabled: n
      })) {
      var r, o;
      let n = null === (r = (o = eF[u]).metadata) || void 0 === r ? void 0 : r.call(o, {
        currentUser: e,
        premiumSubscription: t,
        selectedGuildId: s
      });
      eU = {
        ...ey,
        type: u,
        metadata: n
      };
      break
    } null != eU && eG(eU.type) && (eU = null)
}

function eH() {
  return !er.default.enabled && delete ex[eh.NoticeTypes.STREAMER_MODE], ew()
}
class eV extends a.default.Store {
  initialize() {
    this.syncWith([eo.default, et.default, Z.default, ea.default, b.default, eT.default, W.default, Q.default, V.default, h.default, v.default], ew), this.waitFor(ed.default, ei.default, X.default, J.default, en.default, q.default, er.default, p.default, ea.default, eu.default, F.default, es.default, et.default, eS.default, eA.default, em.default, $.default, e_.default, eC.default, Z.default, ef.default, ee.default, b.default, eI.default, eT.default, Q.default, L.default, m.default, T.default, B.default)
  }
  hasNotice() {
    return null != eU && null != eU.type
  }
  getNotice() {
    return null == eu.default.getAction() ? eU : null
  }
  isNoticeDismissed(e) {
    return eG(e)
  }
}
eV.displayName = "NoticeStore";
var eY = new eV(u.default, {
  CURRENT_USER_UPDATE: ew,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: ew,
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: ew,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: ew,
  STATUS_PAGE_SCHEDULED_MAINTENANCE: ew,
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: ew,
  GUILD_CREATE: ew,
  GUILD_DELETE: ew,
  AUDIO_INPUT_DETECTED: ew,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: ew,
  CERTIFIED_DEVICES_SET: ew,
  AUDIO_SET_INPUT_DEVICE: ew,
  AUDIO_SET_OUTPUT_DEVICE: ew,
  MEDIA_ENGINE_DEVICES: ew,
  RTC_CONNECTION_STATE: ew,
  RPC_APP_AUTHENTICATED: ew,
  RPC_APP_DISCONNECTED: ew,
  USER_CONNECTIONS_UPDATE: ew,
  WINDOW_FOCUS: ew,
  INSTANT_INVITE_CREATE: ew,
  INSTANT_INVITE_REVOKE_SUCCESS: ew,
  SPOTIFY_PLAYER_PAUSE: ew,
  RUNNING_GAMES_CHANGE: ew,
  EXPERIMENTS_FETCH_SUCCESS: ew,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: ew,
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: ew,
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: ew,
  DEVELOPER_TEST_MODE_RESET: ew,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: ew,
  DISPATCH_APPLICATION_INSTALL: ew,
  IMPERSONATE_STOP: ew,
  IMPERSONATE_UPDATE: ew,
  GUILD_MEMBER_ADD: function(e) {
    return e.user.id === Y.default.getId() && ew()
  },
  GUILD_MEMBER_UPDATE: ew,
  SURVEY_FETCHED: ew,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: ew,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: ew,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: ew,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: ew,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.some(e => {
      let {
        userId: t
      } = e;
      return t !== Y.default.getId()
    }) && ew()
  },
  STREAMER_MODE_UPDATE: eH,
  RUNNING_STREAMER_TOOLS_CHANGE: eH,
  DISPATCH_APPLICATION_ERROR: function() {
    return delete ex[eh.NoticeTypes.DISPATCH_ERROR], ew()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    return delete ex[eh.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS], ew()
  },
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
    return ew()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
    return ew()
  },
  NOTICE_SHOW: function(e) {
    eU = e.notice
  },
  NOTICE_DISMISS: function(e) {
    return null != eU && (null == e.id || e.id === eU.id) && (eb(eU.type, e.isTemporary, e.untilAtLeast), ew())
  },
  NOTICE_DISABLE: function(e) {
    let {
      noticeType: t
    } = e;
    return eb(t), ew()
  },
  LOGOUT: function() {
    ex = {}, eU = null
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: ew,
  AUTO_MODERATION_MENTION_RAID_DETECTION: ew,
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: ew,
  PROXY_BLOCKED_REQUEST: ew
})