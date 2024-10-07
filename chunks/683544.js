n(47120);
var i = n(735250),
    a = n(470079),
    s = n(209173),
    r = n(399606),
    l = n(674588),
    o = n(368862),
    c = n(809547),
    d = n(125909),
    u = n(797908),
    _ = n(292191),
    E = n(854336);
t.Z = function (e) {
    let { categoryId: t } = e,
        [n, h] = a.useState(1);
    a.useCallback((e) => {
        h(e);
    }, []);
    let m = a.useMemo(
            () => ({
                query: '',
                page: n,
                categoryId: t
            }),
            [n, t]
        ),
        I = (0, r.cj)([c.Z], () => {
            var e, t;
            return null !== (t = null === (e = c.Z.getSearchResults(m)) || void 0 === e ? void 0 : e.results) && void 0 !== t ? t : [];
        }),
        p = (0, r.e7)([c.Z], () =>
            c.Z.getFetchState({
                query: '',
                page: n,
                categoryId: t
            })
        ),
        g = a.useMemo(() => (null == I ? void 0 : I.filter((e) => !(e.type !== s.s.APPLICATION))), [I]),
        T = a.useCallback((e) => {
            let { page: t, activeCategoryId: n, onSuccessCallback: i, guildId: a, fetchCounts: s } = e;
            s &&
                l.yC({
                    query: '',
                    guildId: a
                }),
                l.yC({
                    query: '',
                    guildId: a,
                    options: {
                        page: t,
                        categoryId: n
                    },
                    onSuccessCallback: i
                });
        }, []);
    return (a.useEffect(() => {
        T({
            page: n,
            activeCategoryId: t,
            onSuccessCallback: () => {}
        });
    }, [t, T, n]),
    p === o.M.ERROR)
        ? (0, i.jsx)('div', {
              className: E.errorContainer,
              children: (0, i.jsx)(_.Z, { className: E.error })
          })
        : (0, i.jsx)(d.Z, {
              loading: p === o.M.FETCHING,
              children: (0, i.jsx)('div', {
                  className: E.content,
                  children:
                      null == g
                          ? void 0
                          : g.map((e) => {
                                if (e.type === s.s.APPLICATION) {
                                    let t = e.data;
                                    return (0, i.jsx)(u.Z, { application: t }, t.id);
                                }
                                return null;
                            })
              })
          });
};
