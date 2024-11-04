var i,
    r,
    a,
    l,
    s = n(442837),
    o = n(570140),
    c = n(656063),
    d = n(814443),
    u = n(158776),
    h = n(594174),
    m = n(981631);
let p = !1,
    g = {},
    f = {};
function _(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== I(e) || t;
        }),
        t
    );
}
function E(e) {
    let t = f[e];
    if (null == t) return !1;
    let n = t.gameId;
    return null != g[n] && ((g = { ...g }), delete g[n][e], 0 === Object.values(g[n]).length && delete g[n]), (f = { ...f }), delete f[e], !0;
}
function I(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== m.IIU.CUSTOM_STATUS);
    if (0 === i.length) return E(t.id);
    let r = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                var n, i, r, a;
                let l = (0, c.Z)(e);
                if (null == l) return E(t.id);
                let s = f[t.id];
                null != s && s.gameId !== l && E(t.id);
                let o = null !== (i = null === (n = e.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== i ? i : Date.now(),
                    d = {
                        userId: t.id,
                        activity: e,
                        startedPlaying: o
                    };
                return (
                    (r = l),
                    (a = d),
                    (g = {
                        ...g,
                        [r]: {
                            ...g[r],
                            [a.userId]: a
                        }
                    }),
                    (f = {
                        ...f,
                        [a.userId]: {
                            gameId: r,
                            startedPlaying: a.startedPlaying
                        }
                    }),
                    !0
                );
            })(e, t) && (r = !0);
        }),
        r
    );
}
function C() {
    let e = !1;
    if (!d.Z.needsRefresh() && !p) {
        let t;
        (g = {}),
            (f = {}),
            (t = !1),
            u.Z.getUserIds().forEach((e) => {
                let n = h.default.getUser(e);
                null != n &&
                    (t =
                        I({
                            user: n,
                            activities: u.Z.getActivities(e)
                        }) || t);
            }),
            (e = t);
    }
    return (p = !d.Z.needsRefresh()), e;
}
class v extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(d.Z), this.syncWith([d.Z], C);
    }
    get games() {
        return g;
    }
    get usersPlaying() {
        return f;
    }
    get gameIds() {
        return Object.keys(g);
    }
    getNowPlaying(e) {
        return g[e];
    }
    getUserGame(e) {
        return f[e];
    }
}
(a = 'NowPlayingStore'),
    (r = 'displayName') in (i = v)
        ? Object.defineProperty(i, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = a),
    (t.Z = new v(o.Z, {
        CONNECTION_OPEN: function () {
            (g = {}), (f = {});
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t, presences: n } = e,
                i = !1;
            return (
                t.forEach((e) => {
                    _(e.presences) && (i = !0);
                }),
                _(n) && (i = !0),
                i
            );
        },
        LOGOUT: function () {
            (g = {}), (f = {});
        },
        PRESENCE_UPDATES: function (e) {
            let { updates: t } = e;
            return t.map((e) => I(e)).some((e) => e);
        },
        PRESENCES_REPLACE: function (e) {
            let { presences: t } = e;
            return _(t);
        }
    }));
