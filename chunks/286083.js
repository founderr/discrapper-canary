n(653041), n(47120);
var i = n(905837),
    l = n(280836),
    r = n(731965),
    a = n(433517),
    o = n(229893);
function s(e, t) {
    if (0 === t || e.length <= t) return [e];
    let n = [];
    for (let i = 0; i < e.length; i += t) n.push(e.slice(i, i + t));
    return n;
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 30,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
        l = Math.min((t + i) * n, e.length);
    return e.slice(t * n, l).filter((e) => o.Z.shouldFetchGuild(e));
}
(0, i.Ue)()(
    (0, l.tJ)(
        (e) => ({
            currentPage: 1,
            pageSize: 30,
            currentColumnCount: 3,
            totalItems: 0,
            chunkedPages: [],
            fetchableGuildIds: [],
            _rawItems: [],
            _removedItems: [],
            updatePage: (t) => {
                (0, r.j)(() => {
                    e((e) => {
                        let { _rawItems: n, pageSize: i } = e;
                        return {
                            currentPage: t,
                            fetchableGuildIds: c(n, t - 1, i)
                        };
                    });
                });
            },
            updatePaginationSettings: function (t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                    { pageMemoryEnabled: i } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                (0, r.j)(() => {
                    let l = t * n;
                    e((e) => {
                        let { currentPage: n, _rawItems: r } = e;
                        return {
                            currentColumnCount: t,
                            pageSize: l,
                            currentPage: i ? n : 1,
                            chunkedPages: s(r, l),
                            fetchableGuildIds: c(r, n - 1, l)
                        };
                    });
                });
            },
            updatePaginationResults: (t) => {
                (0, r.j)(() => {
                    e((e) => {
                        let { _removedItems: n, pageSize: i, currentPage: l } = e,
                            r = t.filter((e) => !n.includes(e));
                        return {
                            _rawItems: r,
                            chunkedPages: s(r, i),
                            totalItems: r.length,
                            fetchableGuildIds: c(r, l - 1, i)
                        };
                    });
                });
            },
            resetPagination: function () {
                let { pageMemoryEnabled: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, r.j)(() => {
                    e((e) => {
                        let { currentPage: n } = e;
                        return {
                            currentPage: t ? n : 1,
                            totalItems: 0,
                            _rawItems: [],
                            chunkedPages: []
                        };
                    });
                });
            },
            removeGuilds: (t) => {
                (0, r.j)(() => {
                    e((e) => {
                        let { _rawItems: n, _removedItems: i, pageSize: l, currentPage: r } = e,
                            a = n.filter((e) => !t.includes(e)),
                            o = t.filter((e) => !i.includes(e));
                        return {
                            _rawItems: a,
                            _removedItems: [...i, ...o],
                            chunkedPages: s(a, l),
                            totalItems: a.length,
                            fetchableGuildIds: c(a, r - 1, l)
                        };
                    });
                });
            }
        }),
        {
            name: 'clan-discovery-pagination',
            storage: (0, l.FL)(() => ({
                getItem: (e) => {
                    var t;
                    return null !== (t = a.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => a.K.set(e, t),
                removeItem: (e) => a.K.remove(e)
            })),
            partialize: (e) => ({ currentPage: e.currentPage })
        }
    )
);
