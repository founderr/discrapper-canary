"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [86502], {
        786502: (e, r, t) => {
            t.d(r, {
                bm: () => s,
                an: () => P,
                rh: () => y,
                Sz: () => g,
                Vg: () => V,
                ZP: () => R
            });
            var n, s, I = t(258104),
                u = t(61209),
                a = t(21372),
                i = t(179913),
                o = t(840922),
                _ = t(473903),
                O = t(796909),
                l = t(504275),
                S = t(2590),
                T = t(718634),
                E = t(473708);

            function N(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function f(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        N(e, r, t[r])
                    }))
                }
                return e
            }

            function d(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }
            n = t(218146);
            ! function(e) {
                e.GROUP_DM = "GROUP_DM";
                e.DM = "DM";
                e.FRIEND = "FRIEND";
                e.CHANNEL = "CHANNEL"
            }(s || (s = {}));
            var c = function(e, r) {
                    return null != e && a.ZP.isMember(e, r)
                },
                m = function(e) {
                    var r = e.omitUserIds,
                        t = e.maxRowsWithoutQuery,
                        n = e.omitGuildId,
                        I = e.shownUserIds,
                        a = e.rows,
                        o = e.counts,
                        l = e.includeGroupDms,
                        T = e.limit,
                        E = 0,
                        N = !0,
                        f = !1,
                        d = void 0;
                    try {
                        for (var m, P = O.Z.getPrivateChannelIds()[Symbol.iterator](); !(N = (m = P.next()).done); N = !0) {
                            var y = m.value;
                            if (null != t && t > 0 && a.length >= t) break;
                            if (null != T && E >= T) break;
                            var g = u.Z.getChannel(y);
                            if (null != g && g.isPrivate())
                                if (l && g.type === S.d4z.GROUP_DM) {
                                    a.push({
                                        type: s.GROUP_DM,
                                        item: g,
                                        isSuggested: !1
                                    });
                                    o.numGroupDms++;
                                    E++
                                } else {
                                    if (null != i.ZP.lastMessageId(g.id)) {
                                        var v = g.getRecipientId();
                                        if (null != v && !r.has(v) && !I.has(v)) {
                                            var U = _.default.getUser(v);
                                            if (null == U || U.bot || c(n, U.id)) continue;
                                            I.add(U.id);
                                            a.push({
                                                type: s.DM,
                                                item: U,
                                                isSuggested: !1
                                            });
                                            o.numDms++;
                                            E++
                                        }
                                    }
                                }
                        }
                    } catch (e) {
                        f = !0;
                        d = e
                    } finally {
                        try {
                            N || null == P.return || P.return()
                        } finally {
                            if (f) throw d
                        }
                    }
                };

            function P(e) {
                var r = e.query,
                    t = e.inviteTargetType,
                    n = e.omitUserIds,
                    I = e.suggestedUserIds,
                    a = e.suggestedChannelIds,
                    O = e.maxRowsWithoutQuery,
                    S = e.omitGuildId,
                    E = new Set,
                    N = [],
                    P = {
                        numFriends: 0,
                        numDms: 0,
                        numGroupDms: 0,
                        numGuildMembers: 0,
                        numChannels: 0
                    };
                if ("" === r) {
                    var y = {
                        omitUserIds: n,
                        maxRowsWithoutQuery: O,
                        omitGuildId: S,
                        shownUserIds: E,
                        rows: N,
                        counts: P
                    };
                    if (t === T.Iq.EMBEDDED_APPLICATION) {
                        m(d(f({}, y), {
                            includeGroupDms: !1,
                            limit: 1
                        }));
                        ! function(e) {
                            var r = e.suggestedChannelIds,
                                t = e.maxRowsWithoutQuery,
                                n = e.rows,
                                I = e.counts;
                            if (null != r) {
                                var a = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var _, O = r[Symbol.iterator](); !(a = (_ = O.next()).done); a = !0) {
                                        var l = _.value;
                                        if (null != t && t > 0 && n.length >= t) break;
                                        var S = u.Z.getChannel(l);
                                        if (null != S) {
                                            n.push({
                                                type: s.CHANNEL,
                                                item: S,
                                                isSuggested: !0
                                            });
                                            I.numChannels++
                                        }
                                    }
                                } catch (e) {
                                    i = !0;
                                    o = e
                                } finally {
                                    try {
                                        a || null == O.return || O.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                            }
                        }(d(f({}, y), {
                            suggestedChannelIds: a
                        }))
                    }! function(e) {
                        var r = e.omitUserIds,
                            t = e.suggestedUserIds,
                            n = e.maxRowsWithoutQuery,
                            I = e.omitGuildId,
                            u = e.shownUserIds,
                            a = e.rows,
                            i = e.counts;
                        if (null != t) {
                            var o = !0,
                                O = !1,
                                l = void 0;
                            try {
                                for (var S, T = t[Symbol.iterator](); !(o = (S = T.next()).done); o = !0) {
                                    var E = S.value;
                                    if (null != n && n > 0 && a.length >= n) break;
                                    if (!r.has(E) && !u.has(E)) {
                                        var N = _.default.getUser(E);
                                        if (null != N && !c(I, N.id)) {
                                            u.add(N.id);
                                            a.push({
                                                type: s.FRIEND,
                                                item: N,
                                                isSuggested: !0
                                            });
                                            i.numFriends++
                                        }
                                    }
                                }
                            } catch (e) {
                                O = !0;
                                l = e
                            } finally {
                                try {
                                    o || null == T.return || T.return()
                                } finally {
                                    if (O) throw l
                                }
                            }
                        }
                    }(d(f({}, y), {
                        suggestedUserIds: I
                    }));
                    m(d(f({}, y), {
                        includeGroupDms: !0
                    }));
                    ! function(e) {
                        var r = e.omitUserIds,
                            t = e.maxRowsWithoutQuery,
                            n = e.omitGuildId,
                            I = e.shownUserIds,
                            u = e.rows,
                            a = e.counts,
                            i = !0,
                            O = !1,
                            l = void 0;
                        try {
                            for (var S, T = o.Z.getFriendIDs()[Symbol.iterator](); !(i = (S = T.next()).done); i = !0) {
                                var E = S.value;
                                if (null != t && t > 0 && u.length >= t) break;
                                if (!r.has(E) && !I.has(E)) {
                                    var N = _.default.getUser(E);
                                    if (null != N && !c(n, N.id)) {
                                        u.push({
                                            type: s.FRIEND,
                                            item: N,
                                            isSuggested: !1
                                        });
                                        a.numFriends++
                                    }
                                }
                            }
                        } catch (e) {
                            O = !0;
                            l = e
                        } finally {
                            try {
                                i || null == T.return || T.return()
                            } finally {
                                if (O) throw l
                            }
                        }
                    }(y)
                } else {
                    var g = {
                        query: r,
                        rows: N,
                        counts: P
                    };
                    t === T.Iq.EMBEDDED_APPLICATION && function(e) {
                        var r = e.query,
                            t = e.rows,
                            n = e.counts;
                        e.inviteTargetType === T.Iq.EMBEDDED_APPLICATION && l.ZP.queryChannels({
                            query: r,
                            limit: 3,
                            guildId: void 0
                        }).forEach((function(e) {
                            var r = e.record;
                            t.push({
                                type: s.CHANNEL,
                                item: r,
                                isSuggested: !1
                            });
                            n.numChannels++
                        }))
                    }(d(f({}, g), {
                        inviteTargetType: t
                    }));
                    ! function(e) {
                        var r = e.query,
                            t = e.omitUserIds,
                            n = e.shownUserIds,
                            I = e.rows,
                            a = e.counts;
                        l.ZP.queryDMUsers({
                            query: r,
                            limit: 50
                        }).forEach((function(e) {
                            var r = e.record;
                            if (!t.has(r.id)) {
                                var o = u.Z.getDMFromUserId(r.id);
                                if (null != o && null != i.ZP.lastMessageId(o)) {
                                    n.add(r.id);
                                    I.push({
                                        type: s.DM,
                                        item: r,
                                        isSuggested: !1
                                    });
                                    a.numDms++
                                }
                            }
                        }))
                    }(d(f({}, g), {
                        omitUserIds: n,
                        shownUserIds: E
                    }));
                    ! function(e) {
                        var r = e.query,
                            t = e.rows,
                            n = e.counts;
                        l.ZP.queryGroupDMs({
                            query: r,
                            limit: 50,
                            fuzzy: !1
                        }).forEach((function(e) {
                            var r = e.record;
                            t.push({
                                type: s.GROUP_DM,
                                item: r,
                                isSuggested: !1
                            });
                            n.numGroupDms++
                        }))
                    }(g);
                    ! function(e) {
                        var r = e.query,
                            t = e.rows,
                            n = e.counts,
                            I = e.omitUserIds,
                            u = e.shownUserIds;
                        l.ZP.queryFriends({
                            query: r,
                            limit: 500,
                            _fuzzy: !1
                        }).forEach((function(e) {
                            var r = e.record;
                            if (!I.has(r.id) && !u.has(r.id)) {
                                u.add(r.id);
                                t.push({
                                    type: s.FRIEND,
                                    item: r,
                                    isSuggested: !1
                                });
                                n.numFriends++
                            }
                        }))
                    }(d(f({}, g), {
                        omitUserIds: n,
                        shownUserIds: E
                    }))
                }
                return {
                    rows: N,
                    counts: P
                }
            }

            function y(e, r) {
                var t = !0,
                    n = !1,
                    s = void 0;
                try {
                    for (var I, a = O.Z.getPrivateChannelIds()[Symbol.iterator](); !(t = (I = a.next()).done); t = !0) {
                        var o = I.value,
                            l = u.Z.getChannel(o);
                        if (null != l && l.isDM() && null != i.ZP.lastMessageId(l.id)) {
                            var S = l.getRecipientId();
                            if (null != S && !e.has(S)) {
                                var T = _.default.getUser(S);
                                if (null == T || T.bot || c(r, T.id)) continue;
                                return T
                            }
                        }
                    }
                } catch (e) {
                    n = !0;
                    s = e
                } finally {
                    try {
                        t || null == a.return || a.return()
                    } finally {
                        if (n) throw s
                    }
                }
                return null
            }

            function g(e) {
                var r = e.channel,
                    t = e.inviteTargetType,
                    n = e.applicationId;
                if (t === T.Iq.EMBEDDED_APPLICATION)
                    if (null != r) {
                        var s = !0,
                            u = !1,
                            a = void 0;
                        try {
                            for (var i, o = I.ZP.getEmbeddedActivitiesForChannel(r.id)[Symbol.iterator](); !(s = (i = o.next()).done); s = !0) {
                                var _ = i.value;
                                if (_.application_id === n) return new Set(_.connections.keys())
                            }
                        } catch (e) {
                            u = !0;
                            a = e
                        } finally {
                            try {
                                s || null == o.return || o.return()
                            } finally {
                                if (u) throw a
                            }
                        }
                    } return new Set
            }
            var v, U = "minutes",
                M = "hours",
                h = "days",
                p = "never",
                D = (N(v = {}, n.INVITE_OPTIONS_30_MINUTES.value, {
                    value: 30,
                    type: U
                }), N(v, n.INVITE_OPTIONS_1_HOUR.value, {
                    value: 1,
                    type: M
                }), N(v, n.INVITE_OPTIONS_6_HOURS.value, {
                    value: 6,
                    type: M
                }), N(v, n.INVITE_OPTIONS_12_HOURS.value, {
                    value: 12,
                    type: M
                }), N(v, n.INVITE_OPTIONS_1_DAY.value, {
                    value: 1,
                    type: h
                }), N(v, n.INVITE_OPTIONS_7_DAYS.value, {
                    value: 7,
                    type: h
                }), N(v, n.INVITE_OPTIONS_30_DAYS.value, {
                    value: 30,
                    type: h
                }), N(v, n.INVITE_OPTIONS_FOREVER.value, {
                    value: 0,
                    type: p
                }), v);

            function V(e, r) {
                var t = parseInt(r, 10),
                    n = 0 === t,
                    s = D[e].value;
                switch (D[e].type) {
                    case U:
                        return n ? E.Z.Messages.INVITE_EXPIRES_MINUTES : E.Z.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
                            numUses: t
                        });
                    case M:
                        return n ? E.Z.Messages.INVITE_EXPIRES_HOURS.format({
                            numHours: s
                        }) : E.Z.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
                            numHours: s,
                            numUses: t
                        });
                    case h:
                        return n ? E.Z.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                            numDays: s
                        }) : E.Z.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
                            numDays: s,
                            numUses: t
                        });
                    case p:
                        return n ? E.Z.Messages.INVITE_EXPIRES_NEVER : E.Z.Messages.INVITE_EXPIRES_USES.format({
                            numUses: t
                        });
                    default:
                        return ""
                }
            }
            const R = {
                getMaxAgeOptions: n.MAX_AGE_OPTIONS,
                getMaxUsesOptions: n.MAX_USES_OPTIONS,
                INVITE_OPTIONS_FOREVER: n.INVITE_OPTIONS_FOREVER,
                INVITE_OPTIONS_1_DAY: n.INVITE_OPTIONS_1_DAY,
                INVITE_OPTIONS_7_DAYS: n.INVITE_OPTIONS_7_DAYS,
                INVITE_OPTIONS_30_DAYS: n.INVITE_OPTIONS_30_DAYS,
                INVITE_OPTIONS_12_HOURS: n.INVITE_OPTIONS_12_HOURS,
                INVITE_OPTIONS_6_HOURS: n.INVITE_OPTIONS_6_HOURS,
                INVITE_OPTIONS_1_HOUR: n.INVITE_OPTIONS_1_HOUR,
                INVITE_OPTIONS_30_MINUTES: n.INVITE_OPTIONS_30_MINUTES,
                INVITE_OPTIONS_UNLIMITED: n.INVITE_OPTIONS_UNLIMITED,
                INVITE_OPTIONS_ONCE: n.INVITE_OPTIONS_ONCE,
                INVITE_OPTIONS_5_TIMES: n.INVITE_OPTIONS_5_TIMES,
                INVITE_OPTIONS_10_TIMES: n.INVITE_OPTIONS_10_TIMES,
                INVITE_OPTIONS_25_TIMES: n.INVITE_OPTIONS_25_TIMES,
                INVITE_OPTIONS_50_TIMES: n.INVITE_OPTIONS_50_TIMES,
                INVITE_OPTIONS_100_TIMES: n.INVITE_OPTIONS_100_TIMES
            }
        },
        218146: (e, r, t) => {
            t.r(r);
            t.d(r, {
                INVITE_OPTIONS_UNLIMITED: () => I,
                INVITE_OPTIONS_ONCE: () => u,
                INVITE_OPTIONS_5_TIMES: () => a,
                INVITE_OPTIONS_10_TIMES: () => i,
                INVITE_OPTIONS_25_TIMES: () => o,
                INVITE_OPTIONS_50_TIMES: () => _,
                INVITE_OPTIONS_100_TIMES: () => O,
                MAX_USES_OPTIONS: () => l,
                INVITE_OPTIONS_30_MINUTES: () => S,
                INVITE_OPTIONS_1_HOUR: () => T,
                INVITE_OPTIONS_6_HOURS: () => E,
                INVITE_OPTIONS_12_HOURS: () => N,
                INVITE_OPTIONS_1_DAY: () => f,
                INVITE_OPTIONS_7_DAYS: () => d,
                INVITE_OPTIONS_30_DAYS: () => c,
                INVITE_OPTIONS_FOREVER: () => m,
                MAX_AGE_OPTIONS: () => P
            });
            var n = t(473708);

            function s(e, r) {
                return {
                    value: e,
                    get label() {
                        return r()
                    }
                }
            }
            var I = s(0, (function() {
                    return n.Z.Messages.MAX_USES.format({
                        maxUses: 0
                    })
                })),
                u = s(1, (function() {
                    return n.Z.Messages.MAX_USES.format({
                        maxUses: 1
                    })
                })),
                a = s(5, (function() {
                    return n.Z.Messages.MAX_USES.format({
                        maxUses: 5
                    })
                })),
                i = s(10, (function() {
                    return n.Z.Messages.MAX_USES.format({
                        maxUses: 10
                    })
                })),
                o = s(25, (function() {
                    return n.Z.Messages.MAX_USES.format({
                        maxUses: 25
                    })
                })),
                _ = s(50, (function() {
                    return n.Z.Messages.MAX_USES.format({
                        maxUses: 50
                    })
                })),
                O = s(100, (function() {
                    return n.Z.Messages.MAX_USES.format({
                        maxUses: 100
                    })
                })),
                l = [I, u, a, i, o, _, O],
                S = s(1800, (function() {
                    return n.Z.Messages.DURATION_MINUTES.format({
                        minutes: 30
                    })
                })),
                T = s(3600, (function() {
                    return n.Z.Messages.DURATION_HOURS.format({
                        hours: 1
                    })
                })),
                E = s(21600, (function() {
                    return n.Z.Messages.DURATION_HOURS.format({
                        hours: 6
                    })
                })),
                N = s(43200, (function() {
                    return n.Z.Messages.DURATION_HOURS.format({
                        hours: 12
                    })
                })),
                f = s(86400, (function() {
                    return n.Z.Messages.DURATION_DAYS.format({
                        days: 1
                    })
                })),
                d = s(604800, (function() {
                    return n.Z.Messages.DURATION_DAYS.format({
                        days: 7
                    })
                })),
                c = s(2592e3, (function() {
                    return n.Z.Messages.DURATION_DAYS.format({
                        days: 30
                    })
                })),
                m = s(0, (function() {
                    return n.Z.Messages.MAX_AGE_NEVER
                })),
                P = [S, T, E, N, f, d, c, m]
        }
    }
]);