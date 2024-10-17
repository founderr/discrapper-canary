t.d(n, {
    $6: function () {
        return S;
    },
    YK: function () {
        return u;
    },
    _o: function () {
        return b;
    },
    ac: function () {
        return T;
    },
    bL: function () {
        return m;
    },
    g0: function () {
        return o;
    },
    gl: function () {
        return _;
    },
    rr: function () {
        return g;
    },
    xH: function () {
        return f;
    }
});
var a,
    o,
    c = t(695346),
    r = t(486472),
    i = t(430824);
t(626135);
var d = t(981631),
    l = t(689938);
let s = 86400000 * d.eBq;
function u() {
    let e = c.h2.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != i.Z.getGuild(e))), e;
}
function _() {
    let e = c.zA.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != i.Z.getGuild(e))), e;
}
function b() {
    let e = c.SE.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != i.Z.getGuild(e))), e;
}
function g() {
    let e = c.iH.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != i.Z.getGuild(e))), e;
}
function m(e) {
    return (e & d.HGf) === d.HGf
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0
          }
        : {
              all: !1,
              mutualFriends: (e & d.SOq.MUTUAL_FRIENDS) === d.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & d.SOq.MUTUAL_GUILDS) === d.SOq.MUTUAL_GUILDS
          };
}
function S(e, n) {
    return !n.verified || (null != e && s > Date.now() - new Date(e.created_at).getTime());
}
((a = o || (o = {}))[(a.UNDECIDED = 0)] = 'UNDECIDED'), (a[(a.OPTIN = 1)] = 'OPTIN'), (a[(a.OPTOUT = 2)] = 'OPTOUT');
let T = {
    0: void 0,
    1: !0,
    2: !1
};
function f() {
    return [
        {
            name: l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
            desc: l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
            value: 1
        },
        {
            name: l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
            desc: l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
            value: 2
        },
        {
            name: l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
            desc: l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
            value: 0
        }
    ];
}
