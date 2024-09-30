t.d(n, {
    $6: function () {
        return m;
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
        return g;
    },
    g0: function () {
        return c;
    },
    gl: function () {
        return _;
    },
    rr: function () {
        return S;
    },
    xH: function () {
        return f;
    }
});
var o,
    c,
    a = t(695346),
    i = t(486472),
    r = t(430824);
t(626135);
var l = t(981631),
    s = t(689938);
let d = 86400000 * l.eBq;
function u() {
    let e = a.h2.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), e;
}
function _() {
    let e = a.zA.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), e;
}
function b() {
    let e = a.SE.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), e;
}
function S() {
    let e = a.iH.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), e;
}
function g(e) {
    return (e & l.HGf) === l.HGf
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0
          }
        : {
              all: !1,
              mutualFriends: (e & l.SOq.MUTUAL_FRIENDS) === l.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & l.SOq.MUTUAL_GUILDS) === l.SOq.MUTUAL_GUILDS
          };
}
function m(e, n) {
    return !n.verified || (null != e && d > Date.now() - new Date(e.created_at).getTime());
}
((o = c || (c = {}))[(o.UNDECIDED = 0)] = 'UNDECIDED'), (o[(o.OPTIN = 1)] = 'OPTIN'), (o[(o.OPTOUT = 2)] = 'OPTOUT');
let T = {
    0: void 0,
    1: !0,
    2: !1
};
function f() {
    return [
        {
            name: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
            desc: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
            value: 1
        },
        {
            name: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
            desc: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
            value: 2
        },
        {
            name: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
            desc: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
            value: 0
        }
    ];
}
