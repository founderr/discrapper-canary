t.d(n, {
    u: function () {
        return u;
    }
});
var l = t(192379),
    i = t(731965),
    r = t(881052),
    a = t(972959),
    s = t(699553);
let o = {},
    c = (0, a.H)((e, n) => ({
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
                        l = null !== (n = o[e]) && void 0 !== n ? n : 0;
                    return t - l > 60000;
                })(t)
            ) {
                var a;
                return null != l ? await l : Promise.resolve(null !== (a = n().profiles[t]) && void 0 !== a ? a : null);
            }
            o[t] = Date.now();
            try {
                if (null != l) return await l;
                {
                    let l = (async () => {
                        let l = await (0, s.C)(t),
                            r = n().profiles,
                            a = n().fetchPromises;
                        return null == a[t]
                            ? l
                            : (delete a[t],
                              (0, i.j)(() => {
                                  e({
                                      profiles: {
                                          ...r,
                                          [t]: l
                                      },
                                      error: null,
                                      fetchPromises: a
                                  });
                              }),
                              l);
                    })();
                    return (
                        (0, i.j)(() => {
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
                let l = new r.Hx(s),
                    a = n().fetchPromises;
                null != a[t] && delete a[t],
                    (0, i.j)(() => {
                        e({
                            error: l,
                            fetchPromises: a
                        });
                    });
            }
            return null;
        }
    }));
function u(e) {
    let n = c.useState((n) => (null != e ? n.profiles[e] : null), Object.is),
        t = c.useField('fetchGuildProfile');
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
