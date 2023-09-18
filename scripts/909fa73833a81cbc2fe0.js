"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [75700], {
        57141: (t, e, n) => {
            n.d(e, {
                Z: () => h
            });
            var i = n(281110),
                r = n(744564),
                a = n(396043),
                o = n(30027),
                c = n(61209),
                l = n(761953),
                u = n(716239),
                s = n(2590);

            function p(t, e, n, i, r, a, o) {
                try {
                    var c = t[a](o),
                        l = c.value
                } catch (t) {
                    n(t);
                    return
                }
                c.done ? e(l) : Promise.resolve(l).then(i, r)
            }
            var d = function(t, e) {
                var n, i, r, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function c(a) {
                    return function(c) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, a[1])).done) return r;
                                (i = 0, r) && (a = [2 & a[0], r.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        r = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        i = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = o.trys, r = r.length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < r[1]) {
                                            o.label = r[1];
                                            r = a;
                                            break
                                        }
                                        if (r && o.label < r[2]) {
                                            o.label = r[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        r[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = e.call(t, o)
                            } catch (t) {
                                a = [6, t];
                                i = 0
                            } finally {
                                n = r = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, c])
                    }
                }
            };
            const h = {
                updateActivity: function(t) {
                    var e = t.applicationId,
                        n = t.distributor,
                        a = t.shareActivity,
                        o = t.token,
                        c = void 0 === o ? null : o,
                        l = t.duration,
                        u = void 0 === l ? 0 : l,
                        p = t.closed,
                        d = void 0 !== p && p;
                    r.Z.wait((function() {
                        return r.Z.dispatch({
                            type: "ACTIVITY_UPDATE_START",
                            applicationId: e,
                            duration: u,
                            distributor: n
                        })
                    }));
                    i.ZP.post({
                        url: s.ANM.ACTIVITIES,
                        body: {
                            application_id: e,
                            token: c,
                            duration: u,
                            share_activity: a,
                            distributor: n,
                            closed: d
                        },
                        retries: 1,
                        oldFormErrors: !0
                    }).then((function(t) {
                        var i = t.body.token;
                        r.Z.dispatch({
                            type: "ACTIVITY_UPDATE_SUCCESS",
                            applicationId: e,
                            token: i,
                            duration: u,
                            distributor: n
                        })
                    })).catch((function() {
                        r.Z.dispatch({
                            type: "ACTIVITY_UPDATE_FAIL",
                            applicationId: e
                        })
                    }))
                },
                sendActivityInvite: function(t) {
                    var e = t.channelId,
                        n = t.type,
                        i = t.activity,
                        r = t.content,
                        l = t.location,
                        p = c.Z.getChannel(e);
                    if (null == p) return Promise.resolve(null);
                    var d = o.ZP.parse(p, null != r ? r : "");
                    return u.Z.sendMessage(p.id, d, !1, {
                        activityAction: {
                            type: n,
                            activity: i
                        }
                    }).then((function(t) {
                        a.ZP.trackWithMetadata(s.rMx.INVITE_SENT, {
                            location: l,
                            invite_type: i.type === s.IIU.LISTENING ? s.dAT.SPOTIFY : s.dAT.APPLICATION,
                            application_id: i.application_id,
                            guild_id: p.getGuildId(),
                            channel_id: p.id,
                            message_id: null != t ? t.body.id : null
                        });
                        return Promise.resolve(p)
                    }), (function(t) {
                        return Promise.reject(t)
                    }))
                },
                sendActivityInviteUser: function(t) {
                    var e = t.userId,
                        n = t.type,
                        i = t.activity,
                        r = t.content,
                        a = t.location,
                        o = this;
                    return l.Z.ensurePrivateChannel(e).then((function(t) {
                        return o.sendActivityInvite({
                            channelId: t,
                            type: n,
                            activity: i,
                            content: r,
                            location: a
                        })
                    }))
                },
                getJoinSecret: function(t, e, n, r, a) {
                    return (o = function() {
                        var o;
                        return d(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    o = {};
                                    null != r && (o.channel_id = r);
                                    null != a && (o.message_id = a);
                                    return [4, i.ZP.get({
                                        url: s.ANM.USER_ACTIVITY_JOIN(t, e, n),
                                        retries: 3,
                                        query: o
                                    })];
                                case 1:
                                    return [2, c.sent().body.secret]
                            }
                        }))
                    }, function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(n, i) {
                            var r = o.apply(t, e);

                            function a(t) {
                                p(r, n, i, a, c, "next", t)
                            }

                            function c(t) {
                                p(r, n, i, a, c, "throw", t)
                            }
                            a(void 0)
                        }))
                    })();
                    var o
                }
            }
        },
        875700: (t, e, n) => {
            n.d(e, {
                Z: () => D
            });
            var i = n(817673),
                r = n(281110),
                a = n(744564),
                o = n(873247),
                c = n(269116),
                l = n(384411),
                u = n(476020),
                s = n(959207),
                p = n(761814),
                d = n(713094),
                h = n(661123),
                f = n(964283),
                I = n(120415),
                A = n(57141),
                _ = n(324171),
                E = n(216421),
                y = n(2590),
                v = n(88067),
                T = n(473708);

            function b(t, e, n, i, r, a, o) {
                try {
                    var c = t[a](o),
                        l = c.value
                } catch (t) {
                    n(t);
                    return
                }
                c.done ? e(l) : Promise.resolve(l).then(i, r)
            }

            function C(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(i, r) {
                        var a = t.apply(e, n);

                        function o(t) {
                            b(a, i, r, o, c, "next", t)
                        }

                        function c(t) {
                            b(a, i, r, o, c, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var g = function(t, e) {
                var n, i, r, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function c(a) {
                    return function(c) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, a[1])).done) return r;
                                (i = 0, r) && (a = [2 & a[0], r.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        r = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        i = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = o.trys, r = r.length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < r[1]) {
                                            o.label = r[1];
                                            r = a;
                                            break
                                        }
                                        if (r && o.label < r[2]) {
                                            o.label = r[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        r[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = e.call(t, o)
                            } catch (t) {
                                a = [6, t];
                                i = 0
                            } finally {
                                n = r = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, c])
                    }
                }
            };

            function Z(t) {
                var e = t.applicationId,
                    n = t.secret,
                    i = t.channelId,
                    r = t.intent,
                    o = void 0 === r ? v.Ws.PLAY : r,
                    c = t.embedded,
                    l = void 0 !== c && c,
                    u = t.analyticsLocations;
                S(e, null, i, l, void 0 === u ? [] : u).then((function() {
                    return f.Z.waitConnected(e)
                })).then((function() {
                    return Promise.race([f.Z.waitSubscribed(e, y.zMe.ACTIVITY_JOIN)])
                })).then((function() {
                    a.Z.dispatch({
                        type: "ACTIVITY_JOIN",
                        applicationId: e,
                        secret: n,
                        intent: o,
                        embedded: l
                    })
                })).catch((function() {
                    return a.Z.dispatch({
                        type: "ACTIVITY_JOIN_FAILED",
                        applicationId: e
                    })
                }))
            }

            function m(t, e) {
                return null == t || "" === t ? null : {
                    distributor: t,
                    sku: e
                }
            }

            function P(t) {
                return r.ZP.post({
                    url: y.ANM.OAUTH2_AUTHORIZE,
                    query: {
                        client_id: t,
                        response_type: "token",
                        scope: [y.xVR.IDENTIFY].join(" ")
                    },
                    retries: 3,
                    body: {
                        authorize: !0
                    },
                    oldFormErrors: !0
                }).then((function(t) {
                    var e = t.body.location.split(/#|\?/),
                        n = i.parse(e[e.length - 1]);
                    if ("invalid_request" === n.error) return null;
                    if (null != n.error) {
                        var r;
                        throw new Error("OAuth2 Error: ".concat(n.error, ": ").concat(null !== (r = n.error_description) && void 0 !== r ? r : "unknown error"))
                    }
                    return n.access_token
                }), (function(t) {
                    if (404 === t.status) return null;
                    throw t
                }))
            }

            function S(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                if (i) {
                    if (null == n) return Promise.reject(new Error("Invalid channel ID"));
                    (0, o.J$)(n, {
                        application_id: t
                    }, r);
                    return Promise.resolve()
                }
                if (u.Z.isConnected(t)) return Promise.resolve();
                var c = null;
                if (null == e) {
                    var h = p.Z.getActiveLibraryApplication(t);
                    e = null != h ? h.branchId : t
                }
                if (d.Z.isLaunchable(t, e)) {
                    var I = d.Z.getState(t, e),
                        A = p.Z.getActiveLaunchOptionId(t, e);
                    if (null == I) throw new Error("Missing dispatch game when launching");
                    var _ = p.Z.getLibraryApplication(t, e);
                    if (null == _) throw new Error("Missing library application when launching");
                    c = P(t).then((function(t) {
                        return f.Z.launchDispatchApplication(I, t, l.default.locale, _.getBranchName(), A)
                    }))
                } else {
                    var v = s.Z.getGame(t);
                    c = null != v ? f.Z.launch(v) : f.Z.launchGame(t)
                }
                var b = new Error("game not found");
                if (null != c) {
                    a.Z.dispatch({
                        type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
                        applicationId: t,
                        branchId: e
                    });
                    a.Z.dispatch({
                        type: "GAME_LAUNCH_START",
                        applicationId: t
                    });
                    return c.then((function(e) {
                        a.Z.dispatch({
                            type: "GAME_LAUNCH_SUCCESS",
                            applicationId: t,
                            pids: e
                        })
                    })).catch((function(e) {
                        E.Z.show(y.kVF.LAUNCH_GAME_FAILURE, T.Z.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND);
                        a.Z.dispatch({
                            type: "GAME_LAUNCH_FAIL",
                            applicationId: t,
                            error: b
                        })
                    }))
                }
                a.Z.dispatch({
                    type: "GAME_LAUNCH_FAIL",
                    applicationId: t,
                    error: b
                });
                return Promise.reject(b)
            }
            const D = {
                addGame: function(t) {
                    a.Z.dispatch({
                        type: "RUNNING_GAME_ADD_OVERRIDE",
                        pid: t
                    })
                },
                fetchApplication: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    a.Z.dispatch({
                        type: "APPLICATION_FETCH",
                        applicationId: t
                    });
                    return r.ZP.get({
                        url: y.ANM.APPLICATION_PUBLIC(t),
                        query: {
                            with_guild: e
                        },
                        oldFormErrors: !0
                    }).then((function(t) {
                        a.Z.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: t.body
                        });
                        return t.body
                    })).catch((function(e) {
                        a.Z.dispatch({
                            type: "APPLICATION_FETCH_FAIL",
                            applicationId: t
                        });
                        return Promise.reject(e)
                    }))
                },
                fetchApplications: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return C((function() {
                        var n, o, c, l;
                        return g(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    n = t;
                                    if (!e) {
                                        o = function(t) {
                                            var e, n, i = s.Z.getGame(t),
                                                r = (0, h.yE)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, y.udG.EMBEDDED) && null == (null == i || null === (e = i.embeddedActivityConfig) || void 0 === e ? void 0 : e.supported_platforms);
                                            return !(null != i && !r) && !s.Z.isFetching(t) && !s.Z.didFetchingFail(t) && t.length > 0
                                        };
                                        n = t.filter(o)
                                    }
                                    if (!(n.length > 0)) return [3, 5];
                                    a.Z.dispatch({
                                        type: "APPLICATIONS_FETCH",
                                        applicationIds: n
                                    });
                                    u.label = 1;
                                case 1:
                                    u.trys.push([1, 3, , 4]);
                                    return [4, r.ZP.get({
                                        url: y.ANM.APPLICATIONS_PUBLIC,
                                        query: i.stringify({
                                            application_ids: n
                                        }),
                                        oldFormErrors: !0
                                    })];
                                case 2:
                                    c = u.sent();
                                    return [3, 4];
                                case 3:
                                    l = u.sent();
                                    a.Z.dispatch({
                                        type: "APPLICATIONS_FETCH_FAIL",
                                        applicationIds: n
                                    });
                                    throw l;
                                case 4:
                                    a.Z.dispatch({
                                        type: "APPLICATIONS_FETCH_SUCCESS",
                                        applications: c.body
                                    });
                                    u.label = 5;
                                case 5:
                                    return [2]
                            }
                        }))
                    }))()
                },
                toggleOverlay: function(t) {
                    var e = s.Z.getGameByName(t.name);
                    if (null != e) {
                        var n = p.Z.getActiveLibraryApplication(e.id);
                        if (null != n) {
                            var i = h.x9(n.getFlags(), y.eHb.OVERLAY_DISABLED);
                            _.h(n.id, n.branchId, i);
                            return
                        }
                    }
                    a.Z.dispatch({
                        type: "RUNNING_GAME_TOGGLE_OVERLAY",
                        game: t
                    })
                },
                toggleDetection: function(t) {
                    a.Z.dispatch({
                        type: "RUNNING_GAME_TOGGLE_DETECTION",
                        game: t
                    })
                },
                editName: function(t, e) {
                    a.Z.dispatch({
                        type: "RUNNING_GAME_EDIT_NAME",
                        game: t,
                        newName: e
                    })
                },
                identifyGame: function(t, e) {
                    return (0, c.Z)().then((function(e) {
                        return new Promise((function(n, i) {
                            null != e ? e.identifyGame(t, (function(e, r) {
                                if (0 === e)
                                    if (null != r.icon && "" !== r.icon && null != r.name && "" !== r.name) {
                                        a.Z.dispatch({
                                            type: "GAME_ICON_UPDATE",
                                            gameName: r.name,
                                            icon: "data:image/png;base64,".concat(r.icon)
                                        });
                                        n(r)
                                    } else i(new Error("Did not find data on ".concat(t)));
                                else i(new Error("Error ".concat(e, " when fetching info on ").concat(t)))
                            })) : i(new Error("Game utils module not loaded"))
                        }))
                    }))
                },
                getDetectableGames: function() {
                    s.Z.fetching || null != s.Z.lastFetched || a.Z.wait((function() {
                        a.Z.dispatch({
                            type: "GAMES_DATABASE_FETCH"
                        });
                        r.ZP.get({
                            url: y.ANM.APPLICATIONS_DETECTABLE,
                            headers: {
                                "If-None-Match": s.Z.etag
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then((function(t) {
                            var e = t.body,
                                n = t.headers.etag;
                            a.Z.dispatch({
                                type: "GAMES_DATABASE_UPDATE",
                                games: e,
                                etag: n
                            })
                        }), (function(t) {
                            304 === t.status ? a.Z.dispatch({
                                type: "GAMES_DATABASE_UPDATE",
                                games: [],
                                etag: s.Z.etag
                            }) : a.Z.dispatch({
                                type: "GAMES_DATABASE_FETCH_FAIL"
                            })
                        }))
                    }))
                },
                reportUnverifiedGame: function(t) {
                    var e = t.name,
                        n = t.iconHash,
                        i = t.publisher,
                        o = t.distributor,
                        l = t.sku,
                        u = t.executableName;
                    r.ZP.post({
                        url: y.ANM.UNVERIFIED_APPLICATIONS,
                        body: {
                            name: e,
                            os: (0, I.y8)(),
                            icon: n,
                            distributor_application: m(o, l),
                            executable: (0, c.I)(u, !1),
                            publisher: i,
                            report_version: 3
                        },
                        retries: 1,
                        oldFormErrors: !0
                    }).then((function(t) {
                        var e = t.body,
                            n = e.name,
                            i = e.hash,
                            r = e.missing_data;
                        a.Z.dispatch({
                            type: "UNVERIFIED_GAME_UPDATE",
                            name: n,
                            hash: i,
                            missingData: r
                        })
                    }))
                },
                uploadIcon: function(t, e, n) {
                    r.ZP.post({
                        url: y.ANM.UNVERIFIED_APPLICATIONS_ICONS,
                        body: {
                            application_name: t,
                            application_hash: e,
                            icon: n
                        },
                        retries: 1,
                        oldFormErrors: !0
                    })
                },
                deleteEntry: function(t) {
                    a.Z.dispatch({
                        type: "RUNNING_GAME_DELETE_ENTRY",
                        game: t
                    })
                },
                launch: S,
                join: function(t) {
                    var e = t.userId,
                        n = t.sessionId,
                        i = t.applicationId,
                        r = t.channelId,
                        o = t.messageId,
                        c = t.intent,
                        l = void 0 === c ? v.Ws.PLAY : c,
                        u = t.embedded,
                        s = void 0 !== u && u;
                    return C((function() {
                        var t;
                        return g(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    if (__OVERLAY__) {
                                        a.Z.dispatch({
                                            type: "OVERLAY_JOIN_GAME",
                                            userId: e,
                                            sessionId: n,
                                            applicationId: i,
                                            channelId: r,
                                            messageId: o
                                        });
                                        return [2, Promise.resolve(!0)]
                                    }
                                    a.Z.dispatch({
                                        type: "ACTIVITY_JOIN_LOADING",
                                        applicationId: i
                                    });
                                    c.label = 1;
                                case 1:
                                    c.trys.push([1, 3, , 4]);
                                    return [4, A.Z.getJoinSecret(e, n, i, r, o)];
                                case 2:
                                    t = c.sent();
                                    Z({
                                        applicationId: i,
                                        secret: t,
                                        channelId: r,
                                        intent: l,
                                        embedded: s
                                    });
                                    return [2, !0];
                                case 3:
                                    c.sent();
                                    a.Z.dispatch({
                                        type: "ACTIVITY_JOIN_FAILED",
                                        applicationId: i
                                    });
                                    return [2, !1];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                joinWithSecret: Z
            }
        },
        324171: (t, e, n) => {
            n.d(e, {
                h: () => o
            });
            var i = n(281110),
                r = n(744564),
                a = n(2590);

            function o(t, e, n) {
                r.Z.dispatch({
                    type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START",
                    applicationId: t,
                    branchId: e,
                    flags: n
                });
                return i.ZP.patch({
                    url: a.ANM.LIBRARY_APPLICATION_BRANCH(t, e),
                    body: {
                        flags: n
                    },
                    oldFormErrors: !0
                }).then((function(t) {
                    r.Z.dispatch({
                        type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS",
                        libraryApplication: t.body
                    })
                }))
            }
        },
        216421: (t, e, n) => {
            n.d(e, {
                Z: () => a
            });
            var i = n(744564);

            function r(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }
            const a = {
                show: function(t, e, n, r, a) {
                    i.Z.dispatch({
                        type: "NOTICE_SHOW",
                        notice: {
                            id: a,
                            type: t,
                            message: e,
                            buttonText: n,
                            callback: r
                        }
                    })
                },
                dismiss: function(t) {
                    i.Z.dispatch(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))));
                            i.forEach((function(e) {
                                r(t, e, n[e])
                            }))
                        }
                        return t
                    }({
                        type: "NOTICE_DISMISS"
                    }, t))
                }
            }
        },
        609145: (t, e, n) => {
            n.d(e, {
                tF: () => i,
                g$: () => r,
                f0: () => a
            });
            var i = (0, n(260561).B)({
                kind: "user",
                id: "2023-01_activities_in_gdm",
                label: "Activities in GDM",
                defaultConfig: {
                    isActivitiesInGdmEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable Activities in GDMs",
                    config: {
                        isActivitiesInGdmEnabled: !0
                    }
                }]
            });

            function r() {
                return i.useExperiment({
                    location: "c7edd6_1"
                }, {
                    autoTrackExposure: !1
                }).isActivitiesInGdmEnabled
            }

            function a() {
                return i.getCurrentConfig({
                    location: "c7edd6_2"
                }, {
                    autoTrackExposure: !1
                }).isActivitiesInGdmEnabled
            }
        },
        639566: (t, e, n) => {
            n.d(e, {
                v: () => r
            });
            n(202351);
            var i = n(260561),
                r = (n(61209), n(88067), n(2590), (0, i.B)({
                    kind: "user",
                    id: "2023-08_activities_in_text",
                    label: "Activities in Text",
                    defaultConfig: {
                        isActivitiesInTextEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enable Activities in text channels",
                        config: {
                            isActivitiesInTextEnabled: !0
                        }
                    }]
                }))
        },
        873247: (t, e, n) => {
            n.d(e, {
                rp: () => L,
                ux: () => B,
                $h: () => w,
                w1: () => U,
                oy: () => S,
                sN: () => V,
                pu: () => Y,
                J$: () => P,
                mW: () => N,
                kv: () => M,
                W5: () => x
            });
            var i = n(993231),
                r = n(281110),
                a = n(744564),
                o = n(761953),
                c = n(247250),
                l = n(667569),
                u = n(716239),
                s = n(539381),
                p = n(566706),
                d = n(451936),
                h = n(664625),
                f = n(61209),
                I = n(959207),
                A = n(473903),
                _ = n(72580),
                E = n(391438),
                y = n(609145),
                v = n(258104);
            var T = n(10510),
                b = n(2590),
                C = n(718634);

            function g(t, e, n, i, r, a, o) {
                try {
                    var c = t[a](o),
                        l = c.value
                } catch (t) {
                    n(t);
                    return
                }
                c.done ? e(l) : Promise.resolve(l).then(i, r)
            }

            function Z(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(i, r) {
                        var a = t.apply(e, n);

                        function o(t) {
                            g(a, i, r, o, c, "next", t)
                        }

                        function c(t) {
                            g(a, i, r, o, c, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var m = function(t, e) {
                var n, i, r, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function c(a) {
                    return function(c) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, a[1])).done) return r;
                                (i = 0, r) && (a = [2 & a[0], r.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        r = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        i = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = o.trys, r = r.length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < r[1]) {
                                            o.label = r[1];
                                            r = a;
                                            break
                                        }
                                        if (r && o.label < r[2]) {
                                            o.label = r[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        r[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = e.call(t, o)
                            } catch (t) {
                                a = [6, t];
                                i = 0
                            } finally {
                                n = r = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, c])
                    }
                }
            };

            function P(t, e, n) {
                var i = v.ZP.getSelfEmbeddedActivityForChannel(t);
                null != i && N({
                    channelId: t,
                    applicationId: i.application_id
                });
                a.Z.dispatch({
                    type: "EMBEDDED_ACTIVITY_OPEN",
                    channelId: t,
                    embeddedActivity: e,
                    analyticsLocations: n
                });
                var r = e.application_id;
                if ((0, T.Z)(t)) {
                    c.Z.selectParticipant(t, r);
                    c.Z.updateLayout(t, b.AEg.NO_CHAT)
                }
            }

            function S(t) {
                return D.apply(this, arguments)
            }

            function D() {
                return (D = Z((function(t) {
                    var e, n, r, o, c, l, u;
                    return m(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                e = f.Z.getChannel(t);
                                if (null == (r = null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : null) && (null === (o = null == e ? void 0 : e.isPrivate()) || void 0 === o || !o)) return [2];
                                if (null === (c = v.ZP.getSelfEmbeddedActivityForChannel(t))) return [2];
                                l = h.default.getSessionId();
                                p.label = 1;
                            case 1:
                                p.trys.push([1, 3, , 4]);
                                a.Z.dispatch({
                                    type: "EMBEDDED_ACTIVITY_LAUNCH_START"
                                });
                                return [4, E.Z.post({
                                    url: b.ANM.ACTIVITY_CHANNEL_LAUNCH(t, c.application_id),
                                    body: {
                                        session_id: l,
                                        guild_id: null != r ? r : void 0
                                    },
                                    trackedActionData: {
                                        event: i.a9.EMBEDDED_ACTIVITIES_LAUNCH,
                                        properties: {
                                            guild_id: r,
                                            channel_id: t,
                                            application_id: c.application_id,
                                            session_id: l
                                        }
                                    },
                                    retries: 3,
                                    oldFormErrors: !0
                                })];
                            case 2:
                                p.sent();
                                a.Z.dispatch({
                                    type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS"
                                });
                                return [3, 4];
                            case 3:
                                u = p.sent();
                                a.Z.dispatch({
                                    type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                                    guildId: r,
                                    applicationId: c.application_id,
                                    error: new s.Z(u)
                                });
                                N({
                                    channelId: t,
                                    applicationId: c.application_id,
                                    showFeedback: !1
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function N(t) {
                var e, n = t.channelId,
                    i = t.applicationId,
                    r = t.showFeedback,
                    o = void 0 === r || r;
                a.Z.dispatch({
                    type: "EMBEDDED_ACTIVITY_CLOSE",
                    channelId: n,
                    applicationId: i,
                    showFeedback: o
                });
                var l = p.Z.getSelectedParticipantId(n),
                    u = null === (e = A.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
                null != v.ZP.getEmbeddedActivitiesForChannel(n).find((function(t) {
                    return t.application_id === i
                })) && null != u && "" !== u && l === i && c.Z.selectParticipant(n, null)
            }

            function L(t, e) {
                a.Z.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISCONNECT",
                    channelId: t,
                    applicationId: e
                })
            }

            function w() {
                return F.apply(this, arguments)
            }

            function F() {
                return (F = Z((function() {
                    var t, e;
                    return m(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                n.trys.push([0, 2, , 3]);
                                a.Z.dispatch({
                                    type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
                                });
                                return [4, r.ZP.get({
                                    url: b.ANM.APPLICATIONS,
                                    query: {
                                        with_team_applications: !0
                                    },
                                    oldFormErrors: !0
                                })];
                            case 1:
                                t = n.sent();
                                e = t.body.map((function(t) {
                                    return d.Z.createFromServer(t)
                                }));
                                a.Z.dispatch({
                                    type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
                                    items: e
                                });
                                return [3, 3];
                            case 2:
                                n.sent();
                                a.Z.dispatch({
                                    type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL"
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function M(t, e) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = Z((function(t, e) {
                    var n, i;
                    return m(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                o.trys.push([0, 2, , 3]);
                                a.Z.dispatch({
                                    type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
                                });
                                return [4, r.ZP.post({
                                    url: b.ANM.ACTIVITY_UPLOAD_ATTACHMENT(t),
                                    attachments: [{
                                        name: "file",
                                        file: e
                                    }]
                                })];
                            case 1:
                                n = o.sent();
                                a.Z.dispatch({
                                    type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
                                    attachment: n.body.attachment
                                });
                                return [2, n.body.attachment];
                            case 2:
                                i = o.sent();
                                a.Z.dispatch({
                                    type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
                                });
                                return [2, new s.Z(i)];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var G = function(t, e, n) {
                var i = n.guildId;
                (i === t || null == i && null == t) && e()
            };

            function U(t) {
                return H.apply(this, arguments)
            }

            function H() {
                return (H = Z((function(t) {
                    var e, n, r, o, c, l, u, s, p, h, f, A, T, C, g, Z, P;
                    return m(this, (function(m) {
                        switch (m.label) {
                            case 0:
                                e = t.guildId, n = t.force, r = void 0 !== n && n;
                                o = v.ZP.getShelfActivities(e);
                                c = o.map((function(t) {
                                    return I.Z.getGame(t.application_id)
                                })).filter(_.lm);
                                if (r || v.ZP.shouldFetchShelf(e)) return [3, 3];
                                if (!(null === (l = v.ZP.getShelfFetchStatus(e)) || void 0 === l ? void 0 : l.isFetching)) return [3, 2];
                                s = new Promise((function(t) {
                                    u = G.bind(null, e, t);
                                    a.Z.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", u)
                                }));
                                h = new Promise((function(t) {
                                    p = G.bind(null, e, t);
                                    a.Z.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", p)
                                }));
                                return [4, Promise.race([s, h])];
                            case 1:
                                m.sent();
                                if (null != u) {
                                    a.Z.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", u);
                                    u = null
                                }
                                if (null != p) {
                                    a.Z.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", p);
                                    p = null
                                }
                                m.label = 2;
                            case 2:
                                return [2, {
                                    activityConfigs: o,
                                    applications: c
                                }];
                            case 3:
                                m.trys.push([3, 5, , 6]);
                                a.Z.dispatch({
                                    type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
                                    guildId: e
                                });
                                if (!(f = void 0 !== e && "" !== e) && !(0, y.f0)()) return [2, {
                                    activityConfigs: [],
                                    applications: []
                                }];
                                A = f ? {
                                    guild_id: e
                                } : void 0;
                                return [4, E.Z.get({
                                    url: b.ANM.ACTIVITY_SHELF,
                                    query: A,
                                    trackedActionData: {
                                        event: i.a9.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                                        properties: {
                                            guild_id: e
                                        }
                                    },
                                    retries: 3,
                                    oldFormErrors: !0
                                })];
                            case 4:
                                T = m.sent();
                                g = null !== (C = T.body.activities) && void 0 !== C ? C : [];
                                P = null !== (Z = T.body.applications) && void 0 !== Z ? Z : [];
                                a.Z.dispatch({
                                    type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                                    guildId: e,
                                    activities: g,
                                    applications: P
                                });
                                P.length > 0 && a.Z.dispatch({
                                    type: "APPLICATIONS_FETCH_SUCCESS",
                                    applications: P
                                });
                                return [2, {
                                    activityConfigs: g,
                                    applications: P.map((function(t) {
                                        return d.Z.createFromServer(t)
                                    }))
                                }];
                            case 5:
                                m.sent();
                                a.Z.dispatch({
                                    type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
                                    guildId: e
                                });
                                return [2, {
                                    activityConfigs: o,
                                    applications: c
                                }];
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function V(t) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = Z((function(t) {
                    var e, n, i, r, a;
                    return m(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                e = t.activityChannelId, n = t.invitedChannelId, i = t.applicationId, r = t.location;
                                return [4, l.Z.createInvite(e, {
                                    target_type: C.Iq.EMBEDDED_APPLICATION,
                                    target_application_id: i
                                }, r)];
                            case 1:
                                a = o.sent();
                                if (null == f.Z.getChannel(n)) return [2];
                                u.Z.sendInvite(n, a.code, r, null);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Y(t) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = Z((function(t) {
                    var e, n, i, r, a;
                    return m(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                e = t.channelId, n = t.applicationId, i = t.userId, r = t.location;
                                return [4, l.Z.createInvite(e, {
                                    target_type: C.Iq.EMBEDDED_APPLICATION,
                                    target_application_id: n
                                }, r)];
                            case 1:
                                a = c.sent();
                                o.Z.ensurePrivateChannel(i).then((function(t) {
                                    null != f.Z.getChannel(t) && u.Z.sendInvite(t, a.code, r, null)
                                }));
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function B() {
                a.Z.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR"
                })
            }

            function x(t) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = Z((function(t) {
                    var e;
                    return m(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                e = b.ANM.ACTIVITY_TEST_MODE(t);
                                n.label = 1;
                            case 1:
                                n.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: e,
                                    oldFormErrors: !0
                                })];
                            case 2:
                                n.sent();
                                return [2, !0];
                            case 3:
                                n.sent();
                                return [2, !1];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        10510: (t, e, n) => {
            n.d(e, {
                Z: () => o
            });
            var i = n(210595),
                r = n(61209),
                a = n(639566);

            function o(t) {
                var e = r.Z.getChannel(t),
                    n = a.v.getCurrentConfig({
                        location: "isVoiceActivityChannel"
                    }, {
                        autoTrackExposure: !1
                    }).isActivitiesInTextEnabled;
                return null != e && (e.type === i.d.GUILD_VOICE || e.isPrivate() && !n)
            }
        },
        269116: (t, e, n) => {
            n.d(e, {
                I: () => A,
                Z: () => _
            });
            var i = n(496486),
                r = n.n(i),
                a = n(306472),
                o = n(296602),
                c = n(120415),
                l = n(310126);

            function u(t, e, n, i, r, a, o) {
                try {
                    var c = t[a](o),
                        l = c.value
                } catch (t) {
                    n(t);
                    return
                }
                c.done ? e(l) : Promise.resolve(l).then(i, r)
            }

            function s(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(i, r) {
                        var a = t.apply(e, n);

                        function o(t) {
                            u(a, i, r, o, c, "next", t)
                        }

                        function c(t) {
                            u(a, i, r, o, c, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var p, d = function(t, e) {
                    var n, i, r, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, a[1])).done) return r;
                                    (i = 0, r) && (a = [2 & a[0], r.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            r = a;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            i = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = o.trys, r = r.length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < r[1]) {
                                                o.label = r[1];
                                                r = a;
                                                break
                                            }
                                            if (r && o.label < r[2]) {
                                                o.label = r[2];
                                                o.ops.push(a);
                                                break
                                            }
                                            r[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    a = e.call(t, o)
                                } catch (t) {
                                    a = [6, t];
                                    i = 0
                                } finally {
                                    n = r = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                h = [];

            function f(t) {
                t = t.toLowerCase();
                (0, c.ED)() && (t = (t = t.replace(/^[a-z]:/, "")).replace(/\\/g, "/"));
                return t
            }

            function I(t) {
                if (null != t && "" !== t) {
                    (t = f(t)).endsWith("/") || (t += "/");
                    h.push(t)
                }
            }

            function A(t, e) {
                t = f(t);
                var n = !1;
                h.forEach((function(e) {
                    if (!n && t.startsWith(e)) {
                        t = t.substr(e.length);
                        n = !0
                    }
                }));
                n || (t = t.split("/").pop());
                e || (t = t.includes("dosbox.exe") ? t.split("/").slice(-3).join("/") : t.split("/").slice(-2).join("/"));
                return t
            }

            function _() {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = s((function() {
                    var t, e, n;
                    return d(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (null != p) return [2, p];
                                i.label = 1;
                            case 1:
                                i.trys.push([1, 4, , 5]);
                                return [4, l.ZP.ensureModule("discord_game_utils")];
                            case 2:
                                i.sent();
                                return [4, l.ZP.requireModule("discord_game_utils")];
                            case 3:
                                p = i.sent();
                                return [3, 5];
                            case 4:
                                t = i.sent();
                                new o.Z("GamesActionCreators").error("could not load discord_game_utils", t);
                                return [3, 5];
                            case 5:
                                if ((0, c.ED)()) {
                                    I((e = a.Z.process.env).LOCALAPPDATA);
                                    I(e["PROGRAMFILES(X86)"]);
                                    I(e.PROGRAMFILES);
                                    I(e.PROGRAMW6432);
                                    I(e.PROGRAMDATA);
                                    I("/games/")
                                }
                                return [4, (n = a.Z.remoteApp.getPath)("home")];
                            case 6:
                                I.apply(void 0, [i.sent()]);
                                return [4, n("appData")];
                            case 7:
                                I.apply(void 0, [i.sent()]);
                                return [4, n("desktop")];
                            case 8:
                                I.apply(void 0, [i.sent()]);
                                return [4, n("documents")];
                            case 9:
                                I.apply(void 0, [i.sent()]);
                                return [4, n("downloads")];
                            case 10:
                                I.apply(void 0, [i.sent()]);
                                (h = r().uniq(h)).sort((function(t, e) {
                                    return e.length - t.length
                                }));
                                return [2, p]
                        }
                    }))
                }))).apply(this, arguments)
            }
        }
    }
]);