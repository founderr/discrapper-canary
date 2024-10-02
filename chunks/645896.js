n.d(t, {
    Cc: function () {
        return E;
    },
    E8: function () {
        return f;
    },
    L_: function () {
        return h;
    }
});
var r = n(470079),
    i = n(652874),
    a = n(143927),
    o = n(731965),
    s = n(881052),
    l = n(931240);
let u = {},
    c = 60000;
function d(e) {
    var t;
    let n = Date.now();
    return n - (null !== (t = u[e]) && void 0 !== t ? t : 0) > c;
}
let _ = (0, i.Z)((e, t) => ({
    clans: {},
    isFetchingGuild: (e) => null != t().fetchPromises[e],
    error: null,
    fetchPromises: {},
    fetchClanInfo: async (n) => {
        let r = t().fetchPromises[n];
        if (!d(n)) {
            var i;
            return null != r ? await r : Promise.resolve(null !== (i = t().clans[n]) && void 0 !== i ? i : null);
        }
        u[n] = Date.now();
        try {
            if (null != r) return await r;
            {
                let r = (async () => {
                    let r = await (0, l.WJ)(n),
                        i = t().clans,
                        a = t().fetchPromises;
                    return null == a[n]
                        ? r
                        : (delete a[n],
                          (0, o.j)(() => {
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
                    (0, o.j)(() => {
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
            let r = new s.Hx(a),
                i = t().fetchPromises;
            null != i[n] && delete i[n],
                (0, o.j)(() => {
                    e({
                        error: r,
                        fetchPromises: i
                    });
                });
        }
        return null;
    }
}));
function E(e) {
    return _((t) => (null != e ? t.clans[e] : null));
}
function f(e) {
    return _((t) => null != e && t.isFetchingGuild(e));
}
function h(e) {
    let t = _((e) => e.fetchClanInfo, a.Z),
        n = f(e);
    return [
        n,
        r.useCallback(async () => {
            if (null == e) return null;
            try {
                return await t(e);
            } catch (e) {
                return null;
            }
        }, [e, t])
    ];
}
