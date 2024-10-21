n.d(t, {
    FN: function () {
        return W;
    },
    If: function () {
        return e_;
    },
    JK: function () {
        return ee;
    },
    LD: function () {
        return $;
    },
    PL: function () {
        return J;
    },
    em: function () {
        return X;
    },
    un: function () {
        return ed;
    },
    v1: function () {
        return en;
    }
}),
    n(47120),
    n(653041),
    n(390547),
    n(789020);
var r,
    i,
    a,
    s = n(192379),
    o = n(512722),
    l = n.n(o),
    u = n(259443),
    c = n(442837),
    d = n(570140),
    _ = n(749210),
    E = n(911969),
    f = n(822245),
    h = n(399860),
    p = n(706454),
    I = n(675478),
    m = n(592125),
    T = n(430824),
    S = n(594174),
    g = n(626135),
    A = n(254711),
    N = n(700089),
    R = n(654455),
    O = n(963456),
    v = n(367790),
    C = n(895924),
    L = n(581364),
    D = n(807169),
    y = n(104793),
    b = n(689079),
    M = n(981631);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let U = new u.Y('ApplicationCommandIndexStore'),
    w = Symbol('currentUser'),
    x = Symbol('stale'),
    G = Symbol('current'),
    k = Object.freeze({
        descriptors: [],
        commands: [],
        sectionedCommands: [],
        loading: !0
    }),
    B = Object.freeze({
        serverVersion: G,
        fetchState: { fetching: !1 },
        result: {
            sections: {},
            sectionIdsByBotId: {},
            version: G
        }
    }),
    F = Object.freeze({
        serverVersion: x,
        fetchState: { fetching: !1 }
    }),
    V = {
        sensitivity: 'accent',
        numeric: !0
    };
