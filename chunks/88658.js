"use strict";
i.r(t), i.d(t, {
  NonSpamRetrainingOptInOptions: function() {
    return l
  },
  NonSpamRetrainingOptInOptionsToValue: function() {
    return R
  },
  computeFlags: function() {
    return E
  },
  generateNonSpamRetrainingOptInSettingOptions: function() {
    return g
  },
  getSanitizedActivityJoiningRestrictedGuilds: function() {
    return I
  },
  getSanitizedActivityRestrictedGuilds: function() {
    return T
  },
  getSanitizedMessageRequestRestrictedGuilds: function() {
    return c
  },
  getSanitizedRestrictedGuilds: function() {
    return _
  },
  harvestDisabled: function() {
    return o
  }
});
var s, l, d = i("695346"),
  n = i("486472"),
  a = i("430824");
i("626135");
var r = i("981631"),
  u = i("689938");
let S = 864e5 * r.REQUEST_DATA_LIMIT_DAYS;

function _() {
  let e = d.RestrictedGuildIds.getSetting();
  return 0 === n.default.totalUnavailableGuilds && (e = e.filter(e => null != a.default.getGuild(e))), e
}

function c() {
  let e = d.MessageRequestRestrictedGuildIds.getSetting();
  return 0 === n.default.totalUnavailableGuilds && (e = e.filter(e => null != a.default.getGuild(e))), e
}

function T() {
  let e = d.ActivityRestrictedGuilds.getSetting();
  return 0 === n.default.totalUnavailableGuilds && (e = e.filter(e => null != a.default.getGuild(e))), e
}

function I() {
  let e = d.ActivityJoiningRestrictedGuilds.getSetting();
  return 0 === n.default.totalUnavailableGuilds && (e = e.filter(e => null != a.default.getGuild(e))), e
}

function E(e) {
  return (e & r.AllFriendSourceFlags) === r.AllFriendSourceFlags ? {
    all: !0,
    mutualFriends: !0,
    mutualGuilds: !0
  } : {
    all: !1,
    mutualFriends: (e & r.FriendSourceFlags.MUTUAL_FRIENDS) === r.FriendSourceFlags.MUTUAL_FRIENDS,
    mutualGuilds: (e & r.FriendSourceFlags.MUTUAL_GUILDS) === r.FriendSourceFlags.MUTUAL_GUILDS
  }
}

function o(e, t) {
  return !t.verified || null != e && S > Date.now() - new Date(e.created_at).getTime()
}(s = l || (l = {}))[s.UNDECIDED = 0] = "UNDECIDED", s[s.OPTIN = 1] = "OPTIN", s[s.OPTOUT = 2] = "OPTOUT";
let R = {
  0: void 0,
  1: !0,
  2: !1
};

function g() {
  return [{
    name: u.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
    desc: u.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
    value: 1
  }, {
    name: u.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
    desc: u.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
    value: 2
  }, {
    name: u.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
    desc: u.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
    value: 0
  }]
}