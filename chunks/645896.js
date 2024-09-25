n.d(t, {
    Cc: function () {
        return f;
    },
    E8: function () {
        return h;
    },
    L_: function () {
        return p;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(652874),
    o = n(143927),
    s = n(731965),
    l = n(881052),
    u = n(931240);
let c = {},
    d = 60000;
function _(e) {
    var t;
    let n = Date.now();
    return n - (null !== (t = c[e]) && void 0 !== t ? t : 0) > d;
}
let E = (0, a.Z)((e, t) => ({
    clans: {},
    isFetchingGuild: (e) => null != t().fetchPromises[e],
    error: null,
    fetchPromises: {},
    fetchClanInfo: async (n) => {
        let r = t().fetchPromises[n];
        if (!_(n)) {
            var i;
            return null != r ? await r : Promise.resolve(null !== (i = t().clans[n]) && void 0 !== i ? i : null);
        }
        c[n] = Date.now();
        try {
            if (null != r) return await r;
            {
                let r = (async () => {
                    let r = await (0, u.WJ)(n),
                        i = t().clans,
                        a = t().fetchPromises;
                    return null == a[n]
                        ? r
                        : (delete a[n],
                          (0, s.j)(() => {
                              e({
                                  clans: {
                                      ...i,
                                      [n]: r
                                  },
                                  error: null,
                                  fetchPromises: a
                              });
                          }),
                          r);
                })();
                return (
                    (0, s.j)(() => {
                        e({
                            fetchPromises: {
                                ...t().fetchPromises,
                                [n]: r
                            }
                        });
                    }),
                    await r
                );
            }
        } catch (a) {
            let r = new l.Hx(a),
                i = t().fetchPromises;
            null != i[n] && delete i[n],
                (0, s.j)(() => {
                    e({
                        error: r,
                        fetchPromises: i
                    });
                });
        }
        return null;
    }
}));
function f(e) {
    return E((t) => (null != e ? t.clans[e] : null));
}
function h(e) {
    return E((t) => null != e && t.isFetchingGuild(e));
}
function p(e) {
    let [t, n] = E((e) => [e.fetchClanInfo, e.isFetchingGuild], o.Z),
        r = null != e && n(e),
        a = f(e),
        s = i.useCallback(async () => {
            if (r || null == e) return a;
            try {
                return await t(e);
            } catch (e) {
                return null;
            }
        }, [r, e, a, t]);
    return [r, s];
}
