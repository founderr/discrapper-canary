"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [27499], {
        327499: (e, t, n) => {
            n.d(t, {
                V: () => k,
                Z: () => x
            });
            var r = n(993231),
                o = n(940060),
                u = n(281110),
                i = n(744564),
                l = n(973889),
                c = n(10390),
                a = n(94969),
                s = n(339432),
                d = n(3930),
                f = n(784426),
                p = n(934870),
                E = n(664625),
                _ = n(780861),
                h = n(5544),
                y = n(567403),
                I = n(715107),
                b = n(464187),
                L = n(473903),
                m = n(652591),
                D = n(563135),
                v = n(116094),
                T = n(391438),
                G = n(105783),
                S = n(2590),
                g = n(473708);

            function O(e, t, n, r, o, u, i) {
                try {
                    var l = e[u](i),
                        c = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function A(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function i(e) {
                            O(u, r, o, i, l, "next", e)
                        }

                        function l(e) {
                            O(u, r, o, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function U(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        U(e, t, n[t])
                    }))
                }
                return e
            }

            function N(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function Z(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        u = Object.keys(e);
                    for (r = 0; r < u.length; r++) {
                        n = u[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var u = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < u.length; r++) {
                        n = u[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var R = function(e, t) {
                    var n, r, o, u, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return u = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                        return this
                    }), u;

                    function l(u) {
                        return function(l) {
                            return function(u) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                    (r = 0, o) && (u = [2 & u[0], o.value]);
                                    switch (u[0]) {
                                        case 0:
                                        case 1:
                                            o = u;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: u[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = u[1];
                                            u = [0];
                                            continue;
                                        case 7:
                                            u = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                                i.label = u[1];
                                                break
                                            }
                                            if (6 === u[0] && i.label < o[1]) {
                                                i.label = o[1];
                                                o = u;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2];
                                                i.ops.push(u);
                                                break
                                            }
                                            o[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    u = t.call(e, i)
                                } catch (e) {
                                    u = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & u[0]) throw u[1];
                                return {
                                    value: u[0] ? u[1] : void 0,
                                    done: !0
                                }
                            }([u, l])
                        }
                    }
                },
                w = function(e) {
                    G.Z.show({
                        title: g.Z.Messages.TOO_MANY_USER_GUILDS_ALERT_TITLE,
                        body: g.Z.Messages.TOO_MANY_USER_GUILDS_ALERT_DESCRIPTION.format({
                            quantity: e
                        })
                    })
                },
                C = function(e) {
                    i.Z.dispatch({
                        type: "GUILD_DELETE",
                        guild: {
                            id: e
                        }
                    })
                },
                M = function() {
                    G.Z.show({
                        title: g.Z.Messages.SERVER_IS_CURRENTLY_FULL,
                        body: g.Z.Messages.PLEASE_TRY_AGAIN_LATER
                    })
                };

            function F() {
                F = A((function(e) {
                    var t, r, o, l, c, a, s, p, _, h, m, D, T, G, g, O, A, U, P, N = arguments;
                    return R(this, (function(Z) {
                        switch (Z.label) {
                            case 0:
                                t = N.length > 1 && void 0 !== N[1] ? N[1] : {};
                                r = t.source, o = t.loadId, l = t.lurkLocation;
                                a = null !== (c = t.lurker) && void 0 !== c && c;
                                s = L.default.getCurrentUser();
                                if (null !== (p = null == s ? void 0 : s.hasFlag(S.xW$.QUARANTINED)) && void 0 !== p && p) {
                                    (0, d.default)();
                                    return [2, new Promise((function(e, t) {
                                        return t(new Error)
                                    }))]
                                }
                                i.Z.wait((function() {
                                    return i.Z.dispatch({
                                        type: "GUILD_JOIN",
                                        guildId: e,
                                        lurker: a,
                                        source: r,
                                        loadId: o
                                    })
                                }));
                                Z.label = 1;
                            case 1:
                                Z.trys.push([1, 6, , 7]);
                                _ = b.Z.getGuildId();
                                h = e === _ && null != y.Z.getGuild(e);
                                m = h ? I.Z.getChannelId(e) : null;
                                return [4, u.ZP.put({
                                    url: S.ANM.GUILD_JOIN(e),
                                    query: {
                                        lurker: a,
                                        session_id: a ? E.default.getSessionId() : null,
                                        recommendation_load_id: o,
                                        location: a && null != l ? l : null
                                    },
                                    context: {
                                        source: r
                                    },
                                    oldFormErrors: !0,
                                    body: {}
                                })];
                            case 2:
                                null != (D = Z.sent()).body.join_request && i.Z.dispatch({
                                    type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                                    guildId: e,
                                    request: D.body.join_request
                                });
                                if (null == y.Z.getGuild(e) && D.body.show_verification_form) {
                                    (0, f.uL)(S.Z5c.GUILD_MEMBER_VERIFICATION(e));
                                    return [2, D]
                                }
                                null != D.body.welcome_screen && i.Z.dispatch({
                                    type: "WELCOME_SCREEN_UPDATE",
                                    guildId: D.body.id,
                                    welcomeScreen: D.body.welcome_screen
                                });
                                null != D.body.approximate_presence_count && i.Z.dispatch({
                                    type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE",
                                    guildId: D.body.id,
                                    count: D.body.approximate_presence_count
                                });
                                return a ? [3, 5] : [4, Promise.all([n.e(40532), n.e(29392), n.e(39685), n.e(47007), n.e(79249), n.e(18087), n.e(79913), n.e(27764), n.e(64466), n.e(73679), n.e(92465), n.e(35855), n.e(10675), n.e(73177), n.e(19861)]).then(n.bind(n, 788533))];
                            case 3:
                                T = Z.sent();
                                return [4, (0, T.default)({
                                    guildId: e,
                                    returnChannelId: m
                                })];
                            case 4:
                                Z.sent();
                                Z.label = 5;
                            case 5:
                                return [2, D];
                            case 6:
                                G = Z.sent();
                                if ((null === (g = G.body) || void 0 === g ? void 0 : g.code) === S.evJ.TOO_MANY_USER_GUILDS) {
                                    U = L.default.getCurrentUser();
                                    P = v.ZP.canUseIncreasedGuildCap(U) || (null == U ? void 0 : U.isStaff());
                                    w(P ? S.tHP : S.DZw)
                                }(null === (O = G.body) || void 0 === O ? void 0 : O.code) === S.evJ.GUILD_AT_CAPACITY && M();
                                a && (null === (A = G.body) || void 0 === A ? void 0 : A.code) === S.evJ.UNKNOWN_GUILD && C(e);
                                throw G;
                            case 7:
                                return [2]
                        }
                    }))
                }));
                return F.apply(this, arguments)
            }

            function k(e) {
                return new Promise((function(t) {
                    return y.Z.addConditionalChangeListener((function() {
                        var n = y.Z.getGuild(e);
                        if (null == n) return !0;
                        t(n);
                        return !1
                    }))
                }))
            }
            const x = {
                joinGuild: function(e) {
                    return F.apply(this, arguments)
                },
                waitForGuild: k,
                transitionToGuildSync: function(e, t, n, r) {
                    return A((function() {
                        var o, u, i;
                        return R(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return [4, k(e)];
                                case 1:
                                    o = l.sent();
                                    u = function(e, t) {
                                        return null != t ? t : (0, s.cn)() ? void 0 : (0, p.V)(e)
                                    }(o.id, n);
                                    i = t;
                                    (null == t ? void 0 : t.hasOwnProperty("welcomeModalChannelId")) && null == t.welcomeModalChannelId && (i = N(P({}, t), {
                                        welcomeModalChannelId: u
                                    }));
                                    (0, f.uL)(S.Z5c.CHANNEL(e, u), i, void 0, r);
                                    return [4, new Promise(setImmediate)];
                                case 2:
                                    l.sent();
                                    return [2]
                            }
                        }))
                    }))()
                },
                deleteGuild: C,
                selectGuild: function(e) {
                    (0, a.a)(e)
                },
                addGuild: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        r = arguments.length > 3 ? arguments[3] : void 0;
                    return A((function() {
                        var o;
                        return R(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    i.trys.push([0, 2, , 3]);
                                    return [4, u.ZP.post({
                                        url: S.ANM.GUILDS,
                                        body: {
                                            name: e,
                                            icon: t,
                                            channels: n,
                                            system_channel_id: r
                                        },
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    return [2, i.sent().body];
                                case 2:
                                    o = i.sent();
                                    throw new l.Z(o);
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                },
                createGuild: function(e) {
                    i.Z.dispatch({
                        type: "GUILD_CREATE",
                        guild: e
                    })
                },
                setServerMute: function(e, t, n) {
                    return u.ZP.patch({
                        url: S.ANM.GUILD_MEMBER(e, t),
                        body: {
                            mute: n
                        },
                        oldFormErrors: !0
                    })
                },
                setServerDeaf: function(e, t, n) {
                    return u.ZP.patch({
                        url: S.ANM.GUILD_MEMBER(e, t),
                        body: {
                            deaf: n
                        },
                        oldFormErrors: !0
                    })
                },
                setChannel: function(e, t, n) {
                    u.ZP.patch({
                        url: S.ANM.GUILD_MEMBER(e, t),
                        body: {
                            channel_id: n
                        },
                        oldFormErrors: !0
                    })
                },
                setMemberFlags: function(e, t, n) {
                    u.ZP.patch({
                        url: S.ANM.GUILD_MEMBER(e, t),
                        body: {
                            flags: n
                        },
                        oldFormErrors: !0
                    })
                },
                kickUser: function(e, t, n) {
                    return u.ZP.delete({
                        url: S.ANM.GUILD_MEMBER(e, t),
                        reason: n,
                        oldFormErrors: !0
                    })
                },
                setCommunicationDisabledUntil: function(e) {
                    var t = e.guildId,
                        n = e.userId,
                        o = e.communicationDisabledUntilTimestamp,
                        u = e.duration,
                        i = e.reason,
                        l = e.location;
                    return T.Z.patch({
                        url: S.ANM.GUILD_MEMBER(t, n),
                        reason: i,
                        body: {
                            communication_disabled_until: o
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.USER_COMMUNICATION_DISABLED_UPDATE,
                            properties: {
                                guild_id: t,
                                target_user_id: n,
                                duration: null != u ? u : null,
                                reason: null != i ? i : null,
                                communication_disabled_until: o,
                                location: null != l ? l : null
                            }
                        }
                    })
                },
                banUser: function(e, t, n, r) {
                    return u.ZP.put({
                        url: S.ANM.GUILD_BAN(e, t),
                        reason: r,
                        body: {
                            delete_message_seconds: n
                        },
                        oldFormErrors: !0
                    })
                },
                unbanUser: function(e, t) {
                    return u.ZP.delete({
                        url: S.ANM.GUILD_BAN(e, t),
                        oldFormErrors: !0
                    })
                },
                banMultipleUsers: function(e, t, n, r) {
                    return u.ZP.post({
                        url: S.ANM.BULK_GUILD_BAN(e),
                        body: {
                            user_ids: t,
                            delete_message_seconds: n,
                            reason: r
                        },
                        oldFormErrors: !0
                    })
                },
                createRole: function(e, t, n) {
                    return A((function() {
                        var r, a, s, d;
                        return R(this, (function(f) {
                            switch (f.label) {
                                case 0:
                                    r = {
                                        name: null != t && "" !== t ? t : g.Z.Messages.NEW_ROLE,
                                        color: null != n ? n : 0,
                                        permissions: D.ZP.NONE
                                    };
                                    f.label = 1;
                                case 1:
                                    f.trys.push([1, 3, , 4]);
                                    return [4, u.ZP.post({
                                        url: S.ANM.GUILD_ROLES(e),
                                        oldFormErrors: !0,
                                        body: r
                                    })];
                                case 2:
                                    a = f.sent();
                                    (s = a.body).permissions = o.Z.deserialize(s.permissions);
                                    i.Z.dispatch({
                                        type: "GUILD_SETTINGS_ROLE_SELECT",
                                        roleId: a.body.id,
                                        role: s
                                    });
                                    c.Z.checkGuildTemplateDirty(e);
                                    return [2, s];
                                case 3:
                                    d = f.sent();
                                    throw new l.Z(d);
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                updateRole: function(e, t, n) {
                    return A((function() {
                        var r, o, i, l, a;
                        return R(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    r = n.icon, o = n.unicodeEmoji, i = Z(n, ["icon", "unicodeEmoji"]);
                                    l = null === r || (null == r ? void 0 : r.startsWith("data:")) ? r : void 0;
                                    return [4, u.ZP.patch({
                                        url: S.ANM.GUILD_ROLE(e, t),
                                        body: N(P({}, i), {
                                            icon: l,
                                            unicode_emoji: o
                                        }),
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    a = s.sent();
                                    c.Z.checkGuildTemplateDirty(e);
                                    return [2, a]
                            }
                        }))
                    }))()
                },
                updateRolePermissions: function(e, t, n) {
                    return u.ZP.patch({
                        url: S.ANM.GUILD_ROLE(e, t),
                        body: {
                            permissions: n
                        },
                        oldFormErrors: !0
                    })
                },
                deleteRole: function(e, t) {
                    u.ZP.delete({
                        url: S.ANM.GUILD_ROLE(e, t),
                        oldFormErrors: !0
                    }).then((function() {
                        c.Z.checkGuildTemplateDirty(e)
                    }))
                },
                batchChannelUpdate: function(e, t) {
                    return A((function() {
                        var n;
                        return R(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, u.ZP.patch({
                                        url: S.ANM.GUILD_CHANNELS(e),
                                        body: t,
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    n = r.sent();
                                    c.Z.checkGuildTemplateDirty(e);
                                    return [2, n]
                            }
                        }))
                    }))()
                },
                batchRoleUpdate: function(e, t) {
                    return A((function() {
                        var n;
                        return R(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, u.ZP.patch({
                                        url: S.ANM.GUILD_ROLES(e),
                                        body: t,
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    n = r.sent();
                                    c.Z.checkGuildTemplateDirty(e);
                                    return [2, n]
                            }
                        }))
                    }))()
                },
                requestMembers: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    return i.Z.dispatch({
                        type: "GUILD_MEMBERS_REQUEST",
                        guildIds: Array.isArray(e) ? e : [e],
                        query: t,
                        limit: n,
                        presences: r
                    })
                },
                searchRecentMembers: function(e, t) {
                    var n = null != t ? t : {},
                        r = n.query,
                        o = n.continuationToken;
                    return i.Z.dispatch({
                        type: "GUILD_SEARCH_RECENT_MEMBERS",
                        guildId: e,
                        query: r,
                        continuationToken: o
                    })
                },
                requestMembersById: function(e, t) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return i.Z.dispatch({
                        type: "GUILD_MEMBERS_REQUEST",
                        guildIds: Array.isArray(e) ? e : [e],
                        userIds: Array.isArray(t) ? t : [t],
                        presences: n
                    })
                },
                move: function(e, t, n, r) {
                    i.Z.dispatch({
                        type: "GUILD_MOVE",
                        fromIndex: e,
                        toIndex: t,
                        fromFolderIndex: n,
                        toFolderIndex: r
                    })
                },
                moveById: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    i.Z.dispatch({
                        type: "GUILD_MOVE_BY_ID",
                        sourceId: e,
                        targetId: t,
                        moveToBelow: n,
                        combine: r
                    })
                },
                createGuildFolderLocal: function(e, t) {
                    m.default.track(S.rMx.GUILD_FOLDER_CREATED);
                    i.Z.dispatch({
                        type: "GUILD_FOLDER_CREATE_LOCAL",
                        sourceIds: e,
                        name: t
                    })
                },
                editGuildFolderLocal: function(e, t, n) {
                    i.Z.dispatch({
                        type: "GUILD_FOLDER_EDIT_LOCAL",
                        targetId: e,
                        sourceIds: t,
                        name: n
                    })
                },
                deleteGuildFolderLocal: function(e) {
                    i.Z.dispatch({
                        type: "GUILD_FOLDER_DELETE_LOCAL",
                        targetId: e
                    })
                },
                toggleGuildFolderExpand: function(e) {
                    var t = _.Z.isFolderExpanded(e);
                    m.default.track(S.rMx.GUILD_FOLDER_CLICKED, {
                        source: "sidebar",
                        action: t ? "collapsed" : "expanded"
                    });
                    i.Z.dispatch({
                        type: "TOGGLE_GUILD_FOLDER_EXPAND",
                        folderId: e
                    })
                },
                setGuildFolderExpanded: function(e, t) {
                    i.Z.dispatch({
                        type: "SET_GUILD_FOLDER_EXPANDED",
                        folderId: e,
                        expanded: t
                    })
                },
                collapseAllFolders: function() {
                    i.Z.dispatch({
                        type: "GUILD_FOLDER_COLLAPSE"
                    })
                },
                nsfwAgree: function(e) {
                    i.Z.dispatch({
                        type: "GUILD_NSFW_AGREE",
                        guildId: e
                    })
                },
                nsfwReturnToSafety: function(e) {
                    if (null != e) {
                        var t = h.ZP.getDefaultChannel(e);
                        null == t || t.isNSFW() ? (0, f.uL)(S.Z5c.FRIENDS) : (0, f.uL)(S.Z5c.CHANNEL(e, t.id))
                    } else(0, f.uL)(S.Z5c.FRIENDS)
                },
                escapeToDefaultChannel: function(e) {
                    var t = h.ZP.getDefaultChannel(e);
                    null != t ? (0, f.uL)(S.Z5c.CHANNEL(e, t.id)) : (0, f.uL)(S.Z5c.FRIENDS)
                },
                fetchApplications: function(e, t) {
                    return A((function() {
                        var n, r, o;
                        return R(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    n = {
                                        url: S.ANM.GUILD_APPLICATIONS(e),
                                        oldFormErrors: !0
                                    };
                                    null != t && (n.query = {
                                        channel_id: t
                                    });
                                    return [4, u.ZP.get(n)];
                                case 1:
                                    r = l.sent();
                                    o = r.body;
                                    i.Z.dispatch({
                                        type: "GUILD_APPLICATIONS_FETCH_SUCCESS",
                                        guildId: e,
                                        applications: o
                                    });
                                    return [2]
                            }
                        }))
                    }))()
                },
                fetchGuildBansBatch: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return A((function() {
                        var r;
                        return R(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    r = {
                                        limit: t
                                    };
                                    null != n && (r.after = n);
                                    return [4, u.ZP.get({
                                        url: S.ANM.GUILD_BANS(e),
                                        oldFormErrors: !0,
                                        query: r
                                    }).then((function(t) {
                                        i.Z.dispatch({
                                            type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
                                            bans: t.body,
                                            guildId: e
                                        })
                                    }))];
                                case 1:
                                    o.sent();
                                    return [2]
                            }
                        }))
                    }))()
                },
                searchGuildBans: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
                    return A((function() {
                        var o;
                        return R(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    o = {
                                        limit: r
                                    };
                                    null != n && n.length > 0 && (o.user_ids = n);
                                    null != t && t.trim().length > 0 && (o.query = t);
                                    return [4, u.ZP.get({
                                        url: S.ANM.GUILD_BANS_SEARCH(e),
                                        oldFormErrors: !0,
                                        query: o
                                    }).then((function(t) {
                                        i.Z.dispatch({
                                            type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
                                            bans: t.body,
                                            guildId: e
                                        })
                                    }))];
                                case 1:
                                    l.sent();
                                    return [2]
                            }
                        }))
                    }))()
                },
                fetchGuildBans: function(e) {
                    return A((function() {
                        return R(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, u.ZP.get({
                                        url: S.ANM.GUILD_BANS(e),
                                        oldFormErrors: !0
                                    }).then((function(e) {
                                        i.Z.dispatch({
                                            type: "GUILD_SETTINGS_LOADED_BANS",
                                            bans: e.body
                                        })
                                    }))];
                                case 1:
                                    t.sent();
                                    return [2]
                            }
                        }))
                    }))()
                },
                fetchGuildRoleConnectionsEligibility: function(e, t) {
                    return u.ZP.get({
                        url: S.ANM.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
                        oldFormErrors: !0
                    }).then((function(e) {
                        var n = e.body;
                        i.Z.dispatch({
                            type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS",
                            roleId: t,
                            roleConnectionEligibility: n
                        });
                        return n
                    }))
                },
                assignGuildRoleConnection: function(e, t) {
                    return A((function() {
                        return R(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, u.ZP.post({
                                        url: S.ANM.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    n.sent();
                                    return [2]
                            }
                        }))
                    }))()
                },
                unassignGuildRoleConnection: function(e, t) {
                    return A((function() {
                        return R(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, u.ZP.post({
                                        url: S.ANM.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    n.sent();
                                    return [2]
                            }
                        }))
                    }))()
                },
                getGuildRoleConnectionsConfigurations: function(e) {
                    return A((function() {
                        return R(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, u.ZP.get({
                                        url: S.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    return [2, t.sent().body]
                            }
                        }))
                    }))()
                }
            }
        },
        873297: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(281110),
                o = n(744564),
                u = n(652591),
                i = n(652991),
                l = n(2590);
            const c = {
                resolveGuildTemplate: function e(t) {
                    if (o.Z.isDispatching()) return Promise.resolve().then((function() {
                        return e(t)
                    }));
                    o.Z.dispatch({
                        type: "GUILD_TEMPLATE_RESOLVE",
                        code: t
                    });
                    return r.ZP.get({
                        url: l.ANM.UNRESOLVED_GUILD_TEMPLATE(t),
                        oldFormErrors: !0
                    }).then((function(e) {
                        var n = e.body;
                        u.default.track(l.rMx.GUILD_TEMPLATE_RESOLVED, {
                            resolved: !0,
                            guild_template_code: t,
                            guild_template_name: n.name,
                            guild_template_description: n.description,
                            guild_template_guild_id: n.source_guild_id
                        });
                        o.Z.dispatch({
                            type: "GUILD_TEMPLATE_RESOLVE_SUCCESS",
                            guildTemplate: n,
                            code: t
                        });
                        return {
                            guildTemplate: (0, i.Z)(n),
                            code: t
                        }
                    }), (function() {
                        u.default.track(l.rMx.GUILD_TEMPLATE_RESOLVED, {
                            resolved: !1,
                            guild_template_code: t
                        });
                        o.Z.dispatch({
                            type: "GUILD_TEMPLATE_RESOLVE_FAILURE",
                            code: t
                        });
                        return {
                            guildTemplate: null,
                            code: t
                        }
                    }))
                },
                loadTemplatesForGuild: function(e) {
                    return r.ZP.get({
                        url: l.ANM.GUILD_TEMPLATES(e),
                        oldFormErrors: !0
                    }).then((function(e) {
                        o.Z.dispatch({
                            type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS",
                            guildTemplates: e.body
                        });
                        return e
                    }))
                },
                createGuildTemplate: function(e, t, n) {
                    return r.ZP.post({
                        url: l.ANM.GUILD_TEMPLATES(e),
                        body: {
                            name: t,
                            description: n
                        },
                        oldFormErrors: !0
                    }).then((function(e) {
                        o.Z.dispatch({
                            type: "GUILD_TEMPLATE_CREATE_SUCCESS",
                            guildTemplate: e.body,
                            code: e.body.code
                        })
                    }))
                },
                syncGuildTemplate: function(e, t) {
                    return r.ZP.put({
                        url: l.ANM.GUILD_TEMPLATE(e, t),
                        oldFormErrors: !0
                    }).then((function(e) {
                        o.Z.dispatch({
                            type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                            guildTemplate: e.body,
                            code: t
                        })
                    }))
                },
                updateGuildTemplate: function(e, t, n, u) {
                    return r.ZP.patch({
                        url: l.ANM.GUILD_TEMPLATE(e, t),
                        body: {
                            name: n,
                            description: u
                        },
                        oldFormErrors: !0
                    }).then((function(e) {
                        o.Z.dispatch({
                            type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                            guildTemplate: e.body,
                            code: t
                        })
                    }))
                },
                deleteGuildTemplate: function(e, t) {
                    return r.ZP.delete({
                        url: l.ANM.GUILD_TEMPLATE(e, t),
                        oldFormErrors: !0
                    }).then((function() {
                        o.Z.dispatch({
                            type: "GUILD_TEMPLATE_DELETE_SUCCESS",
                            guildId: e,
                            code: t
                        })
                    }))
                }
            }
        },
        10390: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(744564),
                o = n(682776),
                u = n(873297),
                i = n(2590);

            function l(e, t, n, r, o, u, i) {
                try {
                    var l = e[u](i),
                        c = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(r, o)
            }
            var c = function(e, t) {
                var n, r, o, u, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function l(u) {
                    return function(l) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                (r = 0, o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            i.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(u);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                u = t.call(e, i)
                            } catch (e) {
                                u = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, l])
                    }
                }
            };
            const a = {
                checkGuildTemplateDirty: function(e) {
                    return (t = function() {
                        var t;
                        return c(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return o.Z.canWithPartialContext(i.Plq.MANAGE_GUILD, {
                                        guildId: e
                                    }) ? [4, u.Z.loadTemplatesForGuild(e)] : [2];
                                case 1:
                                    (t = n.sent()).body.length > 0 && r.Z.dispatch({
                                        type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH",
                                        guildTemplate: t.body[0]
                                    });
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var u = t.apply(e, n);

                            function i(e) {
                                l(u, r, o, i, c, "next", e)
                            }

                            function c(e) {
                                l(u, r, o, i, c, "throw", e)
                            }
                            i(void 0)
                        }))
                    })();
                    var t
                },
                hideGuildTemplateDirtyTooltip: function(e) {
                    r.Z.dispatch({
                        type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE",
                        guildId: e
                    })
                },
                hideGuildTemplatePromotionTooltip: function() {
                    r.Z.dispatch({
                        type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE"
                    })
                }
            }
        },
        335150: (e, t, n) => {
            n.d(t, {
                Rj: () => r,
                HQ: () => o
            });
            var r, o;
            ! function(e) {
                e.RESOLVING = "RESOLVING";
                e.RESOLVED = "RESOLVED";
                e.EXPIRED = "EXPIRED";
                e.ACCEPTED = "ACCEPTED";
                e.ACCEPTING = "ACCEPTING"
            }(r || (r = {}));
            ! function(e) {
                e.CLASSROOM = "fVfBazbqjhXg";
                e.LOCAL_COMMUNITIES = "64UDvRNCC52Y";
                e.CREATORS_HOBBIES = "6exdzMgjZgah";
                e.GLOBAL_COMMUNITIES = "4sgbPdCjzAYU";
                e.FRIENDS_FAMILY = "hgM48av5Q69A";
                e.STUDY_GROUPS = "FbwUwRp4j8Es";
                e.CREATE_FROM_SCRATCH = "WYAQmEzjw3Pj";
                e.CAMPUS_CLUBS = "Ctg7PUHcQmZu";
                e.LEAGUE_CLUBS = "PJ6VvgEJYg45";
                e.GITHUB_HACKATHON = "UqzZCTj2zfwy"
            }(o || (o = {}))
        },
        652991: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(335150);

            function o(e) {
                var t;
                return {
                    code: e.code,
                    state: r.Rj.RESOLVED,
                    name: e.name,
                    description: null !== (t = e.description) && void 0 !== t ? t : "",
                    creatorId: e.creator_id,
                    creator: e.creator,
                    createdAt: e.created_at,
                    updatedAt: e.updated_at,
                    sourceGuildId: e.source_guild_id,
                    serializedSourceGuild: e.serialized_source_guild,
                    usageCount: e.usage_count,
                    isDirty: e.is_dirty
                }
            }
        },
        94969: (e, t, n) => {
            n.d(t, {
                O: () => f,
                a: () => E
            });
            var r = n(281110),
                o = n(744564),
                u = n(563367),
                i = n(72580),
                l = n(944522),
                c = n(2590);

            function a(e, t, n, r, o, u, i) {
                try {
                    var l = e[u](i),
                        c = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function i(e) {
                            a(u, r, o, i, l, "next", e)
                        }

                        function l(e) {
                            a(u, r, o, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var d = function(e, t) {
                var n, r, o, u, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function l(u) {
                    return function(l) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                (r = 0, o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            i.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(u);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                u = t.call(e, i)
                            } catch (e) {
                                u = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, l])
                    }
                }
            };

            function f(e) {
                return p.apply(this, arguments)
            }

            function p() {
                p = s((function(e) {
                    var t, n;
                    return d(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                t = l.Z.lurkingGuildIds();
                                if (0 === (n = t.filter((function(t) {
                                        return !e.includes(t)
                                    }))).length) return [2];
                                o.Z.dispatch({
                                    type: "GUILD_STOP_LURKING",
                                    ignoredGuildIds: e
                                });
                                return [4, Promise.all(n.map((i = s((function(e) {
                                    var t;
                                    return d(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                t = l.Z.getLurkingSource();
                                                n.label = 1;
                                            case 1:
                                                n.trys.push([1, 3, , 4]);
                                                return [4, r.ZP.delete({
                                                    url: c.ANM.GUILD_LEAVE(e),
                                                    body: {
                                                        lurking: !0
                                                    },
                                                    oldFormErrors: !0
                                                })];
                                            case 2:
                                                n.sent();
                                                return [3, 4];
                                            case 3:
                                                n.sent();
                                                o.Z.dispatch({
                                                    type: "GUILD_STOP_LURKING_FAILURE",
                                                    lurkingGuildId: e,
                                                    lurkingSource: t
                                                });
                                                return [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    }))
                                })), function(e) {
                                    return i.apply(this, arguments)
                                })))];
                            case 1:
                                u.sent();
                                return [2]
                        }
                        var i
                    }))
                }));
                return p.apply(this, arguments)
            }

            function E() {
                return _.apply(this, arguments)
            }

            function _() {
                _ = s((function() {
                    var e, t, n, r = arguments;
                    return d(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                e = r.length > 0 && void 0 !== r[0] ? r[0] : null;
                                if (0 === (t = l.Z.lurkingGuildIds()).length) return [2];
                                if (!(null == e || !t.includes(e))) return [2];
                                n = u.Z.getGuildId();
                                return [4, f([e, n].filter(i.lm))];
                            case 1:
                                o.sent();
                                return [2]
                        }
                    }))
                }));
                return _.apply(this, arguments)
            }
        },
        3930: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => a
            });
            var r = n(785893),
                o = (n(667294), n(264817));

            function u(e, t, n, r, o, u, i) {
                try {
                    var l = e[u](i),
                        c = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function i(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function l(e) {
                            u(i, r, o, l, c, "next", e)
                        }

                        function c(e) {
                            u(i, r, o, l, c, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var c = function(e, t) {
                var n, r, o, u, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function l(u) {
                    return function(l) {
                        return function(u) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                (r = 0,
                                    o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            i.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(u);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                u = t.call(e, i)
                            } catch (e) {
                                u = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, l])
                    }
                }
            };

            function a() {
                (0, o.ZD)(i((function() {
                    var e, t;
                    return c(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(75600)]).then(n.bind(n, 75600))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(t, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                l(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, e))
                                }]
                        }
                    }))
                })))
            }
        },
        780861: (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var r = n(202351),
                o = n(744564),
                u = n(473419);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function c(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function a(e, t) {
                a = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return a(e, t)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var f = new Set;
            var p = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && a(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    null != e && (f = new Set(e.expandedFolders));
                    this.waitFor(u.Z)
                };
                r.getState = function() {
                    return {
                        expandedFolders: Array.from(f)
                    }
                };
                r.getExpandedFolders = function() {
                    return f
                };
                r.isFolderExpanded = function(e) {
                    return f.has(e)
                };
                r.__getLocalVars = function() {
                    return {
                        expandedFolders: f
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            p.displayName = "ExpandedGuildFolderStore";
            p.persistKey = "ExpandedGuildFolderStore";
            const E = new p(o.Z, {
                TOGGLE_GUILD_FOLDER_EXPAND: function(e) {
                    var t = e.folderId;
                    (f = new Set(f)).has(t) ? f.delete(t) : f.add(t)
                },
                SET_GUILD_FOLDER_EXPANDED: function(e) {
                    var t = e.folderId,
                        n = e.expanded;
                    f = new Set(f);
                    n ? f.add(t) : f.has(t) && f.delete(t)
                },
                USER_SETTINGS_PROTO_UPDATE: function() {
                    var e = u.Z.getGuildFolders();
                    if (null == e) return !1;
                    var t = !1,
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, l = function() {
                                var n = i.value;
                                if (!e.some((function(e) {
                                        return e.folderId === n
                                    }))) {
                                    (f = new Set(f)).delete(n);
                                    t = !0
                                }
                            }, c = f[Symbol.iterator](); !(n = (i = c.next()).done); n = !0) l()
                    } catch (e) {
                        r = !0;
                        o = e
                    } finally {
                        try {
                            n || null == c.return || c.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return t
                },
                GUILD_FOLDER_COLLAPSE: function() {
                    if (0 === f.size) return !1;
                    f = new Set
                }
            })
        }
    }
]);