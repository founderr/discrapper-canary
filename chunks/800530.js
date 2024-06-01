"use strict";
n.r(t), n.d(t, {
  AppealIngestionSignal: function() {
    return u
  },
  AppealIngestionSignalOrder: function() {
    return d
  },
  AppealIngestionSlideTypes: function() {
    return N
  },
  DEFAULT_MEDIA_MAX_HEIGHT: function() {
    return M
  },
  DEFAULT_MEDIA_MAX_WIDTH: function() {
    return R
  },
  SafetyHubAnalyticsActionSource: function() {
    return _
  },
  SafetyHubAnalyticsActions: function() {
    return S
  },
  SafetyHubLinks: function() {
    return C
  },
  SafetyHubPolicyNoticeKeys: function() {
    return f
  },
  SafetyHubView: function() {
    return c
  },
  SafetySystemNotificationCtaType: function() {
    return a
  },
  SafetySystemNotificationEmbedKeys: function() {
    return O
  },
  SlidesOrderDsaEligible: function() {
    return D
  },
  SlidesOrderNonDsaEligible: function() {
    return p
  },
  ViolationType: function() {
    return A
  }
});
var i, E, r, o, l, s, I, c, a, S, _, u, N, A, T = n("981631");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i = c || (c = {})).SETTINGS = "SETTINGS", i.ACCOUNT_STANDING = "ACCOUNT_STANDING", i.GUILD_SETTINGS = "GUILD_SETTINGS";
class C {}
L(C, "TOS_LINK", "https://discord.com/terms"), L(C, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"), L(C, "APPEALS_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), L(C, "WARNING_SYSTEM_HELPCENTER_LINK", "https://support.discord.com/hc/articles/18210965981847"), L(C, "AGE_VERIFICATION_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), L(C, "SPAM_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__");
class f {}
L(f, "CLASSIFICATION_ID", "classification_id"), L(f, "INCIDENT_TIMESTAMP", "incident_time"), (E = a || (a = {})).POLICY_VIOLATION_DETAIL = "policy_violation_detail", E.LEARN_MORE_LINK = "learn_more_link";
class O {}
L(O, "ICON_TYPE", "icon_type"), L(O, "HEADER", "header"), L(O, "BODY", "body"), L(O, "CTAS", "ctas"), L(O, "TIMESTAMP", "timestamp"), L(O, "THEME", "theme"), L(O, "CLIENT_VERSION_MESSAGE", "client_version_message"), L(O, "LEARN_MORE_LINK", "learn_more_link"), L(O, "CLASSIFICATION_ID", "classification_id"), (r = S || (S = {}))[r.ViewViolationDetail = 0] = "ViewViolationDetail", r[r.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", r[r.ClickLetUsKnow = 2] = "ClickLetUsKnow", r[r.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", r[r.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", r[r.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", r[r.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", r[r.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", (o = _ || (_ = {}))[o.SystemDM = 0] = "SystemDM", o[o.StandingTab = 1] = "StandingTab", o[o.AppealIngestion = 2] = "AppealIngestion", Object.freeze({
  SPEED_BUMP: T.AnalyticsSections.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: T.AnalyticsSections.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: T.AnalyticsSections.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: T.AnalyticsSections.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: T.AnalyticsSections.APPEAL_INGESTION_THANKS,
  SPAM: T.AnalyticsSections.APPEAL_INGESTION_SPAM
}), (l = u || (u = {}))[l.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", l[l.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", l[l.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", l[l.SOMETHING_ELSE = 3] = "SOMETHING_ELSE";
let d = [0, 1, 2, 3],
  R = 372,
  M = 279;
(s = N || (N = {})).SPEED_BUMP = "speed-bump", s.COLLECT_SIGNAL = "collect-signal", s.CONFIRM_SUBMISSION = "confirm-submission", s.REQUEST_SENT = "request-sent", s.THANKS = "thanks";
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
(I = A || (A = {}))[I.USER = 1] = "USER", I[I.GUILD_OWNER = 2] = "GUILD_OWNER", I[I.GUILD_MEMBER = 3] = "GUILD_MEMBER"