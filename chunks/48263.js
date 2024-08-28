n(47120), n(653041), n(312677), n(411104);
var t = n(658722),
    o = n.n(t),
    l = n(954955),
    i = n.n(l),
    u = n(226951),
    a = n(624138),
    c = n(620490);
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
    b = i()(
        () => {
            if (0 !== p.size)
                p.forEach((e) => {
                    let r = d.get(e);
                    null != r && S(e, r);
                }),
                    p.clear();
        },
        100,
        {
            leading: !0,
            trailing: !0
        }
    );
function g(e, r) {
    return e * (null != r ? r : 1);
}
function S(e, r) {
    var n, t;
    let { query: l, limit: i, filters: s, blacklist: d, whitelist: p } = r,
        b = null != s && s.strict && null !== (n = s.guild) && void 0 !== n ? n : null,
        S = null !== (t = r.boosters) && void 0 !== t ? t : {},
        R = RegExp('^'.concat(u.Z.escape(l)), 'i'),
        U = RegExp(u.Z.escape(l), 'i'),
        w = [];
    if ('' === l) return m(l, w, e);
    let y = l.toLocaleLowerCase(),
        _ = (0, a.Fv)(y);
    f.forEach((e, r) => {
        let n;
        if (
            !(function (e, r, n, t, o) {
                if (null != t && t.indexOf(e) >= 0) return !1;
                if (null != o && o.indexOf(e) >= 0) return !0;
                if (null != n) {
                    let { friends: e, guild: t } = n;
                    return (!0 === e && !0 === r.isFriend) || (null != t && (null != r[t] || null === r[t])) || !1;
                }
                return !0;
            })(r, e, s, d, p)
        )
            return;
        let { username: t } = e;
        r === l
            ? (n = {
                  id: r,
                  username: t,
                  comparator: r,
                  score: g(10, S[r])
              })
            : Object.keys(e).forEach((l) => {
                  let i;
                  let u = e[l];
                  if ('boolean' == typeof u || null == u || (null != b && l !== v && l !== E && l !== h && b !== l)) return;
                  let c = (0, a._I)(u.toLocaleLowerCase());
                  R.test(u)
                      ? (i = {
                            comparator: u,
                            score: g(10, S[r])
                        })
                      : U.test(u)
                        ? (i = {
                              comparator: u,
                              score: g(5, S[r])
                          })
                        : o()(y, c)
                          ? (i = {
                                comparator: u,
                                score: g(1, S[r])
                            })
                          : o()(_, (0, a.Fv)(c)) &&
                            (i = {
                                comparator: u,
                                score: g(1, S[r])
                            }),
                      null != i &&
                          (null == n || n.score < i.score) &&
                          (n = {
                              ...i,
                              id: r,
                              username: t
                          });
              }),
            null != n && w.push(n);
    }),
        w.sort(c.Z),
        w.length > i && (w.length = i),
        m(l, w, e);
}
function m(e, r, n) {
    let t = {
        type: s.USER_RESULTS,
        uuid: n,
        payload: {
            query: e,
            results: r
        }
    };
    self.postMessage(t);
}
self.addEventListener('message', (e) => {
    let { data: r } = e;
    if (null == r || null == r.type) throw Error('Invalid data');
    switch (r.type) {
        case s.UPDATE_USERS:
            return (function (e) {
                let { payload: r } = e,
                    n = !1,
                    t = new Set();
                r.forEach((e) => {
                    var r;
                    let { id: o, ...l } = e,
                        i = null !== (r = f.get(o)) && void 0 !== r ? r : null,
                        u = {
                            ...i,
                            ...l
                        };
                    f.set(o, u),
                        d.size > 0 &&
                            ((u.isFriend !== (null == i ? void 0 : i.isFriend) || u.friendNickname !== (null == i ? void 0 : i.friendNickname)) && (n = !0),
                            Object.keys(u).forEach((e) => {
                                if ('isBot' !== e && 'isFriend' !== e && e !== v && e !== E && e !== h) t.add(e);
                            }));
                }),
                    d.forEach((e, r) => {
                        let { filters: o } = e;
                        (null == o || o.friends === n || t.has(o.guild)) && p.add(r);
                    }),
                    b();
            })(r);
        case s.QUERY_SET:
            return (function (e) {
                let { uuid: r, payload: n } = e;
                d.set(r, n), S(r, n);
            })(r);
        case s.QUERY_CLEAR:
            return (function (e) {
                let { uuid: r } = e;
                d.delete(r), p.delete(r), 0 === p.size && b.cancel();
            })(r);
    }
});
