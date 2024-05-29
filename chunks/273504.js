"use strict";
n.r(t), n.d(t, {
  AutomodActionType: function() {
    return a.AutomodActionType
  },
  AutomodEventType: function() {
    return u.AutomodEventType
  },
  AutomodTriggerType: function() {
    return r.AutomodTriggerType
  },
  KeywordPreset: function() {
    return _
  },
  MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH: function() {
    return D
  },
  MAX_CHARACTERS_PER_KEYWORD: function() {
    return d
  },
  MAX_KEYWORDS_PER_ALLOWLIST_DEFAULT_KEYWORD_RULE: function() {
    return A
  },
  MAX_KEYWORDS_PER_ALLOWLIST_KEYWORD_FILTER_RULE: function() {
    return i
  },
  MAX_KEYWORDS_PER_KEYWORD_FILTER: function() {
    return E
  },
  MAX_MENTION_SPAM_LIMIT: function() {
    return c
  },
  MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER: function() {
    return s
  },
  MAX_REGEX_PATTERN_LENGTH: function() {
    return O
  },
  MAX_RULE_NAME_LENGTH: function() {
    return N
  },
  MENTION_SPAM_LIMIT_DEFAULT: function() {
    return M
  },
  MIN_CHARACTERS_PER_KEYWORD: function() {
    return T
  },
  MIN_MENTION_SPAM_LIMIT: function() {
    return I
  },
  MIN_REGEX_PATTERN_LENGTH: function() {
    return l
  },
  QUARANTINE_USER_ALERT_KEY: function() {
    return R
  }
});
var o, _, a = n("401653"),
  u = n("95930"),
  r = n("41381");
(o = _ || (_ = {}))[o.PROFANITY = 1] = "PROFANITY", o[o.SEXUAL_CONTENT = 2] = "SEXUAL_CONTENT", o[o.SLURS = 3] = "SLURS", r.AutomodTriggerType.USER_PROFILE, r.AutomodTriggerType.SERVER_POLICY, r.AutomodTriggerType.MENTION_SPAM, r.AutomodTriggerType.ML_SPAM, r.AutomodTriggerType.DEFAULT_KEYWORD_LIST, r.AutomodTriggerType.KEYWORD;
let E = 1e3,
  i = 100,
  A = 1e3,
  s = 10,
  d = 60,
  T = 1,
  l = 1,
  O = 260,
  N = 100,
  I = 1,
  c = 50,
  M = 20,
  D = 150,
  R = "automod-profile-quarantine-alert"