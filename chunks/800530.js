"use strict";
e.d(E, {
  Cg: function() {
    return a
  },
  Cs: function() {
    return u
  },
  EY: function() {
    return G
  },
  I5: function() {
    return R
  },
  RY: function() {
    return D
  },
  SU: function() {
    return A
  },
  Sv: function() {
    return M
  },
  bK: function() {
    return c
  },
  c6: function() {
    return P
  },
  d9: function() {
    return f
  },
  n0: function() {
    return T
  },
  qS: function() {
    return s
  },
  s: function() {
    return o
  },
  sQ: function() {
    return C
  },
  wo: function() {
    return L
  }
});
var t, I, _, N, S, i, r, A, L, T, o, c, u, s, O = e(981631);

function l(n, E, e) {
  return E in n ? Object.defineProperty(n, E, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[E] = e, n
}(t = A || (A = {})).SETTINGS = "SETTINGS", t.ACCOUNT_STANDING = "ACCOUNT_STANDING", t.GUILD_SETTINGS = "GUILD_SETTINGS", t.ENCRYPTION = "ENCRYPTION";
class C {}
l(C, "TOS_LINK", "https://discord.com/terms"), l(C, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"), l(C, "APPEALS_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), l(C, "WARNING_SYSTEM_HELPCENTER_LINK", "https://support.discord.com/hc/articles/18210965981847"), l(C, "AGE_VERIFICATION_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), l(C, "SPAM_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__");
class a {}
l(a, "CLASSIFICATION_ID", "classification_id"), l(a, "INCIDENT_TIMESTAMP", "incident_time"), (I = L || (L = {})).POLICY_VIOLATION_DETAIL = "policy_violation_detail", I.LEARN_MORE_LINK = "learn_more_link";
class R {}
l(R, "ICON_TYPE", "icon_type"), l(R, "HEADER", "header"), l(R, "BODY", "body"), l(R, "CTAS", "ctas"), l(R, "TIMESTAMP", "timestamp"), l(R, "THEME", "theme"), l(R, "CLIENT_VERSION_MESSAGE", "client_version_message"), l(R, "LEARN_MORE_LINK", "learn_more_link"), l(R, "CLASSIFICATION_ID", "classification_id"), (_ = T || (T = {}))[_.ViewViolationDetail = 0] = "ViewViolationDetail", _[_.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", _[_.ClickLetUsKnow = 2] = "ClickLetUsKnow", _[_.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", _[_.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", _[_.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", _[_.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", _[_.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", (N = o || (o = {}))[N.SystemDM = 0] = "SystemDM", N[N.StandingTab = 1] = "StandingTab", N[N.AppealIngestion = 2] = "AppealIngestion", Object.freeze({
  SPEED_BUMP: O.jXE.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: O.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: O.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: O.jXE.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: O.jXE.APPEAL_INGESTION_THANKS,
  SPAM: O.jXE.APPEAL_INGESTION_SPAM
}), (S = c || (c = {}))[S.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", S[S.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", S[S.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", S[S.SOMETHING_ELSE = 3] = "SOMETHING_ELSE";
let D = [0, 1, 2, 3],
  M = 372,
  G = 279;
(i = u || (u = {})).SPEED_BUMP = "speed-bump", i.COLLECT_SIGNAL = "collect-signal", i.CONFIRM_SUBMISSION = "confirm-submission", i.REQUEST_SENT = "request-sent", i.THANKS = "thanks";
let f = {
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
  P = {
    "collect-signal": {
      next: "thanks",
      prev: null
    },
    thanks: {
      next: null,
      prev: null
    }
  };
(r = s || (s = {}))[r.USER = 1] = "USER", r[r.GUILD_OWNER = 2] = "GUILD_OWNER", r[r.GUILD_MEMBER = 3] = "GUILD_MEMBER"