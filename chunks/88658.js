i.d(t, {
  $6: function() {
    return o
  },
  YK: function() {
    return d
  },
  _o: function() {
    return I
  },
  ac: function() {
    return G
  },
  bL: function() {
    return c
  },
  g0: function() {
    return r
  },
  gl: function() {
    return E
  },
  rr: function() {
    return u
  },
  xH: function() {
    return A
  }
});
var n, r, s = i(695346),
  S = i(486472),
  _ = i(430824);
i(626135);
var a = i(981631),
  l = i(689938);
let T = 864e5 * a.eBq;

function d() {
  let e = s.h2.getSetting();
  return 0 === S.Z.totalUnavailableGuilds && (e = e.filter(e => null != _.Z.getGuild(e))), e
}

function E() {
  let e = s.zA.getSetting();
  return 0 === S.Z.totalUnavailableGuilds && (e = e.filter(e => null != _.Z.getGuild(e))), e
}

function I() {
  let e = s.SE.getSetting();
  return 0 === S.Z.totalUnavailableGuilds && (e = e.filter(e => null != _.Z.getGuild(e))), e
}

function u() {
  let e = s.iH.getSetting();
  return 0 === S.Z.totalUnavailableGuilds && (e = e.filter(e => null != _.Z.getGuild(e))), e
}

function c(e) {
  return (e & a.HGf) === a.HGf ? {
    all: !0,
    mutualFriends: !0,
    mutualGuilds: !0
  } : {
    all: !1,
    mutualFriends: (e & a.SOq.MUTUAL_FRIENDS) === a.SOq.MUTUAL_FRIENDS,
    mutualGuilds: (e & a.SOq.MUTUAL_GUILDS) === a.SOq.MUTUAL_GUILDS
  }
}

function o(e, t) {
  return !t.verified || null != e && T > Date.now() - new Date(e.created_at).getTime()
}(n = r || (r = {}))[n.UNDECIDED = 0] = "UNDECIDED", n[n.OPTIN = 1] = "OPTIN", n[n.OPTOUT = 2] = "OPTOUT";
let G = {
  0: void 0,
  1: !0,
  2: !1
};

function A() {
  return [{
    name: l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
    desc: l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
    value: 1
  }, {
    name: l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
    desc: l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
    value: 2
  }, {
    name: l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
    desc: l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
    value: 0
  }]
}