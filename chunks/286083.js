n.d(t, {
    $: function () {
        return o;
    },
    a: function () {
        return u;
    }
}),
    n(653041),
    n(47120);
var i = n(652874),
    a = n(868888),
    s = n(731965),
    r = n(433517),
    l = n(229893);
let o = 10;
function c(e, t) {
    if (0 === t || e.length <= t) return [e];
    let n = [];
    for (let i = 0; i < e.length; i += t) n.push(e.slice(i, i + t));
    return n;
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3 * o,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
        a = Math.min((t + i) * n, e.length);
    return e.slice(t * n, a).filter((e) => l.Z.shouldFetchGuild(e));
}
let u = (0, i.Z)(
    (0, a.tJ)(
        (e) => ({
            currentPage: 1,
            pageSize: 3 * o,
            currentColumnCount: 3,
            totalItems: 0,
            chunkedPages: [],
            fetchableGuildIds: [],
            _rawItems: [],
            _removedItems: [],
            updatePage: (t) => {
                (0, s.j)(() => {
                    e((e) => {
                        let { _rawItems: n, pageSize: i } = e;
                        return {
                            currentPage: t,
                            fetchableGuildIds: d(n, t - 1, i)
                        };
                    });
                });
            },
            updatePaginationSettings: function (t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                    { pageMemoryEnabled: i } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                (0, s.j)(() => {
                    let a = t * n;
                    e((e) => {
                        let { currentPage: n, _rawItems: s } = e;
                        return {
                            currentColumnCount: t,
                            pageSize: a,
                            currentPage: i ? n : 1,
                            chunkedPages: c(s, a),
                            fetchableGuildIds: d(s, n - 1, a)
                        };
                    });
                });
            },
            updatePaginationResults: (t) => {
                (0, s.j)(() => {
                    e((e) => {
                        let { _removedItems: n, pageSize: i, currentPage: a } = e,
                            s = t.filter((e) => !n.includes(e));
                        return {
                            _rawItems: s,
                            chunkedPages: c(s, i),
                            totalItems: s.length,
                            fetchableGuildIds: d(s, a - 1, i)
                        };
                    });
                });
            },
            resetPagination: function () {
                let { pageMemoryEnabled: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, s.j)(() => {
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
                (0, s.j)(() => {
                    e((e) => {
                        let { _rawItems: n, _removedItems: i, pageSize: a, currentPage: s } = e,
                            r = n.filter((e) => !t.includes(e)),
                            l = t.filter((e) => !i.includes(e));
                        return {
                            _rawItems: r,
                            _removedItems: [...i, ...l],
                            chunkedPages: c(r, a),
                            totalItems: r.length,
                            fetchableGuildIds: d(r, s - 1, a)
                        };
                    });
                });
            }
        }),
        {
            name: 'clan-discovery-pagination',
            getStorage: () => ({
                getItem: (e) => {
                    var t;
                    return null !== (t = r.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => r.K.set(e, t),
                removeItem: (e) => r.K.remove(e)
            }),
            partialize: (e) => ({ currentPage: e.currentPage })
        }
    )
);
