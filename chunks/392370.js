t.d(n, {
    Q2: function () {
        return S;
    },
    pe: function () {
        return L;
    }
}),
    t(47120),
    t(653041),
    t(536091);
var i = t(470079),
    a = t(392711),
    l = t.n(a),
    o = t(373793),
    r = t(288385),
    s = t(442837),
    c = t(911969),
    d = t(127255),
    u = t(654455),
    m = t(213459),
    p = t(807169),
    _ = t(104793),
    C = t(674588),
    h = t(809547),
    f = t(822245),
    A = t(631827),
    E = t(827498),
    N = t(783097),
    x = t(689079),
    v = t(665692);
function I(e, n) {
    let t = f.Z.getScoreWithoutLoadingLatest(e.id);
    return f.Z.getScoreWithoutLoadingLatest(n.id) - t;
}
function g(e, n) {
    let t = (0, N.$d)(e),
        i = (0, N.$d)(n);
    return (0, m.un)(t, i);
}
function P(e, n) {
    return (0, m.un)(e.displayName, n.displayName);
}
function L(e) {
    let { channel: n, query: t, commandLimit: a, applicationLimit: o, searchesCommands: r = !0, searchesBots: s = !0, searchesActivities: C = !0 } = e;
    t.startsWith(''.concat(v.GI)) && (t = t.substring(1));
    let {
            commands: h,
            commandSectionMap: f,
            loading: E
        } = (function (e) {
            var n, t;
            let { channel: a, includeBuiltIn: l = !0, allowFetch: o = !0 } = e,
                r = (0, m.em)(a, !0, o),
                s = (0, m.PL)(!0, o);
            return i.useMemo(() => {
                var e, n, t, i, o;
                let c = null !== (t = null === (e = r.result) || void 0 === e ? void 0 : e.sections) && void 0 !== t ? t : {},
                    d = null !== (i = null === (n = s.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {},
                    u = [...Object.keys(c), ...Object.keys(d).filter((e) => !(e in c))];
                l && u.push(x.bi.BUILT_IN);
                let p = [],
                    _ = {};
                for (let e of u) {
                    let n = (0, m.If)(a, e),
                        t = null !== (o = n.sectionCommands) && void 0 !== o ? o : [];
                    p.push(...t),
                        t.forEach((e) => {
                            null != n.descriptor && (_[e.id] = n.descriptor);
                        });
                }
                return {
                    commands: p,
                    commandSectionMap: _,
                    loading: !0 === r.fetchState.fetching || !0 === s.fetchState.fetching
                };
            }, [a, l, r.fetchState.fetching, null === (n = r.result) || void 0 === n ? void 0 : n.sections, s.fetchState.fetching, null === (t = s.result) || void 0 === t ? void 0 : t.sections]);
        })({
            channel: n,
            includeBuiltIn: !0
        }),
        { apps: L } = (function (e) {
            let { channel: n, onlyWithCommands: t, includeBuiltIn: a, allowFetch: l = !0, includeEmbeddedApps: o, includeNonEmbeddedApps: r } = e,
                s = (0, p.Hs)(n, [c.yU.CHAT]).hasBaseAccessPermissions,
                d = (0, m.em)(n, s, l),
                u = (0, m.PL)(s, l),
                _ = i.useCallback(
                    (e) => {
                        let n = e.descriptor.application;
                        return null != n && (!!(o && (0, N.ye)(n)) || (null != n && r && !(0, N.ye)(n) && (!t || Object.keys(e.commands).length > 0)));
                    },
                    [o, r, t]
                ),
                C = [],
                h = new Set();
            if (null != d.result)
                for (let e of Object.values(d.result.sections)) {
                    let n = e.descriptor.application;
                    null != n && _(e) && (C.push(n), h.add(n.id));
                }
            if (null != u.result)
                for (let e of Object.values(u.result.sections)) {
                    let n = e.descriptor.application;
                    null != n && !h.has(n.id) && _(e) && C.push(n);
                }
            return (
                r && a && C.push(N.Wx),
                {
                    apps: C,
                    loading: (null == d ? void 0 : d.fetchState.fetching) === !0 || (null == u ? void 0 : u.fetchState.fetching) === !0
                }
            );
        })({
            channel: n,
            onlyWithCommands: !0,
            includeBuiltIn: !0,
            includeEmbeddedApps: C,
            includeNonEmbeddedApps: s
        }),
        S = (0, d.Z)({ guildId: n.getGuildId() }),
        T = i.useMemo(() => {
            var e;
            if (!r) return [];
            return (0, A.N)(h, {
                limit: a,
                filterPredicates: [
                    (function (e) {
                        let n = (0, p.k)(e, [c.yU.CHAT]),
                            t = {};
                        return (i) => {
                            let { context: a, userId: l, roleIds: o, isImpersonating: r } = n;
                            if (!(i.applicationId in t)) {
                                let { descriptor: n, isGuildInstalled: s, isUserInstalled: c } = (0, m.If)(e, i.applicationId),
                                    d = null != a.guild_id ? _.ML(null == n ? void 0 : n.permissions, a.guild_id, l, o, r) : null,
                                    u = null != a.guild_id ? _.ZJ(null == n ? void 0 : n.permissions, a, a.guild_id) : null;
                                t[i.applicationId] = {
                                    descriptor: n,
                                    applicationAllowedForUser: d,
                                    applicationAllowedForChannel: u,
                                    isGuildInstalled: s,
                                    isUserInstalled: c
                                };
                            }
                            let { descriptor: s, applicationAllowedForChannel: c, applicationAllowedForUser: d, isGuildInstalled: u, isUserInstalled: p } = t[i.applicationId];
                            return (
                                _.Ft(i, n, {
                                    applicationAllowedForUser: d,
                                    applicationAllowedForChannel: c,
                                    commandBotId: null == s ? void 0 : s.botId,
                                    isGuildInstalled: u,
                                    isUserInstalled: p
                                }) === _.mF.ALLOWED
                            );
                        };
                    })(n)
                ],
                bucketPredicates: [
                    (function (e) {
                        return (n) => {
                            let t = n.untranslatedName,
                                i = n.displayName;
                            return t.startsWith(e) || i.startsWith(e);
                        };
                    })((e = t)),
                    (function (e) {
                        let n = null == e ? void 0 : e.split(' '),
                            t = n[0],
                            i = n.slice(1).join(' ');
                        return (e) => {
                            let n = e.untranslatedName,
                                a = e.displayName;
                            return !!((n.startsWith(t) && n.split(' ').slice(1).join(' ').startsWith(i)) || (a.startsWith(t) && a.split(' ').slice(1).join(' ').startsWith(i))) || !1;
                        };
                    })(e),
                    (function (e) {
                        return (n) => {
                            let t = n.untranslatedName,
                                i = n.displayName;
                            return t.includes(e) || i.includes(e);
                        };
                    })(e),
                    (function (e) {
                        return (n) => {
                            var t;
                            for (let { name: i, serverLocalizedName: a } of null !== (t = n.options) && void 0 !== t ? t : []) if (i.startsWith(e) || ''.concat(n.untranslatedName, ' ').concat(i).startsWith(e) || (null != n.displayName && ''.concat(n.displayName, ' ').concat(i).startsWith(e)) || (null != a && (a.startsWith(e) || ''.concat(n.untranslatedName, ' ').concat(a).startsWith(e) || (null != n.displayName && ''.concat(n.displayName, ' ').concat(a).startsWith(e))))) return !0;
                            return !1;
                        };
                    })(e),
                    (function (e) {
                        return (n) => {
                            var t;
                            for (let { name: i, serverLocalizedName: a } of null !== (t = n.options) && void 0 !== t ? t : []) if (i.includes(e) || (null == a ? void 0 : a.includes(e))) return !0;
                            return !1;
                        };
                    })(e)
                ],
                sortComparers: [
                    (function (e) {
                        return (n, t) => {
                            let i = u.ZP.getScoreWithoutLoadingLatest(e, n);
                            return u.ZP.getScoreWithoutLoadingLatest(e, t) - i;
                        };
                    })({ channel: n }),
                    P
                ]
            });
        }, [r, h, a, n, t]),
        b = i.useMemo(() => {
            if (0 === T.length) return [];
            let e = new Map(L.map((e) => [e.id, e]));
            return l().compact(
                T.map((n) => {
                    var t;
                    let i = e.get(n.applicationId);
                    if (null == i) return null;
                    let a = null !== (t = f[n.id]) && void 0 !== t ? t : null;
                    return {
                        command: n,
                        application: i,
                        section: a
                    };
                })
            );
        }, [L, T, f]),
        R = i.useMemo(() => {
            var e;
            let i = [];
            if (C) {
                let e = new Set(
                    L.map((e) => {
                        let { id: n } = e;
                        return n;
                    })
                );
                i.push(...L),
                    i.push(
                        ...S.filter((n) => {
                            let {
                                application: { id: t }
                            } = n;
                            return !e.has(t);
                        }).map((e) => {
                            let { application: n } = e;
                            return n;
                        })
                    );
            } else s && (i = L);
            return (0, A.N)(i, {
                limit: o,
                filterPredicates: [
                    (function (e) {
                        let n = (0, p.k)(e, [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]);
                        return (t) => {
                            let { context: i, userId: a, roleIds: l, isImpersonating: o } = n,
                                { descriptor: r, sectionCommands: s, isGuildInstalled: c, isUserInstalled: d } = (0, m.If)(e, t.id),
                                u = null != i.guild_id ? _.ML(null == r ? void 0 : r.permissions, i.guild_id, a, l, o) : null,
                                p = null != i.guild_id ? _.ZJ(null == r ? void 0 : r.permissions, i, i.guild_id) : null;
                            return (
                                null == s ||
                                !(s.length > 0) ||
                                s.some(
                                    (e) =>
                                        _.Ft(e, n, {
                                            applicationAllowedForUser: u,
                                            applicationAllowedForChannel: p,
                                            commandBotId: null == r ? void 0 : r.botId,
                                            isGuildInstalled: c,
                                            isUserInstalled: d
                                        }) === _.mF.ALLOWED
                                )
                            );
                        };
                    })(n)
                ],
                bucketPredicates: [
                    (function (e) {
                        return (n) => (0, N.$d)(n).toLocaleLowerCase().startsWith(e.toLocaleLowerCase());
                    })((e = t)),
                    (function (e) {
                        return (n) => (0, N.$d)(n).toLocaleLowerCase().includes(e.toLocaleLowerCase());
                    })(e),
                    (function (e) {
                        return (n) => {
                            var t, i;
                            let a = null === (t = (0, N.jD)(n)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
                            return null !== (i = null == a ? void 0 : a.startsWith(e.toLocaleLowerCase())) && void 0 !== i && i;
                        };
                    })(e),
                    (function (e) {
                        return (n) => {
                            var t, i;
                            let a = null === (t = (0, N.jD)(n)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
                            return null !== (i = null == a ? void 0 : a.includes(e.toLocaleLowerCase())) && void 0 !== i && i;
                        };
                    })(e)
                ],
                sortComparers: [I, g]
            });
        }, [s, C, o, n, t, L, S]),
        M = b.length > 0,
        j = R.length > 0;
    return {
        commandResults: b,
        hasCommandResults: M,
        applicationResults: R,
        hasApplicationResults: j,
        isEmptyState: !M && !j,
        loading: E && r
    };
}
function S(e) {
    let { channel: n, query: t, fetches: a = !0, pageLimit: l = 1 / 0, entrypoint: c } = e;
    t.startsWith(''.concat(v.GI)) && (t = t.substring(1));
    let d = c === E._b.VOICE,
        [u, m] = i.useState(1),
        p = i.useRef(u);
    p.current = u;
    let { fetchState: _, totalPages: f } = (0, s.cj)(
            [h.Z],
            () => {
                var e, i;
                return {
                    fetchState: h.Z.getFetchState({
                        query: t,
                        guildId: n.guild_id,
                        page: u,
                        integrationType: o.Y.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: d,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: r.F.APP_LAUNCHER
                    }),
                    totalPages:
                        null !==
                            (i =
                                null ===
                                    (e = h.Z.getSearchResults({
                                        query: t,
                                        guildId: n.guild_id,
                                        page: u,
                                        integrationType: o.Y.USER_INSTALL,
                                        minUserInstallCommandCount: 1,
                                        excludeAppsWithCustomInstallUrl: !0,
                                        excludeNonEmbeddedApps: d,
                                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                        source: r.F.APP_LAUNCHER
                                    })) || void 0 === e
                                    ? void 0
                                    : e.totalPages) && void 0 !== i
                            ? i
                            : 0
                };
            },
            [n.guild_id, u, t, d]
        ),
        A = i.useMemo(
            () =>
                Array.from({ length: _ === h.M.FETCHED || _ === h.M.ERROR ? u : u - 1 }, (e, i) => {
                    var a, l;
                    return null !==
                        (l =
                            null ===
                                (a = h.Z.getSearchResults({
                                    query: t,
                                    guildId: n.guild_id,
                                    page: i + 1,
                                    integrationType: o.Y.USER_INSTALL,
                                    minUserInstallCommandCount: 1,
                                    excludeAppsWithCustomInstallUrl: !0,
                                    excludeNonEmbeddedApps: d,
                                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                    source: r.F.APP_LAUNCHER
                                })) || void 0 === a
                                ? void 0
                                : a.results) && void 0 !== l
                        ? l
                        : [];
                }),
            [_, n.guild_id, t, u, d]
        ),
        N = i.useCallback(() => {
            let e = A.length;
            _ === h.M.FETCHED && e === p.current && e > 0 && e < f && e < l && A[e - 1].length > 0 && (p.current++, m((e) => e + 1));
        }, [_, l, A, f]),
        x = i.useCallback(
            (e) => {
                let { query: n, page: t, guildId: i } = e;
                C.yC({
                    query: n,
                    guildId: i,
                    options: {
                        page: t,
                        integrationType: o.Y.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: d,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: r.F.APP_LAUNCHER
                    }
                });
            },
            [d]
        );
    return (
        i.useEffect(() => {
            if (!!a)
                x({
                    query: t,
                    page: u,
                    guildId: n.guild_id
                });
        }, [t, n.guild_id, x, u, a]),
        i.useEffect(() => {
            m(1);
        }, [n.guild_id, t]),
        {
            fetchState: _,
            applicationResults: A.flat(),
            fetchNextPage: N
        }
    );
}
