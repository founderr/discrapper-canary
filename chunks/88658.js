n.d(t, {
    $6: function () {
        return I;
    },
    YK: function () {
        return d;
    },
    _o: function () {
        return g;
    },
    ac: function () {
        return m;
    },
    bL: function () {
        return _;
    },
    g0: function () {
        return r;
    },
    gl: function () {
        return h;
    },
    rr: function () {
        return f;
    },
    xH: function () {
        return S;
    }
});
var i,
    r,
    u = n(695346),
    l = n(486472),
    a = n(430824);
n(626135);
var o = n(981631),
    c = n(689938);
let s = 86400000 * o.eBq;
function d() {
    let e = u.h2.getSetting();
    return 0 === l.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), e;
}
function h() {
    let e = u.zA.getSetting();
    return 0 === l.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), e;
}
function g() {
    let e = u.SE.getSetting();
    return 0 === l.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), e;
}
function f() {
    let e = u.iH.getSetting();
    return 0 === l.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), e;
}
function _(e) {
    return (e & o.HGf) === o.HGf
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0
          }
        : {
              all: !1,
              mutualFriends: (e & o.SOq.MUTUAL_FRIENDS) === o.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & o.SOq.MUTUAL_GUILDS) === o.SOq.MUTUAL_GUILDS
          };
}
function I(e, t) {
    return !t.verified || (null != e && s > Date.now() - new Date(e.created_at).getTime());
}
((i = r || (r = {}))[(i.UNDECIDED = 0)] = 'UNDECIDED'), (i[(i.OPTIN = 1)] = 'OPTIN'), (i[(i.OPTOUT = 2)] = 'OPTOUT');
let m = {
    0: void 0,
    1: !0,
    2: !1
};
function S() {
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
