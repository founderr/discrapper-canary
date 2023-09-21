"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [64466], {
        579344: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(993231),
                o = n(72190),
                i = n(281110),
                a = n(744564),
                u = n(53645),
                l = n(296602),
                c = n(652591),
                s = n(391438),
                f = n(2590);

            function p(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            p(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            p(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        E(e, t, n[t])
                    }))
                }
                return e
            }

            function O(e, t) {
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
            var _ = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                h = new l.Z("ConnectedAccounts");

            function b(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return i.ZP.post({
                    url: f.ANM.CONNECTIONS_CALLBACK(e),
                    body: O(y({}, t), {
                        insecure: n,
                        friend_sync: f.BFP.has(e)
                    }),
                    oldFormErrors: !0
                })
            }
            const m = {
                fetch: function() {
                    return i.ZP.get({
                        url: f.ANM.CONNECTIONS,
                        oldFormErrors: !0
                    }).then((function(e) {
                        return a.Z.dispatch({
                            type: "USER_CONNECTIONS_UPDATE",
                            local: !0,
                            accounts: e.body
                        })
                    }), (function() {
                        return a.Z.dispatch({
                            type: "USER_CONNECTIONS_UPDATE",
                            local: !0,
                            accounts: []
                        })
                    }))
                },
                authorize: function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = n.location,
                        a = n.twoWayLinkType,
                        u = n.userCode;
                    c.default.track(f.rMx.CONNECTED_ACCOUNT_INITIATED, {
                        platform_type: e,
                        location: r
                    });
                    t = a === o.g.DEVICE_CODE && null != u ? f.ANM.CONNECTIONS_AUTHORIZE_LINK_DEVICE(e, u) : null != a ? f.ANM.CONNECTIONS_AUTHORIZE_LINK(e, a) : f.ANM.CONNECTIONS_AUTHORIZE(e);
                    return i.ZP.get({
                        url: t,
                        oldFormErrors: !0
                    })
                },
                callback: b,
                connect: function(e, t, n, o, i) {
                    var a;
                    return s.Z.put({
                        url: f.ANM.CONNECTION(e, t),
                        body: {
                            name: n,
                            friend_sync: null !== (a = null == i ? void 0 : i.friend_sync) && void 0 !== a ? a : f.BFP.has(e)
                        },
                        context: {
                            location: o
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.USER_CONNECTIONS_UPDATE,
                            properties: {
                                name: n,
                                friend_sync: f.BFP.has(e)
                            }
                        }
                    })
                },
                disconnect: function(e, t) {
                    return i.ZP.delete({
                        url: f.ANM.CONNECTION(e, t),
                        oldFormErrors: !0
                    })
                },
                refresh: function(e, t) {
                    return i.ZP.post({
                        url: f.ANM.CONNECTION_REFRESH(e, t),
                        oldFormErrors: !0
                    })
                },
                submitPinCode: function(e, t) {
                    return i.ZP.get({
                        url: f.ANM.CONNECTIONS_CALLBACK_CONTINUATION(t, e),
                        oldFormErrors: !0
                    }).then((function(e) {
                        var n = e.body;
                        c.default.track(f.rMx.ACCOUNT_LINK_STEP, {
                            previous_step: "PIN code entry",
                            current_step: "PIN success",
                            session_id: n.state,
                            platform_type: t
                        });
                        return b(t, O(y({}, n), {
                            from_continuation: !0
                        }), !0)
                    }))
                },
                setVisibility: function(e, t, n) {
                    return this.update(e, t, {
                        visibility: 1 === n
                    })
                },
                setMetadataVisibility: function(e, t, n) {
                    return this.update(e, t, {
                        metadata_visibility: 1 === n
                    })
                },
                setFriendSync: function(e, t, n) {
                    return this.update(e, t, {
                        friend_sync: n
                    })
                },
                setShowActivity: function(e, t, n) {
                    return this.update(e, t, {
                        show_activity: n
                    })
                },
                update: function(e, t, n) {
                    return s.Z.patch({
                        url: f.ANM.CONNECTION(e, t),
                        body: n,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.USER_CONNECTIONS_UPDATE,
                            properties: y({}, n)
                        }
                    })
                },
                joinServer: function(e, t) {
                    a.Z.dispatch({
                        type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                        integrationId: e,
                        joining: !0
                    });
                    i.ZP.post({
                        url: f.ANM.INTEGRATION_JOIN(e),
                        oldFormErrors: !0
                    }, (function(n) {
                        a.Z.dispatch({
                            type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                            integrationId: e,
                            joining: !1
                        });
                        n.ok || null == t || t()
                    }))
                },
                refreshAccessToken: function(e, t) {
                    return d((function() {
                        var n, r, o, u;
                        return _(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    l.trys.push([0, 2, , 3]);
                                    return [4, i.ZP.get({
                                        url: f.ANM.CONNECTION_ACCESS_TOKEN(e, t),
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    n = l.sent(), r = n.body, o = r.access_token;
                                    a.Z.dispatch({
                                        type: "USER_CONNECTION_UPDATE",
                                        platformType: e,
                                        id: t,
                                        accessToken: o
                                    });
                                    return [2, o];
                                case 2:
                                    (u = l.sent()).body.code === f.evJ.CONNECTION_REVOKED && a.Z.dispatch({
                                        type: "USER_CONNECTION_UPDATE",
                                        platformType: e,
                                        id: t,
                                        revoked: !0
                                    });
                                    throw u;
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                },
                linkDispatchAuthCallback: function(e, t) {
                    return i.ZP.post({
                        url: f.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
                        body: y({}, t),
                        oldFormErrors: !0
                    })
                },
                completeTwoWayLink: function(e, t, n, r, o) {
                    return d((function() {
                        var i, a, l, c;
                        return _(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (null == t) {
                                        h.error("Two-way link: missing authorize location");
                                        return [2]
                                    }
                                    i = (0, u.xp)(t), a = i.code,
                                        l = i.error, c = i.errorDescription;
                                    if (null != l) {
                                        h.error("Two-way link: missing authorize code", {
                                            error: l,
                                            errorDescription: c
                                        });
                                        return [2]
                                    }
                                    return [4, b(e, {
                                        code: n,
                                        state: r,
                                        two_way_link_code: a,
                                        token_redirect_uri: o
                                    })];
                                case 1:
                                    return [2, s.sent()]
                            }
                        }))
                    }))()
                }
            }
        },
        20146: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(202351),
                o = n(630631),
                i = n(744564),
                a = n(457696),
                u = n(652591),
                l = n(2590);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function f(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var y = "BlockedDomainStore",
                O = "BlockedDomainRevision";
            var _, h = null,
                b = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && p(e, t)
                    }(r, e);
                    var t = E(r);

                    function r() {
                        c(this, r);
                        return t.apply(this, arguments)
                    }
                    var i = r.prototype;
                    i.initialize = function() {
                        _ = null
                    };
                    i.getCurrentRevision = function() {
                        if (null == _) {
                            var e;
                            _ = null !== (e = o.Z.get(O)) && void 0 !== e ? e : null
                        }
                        return _
                    };
                    i.getBlockedDomainList = function() {
                        if (null == h) {
                            var e, t;
                            h = new Set(null !== (t = null === (e = o.Z.get(y)) || void 0 === e ? void 0 : e._state) && void 0 !== t ? t : [])
                        }
                        return h
                    };
                    i.isBlockedDomain = function(e) {
                        var t = n(181757);
                        this.getBlockedDomainList();
                        var r = (0, a.F)(e),
                            o = new t.hash.sha256,
                            i = t.codec.hex.fromBits(o.update(r).finalize()),
                            c = "";
                        h.has(i) && (c = r);
                        for (var s = r.indexOf("."); - 1 !== s && "" === c;) {
                            r = r.substring(s + 1);
                            o.reset();
                            i = t.codec.hex.fromBits(o.update(r).finalize());
                            h.has(i) && (c = r);
                            s = r.indexOf(".")
                        }
                        if ("" !== c) {
                            u.default.track(l.rMx.LINK_SECURITY_CHECK_BLOCKED, {
                                blocked_domain: c
                            });
                            return c
                        }
                        return null
                    };
                    i.__getLocalVars = function() {
                        return {
                            BLOCKED_DOMAIN_LIST_KEY: y,
                            BLOCKED_DOMAIN_REV_KEY: O,
                            blockedDomainHashes: h,
                            currentRevision: _
                        }
                    };
                    return r
                }(r.ZP.Store);
            b.displayName = "BlockedDomainStore";
            b.persistKey = "BlockedDomainStore";
            const m = new b(i.Z, {
                BLOCKED_DOMAIN_LIST_FETCHED: function(e) {
                    var t = e.list,
                        n = e.revision;
                    h = null;
                    _ = null;
                    o.Z.set("BlockedDomainStore", {
                        _state: t
                    });
                    o.Z.set("BlockedDomainRevision", n)
                }
            })
        },
        318277: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(940060),
                o = n(567403),
                i = n(2590),
                a = [i.d4z.GUILD_TEXT, i.d4z.GUILD_VOICE, i.d4z.GUILD_ANNOUNCEMENT, i.d4z.GUILD_FORUM, i.d4z.PUBLIC_THREAD, i.d4z.PRIVATE_THREAD],
                u = r.Z.combine(i.Plq.VIEW_CHANNEL, i.Plq.SEND_MESSAGES);

            function l(e) {
                if (null == e || !a.includes(e.type)) return [];
                var t = o.Z.getGuild(e.guild_id);
                return null == t ? [] : Object.values(e.permissionOverwrites).filter((function(e) {
                    var n, o;
                    return 0 === e.type && null === (null === (n = t.roles[e.id]) || void 0 === n || null === (o = n.tags) || void 0 === o ? void 0 : o.guild_connections) && !r.Z.hasAny(e.deny, u)
                })).map((function(e) {
                    return t.roles[e.id]
                })).filter((function(e) {
                    return null != e
                }))
            }
        },
        53645: (e, t, n) => {
            n.d(t, {
                SJ: () => y,
                O1: () => r,
                xp: () => O,
                n_: () => _,
                kQ: () => h,
                Ur: () => b,
                FI: () => m
            });
            var r, o = n(441143),
                i = n.n(o),
                a = n(496486),
                u = n.n(a),
                l = n(608575),
                c = n(131868),
                s = (n(418705), n(318277)),
                f = (n(896490), n(567403)),
                p = (n(682776),
                    n(678005)),
                d = n(2590),
                E = n(473708),
                y = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];
            ! function(e) {
                e[e.AND = 0] = "AND";
                e[e.OR = 1] = "OR"
            }(r || (r = {}));

            function O(e) {
                var t = l.parse(e, !0).query,
                    n = t.code,
                    r = t.state,
                    o = t.error,
                    a = t.error_description;
                i()(!Array.isArray(n), "Received multiple query param values for code");
                i()(!Array.isArray(r), "Received multiple query param values for state");
                i()(!Array.isArray(o), "Received multiple query param values for error");
                i()(!Array.isArray(a), "Received multiple query param values for error_description");
                return {
                    code: n,
                    state: r,
                    error: o,
                    errorDescription: a
                }
            }

            function _(e) {
                var t = e.connectionType,
                    n = e.connectionMetadataField,
                    r = e.operator,
                    o = e.operatorText,
                    i = e.value,
                    a = null,
                    u = Math.round(Number(i));
                switch (r) {
                    case p.iO.EQUAL:
                        a = E.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_BE;
                        t === d.ABu.PAYPAL && n === p.PC.PAYPAL_VERIFIED && (a = E.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_A);
                        break;
                    case p.iO.NOT_EQUAL:
                        a = E.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_NOT_BE;
                        break;
                    case p.iO.LESS_THAN:
                        a = E.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_MOST;
                        u = Math.max(0, u - 1);
                        break;
                    case p.iO.GREATER_THAN:
                        a = E.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_LEAST;
                        u = Math.max(0, u + 1);
                        break;
                    case void 0:
                    case null:
                        return null
                }
                null != o && (a = o);
                if (a instanceof c._H && null != r) switch (t) {
                    case d.ABu.REDDIT:
                        switch (n) {
                            case p.PC.CREATED_AT:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                            days: u
                                        })
                                    }
                                });
                                break;
                            case p.PC.REDDIT_TOTAL_KARMA:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_KARMA.format({
                                            karma: u
                                        })
                                    }
                                });
                                break;
                            case p.PC.REDDIT_GOLD:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_GOLD
                                    }
                                });
                                break;
                            case p.PC.REDDIT_MOD:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_MODERATOR
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case d.ABu.STEAM:
                        switch (n) {
                            case p.PC.CREATED_AT:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                            days: u
                                        })
                                    }
                                });
                                break;
                            case p.PC.STEAM_GAME_COUNT:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_GAMES.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            case p.PC.STEAM_ITEM_COUNT_TF2:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_TF2_ITEMS.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            case p.PC.STEAM_ITEM_COUNT_DOTA2:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_DOTA2_ITEMS.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case d.ABu.TWITTER:
                        switch (n) {
                            case p.PC.CREATED_AT:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                            days: u
                                        })
                                    }
                                });
                                break;
                            case p.PC.TWITTER_VERIFIED:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_VERIFIED
                                    }
                                });
                                break;
                            case p.PC.TWITTER_FOLLOWERS_COUNT:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_FOLLOWERS.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            case p.PC.TWITTER_STATUSES_COUNT:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_STATUSES.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case d.ABu.PAYPAL:
                        switch (n) {
                            case p.PC.CREATED_AT:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                            days: u
                                        })
                                    }
                                });
                                break;
                            case p.PC.PAYPAL_VERIFIED:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_PAYPAL_VERIFIED
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case d.ABu.EBAY:
                        switch (n) {
                            case p.PC.CREATED_AT:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                            days: u
                                        })
                                    }
                                });
                                break;
                            case p.PC.EBAY_TOP_RATED_SELLER:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                                    }
                                });
                                break;
                            case p.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE.format({
                                            value: u
                                        })
                                    }
                                });
                                break;
                            case p.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            case p.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case d.ABu.TIKTOK:
                        switch (n) {
                            case p.PC.TIKTOK_VERIFIED:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_VERIFIED
                                    }
                                });
                                break;
                            case p.PC.TIKTOK_FOLLOWER_COUNT:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWER_COUNT.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            case p.PC.TIKTOK_FOLLOWING_COUNT:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWING_COUNT.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            case p.PC.TIKTOK_LIKES_COUNT:
                                a = a.format({
                                    platformQuantityHook: function() {
                                        return E.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_LIKES_COUNT.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    default:
                        return null
                }
                return a
            }

            function h(e) {
                return Object.values(e.roles).some((function(e) {
                    var t;
                    return null === (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections)
                }))
            }

            function b(e) {
                var t = e.guildMember,
                    n = e.guild,
                    r = e.channel,
                    o = e.onlyChannelConnectionRoles,
                    a = void 0 !== o && o;
                if (null == t) return null;
                null == n && null != r && (n = f.Z.getGuild(r.getGuildId()));
                if (null == n) return null;
                var l, c = t.roles.map((function(e) {
                        var t;
                        return null == n || null === (t = n.roles) || void 0 === t ? void 0 : t[e]
                    })).filter((function(e) {
                        var t;
                        return null === (null == e || null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections)
                    })).sort((function(e, t) {
                        i()(null != e && null != t, "roleA or roleB is null");
                        return t.position - e.position
                    })),
                    p = u().intersection(c, (0, s.Z)(r));
                if (p.length > 0) {
                    var d;
                    return null !== (d = p[0]) && void 0 !== d ? d : null
                }
                return a ? null : null !== (l = c[0]) && void 0 !== l ? l : null
            }

            function m(e, t) {
                if (null == e || "" === e) return null;
                var n = new Date(e);
                return n instanceof Date && !isNaN(n.getTime()) ? n.toLocaleDateString(t, {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                }) : null
            }
        },
        678005: (e, t, n) => {
            n.d(t, {
                iO: () => r,
                PC: () => o,
                Kt: () => a,
                xn: () => i
            });
            var r, o;
            ! function(e) {
                e[e.EQUAL = 1] = "EQUAL";
                e[e.NOT_EQUAL = 2] = "NOT_EQUAL";
                e[e.LESS_THAN = 3] = "LESS_THAN";
                e[e.GREATER_THAN = 4] = "GREATER_THAN"
            }(r || (r = {}));
            ! function(e) {
                e.CREATED_AT = "created_at";
                e.REDDIT_TOTAL_KARMA = "total_karma";
                e.REDDIT_GOLD = "gold";
                e.REDDIT_MOD = "mod";
                e.STEAM_GAME_COUNT = "game_count";
                e.STEAM_ITEM_COUNT_TF2 = "item_count_tf2";
                e.STEAM_ITEM_COUNT_DOTA2 = "item_count_dota2";
                e.TWITTER_VERIFIED = "verified";
                e.TWITTER_FOLLOWERS_COUNT = "followers_count";
                e.TWITTER_STATUSES_COUNT = "statuses_count";
                e.PAYPAL_VERIFIED = "verified";
                e.EBAY_POSITIVE_FEEDBACK_PERCENTAGE = "positive_feedback_percentage";
                e.EBAY_TOP_RATED_SELLER = "top_rated_seller";
                e.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT = "unique_negative_feedback_count";
                e.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT = "unique_positive_feedback_count";
                e.TIKTOK_VERIFIED = "verified";
                e.TIKTOK_FOLLOWER_COUNT = "follower_count";
                e.TIKTOK_FOLLOWING_COUNT = "following_count";
                e.TIKTOK_LIKES_COUNT = "likes_count"
            }(o || (o = {}));
            var i, a = "application";
            ! function(e) {
                e[e.INTEGER_LESS_THAN_EQUAL = 1] = "INTEGER_LESS_THAN_EQUAL";
                e[e.INTEGER_GREATER_THAN_EQUAL = 2] = "INTEGER_GREATER_THAN_EQUAL";
                e[e.INTEGER_EQUAL = 3] = "INTEGER_EQUAL";
                e[e.INTEGER_NOT_EQUAL = 4] = "INTEGER_NOT_EQUAL";
                e[e.DATETIME_LESS_THAN_EQUAL = 5] = "DATETIME_LESS_THAN_EQUAL";
                e[e.DATETIME_GREATER_THAN_EQUAL = 6] = "DATETIME_GREATER_THAN_EQUAL";
                e[e.BOOLEAN_EQUAL = 7] = "BOOLEAN_EQUAL";
                e[e.BOOLEAN_NOT_EQUAL = 8] = "BOOLEAN_NOT_EQUAL"
            }(i || (i = {}))
        },
        497842: (e, t, n) => {
            n.d(t, {
                Z: () => P,
                H: () => S
            });
            var r = n(785893),
                o = (n(667294), n(882723)),
                i = n(579344);

            function a(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            a(i, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            a(i, r, o, u, l, "throw", e)
                        }
                        u(void 0)
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
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function s(e) {
                (0, o.openModalLazy)(u((function() {
                    var t, o;
                    return c(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(84441), n.e(14606), n.e(42643), n.e(39527), n.e(70462)]).then(n.bind(n, 170462))];
                            case 1:
                                t = i.sent(), o = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(o, function(e) {
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
                                    }({
                                        analyticsLocation: e
                                    }, t))
                                }]
                        }
                    }))
                })))
            }

            function f(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            f(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            f(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var E = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0,
                                    o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function y(e, t) {
                (0, o.openModalLazy)(p((function() {
                    var o, i;
                    return E(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(84441), n.e(14606), n.e(42643), n.e(39527), n.e(75309)]).then(n.bind(n, 775309))];
                            case 1:
                                o = a.sent(), i = o.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(i, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                d(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({
                                        analyticsLocation: e,
                                        platformType: t
                                    }, n))
                                }]
                        }
                    }))
                })))
            }

            function O(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function _(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            O(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            O(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var b = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function m(e) {
                (0, o.openModalLazy)(_((function() {
                    var t, o;
                    return b(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(1653), n.e(84441), n.e(14606), n.e(42643), n.e(39527), n.e(70245)]).then(n.bind(n, 670245))];
                            case 1:
                                t = i.sent(), o = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(o, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                h(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({
                                        analyticsLocation: e
                                    }, t))
                                }]
                        }
                    }))
                })))
            }
            var v = n(955121),
                T = n(120415),
                N = n(678005),
                I = n(2590);

            function A(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function g(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            A(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            A(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function C(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var w = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function S(e) {
                return L.apply(this, arguments)
            }

            function L() {
                L = g((function(e) {
                    var t, n, r, o, a, u, l, c, s, f, p, d = arguments;
                    return w(this, (function(E) {
                        switch (E.label) {
                            case 0:
                                t = d.length > 1 && void 0 !== d[1] ? d[1] : {}, n = t.location, r = t.twoWayLinkType, o = d.length > 2 ? d[2] : void 0;
                                a = 700;
                                u = 640;
                                l = Math.round(screen.width / 2 - a / 2);
                                c = screen.height > u ? Math.round(screen.height / 2 - u / 2) : 0;
                                s = null;
                                (0, T.nI)() || (s = window.open("".concat(window.location.protocol, "//").concat(window.location.host).concat(I.Z5c.CONNECTIONS(e), "?loading=true"), "authorize", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=".concat(c, ",left=").concat(l, ",width=").concat(a, ",height=").concat(u)));
                                return null != (f = o) || e === N.Kt ? [3, 2] : [4, i.Z.authorize(e, {
                                    location: n,
                                    twoWayLinkType: r
                                })];
                            case 1:
                                p = E.sent().body;
                                f = p.url;
                                E.label = 2;
                            case 2:
                                if (null == f) return [2];
                                null != s ? s.location.href = f : window.open(f);
                                return [2, f]
                        }
                    }))
                }));
                return L.apply(this, arguments)
            }

            function P(e, t, i) {
                e === I.ABu.LEAGUE_OF_LEGENDS && (e = I.ABu.RIOT_GAMES);
                e !== I.ABu.CRUNCHYROLL ? e !== I.ABu.XBOX ? e !== I.ABu.PLAYSTATION && e !== I.ABu.PLAYSTATION_STAGING ? e !== I.ABu.DOMAIN ? null == i ? S(e, {
                    location: t
                }) : (0, v.q)({
                    shouldConfirm: !0,
                    href: i,
                    onConfirm: function() {
                        S(e, {
                            location: t
                        }, i)
                    }
                }) : (0, o.openModalLazy)(g((function() {
                    var e, o;
                    return w(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(39814)]).then(n.bind(n, 839814))];
                            case 1:
                                e = i.sent(), o = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(o, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                C(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({
                                        analyticsLocation: [null != t ? t : "unknown"]
                                    }, e))
                                }]
                        }
                    }))
                }))) : y([null != t ? t : "unknown"], e) : m([null != t ? t : "unknown"]) : s([null != t ? t : "unknown"])
            }
        },
        716371: (e, t, n) => {
            n.d(t, {
                n: () => s,
                J: () => f
            });
            var r = n(202351),
                o = n(21372),
                i = n(567403),
                a = n(746477),
                u = n(473903);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e) {
                var t = c(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.Z, a.Z, u.default, o.ZP], 4),
                    n = t[0],
                    r = t[1],
                    l = t[2],
                    s = t[3];
                if (null == e) return !1;
                var f = n.getGuild(e),
                    p = r.getCheck(e).notClaimed,
                    d = l.getCurrentUser(),
                    E = !1;
                if (null != d) {
                    var y, O;
                    E = null !== (O = null === (y = s.getMember(e, d.id)) || void 0 === y ? void 0 : y.isPending) && void 0 !== O && O
                }
                var _ = E || p;
                return _ && !!(null == f ? void 0 : f.hasVerificationGate())
            }

            function f(e) {
                return (0, r.e7)([i.Z, a.Z, u.default, o.ZP], (function() {
                    return null != e && s(e, [i.Z, a.Z, u.default, o.ZP])
                }), [e])
            }
        },
        92106: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r, o = n(652591),
                i = n(585622),
                a = n(322500),
                u = n(327930),
                l = n(2590);
            ! function(e) {
                e.MESSAGE = "Discord Message Link";
                e.CHANNEL = "Discord Channel Link";
                e.SERVER_INVITE = "Discord Server Invite";
                e.GIFT = "Discord Gift Link";
                e.UNKNOWN = "Unknown"
            }(r || (r = {}));
            var c = [function(e) {
                return a.Z.isInvite(e) ? r.SERVER_INVITE : null
            }, function(e) {
                var t = i.Z.safeParseWithQuery(e);
                if (null == t) return null;
                var n = (0, u.Qj)(t.path);
                return null == n ? null : s({
                    guildId: n.guildId,
                    channelId: n.channelId,
                    messageId: n.messageId
                })
            }];

            function s(e) {
                return null != e.guildId && null != e.channelId && null != e.messageId ? r.MESSAGE : null != e.guildId && null != e.channelId ? r.CHANNEL : r.UNKNOWN
            }

            function f(e, t) {
                return null == t && null == e ? r.UNKNOWN : null == t ? function(e) {
                    var t = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var i, a = c[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                            var u = (0, i.value)(e);
                            if (null != u) return u
                        }
                    } catch (e) {
                        n = !0;
                        o = e
                    } finally {
                        try {
                            t || null == a.return || a.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return r.UNKNOWN
                }(e) : s(t)
            }
            const p = {
                trackDiscordLinkClicked: function(e) {
                    o.default.track(l.rMx.LINK_CLICKED, {
                        is_discord_link: !0,
                        discord_link_type: s(e)
                    })
                },
                trackLinkClicked: function(e, t) {
                    if (null != e || null != t) {
                        var n = i.Z.isDiscordUrl(e, !0) || null != t;
                        o.default.track(l.rMx.LINK_CLICKED, {
                            is_discord_link: n,
                            discord_link_type: n ? f(e, t) : null
                        })
                    }
                },
                trackAnnouncementMessageLinkClicked: function(e) {
                    var t = e.messageId,
                        n = e.channelId,
                        r = e.guildId,
                        i = e.sourceChannelId,
                        a = e.sourceGuildId;
                    o.default.track(l.rMx.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
                        message_id: t,
                        channel_id: n,
                        guild_id: r,
                        source_channel_id: i,
                        source_guild_id: a
                    })
                }
            }
        },
        544194: (e, t, n) => {
            n.d(t, {
                ZP: () => D,
                yw: () => R
            });
            var r, o = n(5387),
                i = n.n(o),
                a = (n(74971), n(120053)),
                u = n.n(a),
                l = n(861323),
                c = n(72580);
            ! function(e) {
                e.TEXT = "text";
                e.STRIKETHROUGH = "s";
                e.UNDERLINE = "u";
                e.STRONG = "strong";
                e.ITALICS = "em";
                e.IMAGE = "image";
                e.EMOJI = "emoji";
                e.CUSTOM_EMOJI = "customEmoji";
                e.LINK = "link";
                e.URL = "url";
                e.AUTOLINK = "autolink";
                e.HIGHLIGHT = "highlight";
                e.PARAGRAPH = "paragraph";
                e.LINE_BREAK = "br";
                e.NEWLINE = "newline";
                e.ESCAPE = "escape";
                e.SPOILER = "spoiler";
                e.BLOCK_QUOTE = "blockQuote";
                e.INLINE_CODE = "inlineCode";
                e.CODE_BLOCK = "codeBlock";
                e.MENTION = "mention";
                e.CHANNEL_MENTION = "channelMention";
                e.CHANNEL = "channel";
                e.GUILD = "guild";
                e.SOUNDBOARD = "soundboard";
                e.STATIC_ROUTE_LINK = "staticRouteLink";
                e.ROLE_MENTION = "roleMention";
                e.COMMAND_MENTION = "commandMention";
                e.TIMESTAMP = "timestamp";
                e.LIST = "list";
                e.HEADING = "heading"
            }(r || (r = {}));
            var s = RegExp("\\p{Cf}|\\p{Zl}|\\p{Zp}|[^\\P{Cc}\\n]|[^\\P{Zs} ]", "gu"),
                f = new RegExp("".concat(s.source, "|").concat(["͏", "឴", "឵", "ᅠ", "ㅤ", "ﾠ"].join("|")), "gu");
            var p = [{
                character: "h",
                matcher: d(["H", "һ", "հ", "Ꮒ", "ℎ", "𝐡", "𝒉", "𝒽", "𝓱", "𝔥", "𝕙", "𝖍", "𝗁", "𝗵", "𝘩", "𝙝", "𝚑", "ｈ"])
            }, {
                character: "t",
                matcher: d(["T", "𝐭", "𝑡", "𝒕", "𝓉", "𝓽", "𝔱", "𝕥", "𝖙", "𝗍", "𝘁", "𝘵", "𝙩", "𝚝"])
            }, {
                character: "p",
                matcher: d(["P", "ρ", "ϱ", "р", "⍴", "ⲣ", "𝐩", "𝑝", "𝒑", "𝓅", "𝓹", "𝔭", "𝕡", "𝖕", "𝗉", "𝗽", "𝘱", "𝙥", "𝚙", "𝛒", "𝛠", "𝜌", "𝜚", "𝝆", "𝝔", "𝞀", "𝞎", "𝞺", "𝟈", "ｐ"])
            }, {
                character: "s",
                matcher: d(["S", "ƽ", "ѕ", "ꜱ", "ꮪ", "𐑈", "𑣁", "𝐬", "𝑠", "𝒔", "𝓈", "𝓼", "𝔰", "𝕤", "𝖘", "𝗌", "𝘀", "𝘴", "𝙨", "𝚜", "ｓ"])
            }, {
                character: ":",
                matcher: d(["ː", "˸", "։", "׃", "܃", "܄", "ः", "ઃ", "᛬", "᠃", "᠉", "⁚", "∶", "ꓽ", "꞉", "︰", "：", ";", ";"])
            }, {
                character: "/",
                matcher: d(["᜵", "⁁", "⁄", "∕", "╱", "⟋", "⧸", "Ⳇ", "⼃", "〳", "ノ", "㇓", "丿", "𝈺"])
            }];

            function d(e) {
                return new RegExp(e.join("|"), "gu")
            }
            var E = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];

            function y(e) {
                var t = function(e) {
                    if ("null" === e.origin && e.pathname.startsWith("//")) return e.protocol;
                    var t = "";
                    "" !== e.username && (t += e.username);
                    "" !== e.password && (t += ":" + e.password);
                    "" !== t && (t += "@");
                    return "".concat(e.protocol, "//").concat(t).concat(e.host)
                }(e);
                t += O(e.pathname);
                t += O(e.search);
                return t += O(e.hash)
            }

            function O(e) {
                var t;
                try {
                    t = decodeURIComponent(e)
                } catch (t) {
                    return e
                }
                for (var n, r = "", o = e, i = t; o.length > 0;) {
                    var a = o.codePointAt(0),
                        u = i.codePointAt(0);
                    if (a !== u) {
                        var l = String.fromCodePoint(u),
                            c = encodeURIComponent(l),
                            s = c === l ? 3 : c.length;
                        r += ((n = u) >= 0 && n < 128 ? 1 !== E[n] : 8206 === n || 8207 === n || 8234 === n || 8235 === n || 8236 === n || 8237 === n || 8238 === n || 1564 === n || 8294 === n || 8295 === n || 8296 === n || 8297 === n || 128271 === n || 128272 === n || 128274 === n || 128275 === n || 133 === n || 160 === n || 5760 === n || 8192 === n || 8193 === n || 8194 === n || 8195 === n || 8196 === n || 8197 === n || 8198 === n || 8199 === n || 8200 === n || 8201 === n || 8202 === n || 8232 === n || 8233 === n || 8239 === n || 8287 === n || 12288 === n || 10240 === n || 173 === n || 847 === n || n >= 1536 && n <= 1541 || 1757 === n || 1807 === n || 2274 === n || 4447 === n || 4448 === n || 6068 === n || 6069 === n || 6155 === n || 6156 === n || 6157 === n || 6158 === n || 8203 === n || 8204 === n || 8205 === n || 8288 === n || 8289 === n || 8290 === n || 8291 === n || 8292 === n || 8293 === n || n >= 8298 && n <= 8303 || 12644 === n || n >= 65520 && n <= 65528 || n >= 65024 && n <= 65039 || 65279 === n || 65440 === n || 65529 === n || 65530 === n || 65531 === n || 69821 === n || 69837 === n || n >= 78896 && n <= 78904 || n >= 113824 && n <= 113827 || n >= 119155 && n <= 119162 || n >= 917504 && n <= 921599) ? c : l;
                        o = o.substring(s);
                        i = i.substring(l.length)
                    } else {
                        var f = String.fromCodePoint(a);
                        r += f;
                        o = o.substring(f.length);
                        i = i.substring(f.length)
                    }
                }
                return r
            }

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        h(e, t, n[t])
                    }))
                }
                return e
            }

            function m(e, t) {
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

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || T(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function T(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0
                }
            }
            var N = new(i())({
                max: 50
            });

            function I(e) {
                var t = e,
                    n = N.get(t);
                if (null != n) return n;
                var r = function(e) {
                        return e.replace(f, "")
                    }(e),
                    o = function(e) {
                        var t = e;
                        p.forEach((function(e) {
                            t = t.replace(e.matcher, e.character)
                        }));
                        return t
                    }(r),
                    i = {
                        whitespaceSanitized: r,
                        fullySanitized: o
                    };
                N.set(t, i);
                return i
            }
            var A, g = ["http:", "https:", "discord:"],
                C = [r.TEXT, r.UNDERLINE, r.STRONG, r.ITALICS, r.STRIKETHROUGH, r.INLINE_CODE, r.SPOILER, r.LINE_BREAK, r.TIMESTAMP],
                w = (A = C, function(e) {
                    if (Array.isArray(e)) return _(e)
                }(A) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(A) || T(A) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()).concat([r.EMOJI, r.CUSTOM_EMOJI]),
                S = [r.TEXT];

            function L(e, t) {
                Array.isArray(e) || (e = [e]);
                var n = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = e[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                        var l = a.value;
                        if (!t.includes(l.type)) return null;
                        if (l.type === r.INLINE_CODE && null == L(l.validationChildContent, t)) return null;
                        if (Array.isArray(l.content) && null == L(l.content, t)) return null
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        n || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return e
            }

            function P(e) {
                var t = "",
                    n = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = e[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                        var l = a.value;
                        switch (l.type) {
                            case r.TEXT:
                            case r.INLINE_CODE:
                                t += l.content;
                                break;
                            case r.CUSTOM_EMOJI:
                                t += l.name;
                                break;
                            case r.EMOJI:
                                t += l.surrogate;
                                break;
                            case r.LINE_BREAK:
                                t += "\n";
                                break;
                            case r.TIMESTAMP:
                                t += "<timestamp>";
                                break;
                            case r.STRONG:
                            case r.ITALICS:
                            case r.UNDERLINE:
                            case r.STRIKETHROUGH:
                            case r.SPOILER:
                                t += P(l.content);
                                break;
                            default:
                                (0, c.vE)(l.type)
                        }
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        n || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return t
            }

            function R(e) {
                try {
                    var t, n = new URL(e),
                        r = null !== (t = n.protocol) && void 0 !== t ? t : "";
                    if (!g.includes(r.toLowerCase())) throw new Error("Provided protocol is not allowed: " + r);
                    if (!("http:" !== r && "https:" !== r || null != n.hostname && 0 !== n.hostname.length)) throw new Error("no hostname");
                    0;
                    var o = y(n);
                    n.username = "";
                    n.password = "";
                    return {
                        target: o,
                        displayTarget: y(n)
                    }
                } catch (e) {
                    return null
                }
            }
            const D = m(b({}, u().defaultRules.link), {
                match: function(e, t, n) {
                    return t.allowLinks ? u().defaultRules.link.match(e, t, n) : null
                },
                parse: function(e, t, n) {
                    var o = v(e, 4),
                        i = o[0],
                        a = o[1],
                        c = o[2],
                        s = o[3],
                        f = function() {
                            return {
                                type: r.TEXT,
                                content: i
                            }
                        },
                        p = I(c),
                        d = I(a),
                        E = I(null != s ? s : ""),
                        y = p.whitespaceSanitized,
                        O = d.fullySanitized,
                        _ = E.fullySanitized,
                        h = O.trim();
                    if (0 === y.trim().length || 0 === h.length) return f();
                    var T = R(u().unescapeUrl(c)),
                        N = null == T,
                        A = (0, l.ZP)(a).length > 0 || (0, l.ZP)(s).length > 0;
                    if (N || A) return f();
                    var g = m(b({}, n), {
                            allowEscape: !1,
                            parseInlineCodeChildContent: !0
                        }),
                        D = t(O, g),
                        k = t(_, g),
                        U = L(D, n.allowEmojiLinks ? w : C),
                        M = L(k, S);
                    if (null == U || null == M) return f();
                    if (0 === P(U).trim().length) return f();
                    var j = t(d.whitespaceSanitized, g),
                        Z = E.whitespaceSanitized;
                    return {
                        content: j,
                        target: T.target,
                        title: Z
                    }
                }
            })
        },
        966334: (e, t, n) => {
            n.d(t, {
                M5: () => l,
                lS: () => c,
                ai: () => s,
                Ps: () => f,
                Hw: () => r,
                kG: () => o,
                SD: () => p,
                C7: () => y
            });
            var r, o, i = n(265688),
                a = n(120415),
                u = n(2590),
                l = "spotify",
                c = "spotify:",
                s = i.Z.get(u.ABu.SPOTIFY).name;

            function f(e) {
                return null != e && e.startsWith(c)
            }! function(e) {
                e.TRACK = "track";
                e.ARTIST = "artist";
                e.ALBUM = "album";
                e.PLAYLIST = "playlist"
            }(r || (r = {}));
            ! function(e) {
                e.USER_ACTIVITY_PLAY = "user_activity_play";
                e.USER_ACTIVITY_SYNC = "user_activity_sync";
                e.EMBED_SYNC = "embed_sync"
            }(o || (o = {}));
            var p = ["open.spotify.com", "www.spotify.com"],
                d = "https://api.spotify.com/v1",
                E = function(e) {
                    return "?utm_source=discord&utm_medium=".concat(e)
                },
                y = Object.freeze({
                    PROFILE: "".concat(d, "/me"),
                    NOTIFICATIONS_PLAYER: "".concat(d, "/me/notifications/player"),
                    PLAYER: "".concat(d, "/me/player"),
                    PLAYER_DEVICES: "".concat(d, "/me/player/devices"),
                    PLAYER_PLAY: "".concat(d, "/me/player/play"),
                    PLAYER_PAUSE: "".concat(d, "/me/player/pause"),
                    PLAYER_REPEAT: "".concat(d, "/me/player/repeat"),
                    WEB_OPEN: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop";
                        return "https://open.spotify.com/".concat(encodeURIComponent(e), "/").concat(encodeURIComponent(t)).concat(E(n))
                    },
                    EMBED: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desktop";
                        return "https://open.spotify.com/embed".concat(e).concat(E(t))
                    },
                    PLAYER_OPEN: function(e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "desktop";
                        return "".concat(l, ":").concat(encodeURIComponent(e), ":").concat(encodeURIComponent(t)).concat(n ? E(r) : "")
                    },
                    PREMIUM_SITE: "https://www.spotify.com/premium/".concat(E("desktop")),
                    INSTALL_ATTRIBUTION: function(e) {
                        return "https://app.adjust.com/bdyga9?campaign=".concat(e)
                    },
                    APP_STORE: (0, a.Dt)() ? "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US" : "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
                    IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8"
                })
        },
        419198: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(264817));

            function i(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function u(e) {
                            i(a, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            i(a, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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
            var c = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
            const s = {
                show: function(e) {
                    (0, o.ZD)(a((function() {
                        var t, o;
                        return c(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, Promise.all([n.e(40532), n.e(74709)]).then(n.bind(n, 674709))];
                                case 1:
                                    t = i.sent(), o = t.default;
                                    return [2, function(t) {
                                        return (0, r.jsx)(o, l(function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    u(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({}, t), {
                                            href: e
                                        }))
                                    }]
                            }
                        }))
                    })))
                }
            }
        },
        177729: (e, t, n) => {
            n.d(t, {
                v: () => u
            });
            var r = n(608575);
            const o = JSON.parse('["7z","ade","adp","arj","apk","application","appx","appxbundle","asx","bas","bat","cab","cer","chm","cmd","cnt","cpl","crt","csh","deb","der","diagcab","dll","dmg","docm","dotm","ex","ex_","exe","fxp","gadget","grp","gz","hlp","hpj","hta","htc","inf","ins","ipa","iso","isp","its","jar","jnlp","jse","ksh","lib","lnk","mad","maf","mag","mam","maq","mar","mas","mat","mau","mav","maw","mcf","mda","mdb","mde","mdt","mdw","mdz","msc","msh","msh1","msh1xml","msh2","msh2xml","mshxml","msi","msix","msixbundle","msp","mst","msu","nsh","ops","osd","pcd","pif","pkg","pl","plg","potm","ppam","ppsm","pptm","prf","prg","printerexport","ps1","ps1xml","ps2","ps2xml","psc1","psc2","psd1","psdm1","pst","py","pyc","pyo","pyw","pyz","pyzw","rar","reg","rpm","scf","scr","sct","shb","shs","sldm","sys","theme","tmp","url","vb","vbe","vbp","vbs","vhd","vhdx","vsmacros","vsw","vxd","webpnp","ws","wsc","wsf","wsh","xbap","xlam","xll","xlsm","xltm","xnk","z","zip"]');
            var i = new Set(o),
                a = {
                    "github.com": new RegExp("\\/releases\\S*\\/download"),
                    "bitbucket.org": new RegExp("\\/downloads\\S*\\/[^\\/]*"),
                    "gitlab.com": new RegExp("\\/downloads\\S*\\/[^\\/]*")
                };

            function u(e) {
                var t, n = r.parse(e),
                    o = n.pathname,
                    u = n.hostname;
                if (null == u) return null;
                var l = a[u];
                if (null != l && null != o && !l.test(o)) return null;
                if (null == o) return null;
                var c = o;
                try {
                    c = decodeURIComponent(o)
                } catch (e) {}
                for (var s = c.split("/"), f = null, p = 0, d = s.length - 1; d >= 0; d--) {
                    var E = s[d];
                    if ("" !== E && "." !== E) {
                        if (".." !== E) {
                            if (p > d) break;
                            f = s[d - p];
                            break
                        }
                        p++
                    }
                }
                if (null == f) return null;
                var y = f.split(".");
                if (y.length < 2) return null;
                var O = null === (t = y.pop()) || void 0 === t ? void 0 : t.toLowerCase();
                return null != O && i.has(O) ? O : null
            }
        },
        746477: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(202351),
                o = n(744564),
                i = n(661123),
                a = n(21372),
                u = n(567403),
                l = n(473903),
                c = n(2590),
                s = n(589677);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function E(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }

            function O(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
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
                    var n, r = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var b = {
                    notClaimed: !1,
                    notEmailVerified: !1,
                    notPhoneVerified: !1,
                    newAccount: !1,
                    newMember: !1,
                    canChat: !0
                },
                m = new Set,
                v = {};

            function T(e) {
                N(e);
                m.add(e);
                var t = u.Z.getGuild(e),
                    n = l.default.getCurrentUser();
                if (null != t && t.verificationLevel !== c.sFg.NONE && null != n && !t.isOwner(n) && !n.isPhoneVerified()) {
                    var r = a.ZP.getMember(t.id, n.id);
                    if (null != r) {
                        var f;
                        if ((0, i.yE)(null !== (f = r.flags) && void 0 !== f ? f : 0, s.q.BYPASSES_VERIFICATION)) return;
                        var p = new Set,
                            d = !0,
                            E = !1,
                            y = void 0;
                        try {
                            for (var _, h = r.roles[Symbol.iterator](); !(d = (_ = h.next()).done); d = !0) {
                                var b = _.value,
                                    T = t.getRole(b);
                                null == T || T.managed || p.add(b)
                            }
                        } catch (e) {
                            E = !0;
                            y = e
                        } finally {
                            try {
                                d || null == h.return || h.return()
                            } finally {
                                if (E) throw y
                            }
                        }
                        var I = new Date("2022-12-02 00:00:00"),
                            A = null == r.joinedAt || new Date(r.joinedAt) < I;
                        if (!(t.hasFeature(c.oNc.GUILD_ONBOARDING_EVER_ENABLED) && !A) && p.size > 0) return
                    }
                    var g = +n.createdAt + 6e4 * c.YeM.ACCOUNT_AGE - Date.now(),
                        C = +t.joinedAt + 6e4 * c.YeM.MEMBER_AGE - Date.now(),
                        w = t.verificationLevel >= c.sFg.LOW && !n.isClaimed(),
                        S = !1,
                        L = !1,
                        P = !1,
                        R = !1;
                    if (!n.isPhoneVerified() && !n.isStaff()) {
                        S = t.verificationLevel >= c.sFg.LOW && !n.verified;
                        L = t.verificationLevel >= c.sFg.VERY_HIGH;
                        P = t.verificationLevel >= c.sFg.MEDIUM && g > 0;
                        R = t.verificationLevel >= c.sFg.HIGH && C > 0
                    }
                    var D, k = [];
                    R && k.push(C);
                    P && k.push(g);
                    if (k.length > 0) {
                        var U;
                        D = setTimeout((function() {
                            return o.Z.dispatch({
                                type: "GUILD_VERIFICATION_CHECK",
                                guildId: e
                            })
                        }), (U = Math).max.apply(U, O(k)))
                    }
                    v[e] = {
                        notClaimed: w,
                        notEmailVerified: S,
                        notPhoneVerified: L,
                        newAccount: P,
                        newMember: R,
                        canChat: !(w || S || L || P || R),
                        accountDeadline: new Date(Date.now() + g),
                        memberDeadline: new Date(Date.now() + C),
                        timeoutRef: D
                    }
                }
            }

            function N(e) {
                var t = v[e];
                null != t && clearTimeout(t.timeoutRef);
                delete v[e]
            }

            function I(e) {
                m.delete(e.guild.id);
                T(e.guild.id)
            }
            var A = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && y(e, t)
                }(n, e);
                var t = h(n);

                function n() {
                    p(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.Z, l.default)
                };
                r.getCheck = function(e) {
                    m.has(e) || T(e);
                    var t;
                    return null !== (t = v[e]) && void 0 !== t ? t : b
                };
                r.canChatInGuild = function(e) {
                    return this.getCheck(e).canChat
                };
                r.__getLocalVars = function() {
                    return {
                        DEFAULT_CHECK: b,
                        guildIdsComputed: m,
                        checks: v
                    }
                };
                return n
            }(r.ZP.Store);
            A.displayName = "GuildVerificationStore";
            const g = new A(o.Z, {
                CONNECTION_OPEN: function() {
                    m.clear();
                    for (var e in v) N(e)
                },
                CONNECTION_CLOSED: function() {
                    Object.keys(v).forEach(N)
                },
                CURRENT_USER_UPDATE: function() {
                    m.clear()
                },
                GUILD_CREATE: I,
                GUILD_UPDATE: I,
                GUILD_DELETE: function(e) {
                    N(e.guild.id)
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var t, n = e.guildId;
                    if (e.user.id !== (null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
                    m.delete(n)
                },
                GUILD_VERIFICATION_CHECK: function(e) {
                    T(e.guildId)
                }
            })
        },
        457696: (e, t, n) => {
            n.d(t, {
                F: () => r,
                E: () => o
            });

            function r(e) {
                var t = document.createElement("a");
                t.href = e;
                return t.hostname
            }

            function o(e) {
                var t = document.createElement("a");
                t.href = e;
                return t.protocol
            }
        },
        955121: (e, t, n) => {
            n.d(t, {
                q: () => ue,
                r: () => ae
            });
            var r = n(120053),
                o = n.n(r),
                i = n(105783),
                a = n(744564);

            function u(e) {
                a.Z.dispatch({
                    type: "MASKED_LINK_ADD_TRUSTED_DOMAIN",
                    url: e
                })
            }

            function l(e) {
                a.Z.dispatch({
                    type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL",
                    url: e
                })
            }
            var c = n(320142),
                s = n(785893),
                f = (n(667294),
                    n(882723));

            function p(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            p(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            p(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e, t) {
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
            var O = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
            const _ = function(e) {
                (0,
                    f.openModalLazy)(d((function() {
                    var t, r;
                    return O(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(55201)]).then(n.bind(n, 455201))];
                            case 1:
                                t = o.sent(), r = t.default;
                                return [2, function(t) {
                                    return (0, s.jsx)(r, y(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                E(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, t), {
                                        url: e
                                    }))
                                }]
                        }
                    }))
                })))
            };
            var h = n(20146);
            var b = n(92106),
                m = n(544194);

            function v(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function T(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            v(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            v(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function I(e, t) {
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
            var A = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0,
                                    o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
            const g = function(e) {
                var t = e.url,
                    r = e.trustUrl,
                    o = e.onConfirm,
                    i = e.isProtocol;
                (0, f.openModalLazy)(T((function() {
                    var e, a;
                    return A(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(62)]).then(n.bind(n, 900062))];
                            case 1:
                                e = u.sent(), a = e.default;
                                return [2, function(e) {
                                    return (0, s.jsx)(a, I(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                N(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, e), {
                                        url: t,
                                        isProtocol: i,
                                        trustUrl: r,
                                        onConfirm: o
                                    }))
                                }]
                        }
                    }))
                })))
            };
            var C = n(419198),
                w = n(177729),
                S = n(61209),
                L = n(567403),
                P = n(202351),
                R = n(630631),
                D = n(585622),
                k = n(457696),
                U = n(966334);

            function M(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function j(e) {
                j = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return j(e)
            }

            function Z(e, t) {
                return !t || "object" !== B(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function G(e, t) {
                G = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return G(e, t)
            }
            var x, B = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function K(e) {
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
                    var n, r = j(e);
                    if (t) {
                        var o = j(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Z(this, n)
                }
            }
            var H = "MaskedLinkStore",
                F = new Set,
                V = new Set,
                Q = null === (x = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === x ? void 0 : x.replace("//", "");

            function Y(e) {
                var t = (0, k.F)(e);
                switch (t) {
                    case window.GLOBAL_ENV.CDN_HOST:
                    case window.GLOBAL_ENV.INVITE_HOST:
                    case window.GLOBAL_ENV.GIFT_CODE_HOST:
                    case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
                    case Q:
                    case location.hostname:
                        return !0;
                    default:
                        return U.SD.includes(t) || D.Z.isDiscordHostname(t) || F.has(t)
                }
            }

            function z(e) {
                var t = (0, k.E)(e);
                return V.has(t)
            }
            var W = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && G(e, t)
                }(n, e);
                var t = K(n);

                function n() {
                    M(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    var e, t = null !== (e = R.Z.get(H)) && void 0 !== e ? e : {};
                    if (Array.isArray(t)) {
                        F = new Set(null != t ? Array.from(t) : null);
                        V = new Set
                    } else {
                        var n = t.trustedDomains,
                            r = t.trustedProtocols;
                        F = new Set(null != n ? Array.from(n) : null);
                        V = new Set(null != r ? Array.from(r) : null)
                    }
                };
                r.isTrustedDomain = function(e) {
                    return Y(e)
                };
                r.isTrustedProtocol = function(e) {
                    return z(e)
                };
                r.__getLocalVars = function() {
                    return {
                        STORAGE_KEY: H,
                        trustedDomains: F,
                        trustedProtocols: V,
                        MEDIA_PROXY_HOST: Q
                    }
                };
                return n
            }(P.ZP.Store);
            W.displayName = "MaskedLinkStore";
            const q = new W(a.Z, {
                MASKED_LINK_ADD_TRUSTED_DOMAIN: function(e) {
                    var t = e.url;
                    if (Y(t)) return !1;
                    F.add((0, k.F)(t));
                    R.Z.set(H, {
                        trustedDomains: F,
                        trustedProtocols: V
                    })
                },
                MASKED_LINK_ADD_TRUSTED_PROTOCOL: function(e) {
                    var t = e.url;
                    if (z(t)) return !1;
                    V.add((0, k.E)(t));
                    R.Z.set(H, {
                        trustedDomains: F,
                        trustedProtocols: V
                    })
                }
            });
            var J = n(352980),
                X = n(840922),
                $ = n(715107),
                ee = n(652591),
                te = n(2590),
                ne = n(473708);

            function re(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function oe(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            re(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            re(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var ie = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                        0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function ae(e, t) {
                var n, r = S.Z.getChannel($.Z.getChannelId());
                return !(null != r && r.type === te.d4z.DM && !X.Z.isFriend(null !== (n = r.getRecipientId()) && void 0 !== n ? n : "")) && e === t
            }

            function ue(e, t) {
                return le.apply(this, arguments)
            }

            function le() {
                le = oe((function(e, t) {
                    var r, a, s, f, p, d, E, y, O, v, T, N, I, A, P, R, D, U, M, j, Z, G, x, B, K, H, F, V, Q, Y, z, W, X, re = arguments;
                    return ie(this, (function(oe) {
                        switch (oe.label) {
                            case 0:
                                r = re.length > 2 && void 0 !== re[2] ? re[2] : [];
                                a = e.trusted, s = e.onClick, f = e.onConfirm, p = e.shouldConfirm, d = e.messageId, E = e.channelId;
                                if (null == (y = o().sanitizeUrl(e.href))) {
                                    null != t && t.preventDefault();
                                    i.Z.show({
                                        title: ne.Z.Messages.HOLD_UP,
                                        body: ne.Z.Messages.MALFORMED_LINK_BODY.format({
                                            url: e.href
                                        }),
                                        isDismissable: !0
                                    });
                                    return [2]
                                }
                                O = null;
                                v = !1;
                                T = d;
                                N = E;
                                I = null;
                                if (null != d && null != E) {
                                    R = J.Z.getMessage(E, d);
                                    D = S.Z.getBasicChannel(E);
                                    O = null !== (U = null == D ? void 0 : D.guild_id) && void 0 !== U ? U : null;
                                    M = L.Z.getGuild(O);
                                    if ((j = null != (null == R || null === (A = R.messageReference) || void 0 === A ? void 0 : A.guild_id) && null != (null == R ? void 0 : R.webhookId) && (null == R ? void 0 : R.hasFlag(te.iLy.IS_CROSSPOST)) && null != O) && null != (null == R || null === (P = R.messageReference) || void 0 === P ? void 0 : P.guild_id)) {
                                        T = R.messageReference.message_id;
                                        N = R.messageReference.channel_id;
                                        I = R.messageReference.guild_id
                                    } else I = O;
                                    Z = (null == D ? void 0 : D.type) === te.d4z.GUILD_ANNOUNCEMENT && !0 === (null == M ? void 0 : M.hasFeature(te.oNc.COMMUNITY));
                                    G = !0 === (null == R ? void 0 : R.hasFlag(te.iLy.EPHEMERAL));
                                    v = null != R && !G && (j || Z)
                                }
                                x = S.Z.getChannel($.Z.getChannelId());
                                B = L.Z.getGuild(null == x ? void 0 : x.getGuildId());
                                null != x && null != B && B.hasFeature(te.oNc.DISCOVERABLE) && ee.default.track(te.rMx.URL_CLICKED, {
                                    url_domain: (0, k.F)(y),
                                    guild_id: B.id,
                                    channel_id: x.id
                                });
                                b.Z.trackLinkClicked(y);
                                return null == s ? [3, 1] : s(t) ? [2] : [3, 3];
                            case 1:
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(14606), n.e(4230), n.e(24501), n.e(7358)]).then(n.bind(n, 624501))];
                            case 2:
                                K = oe.sent(), H = K.default;
                                if (null != (F = H(y, {
                                        skipExtensionCheck: void 0,
                                        analyticsLocations: r
                                    })) && F(t)) return [2];
                                oe.label = 3;
                            case 3:
                                V = function() {
                                    v && b.Z.trackAnnouncementMessageLinkClicked({
                                        messageId: T,
                                        channelId: E,
                                        guildId: O,
                                        sourceChannelId: N,
                                        sourceGuildId: I
                                    });
                                    null == f ? (0, c.Z)(y) : f()
                                };
                                if (null !== h.Z.isBlockedDomain(y)) {
                                    null == t || t.preventDefault();
                                    _(y);
                                    return [2]
                                }
                                if (null != (0, w.v)(y)) {
                                    null == t || t.preventDefault();
                                    C.Z.show(y);
                                    return [2]
                                }
                                0;
                                Q = "function" == typeof a ? a() : a;
                                Y = (0, k.E)(y);
                                if (!(z = !("http:" === Y || "https:" === Y)) && (Q || q.isTrustedDomain(y)) || z && q.isTrustedProtocol(y)) {
                                    null == t || null != p && p ? V() : v && b.Z.trackAnnouncementMessageLinkClicked({
                                        messageId: T,
                                        channelId: E,
                                        guildId: O,
                                        sourceChannelId: N,
                                        sourceGuildId: I
                                    });
                                    return [2]
                                }
                                null != t && t.preventDefault();
                                if (z) g({
                                    url: y,
                                    trustUrl: l,
                                    onConfirm: V,
                                    isProtocol: !0
                                });
                                else {
                                    W = (0, m.yw)(y);
                                    X = null != W ? W.displayTarget : y;
                                    g({
                                        url: X,
                                        trustUrl: u,
                                        onConfirm: V,
                                        isProtocol: !1
                                    })
                                }
                                return [2]
                        }
                    }))
                }));
                return le.apply(this, arguments)
            }
        },
        322500: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                o = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
                i = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                a = /^(.*)#[0-9]{1,5}$/,
                u = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
                l = ["discordtag", "everyone", "here", "discord nitro", "discord"];
            const c = {
                isEmail: function(e) {
                    return r.test(e)
                },
                isInvite: function(e) {
                    return o.test(e)
                },
                isPhoneNumber: function(e) {
                    return i.test(e)
                },
                isUserTagLike: function(e) {
                    var t = a.exec(e);
                    if (null != t && t.length > 1) {
                        var n = t[1],
                            r = u.some((function(e) {
                                return n.includes(e)
                            })),
                            o = l.includes(n);
                        return !r && !o
                    }
                    return !1
                }
            }
        }
    }
]);