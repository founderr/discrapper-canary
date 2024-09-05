n.d(t, {
    $6: function () {
        return m;
    },
    YK: function () {
        return d;
    },
    _o: function () {
        return f;
    },
    ac: function () {
        return S;
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
        return g;
    },
    xH: function () {
        return p;
    }
});
var i,
    r,
    o = n(695346),
    l = n(486472),
    a = n(430824);
n(626135);
var s = n(981631),
    u = n(689938);
let c = 86400000 * s.eBq;
function d() {
    let e = o.h2.getSetting();
    return 0 === l.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), e;
}
function h() {
    let e = o.zA.getSetting();
    return 0 === l.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), e;
}
function f() {
    let e = o.SE.getSetting();
    return 0 === l.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), e;
}
function g() {
    let e = o.iH.getSetting();
    return 0 === l.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), e;
}
function _(e) {
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
function m(e, t) {
    return !t.verified || (null != e && c > Date.now() - new Date(e.created_at).getTime());
}
((i = r || (r = {}))[(i.UNDECIDED = 0)] = 'UNDECIDED'), (i[(i.OPTIN = 1)] = 'OPTIN'), (i[(i.OPTOUT = 2)] = 'OPTOUT');
let S = {
    0: void 0,
    1: !0,
    2: !1
};
function p() {
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
