"use strict";
i.r(t), i.d(t, {
  NonSpamRetrainingOptInOptions: function() {
    return l
  },
  NonSpamRetrainingOptInOptionsToValue: function() {
    return g
  },
  computeFlags: function() {
    return _
  },
  generateNonSpamRetrainingOptInSettingOptions: function() {
    return E
  },
  getSanitizedActivityJoiningRestrictedGuilds: function() {
    return I
  },
  getSanitizedActivityRestrictedGuilds: function() {
    return o
  },
  getSanitizedMessageRequestRestrictedGuilds: function() {
    return T
  },
  getSanitizedRestrictedGuilds: function() {
    return c
  },
  harvestDisabled: function() {
    return A
  }
});
var s, l, d = i("695346"),
  a = i("486472"),
  n = i("430824");
i("626135");
var r = i("981631"),
  u = i("689938");
let S = 864e5 * r.REQUEST_DATA_LIMIT_DAYS;

function c() {
  let e = d.RestrictedGuildIds.getSetting();
  return 0 === a.default.totalUnavailableGuilds && (e = e.filter(e => null != n.default.getGuild(e))), e
}

function T() {
  let e = d.MessageRequestRestrictedGuildIds.getSetting();
  return 0 === a.default.totalUnavailableGuilds && (e = e.filter(e => null != n.default.getGuild(e))), e
}

function o() {
  let e = d.ActivityRestrictedGuilds.getSetting();
  return 0 === a.default.totalUnavailableGuilds && (e = e.filter(e => null != n.default.getGuild(e))), e
}

function I() {
  let e = d.ActivityJoiningRestrictedGuilds.getSetting();
  return 0 === a.default.totalUnavailableGuilds && (e = e.filter(e => null != n.default.getGuild(e))), e
}

function _(e) {
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

function A(e, t) {
  return !t.verified || null != e && S > Date.now() - new Date(e.created_at).getTime()
}(s = l || (l = {}))[s.UNDECIDED = 0] = "UNDECIDED", s[s.OPTIN = 1] = "OPTIN", s[s.OPTOUT = 2] = "OPTOUT";
let g = {
  0: void 0,
  1: !0,
  2: !1
};

function E() {
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