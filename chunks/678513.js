n(47120);
var i,
    l,
    r,
    o,
    a = n(442837),
    s = n(570140),
    c = n(445507);
let d = {
        'valorant-user': c.qJ,
        'valorant-admin': c.xQ,
        'genshin-user': c.Zl,
        'genshin-admin': c.Q3
    },
    u = null,
    h = {},
    p = new Set();
function m() {
    for (let e in ((u = null), h)) delete h[e];
}
class f extends (i = a.ZP.Store) {
    getActiveUserSignUp() {
        return u;
    }
    getActiveGuildSignUp(e) {
        var t;
        return null !== (t = h[e]) && void 0 !== t ? t : null;
    }
    hasCompletedTarget(e) {
        return p.has(e);
    }
}
(o = 'SignUpStore'),
    (r = 'displayName') in (l = f)
        ? Object.defineProperty(l, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = o),
    (t.Z = new f(s.Z, {
        ENABLE_USER_SIGN_UP: function (e) {
            let { key: t } = e,
                n = d[t];
            (0, c.u9)(n) && 0 === Object.keys(h).length && (u = n);
        },
        ENABLE_GUILD_SIGN_UP: function (e) {
            let { key: t, guildId: n } = e,
                i = d[t];
            (0, c.mC)(i) && ((h[n] = i), (u = null));
        },
        COMPLETE_SIGN_UP: function (e) {
            let { targetKey: t } = e;
            p.add(t), m();
        },
        DISMISS_SIGN_UP: m
    }));
