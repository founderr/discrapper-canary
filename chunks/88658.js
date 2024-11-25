t.d(n, {
    $6: function () {
        return f;
    },
    YK: function () {
        return s;
    },
    _o: function () {
        return b;
    },
    ac: function () {
        return S;
    },
    bL: function () {
        return m;
    },
    g0: function () {
        return c;
    },
    gl: function () {
        return _;
    },
    rr: function () {
        return g;
    },
    xH: function () {
        return C;
    }
});
var o,
    c,
    i = t(695346),
    a = t(486472),
    r = t(430824);
t(626135);
var l = t(981631),
    d = t(388032);
let u = 86400000 * l.eBq;
function s() {
    let e = i.h2.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), e;
}
function _() {
    let e = i.zA.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), e;
}
function b() {
    let e = i.SE.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), e;
}
function g() {
    let e = i.iH.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), e;
}
function m(e) {
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
function f(e, n) {
    return !n.verified || (null != e && u > Date.now() - new Date(e.created_at).getTime());
}
((o = c || (c = {}))[(o.UNDECIDED = 0)] = 'UNDECIDED'), (o[(o.OPTIN = 1)] = 'OPTIN'), (o[(o.OPTOUT = 2)] = 'OPTOUT');
let S = {
    0: void 0,
    1: !0,
    2: !1
};
function C() {
    return [
        {
            name: d.intl.string(d.t['/yLMRU']),
            desc: d.intl.string(d.t['3fzkPj']),
            value: 1
        },
        {
            name: d.intl.string(d.t['21fP2d']),
            desc: d.intl.string(d.t.ggJ9jY),
            value: 2
        },
        {
            name: d.intl.string(d.t['OWIo8/']),
            desc: d.intl.string(d.t.HqYXp6),
            value: 0
        }
    ];
}
