n.d(t, {
    $: function () {
        return o;
    }
}),
    n(653041);
var i = n(652874),
    a = n(731965),
    s = n(229893);
function r(e, t) {
    if (0 === t || e.length <= t) return [e];
    let n = [];
    for (let i = 0; i < e.length; i += t) n.push(e.slice(i, i + t));
    return n;
}
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 30,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
        a = Math.min((t + i) * n, e.length);
    return e.slice(t * n, a).filter((e) => s.Z.shouldFetchGuild(e));
}
let o = (0, i.Z)((e) => ({
    currentPage: 1,
    pageSize: 30,
    totalItems: 0,
    chunkedPages: [],
    fetchableGuildIds: [],
    _rawItems: [],
    updatePage: (t) => {
        (0, a.j)(() => {
            e((e) => {
                let { _rawItems: n, pageSize: i } = e;
                return {
                    currentPage: t,
                    fetchableGuildIds: l(n, t - 1, i)
                };
            });
        });
    },
    updatePaginationSettings: function (t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        (0, a.j)(() => {
            let i = t * n;
            e((e) => {
                let { _rawItems: t } = e;
                return {
                    pageSize: i,
                    currentPage: 1,
                    chunkedPages: r(t, i),
                    fetchableGuildIds: l(t, 0, i)
                };
            });
        });
    },
    updatePaginationResults: (t) => {
        (0, a.j)(() => {
            e((e) => {
                let { pageSize: n, currentPage: i } = e;
                return {
                    _rawItems: t,
                    chunkedPages: r(t, n),
                    totalItems: t.length,
                    fetchableGuildIds: l(t, i - 1, n)
                };
            });
        });
    },
    resetPagination: () => {
        (0, a.j)(() => {
            e(() => ({
                currentPage: 1,
                totalItems: 0,
                _rawItems: [],
                chunkedPages: []
            }));
        });
    },
    removeGuilds: (t) => {
        (0, a.j)(() => {
            e((e) => {
                let { _rawItems: n, pageSize: i, currentPage: a } = e,
                    s = n.filter((e) => !t.includes(e));
                return {
                    _rawItems: s,
                    chunkedPages: r(s, i),
                    totalItems: s.length,
                    fetchableGuildIds: l(s, a - 1, i)
                };
            });
        });
    }
}));
