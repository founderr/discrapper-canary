n(47120);
var i,
    l,
    a,
    r,
    s = n(442837),
    o = n(570140),
    c = n(445507);
let u = {
        'valorant-user': c.qJ,
        'valorant-admin': c.xQ,
        'genshin-user': c.Zl,
        'genshin-admin': c.Q3
    },
    d = null,
    h = {},
    p = new Set();
function f() {
    for (let e in ((d = null), h)) delete h[e];
}
class _ extends (i = s.ZP.Store) {
    getActiveUserSignUp() {
        return d;
    }
    getActiveGuildSignUp(e) {
        var t;
        return null !== (t = h[e]) && void 0 !== t ? t : null;
    }
    hasCompletedTarget(e) {
        return p.has(e);
    }
}
(r = 'SignUpStore'),
    (a = 'displayName') in (l = _)
        ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = r),
    (t.Z = new _(o.Z, {
        ENABLE_USER_SIGN_UP: function (e) {
            let { key: t } = e,
                n = u[t];
            (0, c.u9)(n) && 0 === Object.keys(h).length && (d = n);
        },
        ENABLE_GUILD_SIGN_UP: function (e) {
            let { key: t, guildId: n } = e,
                i = u[t];
            (0, c.mC)(i) && ((h[n] = i), (d = null));
        },
        COMPLETE_SIGN_UP: function (e) {
            let { targetKey: t } = e;
            p.add(t), f();
        },
        DISMISS_SIGN_UP: f
    }));
