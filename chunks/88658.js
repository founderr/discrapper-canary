n.d(t, {
    $6: function () {
        return C;
    },
    YK: function () {
        return h;
    },
    _o: function () {
        return g;
    },
    ac: function () {
        return _;
    },
    bL: function () {
        return m;
    },
    g0: function () {
        return i;
    },
    gl: function () {
        return d;
    },
    rr: function () {
        return f;
    },
    xH: function () {
        return I;
    }
}),
    n(47120);
var i,
    r,
    l = n(695346),
    u = n(486472),
    a = n(430824);
n(626135);
var o = n(981631),
    c = n(388032);
let s = 86400000 * o.eBq;
function h() {
    let e = l.h2.getSetting();
    return 0 === u.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), new Set(e);
}
function d() {
    let e = l.zA.getSetting();
    return 0 === u.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), new Set(e);
}
function g() {
    let e = l.SE.getSetting();
    return 0 === u.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), new Set(e);
}
function f() {
    let e = l.iH.getSetting();
    return 0 === u.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), new Set(e);
}
function m(e) {
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
function C(e, t) {
    return !t.verified || (null != e && s > Date.now() - new Date(e.created_at).getTime());
}
((r = i || (i = {}))[(r.UNDECIDED = 0)] = 'UNDECIDED'), (r[(r.OPTIN = 1)] = 'OPTIN'), (r[(r.OPTOUT = 2)] = 'OPTOUT');
let _ = {
    0: void 0,
    1: !0,
    2: !1
};
function I() {
    return [
        {
            name: c.intl.string(c.t['/yLMRU']),
            desc: c.intl.string(c.t['3fzkPj']),
            value: 1
        },
        {
            name: c.intl.string(c.t['21fP2d']),
            desc: c.intl.string(c.t.ggJ9jY),
            value: 2
        },
        {
            name: c.intl.string(c.t['OWIo8/']),
            desc: c.intl.string(c.t.HqYXp6),
            value: 0
        }
    ];
}
