n.d(t, {
    $: function () {
        return c;
    },
    a: function () {
        return f;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(652874),
    o = n(868888),
    s = n(731965),
    l = n(433517),
    u = n(229893);
let c = 10,
    d = 3;
function _(e, t) {
    if (0 === t || e.length <= t) return [e];
    let n = [];
    for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
    return n;
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c * d,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
        i = t * n,
        a = Math.min((t + r) * n, e.length);
    return e.slice(i, a).filter((e) => u.Z.shouldFetchGuild(e));
}
let f = (0, a.Z)(
    (0, o.tJ)(
        (e) => ({
            currentPage: 1,
            pageSize: c * d,
            currentColumnCount: d,
            totalItems: 0,
            chunkedPages: [],
            fetchableGuildIds: [],
            _rawItems: [],
            _removedItems: [],
            updatePage: (t) => {
                (0, s.j)(() => {
                    e((e) => {
                        let { _rawItems: n, pageSize: r } = e;
                        return {
                            currentPage: t,
                            fetchableGuildIds: E(n, t - 1, r)
                        };
                    });
                });
            },
            updatePaginationSettings: function (t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
                    { pageMemoryEnabled: r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                (0, s.j)(() => {
                    let i = t * n;
                    e((e) => {
                        let { currentPage: n, _rawItems: a } = e;
                        return {
                            currentColumnCount: t,
                            pageSize: i,
                            currentPage: r ? n : 1,
                            chunkedPages: _(a, i),
                            fetchableGuildIds: E(a, n - 1, i)
                        };
                    });
                });
            },
            updatePaginationResults: (t) => {
                (0, s.j)(() => {
                    e((e) => {
                        let { _removedItems: n, pageSize: r, currentPage: i } = e,
                            a = t.filter((e) => !n.includes(e));
                        return {
                            _rawItems: a,
                            chunkedPages: _(a, r),
                            totalItems: a.length,
                            fetchableGuildIds: E(a, i - 1, r)
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
                        let { _rawItems: n, _removedItems: r, pageSize: i, currentPage: a } = e,
                            o = n.filter((e) => !t.includes(e)),
                            s = t.filter((e) => !r.includes(e));
                        return {
                            _rawItems: o,
                            _removedItems: [...r, ...s],
                            chunkedPages: _(o, i),
                            totalItems: o.length,
                            fetchableGuildIds: E(o, a - 1, i)
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
                    return null !== (t = l.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => l.K.set(e, t),
                removeItem: (e) => l.K.remove(e)
            }),
            partialize: (e) => ({ currentPage: e.currentPage })
        }
    )
);
