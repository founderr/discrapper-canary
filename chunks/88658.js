t.d(n, {
    $6: function () {
        return m;
    },
    YK: function () {
        return d;
    },
    _o: function () {
        return S;
    },
    ac: function () {
        return b;
    },
    bL: function () {
        return E;
    },
    g0: function () {
        return r;
    },
    gl: function () {
        return _;
    },
    rr: function () {
        return g;
    },
    xH: function () {
        return I;
    }
});
var o,
    r,
    a = t(695346),
    i = t(486472),
    l = t(430824);
t(626135);
var c = t(981631),
    u = t(689938);
let s = 86400000 * c.eBq;
function d() {
    let e = a.h2.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != l.Z.getGuild(e))), e;
}
function _() {
    let e = a.zA.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != l.Z.getGuild(e))), e;
}
function S() {
    let e = a.SE.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != l.Z.getGuild(e))), e;
}
function g() {
    let e = a.iH.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != l.Z.getGuild(e))), e;
}
function E(e) {
    return (e & c.HGf) === c.HGf
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0
          }
        : {
              all: !1,
              mutualFriends: (e & c.SOq.MUTUAL_FRIENDS) === c.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & c.SOq.MUTUAL_GUILDS) === c.SOq.MUTUAL_GUILDS
          };
}
function m(e, n) {
    return !n.verified || (null != e && s > Date.now() - new Date(e.created_at).getTime());
}
((o = r || (r = {}))[(o.UNDECIDED = 0)] = 'UNDECIDED'), (o[(o.OPTIN = 1)] = 'OPTIN'), (o[(o.OPTOUT = 2)] = 'OPTOUT');
let b = {
    0: void 0,
    1: !0,
    2: !1
};
function I() {
    return [
        {
            name: u.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
            desc: u.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
            value: 1
        },
        {
            name: u.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
            desc: u.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
            value: 2
        },
        {
            name: u.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
            desc: u.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
            value: 0
        }
    ];
}
