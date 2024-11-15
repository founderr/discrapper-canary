n.d(t, {
    $6: function () {
        return m;
    },
    YK: function () {
        return d;
    },
    _o: function () {
        return g;
    },
    ac: function () {
        return S;
    },
    bL: function () {
        return f;
    },
    g0: function () {
        return i;
    },
    gl: function () {
        return _;
    },
    rr: function () {
        return b;
    },
    xH: function () {
        return C;
    }
});
var o,
    i,
    c = n(695346),
    a = n(486472),
    r = n(430824);
n(626135);
var l = n(981631),
    s = n(388032);
let u = 86400000 * l.eBq;
function d() {
    let e = c.h2.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), e;
}
function _() {
    let e = c.zA.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), e;
}
function g() {
    let e = c.SE.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), e;
}
function b() {
    let e = c.iH.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), e;
}
function f(e) {
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
function m(e, t) {
    return !t.verified || (null != e && u > Date.now() - new Date(e.created_at).getTime());
}
((o = i || (i = {}))[(o.UNDECIDED = 0)] = 'UNDECIDED'), (o[(o.OPTIN = 1)] = 'OPTIN'), (o[(o.OPTOUT = 2)] = 'OPTOUT');
let S = {
    0: void 0,
    1: !0,
    2: !1
};
function C() {
    return [
        {
            name: s.intl.string(s.t['/yLMRU']),
            desc: s.intl.string(s.t['3fzkPj']),
            value: 1
        },
        {
            name: s.intl.string(s.t['21fP2d']),
            desc: s.intl.string(s.t.ggJ9jY),
            value: 2
        },
        {
            name: s.intl.string(s.t['OWIo8/']),
            desc: s.intl.string(s.t.HqYXp6),
            value: 0
        }
    ];
}
