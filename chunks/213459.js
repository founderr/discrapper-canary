n.d(t, {
    FN: function () {
        return J;
    },
    If: function () {
        return ex;
    },
    JK: function () {
        return eT;
    },
    LD: function () {
        return ef;
    },
    PL: function () {
        return eh;
    },
    em: function () {
        return eE;
    },
    un: function () {
        return ew;
    },
    v1: function () {
        return eS;
    }
});
var r,
    i,
    a = n(47120);
var o = n(653041);
var s = n(390547);
var l = n(789020);
var u = n(470079),
    c = n(512722),
    d = n.n(c),
    _ = n(259443),
    E = n(442837),
    f = n(570140),
    h = n(749210),
    p = n(911969),
    m = n(822245),
    I = n(399860),
    T = n(706454),
    g = n(675478),
    S = n(592125),
    A = n(430824),
    v = n(594174),
    N = n(626135),
    O = n(254711),
    R = n(700089),
    C = n(654455),
    y = n(963456),
    L = n(367790),
    b = n(895924),
    D = n(581364),
    M = n(807169),
    P = n(104793),
    U = n(689079),
    w = n(981631),
    x = n(674563);
function G(e, t, n) {
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
let k = new _.Y('ApplicationCommandIndexStore'),
    B = Symbol('currentUser'),
    F = Symbol('stale'),
    Z = Symbol('current'),
    V = Object.freeze({
        descriptors: [],
        commands: [],
        sectionedCommands: [],
        loading: !0
    }),
    H = Object.freeze({
        serverVersion: Z,
        fetchState: { fetching: !1 },
        result: {
            sections: {},
            sectionIdsByBotId: {},
            version: Z
        }
    }),
    Y = Object.freeze({
        serverVersion: F,
        fetchState: { fetching: !1 }
    }),
    j = 5000,
    W = {
        sensitivity: 'accent',
        numeric: !0
    };
function K(e) {
    switch (e.type) {
        case 'guild':
            return e.guildId;
        case 'channel':
            return e.channelId;
        case 'user':
            return B;
        case 'application':
            return e.applicationId;
    }
}
function z(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = K(e),
        a = e_.indices[i];
    return (
        null != a
            ? ('fetchState' in t && a.fetchState.fetching && a.fetchState.abort.abort(),
              (n = {
                  ...a,
                  ...t
              }))
            : r &&
              (n = {
                  serverVersion: F,
                  fetchState: { fetching: !1 },
                  ...t
              }),
        void 0 !== n && ((e_.indices[i] = n), 'application' === e.type && (e_.applicationIndices.set(i, n), (e_.applicationIndicesVersion = e_.applicationIndicesVersion + 1))),
        a
    );
}
function q(e) {
    let t = K(e),
        n = e_.indices[t];
    (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete e_.indices[t];
}
function Q() {
    for (let e of Object.values(e_.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    e_.indices = {};
}
function X() {
    for (let e of Object.values(e_.indices)) e.serverVersion = F;
}
function $(e) {
    var t;
    let { target: n } = e,
        r = K(n);
    eO(null !== (t = e_.indices[r]) && void 0 !== t ? t : Y) && ee(n);
}
async function J(e) {
    var t, n;
    let r = K(e),
        i = null !== (t = e_.indices[r]) && void 0 !== t ? t : Y;
    return eO(i) ? (await ee(e), null !== (n = e_.indices[r]) && void 0 !== n ? n : Y) : i;
}
async function ee(e) {
    let t = new AbortController();
    z(
        e,
        {
            fetchState: {
                fetching: !0,
                abort: t
            }
        },
        !0
    ),
        await (0, y.a)(e, t);
}
function et(e) {
    var t, n;
    let { target: r, index: i } = e,
        a = null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == a) return !1;
    let o = {},
        s = {},
        l = new Set();
    for (let e of i.applications) {
        if (null == e.bot && null != e.bot_id) {
            s[e.bot_id] = e.id;
            let t = v.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : l.add(e.bot_id);
        } else null != e.bot && (s[e.bot.id] = e.id);
        let t = {
            descriptor: {
                ...(0, D.X0)(eC(e)),
                permissions: null != e.permissions ? (0, I.tk)(eD(e.permissions, a)) : void 0,
                botId: e.bot_id
            },
            commands: {}
        };
        o[e.id] = t;
    }
    for (let e of ('guild' === r.type && l.size > 0 && h.Z.requestMembersById(r.guildId, [...l]),
    (0, D.nG)(
        i.application_commands.map((e) => ey(e, a)),
        !0
    ))) {
        let t = o[e.applicationId];
        if (null == t) {
            k.error('Command has no matching application');
            continue;
        }
        t.commands[e.id] = e;
    }
    let u = null !== (n = i.version) && void 0 !== n ? n : Z;
    z(r, {
        serverVersion: u,
        result: {
            sections: o,
            sectionIdsByBotId: s,
            version: u
        },
        fetchState: { fetching: !1 }
    });
}
function en(e) {
    let { target: t } = e;
    z(t, {
        fetchState: {
            fetching: !1,
            retryAfter: Date.now() + j
        }
    });
}
function er(e) {
    var t;
    let { guildId: n, version: r } = e,
        i = z(
            {
                type: 'guild',
                guildId: n
            },
            { serverVersion: null != r ? r : F }
        ),
        a = null == i ? void 0 : null === (t = i.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
    if (null != a)
        for (let e in a) {
            let t = S.Z.getDMFromUserId(e);
            null != t &&
                z(
                    {
                        type: 'channel',
                        channelId: t
                    },
                    { serverVersion: F }
                );
        }
}
function ei(e, t) {
    var n;
    let r = K({
            type: 'guild',
            guildId: e
        }),
        i = null === (n = e_.indices[r]) || void 0 === n ? void 0 : n.result;
    if (null == i) return !1;
    let a = !1;
    return (
        t.forEach((e) => {
            let { user: t } = e;
            if (!t.bot) return;
            let n = i.sectionIdsByBotId[t.id];
            if (null == n) return;
            let r = i.sections[n];
            d()(null != r, 'Bot has no matching index section'), d()(null != r.descriptor.application, "Bot's index section has no application info");
            let o = (0, D.X0)({
                ...r.descriptor.application,
                bot: t
            });
            (r.descriptor = {
                ...r.descriptor,
                ...o
            }),
                (a = !0);
        }),
        a
    );
}
function ea(e) {
    let { applicationId: t, channelId: n, guildId: r } = e;
    e_.hasContextStateApplication(t, n, r) &&
        z(
            null != r
                ? {
                      type: 'guild',
                      guildId: r
                  }
                : {
                      type: 'channel',
                      channelId: n
                  },
            { serverVersion: F }
        ),
        e_.hasUserStateApplication(t) && z({ type: 'user' }, { serverVersion: F }),
        e_.hasApplicationState(t) &&
            z(
                {
                    type: 'application',
                    applicationId: t
                },
                { serverVersion: F }
            );
}
function eo(e) {
    let { channel: t } = e;
    q({
        type: 'channel',
        channelId: t.id
    });
}
function es(e) {
    let { guild: t } = e;
    q({
        type: 'guild',
        guildId: t.id
    });
}
function el() {
    z({ type: 'user' }, { serverVersion: F });
}
function eu(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) n = ei(e.guildId, e.members) || n;
    return n;
}
function ec() {
    let e = T.default.locale;
    return (
        e !== e_.oldLocale &&
        (Q(),
        (e_.collator = new Intl.Collator(e, {
            sensitivity: 'accent',
            numeric: !0
        })),
        (e_.oldLocale = e),
        !0)
    );
}
class ed extends (r = E.ZP.Store) {
    initialize() {
        this.waitFor(T.default),
            this.syncWith([T.default], () => {
                ec();
            });
    }
    getContextState(e) {
        var t, n;
        return null != e && eN(e) ? (null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : Y) : H;
    }
    hasContextStateApplication(e, t, n) {
        var r, i;
        let a = this.indices[null != n ? n : t];
        return e in (null !== (i = null == a ? void 0 : null === (r = a.result) || void 0 === r ? void 0 : r.sections) && void 0 !== i ? i : {});
    }
    getGuildState(e) {
        var t;
        return null == e ? H : null !== (t = this.indices[e]) && void 0 !== t ? t : Y;
    }
    getUserState() {
        var e;
        return null !== (e = this.indices[B]) && void 0 !== e ? e : Y;
    }
    hasUserStateApplication(e) {
        var t, n;
        let r = this.indices[B];
        return e in (null !== (n = null == r ? void 0 : null === (t = r.result) || void 0 === t ? void 0 : t.sections) && void 0 !== n ? n : {});
    }
    getApplicationState(e) {
        var t;
        return null == e ? H : null !== (t = this.indices[e]) && void 0 !== t ? t : Y;
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == v.default.getCurrentUser()) return V;
        let r = this.getContextState(e),
            i = this.getUserState(),
            a = this.getApplicationState(n.applicationId),
            o = this.getApplicationStates(),
            s = (0, M.k)(e, t.commandTypes),
            l = !1 !== t.applicationCommands && s.hasBaseAccessPermissions,
            u = !1;
        n.allowFetch &&
            (l &&
                eN(e) &&
                (N.default.track(w.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == r.result,
                    size: Object.keys(e_.indices).length
                }),
                eO(r) &&
                    (null != e.guild_id
                        ? (0, y.j)({
                              type: 'guild',
                              guildId: e.guild_id
                          })
                        : (0, y.j)({
                              type: 'channel',
                              channelId: e.id
                          }),
                    (u = !0))),
            eO(i) && ((0, y.j)({ type: 'user' }), (u = !0)),
            eO(a) &&
                null != n.applicationId &&
                ((0, y.j)({
                    type: 'application',
                    applicationId: n.applicationId
                }),
                (u = !0)));
        let c = eA({
            permissionContext: s,
            text: t.text,
            allowApplicationCommands: l,
            builtIns: t.builtIns,
            scoreMethod: n.scoreMethod,
            allowEmptySections: n.allowEmptySections,
            contextState: r,
            userState: i,
            applicationStates: n.allowApplicationState ? o : new Map(),
            sortOptions: n.sortOptions,
            singleApplicationId: n.applicationId,
            installOnDemand: n.installOnDemand
        });
        return (c.loading = c.loading || u), c;
    }
    maybeQueryForInstallLessApps(e, t) {
        let n = S.Z.getChannel(t),
            r = x.Yq.includes(e) ? e : void 0;
        null != n &&
            null != r &&
            this.query(
                n,
                { commandTypes: [p.yU.CHAT] },
                {
                    placeholderCount: 5,
                    scoreMethod: L.p.COMMAND_ONLY,
                    applicationId: r,
                    allowFetch: !0
                }
            );
    }
    queryInstallOnDemandApp(e, t) {
        let n = S.Z.getChannel(t);
        null != n &&
            this.query(
                n,
                { commandTypes: [p.yU.CHAT] },
                {
                    placeholderCount: 5,
                    scoreMethod: L.p.COMMAND_ONLY,
                    applicationId: e,
                    allowFetch: !0
                }
            );
    }
    constructor(...e) {
        super(...e), G(this, 'indices', {}), G(this, 'applicationIndices', new Map()), G(this, 'applicationIndicesVersion', 0), G(this, 'oldLocale', T.default.locale), G(this, 'collator', new Intl.Collator(T.default.locale, W));
    }
}
G(ed, 'displayName', 'ApplicationCommandIndexStore');
let e_ = new ed(f.Z, {
    LOGOUT: Q,
    CONNECTION_OPEN: X,
    APPLICATION_COMMAND_INDEX_FETCH_REQUEST: $,
    APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: et,
    APPLICATION_COMMAND_INDEX_FETCH_FAILURE: en,
    APPLICATION_COMMAND_EXECUTE_BAD_VERSION: ea,
    CHANNEL_DELETE: eo,
    GUILD_DELETE: es,
    USER_APPLICATION_UPDATE: el,
    USER_APPLICATION_REMOVE: el,
    GUILD_APPLICATION_COMMAND_INDEX_UPDATE: er,
    GUILD_MEMBERS_CHUNK_BATCH: eu
});
function eE(e, t, n) {
    let [r, i] = u.useState(!0),
        a = (0, E.cj)([e_], () => e_.getContextState(e));
    return (
        u.useEffect(() => {
            r &&
                null != e &&
                (n &&
                    t &&
                    eN(e) &&
                    (N.default.track(w.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(e_.indices).length
                    }),
                    eO(a) &&
                        (null != e.guild_id
                            ? (0, y.j)({
                                  type: 'guild',
                                  guildId: e.guild_id
                              })
                            : (0, y.j)({
                                  type: 'channel',
                                  channelId: e.id
                              }))),
                i(!1));
        }, [a, n, e, t, r]),
        a
    );
}
function ef(e, t) {
    let [n, r] = u.useState(!0),
        i = (0, E.cj)([e_], () => {
            var t;
            return null !== (t = e_.indices[e]) && void 0 !== t ? t : Y;
        });
    return (
        u.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (N.default.track(w.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == i.result,
                        size: Object.keys(e_.indices).length
                    }),
                    eO(i) &&
                        (0, y.j)({
                            type: 'guild',
                            guildId: e
                        })),
                r(!1));
        }, [i, t, e, n]),
        i
    );
}
function eh(e, t) {
    let [n, r] = u.useState(!0),
        i = (0, E.cj)([e_], () => e_.getUserState());
    return (
        u.useEffect(() => {
            n && (t && eO(i) && e && (0, y.j)({ type: 'user' }), r(!1));
        }, [i, t, e, n]),
        i
    );
}
function ep(e, t) {
    let [n, r] = u.useState(!0),
        i = (0, E.e7)([e_], () => e_.getApplicationState(e));
    u.useEffect(() => {
        n &&
            (t &&
                eO(i) &&
                null != e &&
                (0, y.j)({
                    type: 'application',
                    applicationId: e
                }),
            r(!1));
    }, [t, e, i, n]);
}
function em() {
    return (0, E.e7)([e_], () => e_.getApplicationStates());
}
function eI() {
    return (0, E.e7)([e_], () => e_.applicationIndicesVersion);
}
function eT(e, t, n, r) {
    let { descriptors: i, commands: a, sectionedCommands: o, loading: s } = eS(e, n, r),
        l = (0, R.R)({
            channel: e,
            guild: t
        });
    return u.useMemo(() => {
        if (!r.includeFrecency || 0 === l.length)
            return {
                descriptors: i,
                commands: a,
                sectionedCommands: o,
                loading: s
            };
        let n = {
                channel: e,
                guild: t
            },
            u = a
                .filter((e) => l.includes(e.id))
                .sort((e, t) => {
                    let r = C.ZP.getScoreWithoutLoadingLatest(n, e);
                    return C.ZP.getScoreWithoutLoadingLatest(n, t) - r;
                })
                .splice(0, U.hz);
        return 0 === u.length
            ? {
                  descriptors: i,
                  commands: a,
                  sectionedCommands: o,
                  loading: s
              }
            : {
                  descriptors: [O.Tm[U.bi.FRECENCY], ...i],
                  commands: u.concat(a),
                  sectionedCommands: [
                      {
                          section: O.Tm[U.bi.FRECENCY],
                          data: u
                      },
                      ...o
                  ],
                  loading: s
              };
    }, [s, r.includeFrecency, l, e, t, a, i, o]);
}
t.ZP = e_;
let eg = Object.freeze({
    applications: {
        useFrecency: !1,
        useScore: !1
    },
    commands: {
        useFrecency: !0,
        useScore: !0
    }
});
function eS(e, t, n) {
    let r = (0, M.Hs)(e, t.commandTypes),
        i = !1 !== t.applicationCommands,
        a = eE(e, i, n.allowFetch),
        o = eh(i, n.allowFetch),
        s = em(),
        l = eI();
    return (
        ep(n.applicationId, n.allowFetch),
        u.useMemo(
            () =>
                eA({
                    permissionContext: r,
                    text: t.text,
                    allowApplicationCommands: i,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: a,
                    userState: o,
                    applicationStates: n.allowApplicationState ? s : new Map(),
                    sortOptions: n.sortOptions,
                    singleApplicationId: n.applicationId,
                    installOnDemand: n.installOnDemand
                }),
            [r, t.text, t.builtIns, i, n.scoreMethod, n.allowEmptySections, n.sortOptions, n.allowApplicationState, n.applicationId, n.installOnDemand, a, o, s, l]
        )
    );
}
function eA(e) {
    var t, n, r, i, a, o;
    let { permissionContext: s, contextState: l, userState: u, applicationStates: c, text: _, builtIns: E = L.D.ALLOW, allowApplicationCommands: f = !0, singleApplicationId: h, allowEmptySections: p = !1, scoreMethod: I = L.p.NONE, sortOptions: T = eg, installOnDemand: S = !1 } = e,
        { commandTypes: v } = s,
        N = null == _ ? void 0 : _.toLowerCase(),
        R = null == N ? void 0 : N.split(' '),
        y = E === L.D.ONLY_TEXT,
        b = E !== L.D.DENY ? (0, O.Kh)(v, !0, y) : [],
        D = [],
        M = {
            permissionContext: s,
            query: N,
            splitQuery: R,
            allowEmptySections: p,
            scoreMethod: I,
            installOnDemand: S
        },
        P = null !== (i = null === (t = l.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {},
        w = null !== (a = null === (n = u.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {},
        x = new Set();
    if (f) {
        if (s.hasBaseAccessPermissions)
            for (let e in P) {
                let t = P[e];
                (null == h || t.descriptor.id === h) && x.add(e);
            }
        for (let e in w) {
            let t = w[e];
            (null == h || t.descriptor.id === h) && x.add(e);
        }
    }
    let G = new Map();
    for (let [e, t] of c)
        if (null == h || e === h) {
            let e = null === (o = t.result) || void 0 === o ? void 0 : o.sections;
            if (null != e) for (let t of Object.keys(e)) x.add(t), G.set(t, e[t]);
        }
    for (let e of Array.from(x)) {
        let t, n;
        let r = P[e],
            i = w[e],
            a = G.get(e),
            o = null != r,
            s = null != i;
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
        d()(null != t, 'Failed to select application descriptor'), d()(null != n, 'Failed to select list of application commands');
        let l = ev(t, n, o, s, M);
        null != l && D.push(l);
    }
    if (
        (T.applications.useFrecency && g.DZ.loadIfNecessary(),
        D.sort((e, t) => {
            if (T.applications.useScore && I === L.p.APPLICATION_ONLY) {
                var n, r, i, a;
                let o = null !== (i = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== i ? i : Number.MAX_VALUE,
                    s = null !== (a = null === (r = t.data[0]) || void 0 === r ? void 0 : r.score) && void 0 !== a ? a : Number.MAX_VALUE;
                if (o !== s) return o - s;
            }
            if (T.applications.useFrecency) {
                let n = m.Z.getScoreWithoutLoadingLatest(e.section.id),
                    r = m.Z.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== r) return r - n;
            }
            return eU(e.section.name, t.section.name);
        }),
        b.length > 0 || !0 === p)
    ) {
        let e = ev(O.Tm[U.bi.BUILT_IN], b, !0, !0, M);
        null != e && D.push(e);
    }
    let k = D.flatMap((e) =>
        e.data.map((t) => ({
            ...t,
            section: e.section
        }))
    );
    if (I === L.p.COMMAND_ONLY || I === L.p.COMMAND_OR_APPLICATION) {
        let e = s.context,
            t = A.Z.getGuild(s.context.guild_id);
        T.commands.useFrecency && g.DZ.loadIfNecessary(),
            k.sort((n, r) => {
                if (T.commands.useScore) {
                    var i, a;
                    let e = null !== (i = n.score) && void 0 !== i ? i : 0,
                        t = null !== (a = r.score) && void 0 !== a ? a : 0;
                    if (e !== t) return e - t;
                }
                if (T.commands.useFrecency) {
                    let i = C.ZP.getScoreWithoutLoadingLatest(
                            {
                                channel: e,
                                guild: t
                            },
                            n
                        ),
                        a = C.ZP.getScoreWithoutLoadingLatest(
                            {
                                channel: e,
                                guild: t
                            },
                            r
                        );
                    if (i !== a) return a - i;
                }
                return eU(n.displayName, r.displayName);
            });
    }
    return {
        commands: k,
        descriptors: D.map((e) => e.section),
        sectionedCommands: D,
        loading: (null == l ? void 0 : l.fetchState.fetching) === !0 || (null == u ? void 0 : u.fetchState.fetching) === !0 || (null != h && (null === (r = c.get(h)) || void 0 === r ? void 0 : r.fetchState.fetching) === !0)
    };
}
function ev(e, t, n, r, i) {
    let a,
        { query: o, splitQuery: s, allowEmptySections: l, scoreMethod: u, permissionContext: c, installOnDemand: d } = i,
        { context: _, userId: E, roleIds: f, isImpersonating: h } = c,
        p = null != _.guild_id ? P.ML(e.permissions, _.guild_id, E, f, h) : null,
        m = null != _.guild_id ? P.ZJ(e.permissions, _, _.guild_id) : null,
        I = [];
    for (let i of t)
        P.Ft(i, c, {
            applicationAllowedForUser: p,
            applicationAllowedForChannel: m,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: r || d
        }) === P.mF.ALLOWED && I.push(i);
    return 0 !== (a = u !== L.p.NONE && null != o && null != s ? eM(o, s, I, e, u) : I).length || l
        ? ((u === L.p.NONE || u === L.p.APPLICATION_ONLY) && a.sort((e, t) => eU(e.displayName, t.displayName)),
          {
              section: e,
              data: a
          })
        : null;
}
function eN(e) {
    var t;
    return null != e.guild_id || (e.type === w.d4z.DM && (null === (t = v.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0);
}
function eO(e) {
    return !!eR(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter);
}
function eR(e) {
    var t;
    return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion;
}
function eC(e) {
    return {
        description: e.description,
        icon: e.icon,
        id: e.id,
        name: e.name,
        bot: e.bot,
        flags: e.flags
    };
}
function ey(e, t) {
    var n, r, i, a, o;
    let s = {
        ...e,
        description: null !== (i = null !== (r = e.description_default) && void 0 !== r ? r : e.description) && void 0 !== i ? i : '',
        dm_permission: e.dm_permission,
        name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
        options: null !== (o = null === (n = e.options) || void 0 === n ? void 0 : n.map(eL)) && void 0 !== o ? o : [],
        permissions: null != e.permissions ? eD(e.permissions, t) : void 0
    };
    return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s;
}
function eL(e) {
    var t, n, r, i;
    let a = {
        ...e,
        choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(eb),
        description: null !== (r = e.description_default) && void 0 !== r ? r : e.description,
        name: null !== (i = e.name_default) && void 0 !== i ? i : e.name,
        options: null === (n = e.options) || void 0 === n ? void 0 : n.map(eL)
    };
    return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a;
}
function eb(e) {
    var t;
    let n = {
        ...e,
        name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
    };
    return e.name !== e.name_default && (n.name_localized = e.name), n;
}
function eD(e, t) {
    let n = [];
    if (
        (null != e.user &&
            n.push({
                type: b.Kw.USER,
                id: t,
                permission: e.user
            }),
        null != e.channels)
    )
        for (let [t, r] of Object.entries(e.channels))
            n.push({
                type: b.Kw.CHANNEL,
                id: t,
                permission: r
            });
    if (null != e.roles)
        for (let [t, r] of Object.entries(e.roles))
            n.push({
                type: b.Kw.ROLE,
                id: t,
                permission: r
            });
    return n;
}
function eM(e, t, n, r, i) {
    let a;
    let o = [];
    if (i === L.p.APPLICATION_ONLY || i === L.p.COMMAND_OR_APPLICATION) {
        let t = r.name.toLocaleLowerCase();
        if (t.startsWith(e)) a = 5;
        else if (t.includes(e)) a = 6;
        else {
            var s, l;
            let t = null === (l = r.application) || void 0 === l ? void 0 : null === (s = l.description) || void 0 === s ? void 0 : s.toLocaleLowerCase();
            (null == t ? void 0 : t.includes(e)) && (a = 8);
        }
    }
    let u = t[0],
        c = t.slice(1).join(' ');
    for (let t of n) {
        let n;
        (i === L.p.COMMAND_ONLY || i === L.p.COMMAND_OR_APPLICATION) && (n = eP(t, e, u, c)),
            (void 0 === n || (void 0 !== a && a < n)) && (n = a),
            void 0 !== n &&
                o.push({
                    ...t,
                    score: n
                });
    }
    return o;
}
function eP(e, t, n, r) {
    var i;
    let a = e.untranslatedName,
        o = e.displayName;
    if (a.startsWith(t) || o.startsWith(t)) return 0;
    if ((a.startsWith(n) && a.split(' ').slice(1).join(' ').startsWith(r)) || (o.startsWith(n) && o.split(' ').slice(1).join(' ').startsWith(r))) return 1;
    if (a.includes(t) || (null == o ? void 0 : o.includes(t))) return 2;
    let s = !1;
    for (let { name: n, serverLocalizedName: r } of null !== (i = e.options) && void 0 !== i ? i : []) {
        if (n.startsWith(t) || ''.concat(a, ' ').concat(n).startsWith(t) || (null != o && ''.concat(o, ' ').concat(n).startsWith(t)) || (null != r && (r.startsWith(t) || ''.concat(a, ' ').concat(r).startsWith(t) || (null != o && ''.concat(o, ' ').concat(r).startsWith(t))))) return 3;
        (n.includes(t) || (null == r ? void 0 : r.includes(t))) && (s = !0);
    }
    if (s) return 4;
    let l = e.untranslatedDescription.toLocaleLowerCase(),
        u = e.displayDescription.toLocaleLowerCase();
    if (l.includes(t) || u.includes(t)) return 7;
}
function eU(e, t) {
    return e_.collator.compare(e, t);
}
function ew(e, t) {
    return eU(e, t);
}
function ex(e, t) {
    var n, r, i, a, o, s;
    let l, u;
    if (t === U.bi.BUILT_IN)
        return {
            descriptor: O.Tm[U.bi.BUILT_IN],
            sectionCommands: (0, O.Kh)([p.yU.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0
        };
    let c = e_.getContextState(e),
        d = e_.getUserState(),
        _ = null !== (o = null === (n = c.result) || void 0 === n ? void 0 : n.sections) && void 0 !== o ? o : {},
        E = null !== (s = null === (r = d.result) || void 0 === r ? void 0 : r.sections) && void 0 !== s ? s : {},
        f = _[t],
        h = E[t],
        m = null === (a = e_.getApplicationState(t).result) || void 0 === a ? void 0 : null === (i = a.sections) || void 0 === i ? void 0 : i[t];
    if (null != f && null != h) {
        for (let e in ((l = h.descriptor), (u = []), h.commands)) {
            let t = h.commands[e];
            u.push(t);
        }
        for (let e in f.commands)
            if (!(e in h.commands)) {
                let t = f.commands[e];
                u.push(t);
            }
    } else null != f ? ((l = f.descriptor), (u = Object.values(f.commands))) : null != h ? ((l = h.descriptor), (u = Object.values(h.commands))) : null != m && ((l = m.descriptor), (u = Object.values(m.commands)));
    return {
        descriptor: l,
        sectionCommands: u,
        isGuildInstalled: null != f,
        isUserInstalled: null != h
    };
}
!(function (e) {
    (e[(e.COMMAND_NAME_STARTS_WITH = 0)] = 'COMMAND_NAME_STARTS_WITH'), (e[(e.STARTS_WITH_COMMAND_NAME = 1)] = 'STARTS_WITH_COMMAND_NAME'), (e[(e.COMMAND_NAME_CONTAINS = 2)] = 'COMMAND_NAME_CONTAINS'), (e[(e.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3)] = 'STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME'), (e[(e.OPTION_NAME_CONTAINS = 4)] = 'OPTION_NAME_CONTAINS'), (e[(e.SECTION_NAME_STARTS_WITH = 5)] = 'SECTION_NAME_STARTS_WITH'), (e[(e.SECTION_NAME_CONTAINS = 6)] = 'SECTION_NAME_CONTAINS'), (e[(e.COMMAND_DESCRIPTION_CONTAINS = 7)] = 'COMMAND_DESCRIPTION_CONTAINS'), (e[(e.SECTION_DESCRIPTION_CONTAINS = 8)] = 'SECTION_DESCRIPTION_CONTAINS');
})(i || (i = {}));
