r.d(n, {
    Cc: function () {
        return h;
    },
    E8: function () {
        return p;
    },
    L_: function () {
        return m;
    }
});
var i = r(192379),
    a = r(232713),
    s = r(65400),
    o = r(731965),
    l = r(881052),
    u = r(931240);
let c = {},
    d = 60000;
function f(e) {
    var n;
    let r = Date.now();
    return r - (null !== (n = c[e]) && void 0 !== n ? n : 0) > d;
}
let _ = (0, s.F)((e, n) => ({
    clans: {},
    isFetchingGuild: (e) => null != n().fetchPromises[e],
    error: null,
    fetchPromises: {},
    fetchClanInfo: async (r) => {
        let i = n().fetchPromises[r];
        if (!f(r)) {
            var a;
            return null != i ? await i : Promise.resolve(null !== (a = n().clans[r]) && void 0 !== a ? a : null);
        }
        c[r] = Date.now();
        try {
            if (null != i) return await i;
            {
                let i = (async () => {
                    let i = await (0, u.WJ)(r),
                        a = n().clans,
                        s = n().fetchPromises;
                    return null == s[r]
                        ? i
                        : (delete s[r],
                          (0, o.j)(() => {
                              e({
                                  clans: {
                                      ...a,
                                      [r]: i
                                  },
                                  error: null,
                                  fetchPromises: s
                              });
                          }),
                          i);
                })();
                return (
                    (0, o.j)(() => {
                        e({
                            fetchPromises: {
                                ...n().fetchPromises,
                                [r]: i
                            }
                        });
                    }),
                    await i
                );
            }
        } catch (s) {
            let i = new l.Hx(s),
                a = n().fetchPromises;
            null != a[r] && delete a[r],
                (0, o.j)(() => {
                    e({
                        error: i,
                        fetchPromises: a
                    });
                });
        }
        return null;
    }
}));
function h(e) {
    return _((n) => (null != e ? n.clans[e] : null));
}
function p(e) {
    return _((n) => null != e && n.isFetchingGuild(e));
}
function m(e) {
    let n = _((e) => e.fetchClanInfo, a.X),
        r = p(e);
    return [
        r,
        i.useCallback(async () => {
            if (null == e) return null;
            try {
                return await n(e);
            } catch (e) {
                return null;
            }
        }, [e, n])
    ];
}
