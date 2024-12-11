r(47120), r(653041), r(312677), r(411104);
var t = r(658722),
    o = r.n(t),
    l = r(954955),
    i = r.n(l),
    u = r(226951),
    a = r(624138),
    c = r(620490);
let s = {
        UPDATE_USERS: 'UPDATE_USERS',
        USER_RESULTS: 'USER_RESULTS',
        QUERY_SET: 'QUERY_SET',
        QUERY_CLEAR: 'QUERY_CLEAR'
    },
    f = new Map(),
    d = new Map(),
    p = new Set(),
    v = 'username',
    E = 'friendNickname',
    h = 'globalName',
    b = new Set(['isFriend', 'isBot', 'isProvisional', v, E, h]),
    g = i()(
        () => {
            if (0 !== p.size)
                p.forEach((e) => {
                    let n = d.get(e);
                    null != n && m(e, n);
                }),
                    p.clear();
        },
        100,
        {
            leading: !0,
            trailing: !0
        }
    );
function S(e, n) {
    return e * (null != n ? n : 1);
}
function m(e, n) {
    var r, t;
    let { query: l, limit: i, filters: s, blacklist: d, whitelist: p } = n,
        b = null != s && s.strict && null !== (r = s.guild) && void 0 !== r ? r : null,
        g = null !== (t = n.boosters) && void 0 !== t ? t : {},
        m = RegExp('^'.concat(u.Z.escape(l)), 'i'),
        w = RegExp(u.Z.escape(l), 'i'),
        U = [];
    if ('' === l) return R(l, U, e);
    let y = l.toLocaleLowerCase(),
        _ = (0, a.Fv)(y);
    f.forEach((e, n) => {
        let r;
        if (
            !(function (e, n, r, t, o) {
                if (null != t && t.indexOf(e) >= 0) return !1;
                if (null != o && o.indexOf(e) >= 0) return !0;
                if (null != r) {
                    let { friends: e, guild: t, provisional: o } = r;
                    return (null == o || n.isProvisional === o) && ((!0 === e && !0 === n.isFriend) || (null != t && (null != n[t] || null === n[t])) || !1);
                }
                return !0;
            })(n, e, s, d, p)
        )
            return;
        let { username: t } = e;
        n === l
            ? (r = {
                  id: n,
                  username: t,
                  comparator: n,
                  score: S(10, g[n])
              })
            : Object.keys(e).forEach((l) => {
                  let i;
                  let u = e[l];
                  if ('boolean' == typeof u || null == u || (null != b && l !== v && l !== E && l !== h && b !== l)) return;
                  let c = (0, a._I)(u.toLocaleLowerCase());
                  m.test(u)
                      ? (i = {
                            comparator: u,
                            score: S(10, g[n])
                        })
                      : w.test(u)
                        ? (i = {
                              comparator: u,
                              score: S(5, g[n])
                          })
                        : o()(y, c)
                          ? (i = {
                                comparator: u,
                                score: S(1, g[n])
                            })
                          : o()(_, (0, a.Fv)(c)) &&
                            (i = {
                                comparator: u,
                                score: S(1, g[n])
                            }),
                      null != i &&
                          (null == r || r.score < i.score) &&
                          (r = {
                              ...i,
                              id: n,
                              username: t
                          });
              }),
            null != r && U.push(r);
    }),
        U.sort(c.Z),
        U.length > i && (U.length = i),
        R(l, U, e);
}
function R(e, n, r) {
    let t = {
        type: s.USER_RESULTS,
        uuid: r,
        payload: {
            query: e,
            results: n
        }
    };
    self.postMessage(t);
}
self.addEventListener('message', (e) => {
    let { data: n } = e;
    if (null == n || null == n.type) throw Error('Invalid data');
    switch (n.type) {
        case s.UPDATE_USERS:
            return (function (e) {
                let { payload: n } = e,
                    r = !1,
                    t = new Set();
                n.forEach((e) => {
                    var n;
                    let { id: o, ...l } = e,
                        i = null !== (n = f.get(o)) && void 0 !== n ? n : null,
                        u = {
                            ...i,
                            ...l
                        };
                    f.set(o, u),
                        d.size > 0 &&
                            ((u.isFriend !== (null == i ? void 0 : i.isFriend) || u.friendNickname !== (null == i ? void 0 : i.friendNickname)) && (r = !0),
                            Object.keys(u).forEach((e) => {
                                if (!b.has(e)) t.add(e);
                            }));
                }),
                    d.forEach((e, n) => {
                        let { filters: o } = e;
                        (null == o || o.friends === r || t.has(o.guild)) && p.add(n);
                    }),
                    g();
            })(n);
        case s.QUERY_SET:
            return (function (e) {
                let { uuid: n, payload: r } = e;
                d.set(n, r), m(n, r);
            })(n);
        case s.QUERY_CLEAR:
            return (function (e) {
                let { uuid: n } = e;
                d.delete(n), p.delete(n), 0 === p.size && g.cancel();
            })(n);
    }
});
