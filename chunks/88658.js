n.d(t, {
    $6: function () {
        return p;
    },
    YK: function () {
        return u;
    },
    _o: function () {
        return m;
    },
    ac: function () {
        return b;
    },
    bL: function () {
        return f;
    },
    g0: function () {
        return a;
    },
    gl: function () {
        return h;
    },
    rr: function () {
        return x;
    },
    xH: function () {
        return g;
    }
});
var r,
    a,
    l = n(695346),
    i = n(486472),
    o = n(430824);
n(626135);
var s = n(981631),
    c = n(689938);
let d = 86400000 * s.eBq;
function u() {
    let e = l.h2.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), e;
}
function h() {
    let e = l.zA.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), e;
}
function m() {
    let e = l.SE.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), e;
}
function x() {
    let e = l.iH.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), e;
}
function f(e) {
    return (e & s.HGf) === s.HGf
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0
          }
        : {
              all: !1,
              mutualFriends: (e & s.SOq.MUTUAL_FRIENDS) === s.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & s.SOq.MUTUAL_GUILDS) === s.SOq.MUTUAL_GUILDS
          };
}
function p(e, t) {
    return !t.verified || (null != e && d > Date.now() - new Date(e.created_at).getTime());
}
((r = a || (a = {}))[(r.UNDECIDED = 0)] = 'UNDECIDED'), (r[(r.OPTIN = 1)] = 'OPTIN'), (r[(r.OPTOUT = 2)] = 'OPTOUT');
let b = {
    0: void 0,
    1: !0,
    2: !1
};
function g() {
    return [
        {
            name: c.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
            desc: c.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
            value: 1
        },
        {
            name: c.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
            desc: c.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
            value: 2
        },
        {
            name: c.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
            desc: c.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
            value: 0
        }
    ];
}
