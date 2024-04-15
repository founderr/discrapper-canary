"use strict";
n.r(t), n.d(t, {
  AppealIngestionSignal: function() {
    return E
  },
  AppealIngestionSignalOrder: function() {
    return N
  },
  AppealIngestionSlideTypes: function() {
    return _
  },
  DEFAULT_MEDIA_MAX_HEIGHT: function() {
    return C
  },
  DEFAULT_MEDIA_MAX_WIDTH: function() {
    return S
  },
  SafetyHubAnalyticsActionSource: function() {
    return f
  },
  SafetyHubAnalyticsActions: function() {
    return c
  },
  SafetyHubLinks: function() {
    return I
  },
  SafetyHubPolicyNoticeKeys: function() {
    return p
  },
  SafetyHubView: function() {
    return u
  },
  SafetySystemNotificationCtaType: function() {
    return d
  },
  SafetySystemNotificationEmbedKeys: function() {
    return h
  },
  SlidesOrderDsaEligible: function() {
    return A
  },
  SlidesOrderNonDsaEligible: function() {
    return g
  }
});
var s, a, l, i, r, o, u, d, c, f, E, _, T = n("981631");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = u || (u = {})).SETTINGS = "SETTINGS", s.ACCOUNT_STANDING = "ACCOUNT_STANDING";
class I {}
m(I, "TOS_LINK", "https://discord.com/terms"), m(I, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"), m(I, "APPEALS_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), m(I, "WARNING_SYSTEM_HELPCENTER_LINK", "https://support.discord.com/hc/articles/18210965981847"), m(I, "AGE_VERIFICATION_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), m(I, "SPAM_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__");
class p {}
m(p, "CLASSIFICATION_ID", "classification_id"), m(p, "INCIDENT_TIMESTAMP", "incident_time"), (a = d || (d = {})).POLICY_VIOLATION_DETAIL = "policy_violation_detail", a.LEARN_MORE_LINK = "learn_more_link";
class h {}
m(h, "ICON_TYPE", "icon_type"), m(h, "HEADER", "header"), m(h, "BODY", "body"), m(h, "CTAS", "ctas"), m(h, "TIMESTAMP", "timestamp"), m(h, "THEME", "theme"), m(h, "CLIENT_VERSION_MESSAGE", "client_version_message"), m(h, "LEARN_MORE_LINK", "learn_more_link"), m(h, "CLASSIFICATION_ID", "classification_id"), (l = c || (c = {}))[l.ViewViolationDetail = 0] = "ViewViolationDetail", l[l.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", l[l.ClickLetUsKnow = 2] = "ClickLetUsKnow", l[l.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", l[l.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", l[l.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", l[l.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", l[l.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", (i = f || (f = {}))[i.SystemDM = 0] = "SystemDM", i[i.StandingTab = 1] = "StandingTab", i[i.AppealIngestion = 2] = "AppealIngestion", Object.freeze({
  SPEED_BUMP: T.AnalyticsSections.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: T.AnalyticsSections.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: T.AnalyticsSections.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: T.AnalyticsSections.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: T.AnalyticsSections.APPEAL_INGESTION_THANKS,
  SPAM: T.AnalyticsSections.APPEAL_INGESTION_SPAM
}), (r = E || (E = {}))[r.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", r[r.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", r[r.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", r[r.SOMETHING_ELSE = 3] = "SOMETHING_ELSE";
let N = [0, 1, 2, 3],
  S = 372,
  C = 279;
(o = _ || (_ = {})).SPEED_BUMP = "speed-bump", o.COLLECT_SIGNAL = "collect-signal", o.CONFIRM_SUBMISSION = "confirm-submission", o.REQUEST_SENT = "request-sent", o.THANKS = "thanks";
let A = {
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
  g = {
    "collect-signal": {
      next: "thanks",
      prev: null
    },
    thanks: {
      next: null,
      prev: null
    }
  }