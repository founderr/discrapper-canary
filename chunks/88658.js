n.d(e, {
  $6: function() {
    return c
  },
  YK: function() {
    return S
  },
  _o: function() {
    return s
  },
  ac: function() {
    return o
  },
  bL: function() {
    return G
  },
  g0: function() {
    return l
  },
  gl: function() {
    return I
  },
  rr: function() {
    return E
  },
  xH: function() {
    return A
  }
});
var u, l, _ = n(695346),
  i = n(486472),
  T = n(430824);
n(626135);
var r = n(981631),
  N = n(689938);
let a = 864e5 * r.eBq;

function S() {
  let t = _.h2.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (t = t.filter(t => null != T.Z.getGuild(t))), t
}

function I() {
  let t = _.zA.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (t = t.filter(t => null != T.Z.getGuild(t))), t
}

function s() {
  let t = _.SE.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (t = t.filter(t => null != T.Z.getGuild(t))), t
}

function E() {
  let t = _.iH.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (t = t.filter(t => null != T.Z.getGuild(t))), t
}

function G(t) {
  return (t & r.HGf) === r.HGf ? {
    all: !0,
    mutualFriends: !0,
    mutualGuilds: !0
  } : {
    all: !1,
    mutualFriends: (t & r.SOq.MUTUAL_FRIENDS) === r.SOq.MUTUAL_FRIENDS,
    mutualGuilds: (t & r.SOq.MUTUAL_GUILDS) === r.SOq.MUTUAL_GUILDS
  }
}

function c(t, e) {
  return !e.verified || null != t && a > Date.now() - new Date(t.created_at).getTime()
}(u = l || (l = {}))[u.UNDECIDED = 0] = "UNDECIDED", u[u.OPTIN = 1] = "OPTIN", u[u.OPTOUT = 2] = "OPTOUT";
let o = {
  0: void 0,
  1: !0,
  2: !1
};

function A() {
  return [{
    name: N.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
    desc: N.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
    value: 1
  }, {
    name: N.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
    desc: N.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
    value: 2
  }, {
    name: N.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
    desc: N.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
    value: 0
  }]
}