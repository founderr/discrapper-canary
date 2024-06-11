"use strict";
n.r(t), n.d(t, {
  AppealIngestionSignal: function() {
    return l
  },
  AppealIngestionSignalOrder: function() {
    return d
  },
  AppealIngestionSlideTypes: function() {
    return c
  },
  DEFAULT_MEDIA_MAX_HEIGHT: function() {
    return M
  },
  DEFAULT_MEDIA_MAX_WIDTH: function() {
    return R
  },
  SafetyHubAnalyticsActionSource: function() {
    return N
  },
  SafetyHubAnalyticsActions: function() {
    return A
  },
  SafetyHubLinks: function() {
    return C
  },
  SafetyHubPolicyNoticeKeys: function() {
    return O
  },
  SafetyHubView: function() {
    return o
  },
  SafetySystemNotificationCtaType: function() {
    return a
  },
  SafetySystemNotificationEmbedKeys: function() {
    return f
  },
  SlidesOrderDsaEligible: function() {
    return D
  },
  SlidesOrderNonDsaEligible: function() {
    return p
  },
  ViolationType: function() {
    return u
  }
});
var i, E, I, S, r, _, s, o, a, A, N, l, c, u, T = n("981631");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i = o || (o = {})).SETTINGS = "SETTINGS", i.ACCOUNT_STANDING = "ACCOUNT_STANDING", i.GUILD_SETTINGS = "GUILD_SETTINGS";
class C {}
L(C, "TOS_LINK", "https://discord.com/terms"), L(C, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"), L(C, "APPEALS_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), L(C, "WARNING_SYSTEM_HELPCENTER_LINK", "https://support.discord.com/hc/articles/18210965981847"), L(C, "AGE_VERIFICATION_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), L(C, "SPAM_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__");
class O {}
L(O, "CLASSIFICATION_ID", "classification_id"), L(O, "INCIDENT_TIMESTAMP", "incident_time"), (E = a || (a = {})).POLICY_VIOLATION_DETAIL = "policy_violation_detail", E.LEARN_MORE_LINK = "learn_more_link";
class f {}
L(f, "ICON_TYPE", "icon_type"), L(f, "HEADER", "header"), L(f, "BODY", "body"), L(f, "CTAS", "ctas"), L(f, "TIMESTAMP", "timestamp"), L(f, "THEME", "theme"), L(f, "CLIENT_VERSION_MESSAGE", "client_version_message"), L(f, "LEARN_MORE_LINK", "learn_more_link"), L(f, "CLASSIFICATION_ID", "classification_id"), (I = A || (A = {}))[I.ViewViolationDetail = 0] = "ViewViolationDetail", I[I.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", I[I.ClickLetUsKnow = 2] = "ClickLetUsKnow", I[I.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", I[I.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", I[I.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", I[I.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", I[I.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", (S = N || (N = {}))[S.SystemDM = 0] = "SystemDM", S[S.StandingTab = 1] = "StandingTab", S[S.AppealIngestion = 2] = "AppealIngestion", Object.freeze({
  SPEED_BUMP: T.AnalyticsSections.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: T.AnalyticsSections.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: T.AnalyticsSections.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: T.AnalyticsSections.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: T.AnalyticsSections.APPEAL_INGESTION_THANKS,
  SPAM: T.AnalyticsSections.APPEAL_INGESTION_SPAM
}), (r = l || (l = {}))[r.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", r[r.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", r[r.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", r[r.SOMETHING_ELSE = 3] = "SOMETHING_ELSE";
let d = [0, 1, 2, 3],
  R = 372,
  M = 279;
(_ = c || (c = {})).SPEED_BUMP = "speed-bump", _.COLLECT_SIGNAL = "collect-signal", _.CONFIRM_SUBMISSION = "confirm-submission", _.REQUEST_SENT = "request-sent", _.THANKS = "thanks";
let D = {
    "speed-bump": {
      next: "collect-signal",
      prev: null
    },
    "collect-signal": {
      next: "confirm-submission",
      prev: "speed-bump"
    },
    "confirm-submission": {
      next: "request-sent",
      prev: "collect-signal"
    },
    "request-sent": {
      next: null,
      prev: null
    }
  },
  p = {
    "collect-signal": {
      next: "thanks",
      prev: null
    },
    thanks: {
      next: null,
      prev: null
    }
  };
(s = u || (u = {}))[s.USER = 1] = "USER", s[s.GUILD_OWNER = 2] = "GUILD_OWNER", s[s.GUILD_MEMBER = 3] = "GUILD_MEMBER"