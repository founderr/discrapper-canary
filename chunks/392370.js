t.d(n, {
    Q2: function () {
        return x;
    },
    pe: function () {
        return P;
    }
}), t(47120), t(653041), t(536091);
var i = t(470079), l = t(392711), r = t.n(l), a = t(373793), s = t(442837), o = t(911969), c = t(127255), u = t(654455), d = t(213459), m = t(807169), p = t(104793), _ = t(674588), E = t(809547), h = t(822245), A = t(631827), N = t(783097), f = t(689079);
function C(e, n) {
    let t = h.Z.getScoreWithoutLoadingLatest(e.id);
    return h.Z.getScoreWithoutLoadingLatest(n.id) - t;
}
function v(e, n) {
    let t = (0, N.$d)(e), i = (0, N.$d)(n);
    return (0, d.un)(t, i);
}
function I(e, n) {
    return (0, d.un)(e.displayName, n.displayName);
}
function P(e) {
    let {
            channel: n,
            query: t,
            commandLimit: l,
            applicationLimit: a,
            searchesCommands: s = !0,
            searchesBots: _ = !0,
            searchesActivities: E = !0
        } = e, {
            commands: h,
            commandSectionMap: P,
            loading: x
        } = function (e) {
            var n, t;
            let {
                    channel: l,
                    includeBuiltIn: r = !0,
                    allowFetch: a = !0
                } = e, s = (0, d.em)(l, !0, a), o = (0, d.PL)(!0, a);
            return i.useMemo(() => {
                var e, n, t, i, a;
                let c = null !== (t = null === (e = s.result) || void 0 === e ? void 0 : e.sections) && void 0 !== t ? t : {}, u = null !== (i = null === (n = o.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {}, m = [
                        ...Object.keys(c),
                        ...Object.keys(u).filter(e => !(e in c))
                    ];
                r && m.push(f.bi.BUILT_IN);
                let p = [], _ = {};
                for (let e of m) {
                    let n = (0, d.If)(l, e), t = null !== (a = n.sectionCommands) && void 0 !== a ? a : [];
                    p.push(...t), t.forEach(e => {
                        null != n.descriptor && (_[e.id] = n.descriptor);
                    });
                }
                return {
                    commands: p,
                    commandSectionMap: _,
                    loading: !0 === s.fetchState.fetching || !0 === o.fetchState.fetching
                };
            }, [
                l,
                r,
                s.fetchState.fetching,
                null === (n = s.result) || void 0 === n ? void 0 : n.sections,
                o.fetchState.fetching,
                null === (t = o.result) || void 0 === t ? void 0 : t.sections
            ]);
        }({
            channel: n,
            includeBuiltIn: !0
        }), {apps: T} = function (e) {
            let {
                    channel: n,
                    onlyWithCommands: t,
                    includeBuiltIn: i,
                    allowFetch: l = !0
                } = e, r = (0, m.Hs)(n, o.yU.CHAT).hasBaseAccessPermissions, a = (0, d.em)(n, r, l), s = (0, d.PL)(r, l), c = [], u = new Set();
            if (null != a.result)
                for (let e of Object.values(a.result.sections)) {
                    let n = e.descriptor.application;
                    null != n && (Object.keys(e.commands).length > 0 || !t) && (c.push(n), u.add(n.id));
                }
            if (null != s.result)
                for (let e of Object.values(s.result.sections)) {
                    let n = e.descriptor.application;
                    null != n && !u.has(n.id) && (Object.keys(e.commands).length > 0 || !t) && c.push(n);
                }
            return i && c.push(N.Wx), {
                apps: c,
                loading: (null == a ? void 0 : a.fetchState.fetching) === !0 || (null == s ? void 0 : s.fetchState.fetching) === !0
            };
        }({
            channel: n,
            onlyWithCommands: !0,
            includeBuiltIn: !0
        }), g = (0, c.Z)({
            guildId: n.getGuildId(),
            channel: n
        }), R = i.useMemo(() => {
            var e;
            if (!s)
                return [];
            return (0, A.N)(h, {
                limit: l,
                filterPredicates: [function (e) {
                        let n = (0, m.k)(e, o.yU.CHAT), t = {};
                        return i => {
                            let {
                                context: l,
                                userId: r,
                                roleIds: a,
                                isImpersonating: s
                            } = n;
                            if (!(i.applicationId in t)) {
                                let {
                                        descriptor: n,
                                        isGuildInstalled: o,
                                        isUserInstalled: c
                                    } = (0, d.If)(e, i.applicationId), u = null != l.guild_id ? p.ML(null == n ? void 0 : n.permissions, l.guild_id, r, a, s) : null, m = null != l.guild_id ? p.ZJ(null == n ? void 0 : n.permissions, l, l.guild_id) : null;
                                t[i.applicationId] = {
                                    descriptor: n,
                                    applicationAllowedForUser: u,
                                    applicationAllowedForChannel: m,
                                    isGuildInstalled: o,
                                    isUserInstalled: c
                                };
                            }
                            let {
                                descriptor: o,
                                applicationAllowedForChannel: c,
                                applicationAllowedForUser: u,
                                isGuildInstalled: m,
                                isUserInstalled: _
                            } = t[i.applicationId];
                            return p.Ft(i, n, {
                                applicationAllowedForUser: u,
                                applicationAllowedForChannel: c,
                                commandBotId: null == o ? void 0 : o.botId,
                                isGuildInstalled: m,
                                isUserInstalled: _
                            }) === p.mF.ALLOWED;
                        };
                    }(n)],
                bucketPredicates: [
                    function (e) {
                        return n => {
                            let t = n.name, i = n.displayName;
                            return t.startsWith(e) || i.startsWith(e);
                        };
                    }(e = t),
                    function (e) {
                        let n = null == e ? void 0 : e.split(' '), t = n[0], i = n.slice(1).join(' ');
                        return e => {
                            let n = e.name, l = e.displayName;
                            return !!(n.startsWith(t) && n.split(' ').slice(1).join(' ').startsWith(i) || l.startsWith(t) && l.split(' ').slice(1).join(' ').startsWith(i)) || !1;
                        };
                    }(e),
                    function (e) {
                        return n => {
                            let t = n.name, i = n.displayName;
                            return t.includes(e) || i.includes(e);
                        };
                    }(e),
                    function (e) {
                        return n => {
                            var t;
                            for (let {
                                        name: i,
                                        serverLocalizedName: l
                                    } of null !== (t = n.options) && void 0 !== t ? t : [])
                                if (i.startsWith(e) || ''.concat(n.name, ' ').concat(i).startsWith(e) || null != n.displayName && ''.concat(n.displayName, ' ').concat(i).startsWith(e) || null != l && (l.startsWith(e) || ''.concat(n.name, ' ').concat(l).startsWith(e) || null != n.displayName && ''.concat(n.displayName, ' ').concat(l).startsWith(e)))
                                    return !0;
                            return !1;
                        };
                    }(e),
                    function (e) {
                        return n => {
                            var t;
                            for (let {
                                        name: i,
                                        serverLocalizedName: l
                                    } of null !== (t = n.options) && void 0 !== t ? t : [])
                                if (i.includes(e) || (null == l ? void 0 : l.includes(e)))
                                    return !0;
                            return !1;
                        };
                    }(e)
                ],
                sortComparers: [
                    function (e) {
                        return (n, t) => {
                            let i = u.ZP.getScoreWithoutLoadingLatest(e, n);
                            return u.ZP.getScoreWithoutLoadingLatest(e, t) - i;
                        };
                    }({ channel: n }),
                    I
                ]
            });
        }, [
            s,
            h,
            l,
            n,
            t
        ]), S = i.useMemo(() => {
            if (0 === R.length)
                return [];
            let e = new Map(T.map(e => [
                e.id,
                e
            ]));
            return r().compact(R.map(n => {
                var t;
                let i = e.get(n.applicationId);
                if (null == i)
                    return null;
                let l = null !== (t = P[n.id]) && void 0 !== t ? t : null;
                return {
                    command: n,
                    application: i,
                    section: l
                };
            }));
        }, [
            T,
            R,
            P
        ]), M = i.useMemo(() => {
            var e;
            if (!_ && !E)
                return [];
            let i = [];
            if (_ && E) {
                let e = new Set(T.map(e => {
                    let {id: n} = e;
                    return n;
                }));
                i.push(...T), i.push(...g.filter(n => {
                    let {
                        application: {id: t}
                    } = n;
                    return !e.has(t);
                }).map(e => {
                    let {application: n} = e;
                    return n;
                }));
            } else
                i = _ ? T : g.map(e => {
                    let {application: n} = e;
                    return n;
                });
            return (0, A.N)(i, {
                limit: a,
                filterPredicates: [function (e) {
                        let n = (0, m.k)(e, o.yU.CHAT);
                        return t => {
                            let {
                                    context: i,
                                    userId: l,
                                    roleIds: r,
                                    isImpersonating: a
                                } = n, {
                                    descriptor: s,
                                    sectionCommands: o,
                                    isGuildInstalled: c,
                                    isUserInstalled: u
                                } = (0, d.If)(e, t.id), m = null != i.guild_id ? p.ML(null == s ? void 0 : s.permissions, i.guild_id, l, r, a) : null, _ = null != i.guild_id ? p.ZJ(null == s ? void 0 : s.permissions, i, i.guild_id) : null;
                            return null == o || !(o.length > 0) || o.some(e => p.Ft(e, n, {
                                applicationAllowedForUser: m,
                                applicationAllowedForChannel: _,
                                commandBotId: null == s ? void 0 : s.botId,
                                isGuildInstalled: c,
                                isUserInstalled: u
                            }) === p.mF.ALLOWED);
                        };
                    }(n)],
                bucketPredicates: [
                    function (e) {
                        return n => (0, N.$d)(n).toLocaleLowerCase().startsWith(e.toLocaleLowerCase());
                    }(e = t),
                    function (e) {
                        return n => (0, N.$d)(n).toLocaleLowerCase().includes(e.toLocaleLowerCase());
                    }(e),
                    function (e) {
                        return n => {
                            var t, i;
                            let l = null === (t = (0, N.jD)(n)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
                            return null !== (i = null == l ? void 0 : l.startsWith(e.toLocaleLowerCase())) && void 0 !== i && i;
                        };
                    }(e),
                    function (e) {
                        return n => {
                            var t, i;
                            let l = null === (t = (0, N.jD)(n)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
                            return null !== (i = null == l ? void 0 : l.includes(e.toLocaleLowerCase())) && void 0 !== i && i;
                        };
                    }(e)
                ],
                sortComparers: [
                    C,
                    v
                ]
            });
        }, [
            _,
            E,
            a,
            n,
            t,
            T,
            g
        ]), L = S.length > 0, j = M.length > 0;
    return {
        commandResults: S,
        hasCommandResults: L,
        applicationResults: M,
        hasApplicationResults: j,
        isEmptyState: !L && !j,
        loading: x && s
    };
}
function x(e) {
    let {
            channel: n,
            query: t,
            fetches: l = !0
        } = e, [r, o] = i.useState(1), c = i.useRef(r);
    c.current = r;
    let {
            fetchState: u,
            totalPages: d
        } = (0, s.cj)([E.Z], () => {
            var e, i;
            return {
                fetchState: E.Z.getFetchState({
                    query: t,
                    guildId: n.guild_id,
                    page: r,
                    integrationType: a.Y.USER_INSTALL,
                    minUserInstallCommandCount: 1,
                    excludeAppsWithCustomInstallUrl: !0
                }),
                totalPages: null !== (i = null === (e = E.Z.getSearchResults({
                    query: t,
                    guildId: n.guild_id,
                    page: r,
                    integrationType: a.Y.USER_INSTALL,
                    minUserInstallCommandCount: 1,
                    excludeAppsWithCustomInstallUrl: !0
                })) || void 0 === e ? void 0 : e.totalPages) && void 0 !== i ? i : 0
            };
        }, [
            n.guild_id,
            r,
            t
        ]), m = i.useMemo(() => Array.from({ length: u === E.M.FETCHED || u === E.M.ERROR ? r : r - 1 }, (e, i) => {
            var l, r;
            return null !== (r = null === (l = E.Z.getSearchResults({
                query: t,
                guildId: n.guild_id,
                page: i + 1,
                integrationType: a.Y.USER_INSTALL,
                minUserInstallCommandCount: 1,
                excludeAppsWithCustomInstallUrl: !0
            })) || void 0 === l ? void 0 : l.results) && void 0 !== r ? r : [];
        }), [
            u,
            n.guild_id,
            t,
            r
        ]), p = i.useCallback(() => {
            u === E.M.FETCHED && m.length === c.current && m.length > 0 && m[m.length - 1].length > 0 && m.length < d && (c.current++, o(e => e + 1));
        }, [
            u,
            c,
            m,
            d
        ]), h = i.useCallback(e => {
            let {
                query: n,
                page: t,
                guildId: i
            } = e;
            _.yC({
                query: n,
                guildId: i,
                options: {
                    page: t,
                    integrationType: a.Y.USER_INSTALL,
                    minUserInstallCommandCount: 1,
                    excludeAppsWithCustomInstallUrl: !0
                }
            });
        }, []);
    return i.useEffect(() => {
        if (!!l)
            h({
                query: t,
                page: r,
                guildId: n.guild_id
            });
    }, [
        t,
        n.guild_id,
        h,
        r,
        l
    ]), i.useEffect(() => {
        o(1);
    }, [
        n.guild_id,
        t
    ]), {
        fetchState: u,
        applicationResults: m.flat(),
        fetchNextPage: p
    };
}