function H(e) {
    switch (e.type) {
        case 'guild':
            return e.guildId;
        case 'channel':
            return e.channelId;
        case 'user':
            return w;
        case 'application':
            return e.applicationId;
    }
}
function Z(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = H(e),
        a = Q.indices[i];
    return (
        null != a
            ? ('fetchState' in t && a.fetchState.fetching && a.fetchState.abort.abort(),
              (n = {
                  ...a,
                  ...t
              }))
            : r &&
              (n = {
                  serverVersion: x,
                  fetchState: { fetching: !1 },
                  ...t
              }),
        void 0 !== n && ((Q.indices[i] = n), 'application' === e.type && (Q.applicationIndices.set(i, n), (Q.applicationIndicesVersion = Q.applicationIndicesVersion + 1))),
        a
    );
}
function Y(e) {
    let t = H(e),
        n = Q.indices[t];
    (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete Q.indices[t];
}
function j() {
    for (let e of Object.values(Q.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    Q.indices = {};
}
async function W(e) {
    var t, n;
    let r = H(e),
        i = null !== (t = Q.indices[r]) && void 0 !== t ? t : F;
    return es(i) ? (await K(e), null !== (n = Q.indices[r]) && void 0 !== n ? n : F) : i;
}
async function K(e) {
    let t = new AbortController();
    Z(
        e,
        {
            fetchState: {
                fetching: !0,
                abort: t
            }
        },
        !0
    ),
        await (0, O.a)(e, t);
}
function z() {
    Z({ type: 'user' }, { serverVersion: x });
}
class q extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(p.default),
            this.syncWith([p.default], () => {
                !(function () {
                    let e = p.default.locale;
                    e !== Q.oldLocale &&
                        (j(),
                        (Q.collator = new Intl.Collator(e, {
                            sensitivity: 'accent',
                            numeric: !0
                        })),
                        (Q.oldLocale = e));
                })();
            });
    }
    getContextState(e) {
        var t, n;
        return null != e && ea(e) ? (null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : F) : B;
    }
    hasContextStateApplication(e, t, n) {
        var r, i;
        let a = this.indices[null != n ? n : t];
        return e in (null !== (i = null == a ? void 0 : null === (r = a.result) || void 0 === r ? void 0 : r.sections) && void 0 !== i ? i : {});
    }
    getGuildState(e) {
        var t;
        return null == e ? B : null !== (t = this.indices[e]) && void 0 !== t ? t : F;
    }
    getUserState() {
        var e;
        return null !== (e = this.indices[w]) && void 0 !== e ? e : F;
    }
    hasUserStateApplication(e) {
        var t, n;
        let r = this.indices[w];
        return e in (null !== (n = null == r ? void 0 : null === (t = r.result) || void 0 === t ? void 0 : t.sections) && void 0 !== n ? n : {});
    }
    getApplicationState(e) {
        var t;
        return null == e ? B : null !== (t = this.indices[e]) && void 0 !== t ? t : F;
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == S.default.getCurrentUser()) return k;
        let r = this.getContextState(e),
            i = this.getUserState(),
            a = this.getApplicationState(n.applicationId),
            s = this.getApplicationStates(),
            o = (0, D.k)(e, t.commandTypes),
            l = null == e || (null == o ? void 0 : o.hasBaseAccessPermissions) === !0,
            u = !1 !== t.applicationCommands && l,
            c = !1;
        n.allowFetch &&
            (u &&
                null != e &&
                ea(e) &&
                (g.default.track(M.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == r.result,
                    size: Object.keys(Q.indices).length
                }),
                es(r) &&
                    null != e &&
                    (null != e.guild_id
                        ? (0, O.j)({
                              type: 'guild',
                              guildId: e.guild_id
                          })
                        : (0, O.j)({
                              type: 'channel',
                              channelId: e.id
                          }),
                    (c = !0))),
            es(i) && ((0, O.j)({ type: 'user' }), (c = !0)),
            es(a) &&
                null != n.applicationId &&
                ((0, O.j)({
                    type: 'application',
                    applicationId: n.applicationId
                }),
                (c = !0)));
        let d = er({
            permissionContext: o,
            text: t.text,
            allowApplicationCommands: u,
            builtIns: t.builtIns,
            scoreMethod: n.scoreMethod,
            allowEmptySections: n.allowEmptySections,
            contextState: r,
            userState: i,
            applicationStates: n.allowApplicationState ? s : new Map(),
            sortOptions: n.sortOptions,
            singleApplicationId: n.applicationId,
            installOnDemand: n.installOnDemand
        });
        return (d.loading = d.loading || c), d;
    }
    queryInstallOnDemandApp(e, t) {
        let n = m.Z.getChannel(t);
        null != n &&
            this.query(
                n,
                { commandTypes: [E.yU.CHAT] },
                {
                    placeholderCount: 5,
                    scoreMethod: v.p.COMMAND_ONLY,
                    applicationId: e,
                    allowFetch: !0
                }
            );
    }
    constructor(...e) {
        super(...e), P(this, 'indices', {}), P(this, 'applicationIndices', new Map()), P(this, 'applicationIndicesVersion', 0), P(this, 'oldLocale', p.default.locale), P(this, 'collator', new Intl.Collator(p.default.locale, V));
    }
}
P(q, 'displayName', 'ApplicationCommandIndexStore');
let Q = new q(d.Z, {
    LOGOUT: j,
    CONNECTION_OPEN: function () {
        for (let e of Object.values(Q.indices)) e.serverVersion = x;
    },
    APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function (e) {
        var t;
        let { target: n } = e,
            r = H(n);
        es(null !== (t = Q.indices[r]) && void 0 !== t ? t : F) && K(n);
    },
    APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function (e) {
        var t, n;
        let { target: r, index: i } = e,
            a = null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
        if (null == a) return !1;
        let s = {},
            o = {},
            l = new Set();
        for (let e of i.applications) {
            if (null == e.bot && null != e.bot_id) {
                o[e.bot_id] = e.id;
                let t = S.default.getUser(e.bot_id);
                null != t ? (e.bot = t) : l.add(e.bot_id);
            } else null != e.bot && (o[e.bot.id] = e.id);
            let t = {
                descriptor: {
                    ...(0, L.X0)(
                        (function (e) {
                            return {
                                description: e.description,
                                icon: e.icon,
                                id: e.id,
                                name: e.name,
                                bot: e.bot,
                                flags: e.flags
                            };
                        })(e)
                    ),
                    permissions: null != e.permissions ? (0, h.tk)(eu(e.permissions, a)) : void 0,
                    botId: e.bot_id
                },
                commands: {}
            };
            s[e.id] = t;
        }
        for (let e of ('guild' === r.type && l.size > 0 && _.Z.requestMembersById(r.guildId, [...l]),
        (0, L.nG)(
            i.application_commands.map((e) =>
                (function (e, t) {
                    var n, r, i, a, s;
                    let o = {
                        ...e,
                        description: null !== (i = null !== (r = e.description_default) && void 0 !== r ? r : e.description) && void 0 !== i ? i : '',
                        dm_permission: e.dm_permission,
                        name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
                        options: null !== (s = null === (n = e.options) || void 0 === n ? void 0 : n.map(eo)) && void 0 !== s ? s : [],
                        permissions: null != e.permissions ? eu(e.permissions, t) : void 0
                    };
                    return e.description !== e.description_default && (o.description_localized = e.description), e.name !== e.name_default && (o.name_localized = e.name), o;
                })(e, a)
            ),
            !0
        ))) {
            let t = s[e.applicationId];
            if (null == t) {
                U.error('Command has no matching application');
                continue;
            }
            t.commands[e.id] = e;
        }
        let u = null !== (n = i.version) && void 0 !== n ? n : G;
        Z(r, {
            serverVersion: u,
            result: {
                sections: s,
                sectionIdsByBotId: o,
                version: u
            },
            fetchState: { fetching: !1 }
        });
    },
    APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function (e) {
        let { target: t } = e;
        Z(t, {
            fetchState: {
                fetching: !1,
                retryAfter: Date.now() + 5000
            }
        });
    },
    APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function (e) {
        let { applicationId: t, channelId: n, guildId: r } = e;
        Q.hasContextStateApplication(t, n, r) &&
            Z(
                null != r
                    ? {
                          type: 'guild',
                          guildId: r
                      }
                    : {
                          type: 'channel',
                          channelId: n
                      },
                { serverVersion: x }
            ),
            Q.hasUserStateApplication(t) && Z({ type: 'user' }, { serverVersion: x }),
            Q.hasApplicationState(t) &&
                Z(
                    {
                        type: 'application',
                        applicationId: t
                    },
                    { serverVersion: x }
                );
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        Y({
            type: 'channel',
            channelId: t.id
        });
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        Y({
            type: 'guild',
            guildId: t.id
        });
    },
    USER_APPLICATION_UPDATE: z,
    USER_APPLICATION_REMOVE: z,
    GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function (e) {
        var t;
        let { guildId: n, version: r } = e,
            i = Z(
                {
                    type: 'guild',
                    guildId: n
                },
                { serverVersion: null != r ? r : x }
            ),
            a = null == i ? void 0 : null === (t = i.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
        if (null != a)
            for (let e in a) {
                let t = m.Z.getDMFromUserId(e);
                null != t &&
                    Z(
                        {
                            type: 'channel',
                            channelId: t
                        },
                        { serverVersion: x }
                    );
            }
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let e of t)
            n =
                (function (e, t) {
                    var n;
                    let r = H({
                            type: 'guild',
                            guildId: e
                        }),
                        i = null === (n = Q.indices[r]) || void 0 === n ? void 0 : n.result;
                    if (null == i) return !1;
                    let a = !1;
                    return (
                        t.forEach((e) => {
                            let { user: t } = e;
                            if (!t.bot) return;
                            let n = i.sectionIdsByBotId[t.id];
                            if (null == n) return;
                            let r = i.sections[n];
                            l()(null != r, 'Bot has no matching index section'), l()(null != r.descriptor.application, "Bot's index section has no application info");
                            let s = (0, L.X0)({
                                ...r.descriptor.application,
                                bot: t
                            });
                            (r.descriptor = {
                                ...r.descriptor,
                                ...s
                            }),
                                (a = !0);
                        }),
                        a
                    );
                })(e.guildId, e.members) || n;
        return n;
    }
});
function X(e, t, n) {
    let [r, i] = s.useState(!0),
        a = (0, c.cj)([Q], () => (null != e ? Q.getContextState(e) : Q.getUserState()));
    return (
        s.useEffect(() => {
            if (r) {
                if (null == e) {
                    n && es(a) && (0, O.j)({ type: 'user' });
                    return;
                }
                n &&
                    t &&
                    ea(e) &&
                    (g.default.track(M.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(Q.indices).length
                    }),
                    es(a) &&
                        (null != e.guild_id
                            ? (0, O.j)({
                                  type: 'guild',
                                  guildId: e.guild_id
                              })
                            : (0, O.j)({
                                  type: 'channel',
                                  channelId: e.id
                              }))),
                    i(!1);
            }
        }, [a, n, e, t, r]),
        a
    );
}
function $(e, t) {
    let [n, r] = s.useState(!0),
        i = (0, c.cj)([Q], () => {
            var t;
            return null !== (t = Q.indices[e]) && void 0 !== t ? t : F;
        });
    return (
        s.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (g.default.track(M.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == i.result,
                        size: Object.keys(Q.indices).length
                    }),
                    es(i) &&
                        (0, O.j)({
                            type: 'guild',
                            guildId: e
                        })),
                r(!1));
        }, [i, t, e, n]),
        i
    );
}
function J(e, t) {
    let [n, r] = s.useState(!0),
        i = (0, c.cj)([Q], () => Q.getUserState());
    return (
        s.useEffect(() => {
            n && (t && es(i) && e && (0, O.j)({ type: 'user' }), r(!1));
        }, [i, t, e, n]),
        i
    );
}
t.ZP = Q;
function ee(e, t, n, r) {
    let { descriptors: i, commands: a, sectionedCommands: o, loading: l } = en(e, n, r),
        u = s.useMemo(
            () =>
                null != e
                    ? {
                          channel: e,
                          guild: t
                      }
                    : void 0,
            [e, t]
        ),
        c = (0, N.R)(u);
    return s.useMemo(() => {
        if (!r.includeFrecency || 0 === c.length)
            return {
                descriptors: i,
                commands: a,
                sectionedCommands: o,
                loading: l
            };
        let e = a
            .filter((e) => c.includes(e.id))
            .sort((e, t) => {
                let n = R.ZP.getScoreWithoutLoadingLatest(u, e);
                return R.ZP.getScoreWithoutLoadingLatest(u, t) - n;
            })
            .splice(0, b.hz);
        return 0 === e.length
            ? {
                  descriptors: i,
                  commands: a,
                  sectionedCommands: o,
                  loading: l
              }
            : {
                  descriptors: [A.Tm[b.bi.FRECENCY], ...i],
                  commands: e.concat(a),
                  sectionedCommands: [
                      {
                          section: A.Tm[b.bi.FRECENCY],
                          data: e
                      },
                      ...o
                  ],
                  loading: l
              };
    }, [l, r.includeFrecency, c, a, i, o, u]);
}
let et = Object.freeze({
    applications: {
        useFrecency: !1,
        useScore: !1
    },
    commands: {
        useFrecency: !0,
        useScore: !0
    }
});
function en(e, t, n) {
    let r = (0, D.Hs)(e, t.commandTypes),
        i = !1 !== t.applicationCommands,
        a = X(e, i, n.allowFetch),
        o = J(i, n.allowFetch),
        l = (0, c.e7)([Q], () => Q.getApplicationStates()),
        u = (0, c.e7)([Q], () => Q.applicationIndicesVersion);
    return (
        !(function (e, t) {
            let [n, r] = s.useState(!0),
                i = (0, c.e7)([Q], () => Q.getApplicationState(e));
            s.useEffect(() => {
                n &&
                    (t &&
                        es(i) &&
                        null != e &&
                        (0, O.j)({
                            type: 'application',
                            applicationId: e
                        }),
                    r(!1));
            }, [t, e, i, n]);
        })(n.applicationId, n.allowFetch),
        s.useMemo(
            () =>
                er({
                    permissionContext: r,
                    text: t.text,
                    allowApplicationCommands: i,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: a,
                    userState: o,
                    applicationStates: n.allowApplicationState ? l : new Map(),
                    sortOptions: n.sortOptions,
                    singleApplicationId: n.applicationId,
                    installOnDemand: n.installOnDemand
                }),
            [r, t.text, t.builtIns, i, n.scoreMethod, n.allowEmptySections, n.sortOptions, n.allowApplicationState, n.applicationId, n.installOnDemand, a, o, l, u]
        )
    );
}
function er(e) {
    var t, n, r, i, a, s, o;
    let { permissionContext: u, contextState: c, userState: d, applicationStates: _, text: E, builtIns: h = v.D.ALLOW, allowApplicationCommands: p = !0, singleApplicationId: m, allowEmptySections: S = !1, scoreMethod: g = v.p.NONE, sortOptions: N = et, installOnDemand: O = !1 } = e,
        { commandTypes: C } = u,
        L = null == E ? void 0 : E.toLowerCase(),
        D = null == L ? void 0 : L.split(' '),
        y = h === v.D.ONLY_TEXT,
        M = h !== v.D.DENY ? (0, A.Kh)(C, !0, y) : [],
        P = [],
        U = {
            permissionContext: u,
            query: L,
            splitQuery: D,
            allowEmptySections: S,
            scoreMethod: g,
            installOnDemand: O
        },
        w = null !== (i = null === (t = c.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {},
        x = null !== (a = null === (n = d.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {},
        G = new Set();
    if (p) {
        if (u.hasBaseAccessPermissions)
            for (let e in w) {
                let t = w[e];
                (null == m || t.descriptor.id === m) && G.add(e);
            }
        for (let e in x) {
            let t = x[e];
            (null == m || t.descriptor.id === m) && G.add(e);
        }
    }
    let k = new Map();
    for (let [e, t] of _)
        if (null == m || e === m) {
            let e = null === (s = t.result) || void 0 === s ? void 0 : s.sections;
            if (null != e) for (let t of Object.keys(e)) G.add(t), k.set(t, e[t]);
        }
    for (let e of Array.from(G)) {
        let t, n;
        let r = w[e],
            i = x[e],
            a = k.get(e),
            s = null != r,
            o = null != i;
        if (null != r && null != i) {
            for (let e in ((t = i.descriptor), (n = []), i.commands)) {
                let t = i.commands[e];
                n.push(t);
            }
            for (let e in r.commands)
                if (!(e in i.commands)) {
                    let t = r.commands[e];
                    n.push(t);
                }
        } else null != r ? ((t = r.descriptor), (n = Object.values(r.commands))) : null != i ? ((t = i.descriptor), (n = Object.values(i.commands))) : null != a && ((t = a.descriptor), (n = Object.values(a.commands)));
        l()(null != t, 'Failed to select application descriptor'), l()(null != n, 'Failed to select list of application commands');
        let u = ei(t, n, s, o, U);
        null != u && P.push(u);
    }
    if (
        (N.applications.useFrecency && I.DZ.loadIfNecessary(),
        P.sort((e, t) => {
            if (N.applications.useScore && g === v.p.APPLICATION_ONLY) {
                var n, r, i, a;
                let s = null !== (i = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== i ? i : Number.MAX_VALUE,
                    o = null !== (a = null === (r = t.data[0]) || void 0 === r ? void 0 : r.score) && void 0 !== a ? a : Number.MAX_VALUE;
                if (s !== o) return s - o;
            }
            if (N.applications.useFrecency) {
                let n = f.Z.getScoreWithoutLoadingLatest(e.section.id),
                    r = f.Z.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== r) return r - n;
            }
            return ec(e.section.name, t.section.name);
        }),
        M.length > 0 || !0 === S)
    ) {
        let e = ei(A.Tm[b.bi.BUILT_IN], M, !0, !0, U);
        null != e && P.push(e);
    }
    let B = P.flatMap((e) =>
        e.data.map((t) => ({
            ...t,
            section: e.section
        }))
    );
    if (g === v.p.COMMAND_ONLY || g === v.p.COMMAND_OR_APPLICATION) {
        let e = u.context,
            t = T.Z.getGuild(null == u ? void 0 : null === (o = u.context) || void 0 === o ? void 0 : o.guild_id);
        N.commands.useFrecency && I.DZ.loadIfNecessary();
        let n =
            null != e
                ? {
                      channel: e,
                      guild: t
                  }
                : void 0;
        B.sort((e, t) => {
            if (N.commands.useScore) {
                var r, i;
                let n = null !== (r = e.score) && void 0 !== r ? r : 0,
                    a = null !== (i = t.score) && void 0 !== i ? i : 0;
                if (n !== a) return n - a;
            }
            if (N.commands.useFrecency) {
                let r = R.ZP.getScoreWithoutLoadingLatest(n, e),
                    i = R.ZP.getScoreWithoutLoadingLatest(n, t);
                if (r !== i) return i - r;
            }
            return ec(e.displayName, t.displayName);
        });
    }
    return {
        commands: B,
        descriptors: P.map((e) => e.section),
        sectionedCommands: P,
        loading: (null == c ? void 0 : c.fetchState.fetching) === !0 || (null == d ? void 0 : d.fetchState.fetching) === !0 || (null != m && (null === (r = _.get(m)) || void 0 === r ? void 0 : r.fetchState.fetching) === !0)
    };
}
function ei(e, t, n, r, i) {
    let a,
        { query: s, splitQuery: o, allowEmptySections: l, scoreMethod: u, permissionContext: c, installOnDemand: d } = i,
        { context: _, userId: E, roleIds: f, isImpersonating: h } = c,
        p = (null == _ ? void 0 : _.guild_id) != null ? y.ML(e.permissions, _.guild_id, E, f, h) : null,
        I = (null == _ ? void 0 : _.guild_id) != null ? y.ZJ(e.permissions, _, _.guild_id) : null,
        m = [];
    for (let i of t)
        y.Ft(i, c, {
            applicationAllowedForUser: p,
            applicationAllowedForChannel: I,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: r || d
        }) === y.mF.ALLOWED && m.push(i);
    return 0 !==
        (a =
            u !== v.p.NONE && null != s && null != o
                ? (function (e, t, n, r, i) {
                      let a;
                      let s = [];
                      if (i === v.p.APPLICATION_ONLY || i === v.p.COMMAND_OR_APPLICATION) {
                          let t = r.name.toLocaleLowerCase();
                          if (t.startsWith(e)) a = 5;
                          else if (t.includes(e)) a = 6;
                          else {
                              var o, l;
                              let t = null === (l = r.application) || void 0 === l ? void 0 : null === (o = l.description) || void 0 === o ? void 0 : o.toLocaleLowerCase();
                              (null == t ? void 0 : t.includes(e)) && (a = 8);
                          }
                      }
                      let u = t[0],
                          c = t.slice(1).join(' ');
                      for (let t of n) {
                          let n;
                          (i === v.p.COMMAND_ONLY || i === v.p.COMMAND_OR_APPLICATION) &&
                              (n = (function (e, t, n, r) {
                                  var i;
                                  let a = e.untranslatedName,
                                      s = e.displayName;
                                  if (a.startsWith(t) || s.startsWith(t)) return 0;
                                  if ((a.startsWith(n) && a.split(' ').slice(1).join(' ').startsWith(r)) || (s.startsWith(n) && s.split(' ').slice(1).join(' ').startsWith(r))) return 1;
                                  if (a.includes(t) || (null == s ? void 0 : s.includes(t))) return 2;
                                  let o = !1;
                                  for (let { name: n, serverLocalizedName: r } of null !== (i = e.options) && void 0 !== i ? i : []) {
                                      if (n.startsWith(t) || ''.concat(a, ' ').concat(n).startsWith(t) || (null != s && ''.concat(s, ' ').concat(n).startsWith(t)) || (null != r && (r.startsWith(t) || ''.concat(a, ' ').concat(r).startsWith(t) || (null != s && ''.concat(s, ' ').concat(r).startsWith(t))))) return 3;
                                      (n.includes(t) || (null == r ? void 0 : r.includes(t))) && (o = !0);
                                  }
                                  if (o) return 4;
                                  let l = e.untranslatedDescription.toLocaleLowerCase(),
                                      u = e.displayDescription.toLocaleLowerCase();
                                  if (l.includes(t) || u.includes(t)) return 7;
                              })(t, e, u, c)),
                              (void 0 === n || (void 0 !== a && a < n)) && (n = a),
                              void 0 !== n &&
                                  s.push({
                                      ...t,
                                      score: n
                                  });
                      }
                      return s;
                  })(s, o, m, e, u)
                : m).length || l
        ? ((u === v.p.NONE || u === v.p.APPLICATION_ONLY) && a.sort((e, t) => ec(e.displayName, t.displayName)),
          {
              section: e,
              data: a
          })
        : null;
}
function ea(e) {
    var t;
    return (null == e ? void 0 : e.guild_id) != null || (e.type === M.d4z.DM && (null === (t = S.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0);
}
function es(e) {
    return (
        !!(function (e) {
            var t;
            return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion;
        })(e) &&
        !e.fetchState.fetching &&
        (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    );
}
function eo(e) {
    var t, n, r, i;
    let a = {
        ...e,
        choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(el),
        description: null !== (r = e.description_default) && void 0 !== r ? r : e.description,
        name: null !== (i = e.name_default) && void 0 !== i ? i : e.name,
        options: null === (n = e.options) || void 0 === n ? void 0 : n.map(eo)
    };
    return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a;
}
function el(e) {
    var t;
    let n = {
        ...e,
        name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
    };
    return e.name !== e.name_default && (n.name_localized = e.name), n;
}
function eu(e, t) {
    let n = [];
    if (
        (null != e.user &&
            n.push({
                type: C.Kw.USER,
                id: t,
                permission: e.user
            }),
        null != e.channels)
    )
        for (let [t, r] of Object.entries(e.channels))
            n.push({
                type: C.Kw.CHANNEL,
                id: t,
                permission: r
            });
    if (null != e.roles)
        for (let [t, r] of Object.entries(e.roles))
            n.push({
                type: C.Kw.ROLE,
                id: t,
                permission: r
            });
    return n;
}
((a = i || (i = {}))[(a.COMMAND_NAME_STARTS_WITH = 0)] = 'COMMAND_NAME_STARTS_WITH'), (a[(a.STARTS_WITH_COMMAND_NAME = 1)] = 'STARTS_WITH_COMMAND_NAME'), (a[(a.COMMAND_NAME_CONTAINS = 2)] = 'COMMAND_NAME_CONTAINS'), (a[(a.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3)] = 'STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME'), (a[(a.OPTION_NAME_CONTAINS = 4)] = 'OPTION_NAME_CONTAINS'), (a[(a.SECTION_NAME_STARTS_WITH = 5)] = 'SECTION_NAME_STARTS_WITH'), (a[(a.SECTION_NAME_CONTAINS = 6)] = 'SECTION_NAME_CONTAINS'), (a[(a.COMMAND_DESCRIPTION_CONTAINS = 7)] = 'COMMAND_DESCRIPTION_CONTAINS'), (a[(a.SECTION_DESCRIPTION_CONTAINS = 8)] = 'SECTION_DESCRIPTION_CONTAINS');
function ec(e, t) {
    return Q.collator.compare(e, t);
}
function ed(e, t) {
    return ec(e, t);
}
function e_(e, t) {
    var n, r, i, a, s, o;
    let l, u;
    if (t === b.bi.BUILT_IN)
        return {
            descriptor: A.Tm[b.bi.BUILT_IN],
            sectionCommands: (0, A.Kh)([E.yU.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0
        };
    let c = Q.getContextState(e),
        d = Q.getUserState(),
        _ = null !== (s = null === (n = c.result) || void 0 === n ? void 0 : n.sections) && void 0 !== s ? s : {},
        f = null !== (o = null === (r = d.result) || void 0 === r ? void 0 : r.sections) && void 0 !== o ? o : {},
        h = _[t],
        p = f[t],
        I = null === (a = Q.getApplicationState(t).result) || void 0 === a ? void 0 : null === (i = a.sections) || void 0 === i ? void 0 : i[t];
    if (null != h && null != p) {
        for (let e in ((l = p.descriptor), (u = []), p.commands)) {
            let t = p.commands[e];
            u.push(t);
        }
        for (let e in h.commands)
            if (!(e in p.commands)) {
                let t = h.commands[e];
                u.push(t);
            }
    } else null != h ? ((l = h.descriptor), (u = Object.values(h.commands))) : null != p ? ((l = p.descriptor), (u = Object.values(p.commands))) : null != I && ((l = I.descriptor), (u = Object.values(I.commands)));
    return {
        descriptor: l,
        sectionCommands: u,
        isGuildInstalled: null != h,
        isUserInstalled: null != p
    };
}
