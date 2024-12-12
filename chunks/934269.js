t.d(n, {
    u: function () {
        return u;
    }
});
var l = t(192379),
    i = t(65400),
    r = t(731965),
    a = t(881052),
    s = t(699553);
let c = {},
    o = (0, i.F)((e, n) => ({
        profiles: {},
        isFetchingGuild: (e) => null != n().fetchPromises[e],
        error: null,
        fetchPromises: {},
        fetchGuildProfile: async (t) => {
            let l = n().fetchPromises[t];
            if (
                !(function (e) {
                    var n;
                    let t = Date.now(),
                        l = null !== (n = c[e]) && void 0 !== n ? n : 0;
                    return t - l > 60000;
                })(t)
            ) {
                var i;
                return null != l ? await l : Promise.resolve(null !== (i = n().profiles[t]) && void 0 !== i ? i : null);
            }
            c[t] = Date.now();
            try {
                if (null != l) return await l;
                {
                    let l = (async () => {
                        let l = await (0, s.C)(t),
                            i = n().profiles,
                            a = n().fetchPromises;
                        return null == a[t]
                            ? l
                            : (delete a[t],
                              (0, r.j)(() => {
                                  e({
                                      profiles: {
                                          ...i,
                                          [t]: l
                                      },
                                      error: null,
                                      fetchPromises: a
                                  });
                              }),
                              l);
                    })();
                    return (
                        (0, r.j)(() => {
                            e({
                                fetchPromises: {
                                    ...n().fetchPromises,
                                    [t]: l
                                }
                            });
                        }),
                        await l
                    );
                }
            } catch (s) {
                let l = new a.Hx(s),
                    i = n().fetchPromises;
                null != i[t] && delete i[t],
                    (0, r.j)(() => {
                        e({
                            error: l,
                            fetchPromises: i
                        });
                    });
            }
            return null;
        }
    }));
function u(e) {
    let n = o((n) => (null != e ? n.profiles[e] : null)),
        t = o((e) => e.fetchGuildProfile);
    return {
        guildProfile: n,
        fetchGuildProfile: l.useCallback(async () => {
            if (null == e) return null;
            try {
                return await t(e);
            } catch (e) {
                return null;
            }
        }, [e, t])
    };
}
