"use strict";
n.r(t), n.d(t, {
  AutomodActionType: function() {
    return u.AutomodActionType
  },
  AutomodEventType: function() {
    return a.AutomodEventType
  },
  AutomodTriggerType: function() {
    return E.AutomodTriggerType
  },
  KeywordPreset: function() {
    return _
  },
  MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH: function() {
    return R
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
    return r
  },
  MAX_MENTION_SPAM_LIMIT: function() {
    return c
  },
  MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER: function() {
    return s
  },
  MAX_REGEX_PATTERN_LENGTH: function() {
    return N
  },
  MAX_RULE_NAME_LENGTH: function() {
    return O
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
    return D
  }
});
var o, _, u = n("401653"),
  a = n("95930"),
  E = n("41381");
(o = _ || (_ = {}))[o.PROFANITY = 1] = "PROFANITY", o[o.SEXUAL_CONTENT = 2] = "SEXUAL_CONTENT", o[o.SLURS = 3] = "SLURS", E.AutomodTriggerType.USER_PROFILE, E.AutomodTriggerType.SERVER_POLICY, E.AutomodTriggerType.MENTION_SPAM, E.AutomodTriggerType.ML_SPAM, E.AutomodTriggerType.DEFAULT_KEYWORD_LIST, E.AutomodTriggerType.KEYWORD;
let r = 1e3,
  i = 100,
  A = 1e3,
  s = 10,
  d = 60,
  T = 1,
  l = 1,
  N = 260,
  O = 100,
  I = 1,
  c = 50,
  M = 20,
  R = 150,
  D = "automod-profile-quarantine-alert"