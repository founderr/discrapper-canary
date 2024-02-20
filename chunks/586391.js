"use strict";
n.r(t), n.d(t, {
  AGE_GATE_REGISTER_TIMEOUT_MS: function() {
    return a
  },
  NEW_USER_AGE_GATE_MODAL_KEY: function() {
    return s
  },
  EXISTING_USER_AGE_GATE_MODAL_KEY: function() {
    return E
  },
  AgeGateSource: function() {
    return o
  },
  AgeGateAnalyticAction: function() {
    return l
  }
});
var r, i, o, l, u = n("718517");
let a = 2 * u.default.Millis.HOUR,
  s = "new-user-age-gate-modal",
  E = "existing-user-age-gate-modal";
(r = o || (o = {})).AUTH = "Register Age Gate", r.NEW_USER_FLOW = "NUF", r.CLAIM_ACCOUNT = "Claim Age Gate", r.NSFW_CHANNEL = "NSFW Channel", r.NSFW_SERVER = "NSFW Server", r.NSFW_SERVER_INVITE = "NSFW Server Invite", r.NSFW_VOICE_CHANNEL = "NSFW Voice Channel", r.FAMILY_CENTER = "Family Center", r.REGISTER = "Register", r.DEEP_LINK_PROMPT = "Deep Link Prompt", r.UNSPECIFIED = "Unspecified", (i = l || (l = {})).AGE_GATE_OPEN = "AGE_GATE_OPEN", i.AGE_GATE_CLOSE = "AGE_GATE_CLOSE", i.AGE_GATE_SUBMITTED = "AGE_GATE_SUBMITTED", i.AGE_GATE_SUCCESS = "AGE_GATE_SUCCESS", i.AGE_GATE_FAILURE = "AGE_GATE_FAILURE", i.AGE_GATE_UNDERAGE = "AGE_GATE_UNDERAGE", i.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION = "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION", i.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER = "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"